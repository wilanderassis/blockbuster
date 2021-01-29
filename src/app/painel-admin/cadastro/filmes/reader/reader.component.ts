import { FilmesService } from './../filmes.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Filme } from '../filme.model';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  filmes: Filme[]
  displayedColumns = ['id', 'nome', 'genero', 'ano', 'diretor', 'acao']
  nome: string
  p: number = 1

  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    this.filmesService.getFilmes()
      .subscribe((filmes) => {
        this.filmes = filmes
      })
  }

  pesquisarFilme() {
    if (this.nome == '') {
      this.ngOnInit()
    } else {
      this.filmes = this.filmes.filter((item) => {
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
