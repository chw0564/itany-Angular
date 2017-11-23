import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styleattribute',
  templateUrl: './styleattribute.component.html',
  styleUrls: ['./styleattribute.component.css']
})
export class StyleattributeComponent implements OnInit {

  private style:string = "color:red;font-size:30px";
  private styleList:any = {
    "color":"red",
    "font-size":"30px",
    "background-color":"#ccc"
  }

  constructor() { }

  ngOnInit() {
  }

}
