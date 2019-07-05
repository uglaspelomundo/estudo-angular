import { AlunosService } from './../alunos.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: any;
  inscricao: Subscription;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     this.id = params.id;
    //     this.aluno = this.alunosService.getAluno(this.id);
    //   }
    // );
    this.inscricao = this.route.data.subscribe(
      (info) => {
        console.log(info);
        this.aluno = info.aluno;
      }
    );
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  OnDestroy() {
    this.inscricao.unsubscribe();
  }
}
