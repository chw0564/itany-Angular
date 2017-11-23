import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domattribute',
  templateUrl: './domattribute.component.html',
  styleUrls: ['./domattribute.component.css']
})
export class DomattributeComponent implements OnInit {

  private divId:string = "a";
  private str:string = "";
  private classStr:string = "cc";
  private src:string;
  private flag:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  private changeId(){
    this.divId = "b";
  }

  private changeStr(){
    this.str = "<h1>aaaa</h1>";
  }

  private changeImgSrc(){
    this.src = "http://www.baidu.com/img/baidu_jgylogo3.gif"
  }

}
