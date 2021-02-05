import { AlertModalService } from './../../../../shared/alert-modal.service';
import { UsuariosService } from './../usuarios.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-reader-usuario',
  templateUrl: './reader-usuario.component.html',
  styleUrls: ['./reader-usuario.component.css']
})
export class ReaderUsuarioComponent implements OnInit, OnDestroy {

  usuarios: Usuario[]
  nome: string
  p: number = 1

  constructor(
    private usuariosService: UsuariosService,
    private alertModalService: AlertModalService
  ) { }

  ngOnInit(): void {
    this.usuariosService.getUsuario()
      .subscribe((usuarios) => {
        this.usuarios = usuarios
      },
        (error) => {
          this.handlerError()
          console.log('Erro: ', error)
        }
      )
  }

  ngOnDestroy() {

  }

  /* FILTRO DA TABELA PARA PESQUISAR POR NOME DO USUÁRIO */
  pesquisarUsuario() {
    if (this.nome == '') {
      this.ngOnInit()
    } else {
      this.usuarios = this.usuarios.filter((item) => {
        return item.nome.toLowerCase().match(this.nome.toLowerCase())
      })
    }
  }

  /* ALGORÍTMO PARA ODRDENAÇÃO */
  key: string = 'id'
  reverse: boolean = false
  sort(key) {
    this.key = key
    this.reverse = !this.reverse
  }

  /* MODAL DE ERRO */
  handlerError() {
    this.alertModalService.showAlertDanger('Erro ao listar usuários, tente novamente mais tarde!')
  }

}
