import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { EducationService } from '../services/education-service/education';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.html'
})
export class Education implements OnInit {
  @Input() isEditing: boolean = false;
  educationList: any[] = [];

  constructor(private educationService: EducationService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.educationService.getEducation().snapshotChanges().pipe(
      map((changes: any) =>
        changes.map((c: any) => ({ id: c.payload.doc.id, ...c.payload.doc.data() }))
      )
    ).subscribe((data: any[]) => {
      this.educationList = data;
      this.cdr.detectChanges();
    });
  }

  agregarNueva() {
    const nueva = { degree: 'Nuevo Título', university: 'Universidad', startDate: '', endDate: '' };
    this.educationService.create(nueva as any);
  }

  guardarCambios(edu: any) {
    const { id, ...dataToUpdate } = edu;
    this.educationService.update(id, dataToUpdate);
  }

  eliminar(id: string) {
    if(confirm('¿Eliminar educación?')) {
      this.educationService.delete(id);
    }
  }
}