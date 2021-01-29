import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: boolean = false

  constructor(
    private router: Router
  ) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'u@gmail.com' && usuario.senha === '123') {
      this.usuarioAutenticado = true
      this.router.navigate(['/principal'])
    } else {
      this.usuarioAutenticado = false
      console.log('Usuário ou senha inválidos!');

    }
  }
}
