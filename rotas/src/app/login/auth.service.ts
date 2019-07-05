import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'Uglas' && usuario.senha === '1010') {

      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/home']);


    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
      alert('Participante nao encontrado');
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
