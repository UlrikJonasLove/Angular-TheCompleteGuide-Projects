import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', // when adding square brackets, we can use this as an attribute
  // template must always be present, it can be a string or a url
  selector: "app-servers", // when adding a . dot in front of the selector, we can use this as a class
  templateUrl: "./servers.component.html",
  // template: ` 
  // <app-server></app-server>
  // <app-server></app-server>`, // when using template we can use backticks to write html code on multiple lines
  // templateUrl vs Template - templateUrl is used when we have a separate html file for the template, 
  // template is used when we have the template in the same file as the component
  // if using more than 3 lines of html code, it is better to use templateUrl and have a separate html file
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "testServer";
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Server name is " + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
