import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgElse]'
})
export class NgElseDirective {

  @Input() set appNgElse(condition: boolean) {
    if (!condition) {
      this._ViewContainerRef.createEmbeddedView(this._templateRef);
    } else {
      this._ViewContainerRef.clear();
    }
  }

  constructor(
// tslint:disable-next-line: variable-name
    private _templateRef: TemplateRef<any>,
// tslint:disable-next-line: variable-name
    private _ViewContainerRef: ViewContainerRef
  ) { }

}
