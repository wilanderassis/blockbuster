import { Filme } from './filme.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  url = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  getFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>(`${this.url}/filmes`)
  }

  salvarFilme(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(`${this.url}/filmes`, filme)
  }

  getFilmesPorID(id: number): Observable<Filme> {
    return this.http.get<Filme>(`${this.url}/filmes/${id}`)
  }

  atualizarFilme(filme: Filme): Observable<Filme> {
    const url = `${this.url}/filmes/${filme.id}`
    return this.http.put<Filme>(url, filme)
      .pipe(map((obj) => obj))
  }

  excluirFilme(id: number): Observable<Filme> {
    return this.http.delete<Filme>(`${this.url}/filmes/${id}`)
    .pipe((obj)=> obj)
  }

}
