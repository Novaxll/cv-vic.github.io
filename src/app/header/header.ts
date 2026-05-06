import { Component, ChangeDetectorRef, OnInit, Input } from '@angular/core';
import { HeaderService } from '../services/header-service/header';
import { map } from 'rxjs/operators';

@Component({ selector: 'app-header', standalone: false, templateUrl: './header.html' })
export class Header implements OnInit {
  @Input() isEditing: boolean = false;
  header: any = {};

  constructor(public headerService: HeaderService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.headerService.getHeader().snapshotChanges().pipe(
      map((changes: any) => changes.map((c: any) => ({ id: c.payload.doc.id, ...c.payload.doc.data() })))
    ).subscribe((data: any) => {
      if (data && data.length > 0) {
        this.header = data[0];
        this.cdr.detectChanges();
      }
    });
  }

  guardarCambios() {
    if (this.header.id) {
      const { id, ...dataToUpdate } = this.header;
      this.headerService.update(id, dataToUpdate);
      alert('Encabezado guardado correctamente');
    }
  }
}