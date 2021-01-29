import { FilmesService } from './../filmes.service';
import { Filme } from './../filme.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  filme: Filme
  formulario: FormGroup = new FormGroup({
    'nome': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'genero': new FormControl(null, [Validators.required]),
    'ano': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'diretor': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'descricao': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(500)]),
    'poster': new FormControl(null)
  })

  url: any = '../../../../../assets/img/sem-imagem.jpg';

  constructor(
    private filmesService: FilmesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /* ADICIONAR IMAGEM NO INPUT FILE */
  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }


  /* PERSISTIR FILME NA API REST FAKE */
  salvarFilme() {
    if (this.formulario.status == 'INVALID') {
      console.log('O formulario esta invaildo');
      this.formulario.get('nome').markAsTouched()
      this.formulario.get('genero').markAsTouched()
      this.formulario.get('ano').markAsTouched()
      this.formulario.get('diretor').markAsTouched()
      this.formulario.get('descricao').markAsTouched()
    } else {
      let filme = new Filme(
        this.formulario.value.nome,
        this.formulario.value.genero,
        this.formulario.value.ano,
        this.formulario.value.diretor,
        this.formulario.value.descricao,
        this.formulario.value.poster
      )
      this.filmesService.salvarFilme(filme)
        .subscribe((filme) => {
          this.filme = filme
          console.log(this.filme);
        })
        this.router.navigate(['/crud-filme'])
    }

  }

}
