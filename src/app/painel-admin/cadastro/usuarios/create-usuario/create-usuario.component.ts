import { Router } from '@angular/router';
import { UsuariosService } from './../usuarios.service';
import { Usuario } from './../usuario.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit {

  @ViewChild('formulario') formulario: NgForm
  usuario: Usuario = {
    "nome": '',
    "email": '',
    "senha": ''
  }

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvarUsuario() {
    /* ALGORITMO PARA VERIFICAR SE OS CAMPOS ESTÃO VALIDOS */
    if (this.formulario.status === 'INVALID') {
      for (const i in this.formulario.controls) {
        if (this.formulario.controls[i]) {
          this.formulario.controls[i].markAsTouched();
        }
      }
    } else {
      /* SE OS CAMPOS ESTIVEREM VÁLIDOS OS DADOS SÃO SALVOS */
      this.usuariosService.adicionarUsuario(this.usuario)
        .subscribe((usuario) => {
          this.usuario = usuario
        })
      this.router.navigate(['/principal/crud-usuario'])
    }
  }

}
