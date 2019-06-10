
import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from './../shared/log.service';

@Injectable()

export class CursosService {

  constructor(private logservice: LogService) {
    console.log();
  }
  static criouNovoCurso = new EventEmitter<string>();
  emitirCursoCriado = new EventEmitter<string>();

  private cursos: string [] = ['Angular 7', 'Java', 'PhoneGap'];

  getCursos() {
    this.logservice.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logservice.consoleLog('Criando um novo curso ${curso}');
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
