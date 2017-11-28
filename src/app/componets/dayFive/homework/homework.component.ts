import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {

  private setInfo = new FormGroup({
    nameList:new FormGroup({
      surname:new FormControl("",[Validators.required]),
      name:new FormControl("",Validators.required),
      nickName:new FormControl("",Validators.required)
    }),
    address:new FormControl("",Validators.required),
    telList:new FormArray([
      new FormControl("",[Validators.required,Validators.pattern("1\\d{10}")])
    ],this.checkNums)
  })

  constructor() { }

  ngOnInit() {
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
