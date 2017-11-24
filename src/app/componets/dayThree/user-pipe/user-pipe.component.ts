import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-pipe',
  templateUrl: './user-pipe.component.html',
  styleUrls: ['./user-pipe.component.css']
})
export class UserPipeComponent implements OnInit {

  private num:number = 33333;
  private x:number = 3;
  


  constructor() { }

  ngOnInit() {
  }

}
