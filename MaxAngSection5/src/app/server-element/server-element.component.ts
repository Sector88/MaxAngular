import {
  Component,
  Input,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  SimpleChanges,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentP') pContent: ElementRef;

  constructor() {
    console.log('Constructor Called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called!', 'CHANGES', changes);
    // console.log('CHANGES', changes.element.currentValue)
  }

  ngOnInit() {
    console.log('ngOnInit Called!');
  }

  ngDoCheck() {
    console.log('ngDoCheck Called!');
  }

  //this triggers when ng-content is put into the user's view
    // pContent wouldn't be available until this phase because it's part of the ng-content projection.
  ngAfterContentInit() {
    console.log('ngAfterContentInit Called!');
    console.log(this.pContent)
  }

  // called after every change detection cycle
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called!');
  }

  // you cant see the header element before this phase because it hasn't rendered yet. Thus, why order matters. 
  ngAfterViewInit() {
    console.log('ngAfterViewInit Called!');
    console.log(this.header.nativeElement)
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Called!')
  }
}
