import { Component } from "@angular/core";

@Component({
    selector: 'app-server', // this is the selector that will be used to render this component, use it as an html tag
    // this is the template that we use in the html file
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
        `]
})
export class ServerComponent { 
    serverId: number = 10;
    serverStatus: string = "offline";

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === "online" ? "green" : "red";
    }
}