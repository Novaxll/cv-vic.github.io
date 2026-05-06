import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { SkillsService } from '../services/skills-service/skills';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html'
})
export class Skills implements OnInit {
  @Input() isEditing: boolean = false;
  skillsList: any[] = [];

  constructor(private skillsService: SkillsService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.skillsService.getSkills().snapshotChanges().pipe(
      map((changes: any) =>
        changes.map((c: any) => ({ id: c.payload.doc.id, ...c.payload.doc.data() }))
      )
    ).subscribe((data: any[]) => {
      this.skillsList = data;
      this.cdr.detectChanges();
    });
  }

  agregar() {
    const nueva = { name: 'Nueva Habilidad', percentaje: '50' };
    this.skillsService.create(nueva as any);
  }

  guardar(skill: any) {
    const { id, ...data } = skill;
    this.skillsService.update(id, data);
  }

  eliminar(id: string) {
    if(confirm('¿Eliminar habilidad?')) {
      this.skillsService.delete(id);
    }
  }
}