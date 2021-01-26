import { FilmesService } from './../filmes.service';
import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme.model';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  filmes: Filme[]
  displayedColumns = ['id', 'nome', 'genero', 'ano', 'diretor', 'acao']

  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    this.filmesService.getFilmes()
      .subscribe((filmes) => {
        this.filmes = filmes
        console.log(this.filmes);

      })
  }

}
