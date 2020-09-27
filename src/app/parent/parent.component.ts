import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  cData : string;
  msg: string;
  myArr: any= ['Angular 7','Angular 8','Angular 9'];
  constructor(private msgeService:MessageService) { 
    console.log("Parent Constructor called");
    this.msg = msgeService.getMessage();
    console.log(this.msg);
  }

  ngOnInit(){
    console.log("Parent ngOnit called")
  }
  addvalue()
  {
    this.myArr.push("Angular 10");
  }

}
