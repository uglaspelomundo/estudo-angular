import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighLightMouse]'
})
export class HighLightMouseDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string;


  // @HostBinding('style.backgroundColor') get setColor() {
  //   //codigo extra
  //   return this.backgroundColor;
  // }
  // private backgroundColor: string;


  @HostListener('mouseenter') onmouseOver() {
    // this._renderer.setElementStyle(
    // this._elementRef.nativeElement,
    // 'background-color', 'yellow'
    // );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onmouseLeave() {
    // this._renderer.setElementStyle(
    // this._elementRef.nativeElement,
    // 'background-color', 'white'
    // );
    this.backgroundColor = 'white';
  }


  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer
    ) { }

}
