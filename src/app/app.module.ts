import { SharedModule } from './shared/shared.module';
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
import { AuthGuard } from './guards/auth.guard';
import { PrincipalSiteComponent } from './site/views/principal-site/principal-site.component';
import { HeaderSiteComponent } from './site/template/header-site/header-site.component';
import { FooterSiteComponent } from './site/template/footer-site/footer-site.component';
import { HomeSiteComponent } from './site/template/home-site/home-site.component';
import { LoginSiteComponent } from './site/views/login-site/login-site.component';

/* NGX-BOOTSTRAP */
import { ModalModule } from 'ngx-bootstrap/modal';
import { AcaoComponent } from './site/components/acao/acao.component';
import { TerrorComponent } from './site/components/terror/terror.component';
import { ComediaComponent } from './site/components/comedia/comedia.component';
import { FiccaoCientificaComponent } from './site/components/ficcao-cientifica/ficcao-cientifica.component';
import { TodosComponent } from './site/components/todos/todos.component';
import { FilmeDetalheComponent } from './site/components/filme-detalhe/filme-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    PrincipalComponent,
    BoasVindasComponent,
    LoginComponent,
    PrincipalSiteComponent,
    HeaderSiteComponent,
    FooterSiteComponent,
    HomeSiteComponent,
    LoginSiteComponent,
    AcaoComponent,
    TerrorComponent,
    ComediaComponent,
    FiccaoCientificaComponent,
    TodosComponent,
    FilmeDetalheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FilmesModule,
    UsuariosModule,
    HttpClientModule,
    ModalModule.forRoot(),
    SharedModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
