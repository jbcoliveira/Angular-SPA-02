import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { registerLocaleData } from "@angular/common";
import localePt  from "@angular/common/locales/pt";
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { MenuComponent } from './nav/menu/menu.component';
import { HomeComponent } from './nav/home/home.component';
import { FooterComponent } from './nav/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ProdutoService } from './produtos/produtos.service';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash:false})]
  ],
  providers: [
    ProdutoService,
    { provide: APP_BASE_HREF, useValue: '/'}    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
