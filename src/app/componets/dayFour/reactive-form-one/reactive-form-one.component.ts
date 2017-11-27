import { Component, OnInit } from '@angular/core';
import { FormControl, Validators ,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-one',
  templateUrl: './reactive-form-one.component.html',
  styleUrls: ['./reactive-form-one.component.css']
})
export class ReactiveFormOneComponent implements OnInit {

  // private str="sss";

  // 模板表单
  // private name:string = "";

  // FormControl 用于定义模板中 表单元素的行为规则
  //    特指  value  和校验状态 
  // 每一个FormControl都只对应一个表单组件（radio）
  //    FormControl(arg1,arg2)
  //     arg1  基本数据类型   表单组件的默认值
  //     arg2  function|Array<function> 校验规则函数
  // private name = new FormControl("默认值",Validators.required);
  private name = new FormControl("默认值",[
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(10)
  ]);

  // 用于定义 表单的行为规则
  // FormGroup(arg1,arg2,arg3)
  //    arg1 : json<FormControl> 
  private registForm = new FormGroup({
    // 默认值 tom  验证规则  必须  4-6
    name:new FormControl(),
    // ""    必须   4-6
    pwd:new FormControl(),
    // ""    必须   4-6
    repwd:new FormControl(),
    // "男"   必须
    sex:new FormControl(),
    // ""     必须 emial
    email:new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

}
