import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // can add more than one style sheet
  // style: [` can use inline styles like this
  //   h3 {
  //     color: dodgerblue;
  //     }`]
})
export class AppComponent {
  title = 'the-basics';
}
