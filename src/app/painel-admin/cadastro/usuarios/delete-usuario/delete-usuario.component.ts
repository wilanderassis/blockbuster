import { AlertModalService } from './../../../../shared/alert-modal.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Params } from '@angular/router';
import { UsuariosService } from './../usuarios.service';
import { Usuario } from './../usuario.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-usuario',
  templateUrl: './delete-usuario.component.html',
  styleUrls: ['./delete-usuario.component.css']
})
export class DeleteUsuarioComponent implements OnInit {

  usuario: Usuario
  deleteModalRef: BsModalRef
  @ViewChild('deleteModal') deleteModal

  constructor(
    private usuariosService: UsuariosService,
    private route: ActivatedRoute,
    private location: Location,
    private modalService: BsModalService,
    private modal: AlertModalService
  ) { }

  /* O USUÁRIO E ENCONTRADO PELO ID */
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.usuariosService.getUsuarioPorId(params.id)
        .subscribe((usuario) => {
          this.usuario = usuario
        })
    })
  }

  /* MÉTODO PARA CHAMAR O POP-UP PARA ESCOLHER SIM OU NÃO */
  deleteUsuario() {
    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' })
  }

  /* METODO PARA EXCLUIR USUÁRIO E VOLTAR PARA ROTA ANTERIOR FECHANDO O POP-UP*/
  confirmarExclusao() {
    this.route.params.subscribe((params: Params) => {
      this.usuariosService.deletarUsuario(params.id)
        .subscribe(
          (success) => {
            this.modal.showAlertSuccess('Usuário excluído com sucesso!')
            this.location.back()
            this.deleteModalRef.hide()
          },
          (error) => {
            this.modal.showAlertDanger('Erro ao excluír usuário!')
            this.deleteModalRef.hide()
          }
        )
    })
  }

  /* METODO PARA FECHAR O POP-UP */
  naoConfirmarExclusao() {
    this.deleteModalRef.hide()
  }

}
