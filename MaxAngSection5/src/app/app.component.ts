import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {
      type: 'server', 
      name: 'testServer', 
      content:'Just testing this out'
    }
  ];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  // this method was created to show how ngOnChanges detects changes made to values that are rendered to  the user. When page loads the value of name is testServer as shown in serverElements array, once this method is triggered using the 'Change First Element" button, it changes the name to 'Changed!' and then the child component (server-element) receives this input (because of @Input decorator) and ngChanges() in that same component console logs the changes. 

  // making ngOnChanges useful in cases where you want to store the intial value before it's changed and do something with it in your code.
  onChangeElement() {
    this.serverElements[0].name = 'Changed!'
  }

  onDestroyComponent() {
    this.serverElements.splice(0, 1)
  }
}
