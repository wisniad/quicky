import { User } from './../models/userModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  user: Observable<User[]>;
  userDocument: AngularFirestoreDocument;
  userCollection: AngularFirestoreCollection<User>;

  constructor(public firestoreService: AngularFirestore) {

    this.userCollection = this.firestoreService.collection('users'),
    this.user = this.userCollection.snapshotChanges().pipe(map(changes => changes.map(
      a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ...data};
      })
    ) 
    )
  }

  getUser() {
    return this.user;
  }
}
