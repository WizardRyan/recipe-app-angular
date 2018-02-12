import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ingredients = ["milk", "eggs"];



  constructor() { }

  ngOnInit() {
  }

  addItem(){
    this.ingredients.push("");
    console.log('button clicked');

  }

}
