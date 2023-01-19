import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServerElementComponent implements OnInit {
  @Input() element: {type: string, name:string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
