import { Component } from '@angular/core';

@Component({
  selector: 'app-unit-assignment',
  templateUrl: './unit-assignment.component.html',
  styleUrls: ['./unit-assignment.component.css']
})
export class UnitAssignmentComponent {
  showContent = true;
  buttonLog: any = [];
  counter;
  
  constructor() {
    console.log(this.buttonLog.length)
  }
  
  toggleContent(event) {
    this.showContent = this.showContent ? false : true;
    //max wrote the line below
    // this.buttonLog.push(this.buttonLog.length + 1);
    this.buttonLog.push(Date());

    //I wrote this shit show below
    // for(let i = 0; i < this.buttonLog.length; i++){
    //   this.buttonLog.push(this.buttonLog[i]++)
    //   this.buttonLog.sort((a, b) => b-a)
    //   return
    // }
  }
}
