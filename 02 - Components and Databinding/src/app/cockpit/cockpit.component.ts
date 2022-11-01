import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // adding () at the end to call the constructor
  // and create a new event emitter object
  // @Output() is used to pass the property out of the component to the parent component
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  // view child argument is how we wanna select the element
  @ViewChild("newServerContent", {static: true}) serverContentInput: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }

  // this is not the recommended way to getting access to the DOM
  onAddServer(nameInput: HTMLInputElement) {
    // this is the way to emit an event
    console.log(nameInput.value); // this is the way to get the value of an input element, local reference
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value // this is the way to get the value of an input element, view child
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this is the way to emit an event
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}