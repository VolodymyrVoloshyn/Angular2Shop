import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMarkVisited]'
})
export class MarkVisitedDirective {
  private hostElement: HTMLElement;

  @Input('appMarkVisited') backgroundColor: string;

  constructor(elementRef: ElementRef) {
    this.hostElement = elementRef.nativeElement;
  }

  @HostListener('click') onClick() {
    this.hostElement.style.backgroundColor = this.backgroundColor;
  }
}
