import { Component } from '@angular/core';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public cep: string="04101300";
  public endereco: any = {logradouro: '', bairro: '', localidade: '', uf:''};
  
  constructor(public CepService: CepService) {}
  
  consultaCEP(){
    this.CepService.getEndereco(this.cep)
    .then((json) => {
      this.endereco=json;
      console.log(json);
    })
    .catch((error) => {
      console.log(error);
    }) 
  }
}
