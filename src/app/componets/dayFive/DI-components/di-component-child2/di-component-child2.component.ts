import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataService';

@Component({
  selector: 'app-di-component-child2',
  templateUrl: './di-component-child2.component.html',
  styleUrls: ['./di-component-child2.component.css']
})
export class DiComponentChild2Component implements OnInit {

  constructor(private ds:DataService) { }

  ngOnInit() {
  }

}
