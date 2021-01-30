import { Filme } from './../filme.model';
import { FilmesService } from './../filmes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  filme: Filme

  constructor(
    private filmesService: FilmesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.filmesService.getFilmesPorID(params.id)
        .subscribe((filme) => {
          this.filme = filme
        })
    })
  }

  atualizarFilme() {
    this.filmesService.atualizarFilme(this.filme)
      .subscribe((filme) => {
        this.filme = filme
        console.log(filme);
        this.router.navigate(['/crud-filme'])
      })
  }

}
