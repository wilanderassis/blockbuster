import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsuariosService } from './../usuarios.service';
import { Usuario } from './../usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-usuario',
  templateUrl: './delete-usuario.component.html',
  styleUrls: ['./delete-usuario.component.css']
})
export class DeleteUsuarioComponent implements OnInit {

  usuario: Usuario

  constructor(
    private usuariosService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.usuariosService.getUsuarioPorId(params.id)
        .subscribe((usuario) => {
          this.usuario = usuario
        })
    })
  }

  deleteUsuario() {
    this.route.params.subscribe((params: Params) => {
      this.usuariosService.deletarUsuario(params.id)
        .subscribe((usuario) => {
          this.usuario = usuario
          this.router.navigate(['/principal/crud-usuario'])
        })

    })
  }

}
