import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-htmlattribute',
  templateUrl: './htmlattribute.component.html',
  styleUrls: ['./htmlattribute.component.css']
})
export class HtmlattributeComponent implements OnInit {

  private colNum:number = 1;

  constructor() { }

  ngOnInit() {
  }

  private addCol(){
    this.colNum += 1;
  }

}
