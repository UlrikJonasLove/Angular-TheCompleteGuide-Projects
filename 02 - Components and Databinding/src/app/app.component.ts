import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluebrintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluebrintData.serverName,
      content: bluebrintData.serverContent
    }); 
    }

    onChangeFirst() {
      this.serverElements[0].name = 'Changed!';
    }

    onDestroyFirst() {
      this.serverElements.splice(0, 1); // remove the first element
    }
  }
