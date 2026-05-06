import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience-service/work-experience';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-work-experience',
  standalone: false,
  templateUrl: './work-experience.html'
})
export class WorkExperience implements OnInit {
  @Input() isEditing: boolean = false;
  workList: any[] = [];

  constructor(private workService: WorkExperienceService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.workService.getWorkExperience().snapshotChanges().pipe(
      map((changes: any) =>
        changes.map((c: any) => ({ id: c.payload.doc.id, ...c.payload.doc.data() }))
      )
    ).subscribe((data: any[]) => {
      this.workList = data;
      this.cdr.detectChanges();
    });
  }

  agregarNueva() {
    const nueva = { company: 'Nueva Empresa', position: 'Nuevo Puesto', location: '', startDate: '', endDate: '', accomplishments: '' };
    this.workService.create(nueva as any);
  }

  guardarCambios(work: any) {
    const { id, ...dataToUpdate } = work;
    this.workService.update(id, dataToUpdate);
  }

  eliminar(id: string) {
    if(confirm('¿Eliminar experiencia?')) {
      this.workService.delete(id);
    }
  }
}