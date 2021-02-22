import { switchMap, take } from 'rxjs/operators';
import { AlertModalService } from './../../../../shared/alert-modal.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Params } from '@angular/router';
import { Usuario } from './../usuario.model';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EMPTY} from 'rxjs';
import { Usuarios2Service } from '../usuarios2.service';

@Component({
  selector: 'app-delete-usuario',
  templateUrl: './delete-usuario.component.html',
  styleUrls: ['./delete-usuario.component.css']
})
export class DeleteUsuarioComponent implements OnInit {

  usuario: Usuario
  deleteModalRef: BsModalRef

  constructor(
    private usuariosService: Usuarios2Service,
    private route: ActivatedRoute,
    private location: Location,
    private modalService: BsModalService,
    private modal: AlertModalService
  ) { }

  /* O USUÁRIO E ENCONTRADO PELO ID */
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.usuariosService.getPorId(params.id)
        .subscribe((usuario) => {
          this.usuario = usuario
        })
    })
  }

  /* MÉTODO PARA CHAMAR O POP-UP PARA ESCOLHER SIM OU NÃO E EXCLUIR USUÁRIO */
  deleteUsuario() {
    const result$ = this.modal.showConfirm('Confirmação', 'Deseja excluir este usuário?')
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.usuariosService.deletar(this.usuario.id) : EMPTY)
      )
      .subscribe(
        (success) => {
          this.modal.showAlertSuccess('Usuário excluído com sucesso!')
          this.location.back()
        },
        (error) => {
          this.modal.showAlertDanger('Erro ao excluír usuário!')
        }
      )
  }

}
