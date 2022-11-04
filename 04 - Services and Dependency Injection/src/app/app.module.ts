import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountService } from './account.service';
import { LoggingService } from './loggin.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountService, LoggingService], // the highest level of hierarchy, all components will use the same instance of the service
  // unless you wanna override it in the component
  // this way we can also add a service into another service
  bootstrap: [AppComponent]
})
export class AppModule { }
