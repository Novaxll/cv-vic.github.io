import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { WorkExperience } from '../../models/work-experience/work-experience.model';

@Injectable({ providedIn: 'root' })
export class WorkExperienceService {
  private dbPath = 'work-experience';
  workRef: AngularFirestoreCollection<WorkExperience>;

  constructor(private db: AngularFirestore) { this.workRef = db.collection(this.dbPath); }
  getWorkExperience(): AngularFirestoreCollection<WorkExperience> { return this.workRef; }
  create(data: any) { return this.db.firestore.collection(this.dbPath).add({ ...data }); }
  update(id: string, data: any) { return this.db.firestore.collection(this.dbPath).doc(id).update(data); }
  delete(id: string) { return this.db.firestore.collection(this.dbPath).doc(id).delete(); }
}