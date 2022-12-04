import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ServersService } from "../servers.service";

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable() // add another service into a service
export class ServerResolver implements Resolve<Server> {
    constructor(private serversService: ServersService) {}
    resolve(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
        return this.serversService.getServer(+route.params['id']); // + converts string to number
    }
}