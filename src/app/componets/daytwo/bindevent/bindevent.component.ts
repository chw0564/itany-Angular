import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindevent',
  templateUrl: './bindevent.component.html',
  styleUrls: ['./bindevent.component.css']
})
export class BindeventComponent implements OnInit {
  
  private str:string = "也是一个字符串";
  private flag:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  private show(){
    console.log("方法触发");
    this.str = "新字符串";
  }

  private getString():string{
    return "方法返回值";
  }

  private hanldClick(e){
    console.log(e);
  }

}
