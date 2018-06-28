import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

import { Funcionarios } from './interface/funcionarios';


@Injectable()
export class FuncionariosService {

  FuncionariosLista: Funcionarios[];

  constructor(private http: Http) { }

  postFuncionario(emp: Funcionarios) {
    const body = JSON.stringify(emp);
    const headerOptions = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    return this.http.post('http://localhost:56105/api/Employees', body, requestOptions).map(x => x.json());
  }
}
