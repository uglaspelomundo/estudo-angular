import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.css']
})
export class DiretivaNgswitchComponent implements OnInit {

// tslint:disable-next-line: no-inferrable-types
  aba: string = 'home';

  constructor() { }

  ngOnInit() {
  }

}
