import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-certificates',
  standalone: false,
  templateUrl: './certificates.html'
})
export class Certificates implements OnInit {
  @Input() isEditing: boolean = false;
  certificates: any[] = [];

  constructor(private certService: CertificatesService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.certService.getCertificates().snapshotChanges().pipe(
      map((changes: any) => changes.map((c: any) => ({ id: c.payload.doc.id, ...c.payload.doc.data() })))
    ).subscribe((data: any[]) => {
      this.certificates = data;
      this.cdr.detectChanges();
    });
  }

  agregarNuevo() {
    const nuevo = { title: 'Nuevo Certificado', year: new Date().getFullYear().toString(), description: '' };
    this.certService.create(nuevo as any);
  }

  guardarCambios(cert: any) {
    const { id, ...data } = cert;
    this.certService.update(id, data);
  }

  eliminar(id: string) {
    if(confirm('¿Eliminar certificado?')) {
      this.certService.delete(id);
    }
  }
}