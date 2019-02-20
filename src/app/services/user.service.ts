import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../interfaces/user';
import { makeid } from '../utils/make-id';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  tasks: AngularFirestoreCollection<User>;
  private taskDoc: AngularFirestoreDocument<User>;

  constructor(private firestore: AngularFirestore) {
    this.tasks = firestore.collection<User>('users');
  }

  getUsers() {
    return this.tasks.snapshotChanges();
  }

  setUser(newUser: User): void {
    this.tasks.doc(makeid()).set(newUser).then(() => { });
  }
}
