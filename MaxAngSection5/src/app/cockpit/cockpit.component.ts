import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = '';
  // newServerContent = '';
  //Passing the local reference from the html file to ViewChild decorator, they must match. Variable can be called anything else, we chose the same name here. 
    // ElementRef is an angular type and has a useful property called nativeElement that can provide you the value property. 
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(nameInput: HTMLInputElement) {
    // console.log('NAME', nameInput.value);
    // this.serverCreated.emit({
    //   serverName: nameInput.value,
    //   serverContent: this.newServerContent,
    // });

      this.serverCreated.emit({
        serverName: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value,
      });
      // console.log(this.serverContentInput.nativeElement.value)
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this.bluePrintCreated.emit({
    //   serverName: this.newServerName,
    //   serverContent: this.newServerContent,
    // });

    this.bluePrintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
    // console.log(this.serverContentInput.nativeElement.value)
  }
}
