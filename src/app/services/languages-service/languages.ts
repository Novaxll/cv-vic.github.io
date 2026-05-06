import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Languages } from '../../models/languages/languages.model';

@Injectable({ providedIn: 'root' })
export class LanguagesService {
  private dbPath = 'languages';
  languagesCollection: AngularFirestoreCollection<Languages>;

  constructor(private db: AngularFirestore) { 
    this.languagesCollection = db.collection(this.dbPath); 
  }

  getLanguages() { 
    return this.languagesCollection; 
  }

  create(data: any) { return this.db.firestore.collection(this.dbPath).add({ ...data }); }
  update(id: string, data: any) { return this.db.firestore.collection(this.dbPath).doc(id).update(data); }
  delete(id: string) { return this.db.firestore.collection(this.dbPath).doc(id).delete(); }
}