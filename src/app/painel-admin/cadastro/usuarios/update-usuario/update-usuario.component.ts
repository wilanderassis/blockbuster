import { AlertModalService } from './../../../../shared/alert-modal.service';
import { ActivatedRoute, Params} from '@angular/router';
import { Usuario } from './../usuario.model';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Usuarios2Service } from '../usuarios2.service';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.css']
})
export class UpdateUsuarioComponent implements OnInit {

  usuario: Usuario

  constructor(
    private usuariosService: Usuarios2Service,
    private route: ActivatedRoute,
    private modal: AlertModalService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.usuariosService.getPorId(params.id)
        .subscribe((usuario) => {
          this.usuario = usuario
        })
    })
  }

  atualizarUsuario() {
    this.usuariosService.atualizar(this.usuario)
    .subscribe(
      (success) => {
        this.modal.showAlertSuccess('Usuário atualizado com sucesso!')
        this.location.back()
      },
      (error) => this.modal.showAlertDanger('Erro ao atualizar usuário!'),
    )
  }

}
