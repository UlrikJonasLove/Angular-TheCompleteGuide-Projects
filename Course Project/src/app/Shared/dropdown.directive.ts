import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: "[appDropdown]"
})
export class DropdownDirective {
    // this is a property that will be added to the element that this directive is on
    // when open is true it will be added to the element, other wise it will be removed
    @HostBinding("class.open") isOpen = false;
    
    @HostListener("click") toggleOpen(eventData: Event) {
        // if open was true, it will be set to false
        this.isOpen = !this.isOpen;
    }
}