import { AlertModalService } from './../../../../shared/alert-modal.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { Usuarios2Service } from '../usuarios2.service';

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
    private usuariosService: Usuarios2Service,
    private alertModalService: AlertModalService
  ) { }

  ngOnInit(): void {
    this.usuariosService.get()
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
