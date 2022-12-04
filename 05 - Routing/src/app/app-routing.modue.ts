import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
// import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerResolver } from "./servers/server/server-resolver.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [ // creating a constant array of routes
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent } // :id and name is a dynamic part of the path
  ] },
  { path: 'servers', 
  // canActivate: [AuthGuard], 
  canActivateChild: [AuthGuard],
  component: ServersComponent, children: [ // adding child routes to the servers route
    { path: ':id', component: ServerComponent, resolve:{server: ServerResolver} }, // resolve is a property that allows us to resolve data before loading a route
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
  ]},
  // { path: "not-found", component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: "**", redirectTo: "/not-found" } // this is a wildcard route, it will match any route that is not defined above
  // this route must be the last route in the array
  
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true}) // forRoot is a method that takes an array of routes as an argument
        // the useHash property is used to add a # to the url to avoid issues with the server
        // the useHash property is used for older browsers that do not support the HTML5 history API
        // hash routing is not recommended for modern apps 
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}