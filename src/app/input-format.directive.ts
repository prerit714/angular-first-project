import { Input, Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  // app is prefixed to avoid any clashes
  // I wish to handle 2 events using HostListener
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // To make my directive more useable, I will use an input field
  @Input("format")
  format: string = "";

  constructor(private el: ElementRef) {
    // this el is a service defined in angular , gives access to DOM object
    // Now to inject an element reference object
    
  }

  @HostListener("focus")
  onFocus(): void {
    console.log("onFocus() is called!");
  }

  @HostListener("blur")
  onBlur(): void {
    // I want to do the formatting once the user is out of the focus
    // This is done using onBlur instead of onFocus, but I will just keep
    // this here for my reference
    console.log("onBlur() is called!");
    const value: string = this.el.nativeElement.value;
    // Black box this behaviour when you wish to lower-case anything that
    // User enteres into the text-field
    // Angular seems good :)
    if (this.format === "lowercase") {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }


}
