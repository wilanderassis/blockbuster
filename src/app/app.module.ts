import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { UsuariosModule } from './painel-admin/cadastro/usuarios/usuarios.module';
import { FilmesModule } from './painel-admin/cadastro/filmes/filmes.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './painel-admin/cadastro/templates/header/header.component';
import { NavComponent } from './painel-admin/cadastro/templates/nav/nav.component';
import { FooterComponent } from './painel-admin/cadastro/templates/footer/footer.component';
import { PrincipalComponent } from './principal/principal.component';
import { BoasVindasComponent } from './painel-admin/cadastro/templates/boas-vindas/boas-vindas.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    PrincipalComponent,
    BoasVindasComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FilmesModule,
    UsuariosModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
