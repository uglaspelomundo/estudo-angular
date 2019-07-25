import { Directive, Renderer2, ElementRef, HostListener, Input, OnInit, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appElementError]'
})
export class ElementErrorDirective implements OnInit, OnDestroy {
  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private control: NgControl
  ) { }

  subscription: Subscription;
  @Input() showSuccess: boolean | null;
  @HostListener('blur') onblur() { this.validate(); }

  ngOnInit(): void {
    this.subscription = this.control.valueChanges.subscribe(() => this.validate());
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  private validate() {
    if (this.shouldShowErrors()) {
      if (this.showSuccess) {
        this.renderer.removeClass(this.hostElement.nativeElement, 'is-valid');
      }
      this.renderer.addClass(this.hostElement.nativeElement, 'is-invalid');
    } else {
      if (this.showSuccess) {
        this.renderer.addClass(this.hostElement.nativeElement, 'is-valid');
      }
      this.renderer.removeClass(this.hostElement.nativeElement, 'is-invalid');
    }
  }

  private shouldShowErrors(): boolean {
    return this.control && this.control.errors && this.control.touched;
  }


}
