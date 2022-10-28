import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
  <p>This is a warning, you are in danger!</p>`,
  styles: [`
  p {
    padding: 20px;
    background-color: mistyrose;
    border: 1px solid red;
    }`] // we can use backticks to write css code on multiple lines`
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
