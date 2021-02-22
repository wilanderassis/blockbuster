import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Filme } from './../../painel-admin/cadastro/filmes/filme.model';
import { CrudService } from './../../shared/crud-service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmesService extends CrudService<Filme> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}/filmes`);
  }

  filmesPorTermoDaBusca(termo: string): Observable<Filme[]> {
    return this.http.get<Filme[]>(`${environment.API}/filmes?nome_like=${termo}`)
      .pipe(
        retry(10),
        take(1)
      )
  }

}
