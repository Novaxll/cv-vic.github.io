import { Component, ChangeDetectorRef, OnInit, Input } from '@angular/core';
import { LanguagesService } from '../services/languages-service/languages';
import { map } from 'rxjs/operators';

@Component({ selector: 'app-languages', standalone: false, templateUrl: './languages.html' })
export class Languages implements OnInit {
  @Input() isEditing: boolean = false;
  languages: any[] = [];

  constructor(public langService: LanguagesService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.langService.getLanguages().snapshotChanges().pipe(
      map(changes => changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data() })))
    ).subscribe(data => { this.languages = data; this.cdr.detectChanges(); });
  }

  agregar() {
    const nuevo = { name: 'Nuevo Idioma', level: 'Básico', certification: '' };
    this.langService.create(nuevo);
  }

  guardar(lang: any) {
    const { id, ...data } = lang;
    this.langService.update(id, data);
  }

  eliminar(id: string) {
    if(confirm('¿Eliminar idioma?')) this.langService.delete(id);
  }
}