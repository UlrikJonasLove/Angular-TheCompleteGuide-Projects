import { 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, 
  ContentChild, 
  DoCheck, 
  ElementRef, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges, 
  ViewChild, 
  ViewEncapsulation, } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // none, native
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  // this @Input() decorator is used to bind the property to the parent components
  // assigning an alias to the element property 
  // so every component outside of this one can use the alias instead of the property name
  @Input("srvElement") element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild("heading", {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  constructor() { 
    console.log('constructor called!');
  }

  // ngOnChanges() is called after a bound input property changes
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
    
  }
  // ngOnInit() is called once the component is initialized, runned after the constructor
  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log(this.header.nativeElement.textContent); // not available here
    console.log(this.paragraph.nativeElement.textContent); // not available here
  }

  // ngDoCheck() is called during every change detection run, wether something has changed or not, called alot
  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  // ngAfterContentInit() is called after content (ng-content) has been projected into view, called only once
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  // ngAfterContentChecked() is called every time the projected content has been checked
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  // ngAfterViewInit() is called after the component's view (and child views) has been initialized
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log(this.header.nativeElement.textContent); // available here
    console.log(this.paragraph.nativeElement.textContent); // available here
  }
  
  // ngAfterViewChecked() is called every time the view (and child views) have been checked
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  // ngOnDestroy() is called once the component is about to be destroyed, used to unsubscribe observables and prevent memory leaks
  ngOnDestroy() { 
    console.log('ngOnDestroy called!');
  }
}
