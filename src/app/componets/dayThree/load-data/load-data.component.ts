import { Component, OnInit ,Input,Output ,EventEmitter} from '@angular/core';
// import {  } from '@angular/core/src/metadata/directives';
// import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-load-data',
  templateUrl: './load-data.component.html',
  styleUrls: ['./load-data.component.css']
})
export class LoadDataComponent implements OnInit {

  // 表示该属性值 来自于父组件的传递
  // 相当于对属性进行初始化赋值 和 指定 监听
  @Input()
  private message:string;
  @Input()
  private list:Array<number>;
  @Input()
  private obj:Object; 

  // 自定义的事件对象 就是属性
  //    <T>  T的类型 决定了传递的参数类型
  //    变量名 称职为事件 名
  @Output()  //该属性为传出属性
  private handleName:EventEmitter<any> = new EventEmitter();
  private name:string = "tom";
  private info:string = "消息";

  constructor() { }

  ngOnInit() {
  }

  private sendData(){
    // emit() 可以接受参数 ，参数会作为 方法的参数被使用
    this.handleName.emit({
      "name":this.name,
      "info":this.info
    });
  }

}
