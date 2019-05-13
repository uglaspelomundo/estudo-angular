// tslint:disable-next-line: max-line-length
import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit,
 DoCheck, AfterContentInit, AfterContentChecked,
 AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
  }
// tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngDoCheck() {
    this.log('ngDoCheck');
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log ('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
