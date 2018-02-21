import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

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

  constructor(public auth: AuthService) {
  }

  ngOnInit() {
    return;
  }


}
