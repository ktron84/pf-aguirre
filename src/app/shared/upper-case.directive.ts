import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUpperCase]'
})
export class UpperCaseDirective {

  constructor(
    private elementRef: ElementRef, private renderer: Renderer2){
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '22px')
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-family', 'serif')
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'SkyBlue')
   }
}
