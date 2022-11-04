import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../loggin.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  //providers: [LoggingService] // This is the way to add a service to a component
  // no need to add AccountService here because it is already added in app component, service hierarchy. 
  // however, it is still needed in the constructor
  // now we are using one and the same instance of the service in all components
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  // initialize the service in the constructor
  constructor(private loggingService: LoggingService, private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status) 
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // use the service
    // this.loggingService.logStatusChange(accountStatus);
  }
}
