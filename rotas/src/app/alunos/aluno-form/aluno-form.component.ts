import { AlunosService } from './../alunos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IFormCanDeactivate } from 'src/app/guards/form-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any = {};
  inscricao: Subscription;
  id: number;
  private formMudou = false;

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

  onInput() {
    this.formMudou = true;
    console.log('mudou');
  }

  podeMudarRota() {
    if (this.formMudou) {
      confirm('Tem certeza que vai sair dessa pagina?');

    }
    return true;
  }

  podeDesativar() {
    return this.podeMudarRota();
  }
}
