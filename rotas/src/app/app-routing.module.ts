import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guards';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'cursos', loadChildren:  './cursos/cursos.module#CursosModule', canActivate: [AuthGuard], canActivateChild: [CursosGuard]},
  { path: 'alunos', loadChildren: './alunos/alunos.module#AlunosModule', canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: LoginComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
