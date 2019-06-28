import { AlunosService } from './../alunos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno: any = {};
  inscricao: Subscription;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params.id;
        this.aluno = this.alunosService.getAluno(this.id);

        if (this.aluno === null) {
          this.aluno = {};
        }
      }
    );
  }

  OnDestroy() {
    this.inscricao.unsubscribe();
  }
}
