import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {


  cursos: string[] = ['Angular 7', 'Java', 'Phonegap'];

  constructor() { }

  ngOnInit() {

    for (let item of this.cursos) {
        console.log(item);
        item = '';
    }
    // for (let i = 0; i < this.cursos.length; i++) {
    //   const curso = this.cursos[i];
    // }
  }

}
