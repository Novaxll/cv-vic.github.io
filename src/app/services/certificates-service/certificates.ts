import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Certificates } from '../../models/certificates/certificates.model';

@Injectable({ providedIn: 'root' })
export class CertificatesService {
  private dbPath = 'certificates';
  certificatesRef: AngularFirestoreCollection<Certificates>;

  constructor(private db: AngularFirestore) { this.certificatesRef = db.collection(this.dbPath); }
  getCertificates(): AngularFirestoreCollection<Certificates> { return this.certificatesRef; }
  create(data: any) { return this.db.firestore.collection(this.dbPath).add({ ...data }); }
  update(id: string, data: any) { return this.db.firestore.collection(this.dbPath).doc(id).update(data); }
  delete(id: string) { return this.db.firestore.collection(this.dbPath).doc(id).delete(); }
}