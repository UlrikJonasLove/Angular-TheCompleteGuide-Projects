import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() is used to pass data from child to parent
  @Output() featureSelected = new EventEmitter<string>(); // EventEmitters are used to pass data from child to parent using event binding

  onSelect(feature: string) {
    this.featureSelected.emit(feature); // emit() is used to pass data from child to parent, to app component
  }

  constructor() { }

  ngOnInit(): void {
  }

}
