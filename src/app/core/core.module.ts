import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import {AuthService} from '../services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: [],
  providers: [AuthService]
})
export class CoreModule { }
