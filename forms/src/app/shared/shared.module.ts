import { ElementErrorDirective } from './directives/element-error.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponentComponent } from './components/error-component/error-component.component';

@NgModule({
  declarations: [
    ElementErrorDirective,
    ErrorComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ElementErrorDirective,
    ErrorComponentComponent
  ]
})
export class SharedModule { }
