import { Directive, HostListener, ElementRef, Renderer, HostBinding, Input, OnInit  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: 'write';
  @Input('appHighlight') highlightColor: 'yellow';


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
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onmouseLeave() {
    // this._renderer.setElementStyle(
    // this._elementRef.nativeElement,
    // 'background-color', 'white'
    // );
    this.backgroundColor = this.defaultColor;
  }
  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
