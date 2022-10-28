import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

// need to tell angular that we have a new component that we want to use in our app 
// ngModule is a decorator that we use to tell angular that this is a module
@NgModule({
  declarations: [ // this is where we declare all the components that we want to use in this module
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [ // this is where we import all the modules that we want to use in this module
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // this is where we tell angular which component to use as the root component
})
export class AppModule { }
