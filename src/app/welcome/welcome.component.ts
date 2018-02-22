import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {MatSnackBar} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

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
  uNameCtrl: FormControl = new FormControl('', [Validators.required]);
  uEmailCtrl: FormControl = new FormControl('', [Validators.required]);
  uPasswordCtrl: FormControl = new FormControl('', [Validators.required]);
  iEmailCtrl: FormControl = new FormControl('', [Validators.required]);
  iPasswordCtrl: FormControl = new FormControl ('', [Validators.required]);



  constructor(public auth: AuthService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    return;
  }

  signUp() {
    this.auth.emailSignup(this.uEmail, this.uPassword, this.uName).then(message => {
      this.snackBar.open('Account created successfully', '', {duration: 2000});
    })
      .catch(message => {
        this.snackBar.open(message.message, '', {duration: 2000});
      });
  }

  signIn() {
    this.auth.emailSignIn(this.iEmail, this.iPassword).then(message => {
      this.snackBar.open('Signed in successfully', '', {duration: 2000});
    })
      .catch(message => {
        this.snackBar.open(message.message, '', {duration: 2000});
      });
  }

}
