import { Component, OnInit, Input } from '@angular/core';
import { format } from 'url';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent implements OnInit {

  @Input() FormDebug;

  constructor() { }

  ngOnInit() {
  }

}
