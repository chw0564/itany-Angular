import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataService';

@Component({
  selector: 'app-di-component',
  templateUrl: './di-component.component.html',
  styleUrls: ['./di-component.component.css'],
  // 提供者可以单独为某个属性提供服务
  // 单独提供该对象 会被重新创建
  // 在实际开发过程中 ， 使用范围较小
  providers:[
    DataService
  ]
})
export class DiComponentComponent implements OnInit {

  // private ds = new DataService();

  constructor(private ds:DataService) { }

  ngOnInit() {
  }

}
