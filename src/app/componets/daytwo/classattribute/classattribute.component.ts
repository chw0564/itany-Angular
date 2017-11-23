import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classattribute',
  templateUrl: './classattribute.component.html',
  styleUrls: ['./classattribute.component.css']
})
export class ClassattributeComponent implements OnInit {

  private fontColor:string = "red bc";

  private clsList:any = {
    "red":true,
    "bc":true,
    "fs":false
  };

  constructor() { }

  ngOnInit() {
  }

}
