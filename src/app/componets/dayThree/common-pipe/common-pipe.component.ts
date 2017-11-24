import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-pipe',
  templateUrl: './common-pipe.component.html',
  styleUrls: ['./common-pipe.component.css']
})
export class CommonPipeComponent implements OnInit {

  private num:number = 123.44;
  private day:Date = new Date();
  private user:any = {
      name:"tom",
      age:23,
      sex:"男",
      childrens:[
        {
          name:"tom",
          age:23,
          sex:"男"
        },
        {
          name:"tom",
          age:23,
          sex:"男"
        }
      ]
  };

  constructor() { }

  ngOnInit() {
  }

}
