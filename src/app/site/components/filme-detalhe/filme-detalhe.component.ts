import { ActivatedRoute, Params } from '@angular/router';
import { FilmesService } from './../filmes.service';
import { Filme } from './../../../painel-admin/cadastro/filmes/filme.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.component.html',
  styleUrls: ['./filme-detalhe.component.css']
})
export class FilmeDetalheComponent implements OnInit {

  filme: Filme

  constructor(
    private filmesService: FilmesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.filmesService.getPorId(params.id)
        .subscribe((filme) => {
          this.filme = filme
          console.log(this.filme);

        })
    })
  }

}
