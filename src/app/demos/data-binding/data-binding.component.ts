import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent {
  public contadorCliques: number = 0;  
  public urlimagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";  
  public nome: string = ""; 

  adicionarClique(){
    this.contadorCliques++;
  }

  zerarContador(){
    this.contadorCliques = 0;
  }

  keyUp(event: any){
   this.nome = event.target.value;
  }
}

