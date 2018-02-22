import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  uEmail: string;
  uPassword: string;
  uName: string;
  iEmail: string;
  iPassword: string;

  constructor(public auth: AuthService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    return;
  }

  signUp() {
    this.auth.emailSignup(this.uEmail, this.uPassword, this.uName).then(message => {
      this.snackBar.open(message);
    })
      .catch(message => {
        this.snackBar.open(message);
      });
  }

  signIn() {
    this.auth.emailSignIn(this.iEmail, this.iPassword).then(message => {
      this.snackBar.open(message);
    })
      .catch(message => {
        this.snackBar.open(message);
      });
  }

}
