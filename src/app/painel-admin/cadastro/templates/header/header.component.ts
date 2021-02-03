import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  verificarSaidaDoSistema() {
    let teste = confirm('Deseja sair do sistema?')
    if (teste) {
      this.router.navigate(['/'])
    }else{
      console.log('Não sai do sistema');

    }
  }

}
