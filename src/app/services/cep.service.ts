import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http:HttpClient) { }

  getEndereco(cep: string){
    let url= "https://viacep.com.br/ws/"+cep+"/json";
    return this.http.get(url).toPromise();
  }
}
