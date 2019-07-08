import { Directive } from '@angular/core';

@Directive({
  selector: '[scrollToTop]',
  host: {
    "(click)": "onClick()"
  }
})
export class ScrollToTopDirective {

  constructor() { }

  onClick() {
    console.log("Hi");
  }
}
