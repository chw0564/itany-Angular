import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binddata',
  templateUrl: './twoway-binddata.component.html',
  styleUrls: ['./twoway-binddata.component.css']
})
export class TwowayBinddataComponent implements OnInit {

  private msg:string = "默认字符串";
  private radioData:any = "aaa";
  private selectData:any = "3";
  private checkboxData:any = "";
  private checkboxDataObj:any = {
    // key 表示的是 值  value 表示的 状态
    a:{value:"a",isSelect:false},
    b:{value:"b",isSelect:true},
    c:{value:"c",isSelect:false},
    d:{value:"d",isSelect:false}
  };
  private checkboxDataObj1:Array<any> = [
    {value:"a",isSelect:false},
    {value:"b",isSelect:true},
    {value:"c",isSelect:false},
    {value:"d",isSelect:false}
  ];

  constructor() { }

  ngOnInit() {
  }

}
