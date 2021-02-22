import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

export class CrudService<T> {

  constructor(
    protected http: HttpClient,
    public API_URL
  ) { }

  get(): Observable<T[]> {
    return this.http.get<T[]>(`${this.API_URL}`)
  }

  getPorId(id: number): Observable<T> {
    return this.http.get<T>(`${this.API_URL}?id=${id}`)
      .pipe(
        map((obj) => obj = obj[0])
      )
  }

  getGenero(descricao: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.API_URL}?genero=${descricao}`)
  }

  adicionar(registro: T): Observable<T> {
    return this.http.post<T>(`${this.API_URL}`, registro)
      .pipe(map((obj) => obj = obj))
  }

  atualizar(registro: T): Observable<T> {
    return this.http.put<T>(`${this.API_URL}/${registro['id']}`, registro)
      .pipe(take(1))
  }

  deletar(id: number): Observable<T> {
    return this.http.delete<T>(`${this.API_URL}/${id}`)
      .pipe(take(1))
  }

}
