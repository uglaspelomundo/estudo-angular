import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos() {
    return [
      { id: 1, nome: 'Angula 2' },
      { id: 2, nome: 'Java' }
    ];
  }



  getCurso(id: number) {
    const cursos = this.getCursos();
    // for (item of this.cursos) {
    //   console.log(item);
    //   item = '';
    // }
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < cursos.length; i++) {
      const curso = cursos[i];
      // tslint:disable-next-line: triple-equals
      if (curso.id == id) {
        return curso;
      }
    }
    return null;
  }
  constructor() { }
}
