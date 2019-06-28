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
    return cursos.find(item => item.id === Number(id));

    //   for (const item of cursos) {
    //     if (item.id === id) {
    //       return item;
    //     }
    //   }
    //   return null;
  }
  constructor() { }
}
