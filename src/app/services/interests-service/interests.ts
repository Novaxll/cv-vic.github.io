import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Interests } from '../../models/interests/interests.model';

@Injectable({ providedIn: 'root' })
export class InterestsService {
  private dbPath = 'interests';
  interestsRef: AngularFirestoreCollection<Interests>;

  constructor(private db: AngularFirestore) { 
    this.interestsRef = db.collection(this.dbPath); 
  }

  getInterests(): AngularFirestoreCollection<Interests> { 
    return this.interestsRef; 
  }

  create(data: any) { return this.db.firestore.collection(this.dbPath).add({ ...data }); }
  update(id: string, data: any) { return this.db.firestore.collection(this.dbPath).doc(id).update(data); }
  delete(id: string) { return this.db.firestore.collection(this.dbPath).doc(id).delete(); }
}