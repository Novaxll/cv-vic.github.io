import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Education } from '../../models/education/education.model';

@Injectable({ providedIn: 'root' })
export class EducationService {
  private dbPath = 'education';
  educationRef: AngularFirestoreCollection<Education>;

  constructor(private db: AngularFirestore) { this.educationRef = db.collection(this.dbPath); }
  getEducation(): AngularFirestoreCollection<Education> { return this.educationRef; }
  create(data: any) { return this.db.firestore.collection(this.dbPath).add({ ...data }); }
  update(id: string, data: any) { return this.db.firestore.collection(this.dbPath).doc(id).update(data); }
  delete(id: string) { return this.db.firestore.collection(this.dbPath).doc(id).delete(); }
}