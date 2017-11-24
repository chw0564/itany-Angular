import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  private addrs:Array<string> = "南京,上海,苏州,无锡,常州".split(",");
  private user:any = {
    name:"tom",
    sex:"男",
    age:23
  }

  constructor() { }

  ngOnInit() {
  }

}
