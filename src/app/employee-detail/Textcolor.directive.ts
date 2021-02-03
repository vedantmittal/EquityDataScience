import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'black';
     }
}