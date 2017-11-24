import { Component } from '@angular/core';

// 一个组件包含 .ts  .html .css
//     三个文件一般采用相同的名称
@Component({
  // 自定义 AngularMl 标签
  selector: 'app-root',
  // 该组件所对应的模板页
  templateUrl: './app.component.html',
  //  该组件所对应的 局部样式表
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private msg:string = "字符串";
  private arr:Array<number> = [1,2,3,4];
  private user:Object = {
    name:"tom",
    age:23
  }

  private getName(value){
    console.log(value);
    console.log("父组件的getName方法")
  }

}
