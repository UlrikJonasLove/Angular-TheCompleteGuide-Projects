import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appUnless]'
})

export class UnlessDirective {
    @Input() set unless(condition: boolean) {
        if (!condition) {
        // create a view of the template
        this.vcRef.createEmbeddedView(this.templateRef);
        } else {
        // clear the view
        this.vcRef.clear();
        }
    }

    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {}
}