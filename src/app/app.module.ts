import { UsuarioModule } from './usuario/usuario.module';
import { TokenInterceptor } from './token.interceptor';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { ServicoPrestadoService } from './servico-prestado.service';
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';
import { ClientesService } from './clientes.service';
import { ClientesModule } from './clientes/clientes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { NotfoundComponent } from './notfound/notfound.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    NotfoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    UsuarioModule,
    ServicoPrestadoModule
  ],
  providers: [
    ClientesService,
    ServicoPrestadoService,
    AuthService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
