import {Component, OnInit} from '@angular/core';
import index from "@angular/cli/lib/cli";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ingredients: number[] = [0];

  currentNum = 1;

  constructor() {
  }

  ngOnInit() {
  }

  addItem() {
    this.ingredients.push(this.currentNum);
    this.currentNum++;

  }

  removeItem (){
    this.ingredients.pop();
    this.currentNum -- ;
  }

}
