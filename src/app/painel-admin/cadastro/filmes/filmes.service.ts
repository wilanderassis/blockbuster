import { Filme } from './filme.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
