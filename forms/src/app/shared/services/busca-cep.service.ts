import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CEP_API } from '../../app.api';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {

  constructor(private http: HttpClient) { }

  consultaCEP(cep: string): Observable<any> {

    // Nova variavel "cep" somente com digito
    cep = cep.replace(/\D/g, '');
    // verifica se campo cep possui valor informado
    if (cep !== '') {

      // Expressao regular para validar o CEP
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP
      if (validacep.test(cep)) {
        return this.http.get(CEP_API + `/ws/${cep}/json`);
      }
    }
    return of({});

  }

}




