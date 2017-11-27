import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-variables',
  templateUrl: './local-variables.component.html',
  styleUrls: ['./local-variables.component.css']
})
export class LocalVariablesComponent implements OnInit {

  private str:string = "变量值";


  constructor() { }

  ngOnInit() {
  }

  private getInputDom(obj){
      console.log(obj);
  }

}
