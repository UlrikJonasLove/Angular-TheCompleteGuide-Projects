import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  // HostBinding allows us to bind to properties of the host element
  // getting access to the style property of the host element and binding it to the backgroundColor property
  @HostBinding("style.backgroundColor") backgroundColor: string 
  

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // initial default color because it is not set in the HTML otherwise, make it available on init
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this is an alternative way to access the DOM element instead of using the renderer
    this.backgroundColor = this.highlightColor;

    // by using renderer we can get access to the DOM element and add a style to it without directly accessing it
    // this is a better way, to use renderer to access the DOM element instead of using the elementRef directly
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }
}
