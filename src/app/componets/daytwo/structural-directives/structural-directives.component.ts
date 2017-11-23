import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  private flag:boolean = true;
  private name:string = "jack";

  constructor() { }

  ngOnInit() {
  }

}
