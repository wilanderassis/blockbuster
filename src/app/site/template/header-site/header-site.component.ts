import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Filme } from './../../../painel-admin/cadastro/filmes/filme.model';
import { Observable, of, Subject } from 'rxjs';
import { FilmesService } from '../../components/filmes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-site',
  templateUrl: './header-site.component.html',
  styleUrls: ['./header-site.component.css']
})
export class HeaderSiteComponent implements OnInit {

  pesquisaFilmes: Observable<Filme[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    this.pesquisaFilmes = this.subjectPesquisa
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((termo: string) => {
          if (termo.trim() == '') {
            return of<Filme[]>([])
          }
          return this.filmesService.filmesPorTermoDaBusca(termo)
        }))
  }

  pesquisarFilme(termoDaBusca) {
    this.subjectPesquisa.next(termoDaBusca)
  }

}
