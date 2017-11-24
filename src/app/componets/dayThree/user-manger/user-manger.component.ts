import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-manger',
  templateUrl: './user-manger.component.html',
  styleUrls: ['./user-manger.component.css']
})
export class UserMangerComponent implements OnInit {
  private isAll:boolean = false;
  private wk:string = "";

  private userList:Array<any> = [
    {name:"aaa"},
    {name:"bbb"},
    {name:"ccc"},
    {name:"ddd"},
  ];
  private user:any = {
    name:""
  };

  constructor() { }

  ngOnInit() {
  }

  private doDelete(index){
    // console.log(index);
    this.userList.splice(index,1);
    this.checkSelect();
  }

  private doAdd(){
    this.userList.push(this.user);
    this.user = {};
    this.checkSelect();
  }
  
  private doSelect(){
    // console.log(this.isAll);
    // if(this.isAll){
    //   for(let i = 0; i<this.userList.length; i++){
    //     this.userList[i].isSelect = true;
    //   }
    //   return;
    // }
    // for(let i = 0; i<this.userList.length; i++){
    //   this.userList[i].isSelect = false;
    // }

    for(let i = 0; i<this.userList.length; i++){
      this.userList[i].isSelect = this.isAll;
    }

  }

  private checkSelect(){
    this.isAll = true;

    for(let i = 0; i<this.userList.length; i++){
      if(!this.userList[i].isSelect){
        this.isAll = false;
        return;
      }
    }

  }

}
