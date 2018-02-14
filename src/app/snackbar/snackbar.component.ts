import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material";
import {SnackbarSubmitComponent} from "../snackbar-submit/snackbar-submit.component";

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(public snackbar: MatSnackBar) { }

  openSnackBar(){
    this.snackbar.openFromComponent(SnackbarSubmitComponent, {duration: 2000})
  }

  ngOnInit() {

  }

}
