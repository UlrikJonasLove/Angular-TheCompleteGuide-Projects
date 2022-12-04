import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // getting the user data from the url using the snapshot, so the data will be available in the html template
    this.user = {
      id: this.route.snapshot.params['id'], // gets the id from the route
      name: this.route.snapshot.params['name'] // gets the name from the route
    }
    this.paramsSubscription = this.route.params // params is an observable
    // angular cleans up the subscription in the background when the component is destroyed
      .subscribe(
        // getting the updated params
        (params: Params) => {
          // updating the user object with the new params, this will update the view
          // on the link click in the users.component.html
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      ); // subscribe to the observable, subscribe takes a function that will be executed whenever the params change, and it will be executed with the new params
  }

  ngOnDestroy() {
    // this will be called when the component is destroyed
    // this is not necessary because angular cleans up the subscription in the background
    this.paramsSubscription.unsubscribe(); // this will clean up the subscription
  }
}
