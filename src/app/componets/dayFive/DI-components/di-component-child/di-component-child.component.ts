import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataService';

@Component({
  selector: 'app-di-component-child',
  templateUrl: './di-component-child.component.html',
  styleUrls: ['./di-component-child.component.css']
})
export class DiComponentChildComponent implements OnInit {

  constructor(private ds:DataService) { }

  ngOnInit() {
  }

}
