import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: "[appBasicHighlight]", // Attribute selector with the name of the directive and square brackets
})

export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) { }

    ngOnInit() {
        // should not directly access the DOM element, but use the renderer instead, check better-highlight.directive.ts
        this.elementRef.nativeElement.style.backgroundColor = "green";
    }

}