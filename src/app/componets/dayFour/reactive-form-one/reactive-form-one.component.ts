import { Component, OnInit } from '@angular/core';
import { FormControl, Validators ,FormGroup,FormArray } from '@angular/forms';

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
  //    arg2 : 组别统一校验，在此处添加的校验规则 会生效到所有的 当前组中的控件上 , 只能完成自定义校验的加载
  private registForm = new FormGroup({
    // 默认值 tom  验证规则  必须  4-6
    name:new FormControl("tom",[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(6)
    ]),
    // ""    必须   4-6
    pwd:new FormControl("",[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(6)
    ]),
    // ""    必须   4-6
    repwd:new FormControl("",[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(6)
    ]),
    // "男"   必须
    sex:new FormControl("男",Validators.required),
    // ""     必须 emial
    email:new FormControl("",[
      Validators.required,
      // Validators.email
      // 正则验证
      // abc@111.com
      // ^[\w]+@[\w]+\.[a-z]+$
      // "\n"
      Validators.pattern("[\\w]+@[\\w]+\\.[a-z]+")
    ])
  });

  // 验证修改
  // FormGroup ==> 被嵌套的对象 一定要指定其父类所在位置
  private registForm1 = new FormGroup({
    // 默认值 tom  验证规则  必须  4-6
    name:new FormControl("tom",[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(6)
    ]),
    pwdGroup:new FormGroup({
       // ""    必须   4-6
      pwd:new FormControl("",[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6)
      ]),
      // ""    必须   4-6
      repwd:new FormControl("",[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6)
      ]),
    },
      // 该方法会默认携带一个参数 就是当前的 FormGroup 对象
      this.checkPwd
    ), 
    // "男"   必须
    sex:new FormControl("男",Validators.required),
    // ""     必须 emial
    emails:new FormArray([
      new FormControl("",[Validators.required,Validators.pattern("[\\w]+@[\\w]+\\.[a-z]+")]),
      new FormControl("",[Validators.required,Validators.pattern("[\\w]+@[\\w]+\\.[a-z]+")])
    ])
    // email:new FormControl("",[
    //   Validators.required,
    //   // Validators.email
    //   // 正则验证
    //   // abc@111.com
    //   // ^[\w]+@[\w]+\.[a-z]+$
    //   // "\n"
    //   Validators.pattern("[\\w]+@[\\w]+\\.[a-z]+")
    // ])
  });

  constructor() { }

  ngOnInit() {
  }

  // 验证方法所返回的值 随意  null , {}
  checkPwd(fg:FormGroup){
    // console.log("---",fg);
    // AbstractControl 是 FormGroup 和 FormControl 父类
    // 完成类型转换
    let pwd:FormControl = fg.get("pwd") as FormControl;
    // 不完成类型转换
    let repwd = fg.get("repwd");
    // 建议直接返回消息
    return pwd.value==repwd.value? null:{'noEquals':'两次密码不相同'}
  }

  // checkValid(errorCode,path){
  // cv(errorCode,path){
  //   return this.registForm.hasError(errorCode,path)
  // }
  cv(errorCode,path){
    return this.registForm1.hasError(errorCode,path)
  }

  // getData(){
  //   console.log(this.registForm.value);
  // }
  getData(){
    console.log(this.registForm1.value);
  }

  subEmail(index){
    let fa:FormArray  = this.registForm1.get("emails") as FormArray;
    fa.removeAt(index);
  }

  addEmail(){
    let fa:FormArray  = this.registForm1.get("emails") as FormArray;
    fa.push(new FormControl("",[Validators.required,Validators.pattern("[\\w]+@[\\w]+\\.[a-z]+")]));
  }

}
