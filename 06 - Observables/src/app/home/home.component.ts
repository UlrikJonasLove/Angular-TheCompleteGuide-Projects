import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs'; // needed when we create a new observable
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;
  private secondObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    // we get a new value and log it to the console every second
    // the interval method returns an observable
    // an observable does not need to be stopped, then need to be unsubscribed
    // store the subscription in a property from the subscribe method
    this.firstObsSubscription = interval(1000).subscribe(count => {
      console.log( count );
    } );

    // we can create our own observable by using the create method
    // the create method takes a function as an argument
    // the observer is an object that has three methods: next, error, complete
    // it will listen to the observable and react to the emitted values
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        // next is used to emit a new value
        // error is used to emit an error
        // complete is used to complete the observable
        // these three exist in observer
        observer.next(count);
        if(count === 2) {
          observer.complete(); // this will complete the observable and come to a halt
          // this will stop before the error is emitted
         }
        if(count > 3) {
          observer.error(new Error('Count is greater than 3!')); // this will stop the observable
        }
        count++
      }, 1000);
    });

    // pipe is an operator that allows us to use operators on observables
    // customIntervalObservable.pipe(map((data: number) => { // the data is the value emitted by the observable
    //   return 'Round: ' + (data + 1);
    // })); // we can use operators on observables

    // we can subscribe to the observable
    // subsribe means that we listen to the observable
    this.secondObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
      // errors cancel the subscription, not completing it
    }, error => { // this is the error function
      console.log(error.message);
    }, () => { //this is the completed function
      console.log('Completed!'); // no need to unsubscribe because the observable is completed, but might still be useful
    });
  }

  ngOnDestroy() {
    // unsubscribe from the observable
    // which means that the observable will no longer emit new values when leaving the component
    // this is important to avoid memory leaks
    // and to avoid that the observable continues to emit values when the component is no longer active
    // however, with observables provided by angular we do not need to unsubscribe
    // because angular will unsubscribe automatically
    this.firstObsSubscription.unsubscribe();
    this.secondObsSubscription.unsubscribe();
  }

}
