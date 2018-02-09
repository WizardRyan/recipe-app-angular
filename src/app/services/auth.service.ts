import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../interfaces/user';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import {Recipe} from '../interfaces/recipe';

@Injectable()
export class AuthService {

  user: Observable<User>;
  creds: any;

  constructor(private fireAuth: AngularFireAuth, private fireStore: AngularFirestore) {

    this.user = this.fireAuth.authState
      .switchMap(user => {
        if (user) {
          return this.fireStore.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.fireAuth.auth.signInWithPopup(provider)
      .then(credential => {
        this.creds = credential.user;
        this.updateUserData(credential.user);
      });
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.fireStore.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    return userRef.set(data);
  }

  addRecipe(recipe: Recipe) {
    this.fireStore.collection('recipes').add(recipe);
  }


  signOut() {
    this.fireAuth.auth.signOut();
  }

}
