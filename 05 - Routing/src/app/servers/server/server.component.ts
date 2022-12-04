import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data["server"]; // this 'server' is the name of the property in the route with the resolver, needs to be the same
        }
      )
    // const id = +this.route.snapshot.params["id"]; // the + converts the string to a number
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(
    //   (params) => {
    //     this.server = this.serversService.getServer(+params["id"]);
    //   }
    // );
  }

  onEdit() { // we can use a relative path because we are already in the servers route, that is what the this.route does
    this.router.navigate(["edit"], {relativeTo: this.route, queryParamsHandling: "preserve"});
  }

}
