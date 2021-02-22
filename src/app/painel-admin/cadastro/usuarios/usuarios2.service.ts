import { environment } from './../../../../environments/environment';
import { Usuario } from './usuario.model';
import { CrudService } from './../../../shared/crud-service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Usuarios2Service extends CrudService<Usuario> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}/usuarios`);
  }
}
