import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  getAlunos() {
    return [
      { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com' },
      { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com' },
      { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com' }
    ];
  }

  getAluno(id: number) {
    const alunos = this.getAlunos();
    return alunos.find(item => item.id === Number(id));

  }

  constructor() { }
}
