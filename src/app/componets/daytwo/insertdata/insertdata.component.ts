import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertdata',
  templateUrl: './insertdata.component.html',
  styleUrls: ['./insertdata.component.css']
})
export class InsertdataComponent implements OnInit {

  // 1、定义属性
  private aaa:string = "第一个定义的属性";
  private str:string = "也是一个字符串";
  private name:string = "itany";
  private test:string = null;
  private itany:string = "网博";

  // 2、定义构造方法
  constructor() { }

  // 3、定义生命周期函数
  ngOnInit() {
  }

  // 4、定义用户自定义方法
  private getString():string{
    return "方法返回值";
  }

}
