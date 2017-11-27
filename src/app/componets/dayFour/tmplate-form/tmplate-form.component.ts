import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tmplate-form',
  templateUrl: './tmplate-form.component.html',
  styleUrls: ['./tmplate-form.component.css']
})
export class TmplateFormComponent implements OnInit {

  private str:string="";

  private email:string="";

  private age:number;

  constructor() { }

  ngOnInit() {
  }

  private getNgModel(obj){
    console.log(obj);
  }

}
