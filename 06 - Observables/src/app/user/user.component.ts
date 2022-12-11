import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // an observeable is a stream of data that can be used to react to changes
    // in the data and to react to events
    // the subscribe method is used to listen to the changes in the data
    // the subscribe method takes a function as an argument
    // the function is executed whenever the data changes
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
}
