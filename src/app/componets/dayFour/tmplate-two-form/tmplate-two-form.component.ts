import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tmplate-two-form',
  templateUrl: './tmplate-two-form.component.html',
  styleUrls: ['./tmplate-two-form.component.css']
})
export class TmplateTwoFormComponent implements OnInit {

  // private name:string;
  // private pwd:string;
  // private age:number;
  // private sex:string;
  // private profession:string;


  constructor() { }

  ngOnInit() {
  }

  private getFormValue(obj){
    // console.log(this.name);
    console.log(obj.value);

  }

}
