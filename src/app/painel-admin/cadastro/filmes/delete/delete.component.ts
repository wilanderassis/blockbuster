import { ActivatedRoute, Router, Params } from '@angular/router';
import { FilmesService } from './../filmes.service';
import { Filme } from './../filme.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

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
          console.log(this.filme);

        })
    })
  }

  deleterFilme() {
    this.route.params.subscribe((params: Params) => {
      this.filmesService.excluirFilme(params.id)
        .subscribe((filme) => {
          this.filme = filme
          this.router.navigate(['/crud-filme'])
        })
    })
  }

  cancelar() {

  }

}
