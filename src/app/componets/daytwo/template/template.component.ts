import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  // templateUrl: './template.component.html',
  // 简单的页面
  template:`<h1>字符串的页面<h1>`,
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
