import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormArray,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-bulider',
  templateUrl: './form-bulider.component.html',
  styleUrls: ['./form-bulider.component.css']
})
export class FormBuilderComponent implements OnInit {

  // private setInfo = new FormGroup({
  //   nameList:new FormGroup({
  //     surname:new FormControl("",[Validators.required]),
  //     name:new FormControl("",Validators.required),
  //     nickName:new FormControl("",Validators.required)
  //   }),
  //   address:new FormControl("",Validators.required),
  //   telList:new FormArray([
  //     new FormControl("",[Validators.required,Validators.pattern("1\\d{10}")])
  //   ],this.checkNums)
  // })

  private setInfo;

  constructor(private fb:FormBuilder) { 
    this.createForm()
  }

  ngOnInit() {
  }

  private createForm(){
     // FormBuilder中的 group() 方法 等效于  new FormGroup({})
     this.setInfo = this.fb.group({
        // address:new FormControl("",Validators.required),
        // key : value  
        // 名称   FormControl 的参数  [a,b]  a==> 默认值   b==> 校验规则 fun|Array<fn>
        //       FormGroup|FormArray
        address:["",Validators.required],
        //   nameList:new FormGroup({
        //     surname:new FormControl("",[Validators.required]),
        //     name:new FormControl("",Validators.required),
        //     nickName:new FormControl("",Validators.required)
        //   }),
        nameList:this.fb.group({
          surname:["",[Validators.required]],
          name:["",[Validators.required]],
          nickName:["",[Validators.required]]
        },{
           validator:this.show   // group 的自定义全局校验规则
        }),
        // telList:new FormArray([
        //     new FormControl("",[Validators.required,Validators.pattern("1\\d{10}")])
        //   ],this.checkNums)
        telList:this.fb.array([
          ["",[Validators.required,Validators.pattern("1\\d{10}")]]
        ],this.checkNums)
     })
  }

  private show(){
    console.log(11111);
    return null;
  }

  private checkNums(fa:FormArray){
    let telNums = fa.controls.length;
    console.log(telNums);
    return telNums==0 ? {"error":"至少有一个电话"}:null;
  }

  private addTel(){
    let telList:FormArray = this.setInfo.get("telList") as FormArray;
    telList.push(new FormControl("",[Validators.required,Validators.pattern("1\\d{10}")]))
  }

  private subTel(index){
    let telList:FormArray = this.setInfo.get("telList") as FormArray;
    // if(telList.controls.length==1){
    //   return;
    // }
    telList.removeAt(index);
  }

}
