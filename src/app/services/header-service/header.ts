import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Header } from '../../models/header/header.model';

@Injectable({ providedIn: 'root' })
export class HeaderService {
  private dbPath = 'header';
  headerRef: AngularFirestoreCollection<Header>;

  constructor(private db: AngularFirestore) {
    this.headerRef = db.collection(this.dbPath);
  }

  getHeader(): AngularFirestoreCollection<Header> {
    return this.headerRef;
  }

  update(id: string, data: any) {
    return this.db.firestore.collection(this.dbPath).doc(id).update(data);
  }
}