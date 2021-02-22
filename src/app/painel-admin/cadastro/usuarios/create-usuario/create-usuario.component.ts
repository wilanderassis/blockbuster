import { AlertModalService } from './../../../../shared/alert-modal.service';
import { Usuario } from './../usuario.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Usuarios2Service } from '../usuarios2.service';

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
    private usuariosService: Usuarios2Service,
    private modal: AlertModalService,
    private location: Location
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
      /* SE OS CAMPOS ESTIVEREM VÁLIDOS OS DADOS SÃO SALVOS E RETORNA PARA ROTA ANTERIOR*/
      this.usuariosService.adicionar(this.usuario)
        .subscribe(
          (success) => {
            this.modal.showAlertSuccess('Usuário salvo com sucesso!')
            this.location.back()
          },
          (error) => this.modal.showAlertDanger('Erro ao salvar usuário!'),
        )
    }
  }

}
