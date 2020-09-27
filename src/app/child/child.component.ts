import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  pData: string;

  @Input()
  arrList: any = [];

  constructor() {
    console.log("Child constructor called");
  }

  ngOnInit() {
    console.log("Child ngOnit called")
  }

  ngOnChanges(changes: any) {
    console.log("Child ngOnChange called");
  }

  ngDoCheck() {
    console.log("Child ngDoCheck called");
  }
}
