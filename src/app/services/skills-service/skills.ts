import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Skills } from '../../models/skills/skills.model';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  private dbPath = 'skills';
  skillsRef: AngularFirestoreCollection<Skills>;

  constructor(private db: AngularFirestore) { 
    this.skillsRef = db.collection(this.dbPath); 
  }

  getSkills(): AngularFirestoreCollection<Skills> { 
    return this.skillsRef; 
  }

  create(data: any) { return this.db.firestore.collection(this.dbPath).add({ ...data }); }
  update(id: string, data: any) { return this.db.firestore.collection(this.dbPath).doc(id).update(data); }
  delete(id: string) { return this.db.firestore.collection(this.dbPath).doc(id).delete(); }
}