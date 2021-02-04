import { environment } from './../../../../environments/environment';
import { map } from 'rxjs/operators';
import { Usuario } from './usuario.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly url = environment.API

  constructor(
    private http: HttpClient
  ) { }

  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}/usuarios`)
  }

  getUsuarioPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/usuarios?id=${id}`)
      .pipe(
        map((obj) => obj = obj[0])
      )
  }

  adicionarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}/usuarios`, usuario)
      .pipe(map((obj) => obj = obj))
  }

  atualizarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.url}/usuarios/${usuario.id}`, usuario)
  }

  deletarUsuario(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.url}/usuarios/${id}`)
  }

}
