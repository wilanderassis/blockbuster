import { AlertModalService } from './../../../../shared/alert-modal.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsuariosService } from './../usuarios.service';
import { Usuario } from './../usuario.model';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.css']
})
export class UpdateUsuarioComponent implements OnInit {

  usuario: Usuario

  constructor(
    private usuariosService: UsuariosService,
    private route: ActivatedRoute,
    private modal: AlertModalService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.usuariosService.getUsuarioPorId(params.id)
        .subscribe((usuario) => {
          this.usuario = usuario
        })
    })
  }

  atualizarUsuario() {
    this.usuariosService.atualizarUsuario(this.usuario)
    .subscribe(
      (success) => {
        this.modal.showAlertSuccess('Usuário atualizado com sucesso!')
        this.location.back()
      },
      (error) => this.modal.showAlertDanger('Erro ao atualizar usuário!'),
    )
  }

}
