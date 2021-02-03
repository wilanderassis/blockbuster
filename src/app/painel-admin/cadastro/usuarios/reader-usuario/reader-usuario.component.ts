import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-reader-usuario',
  templateUrl: './reader-usuario.component.html',
  styleUrls: ['./reader-usuario.component.css']
})
export class ReaderUsuarioComponent implements OnInit {

  usuarios: Usuario[]
  nome: string
  p: number = 1

  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.usuariosService.getUsuario()
      .subscribe((usuarios) => {
        this.usuarios = usuarios
      })
  }

  pesquisarUsuario() {
    if (this.nome == '') {
      this.ngOnInit()
    } else {
      this.usuarios = this.usuarios.filter((item) => {
        return item.nome.toLowerCase().match(this.nome.toLowerCase())
      })
    }
  }

  key: string = 'id'
  reverse: boolean = false
  sort(key) {
    this.key = key
    this.reverse = !this.reverse
  }

}
