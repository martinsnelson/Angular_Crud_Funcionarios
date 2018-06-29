import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Funcionarios } from './interface/funcionarios';


@Injectable()
export class FuncionariosService {

  funcionarioSelecionado: Funcionarios;
  funcionarioLista: Funcionarios[];

  constructor(private http: Http) { }

  postFuncionario(emp: Funcionarios) {
    const body = JSON.stringify(emp);
    const headerOptions = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    return this.http.post('http://localhost:56105/api/Employees', body, requestOptions).map(x => x.json());
  }
  // new RequestOptions({method: RequestMethod.Put, headers: RequestOptions});
  putFuncionario(id, emp) {
    const body = JSON.stringify(emp);
    const headerOptions = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({method: RequestMethod.Put, headers: headerOptions});
    return this.http.put('http://localhost:56105/api/Employee/' + id,
      body,
      requestOptions).map(res => res.json());
  }

  getFuncionarioLista() {
    this.http.get('http://localhost:56105/api/Employee')
    .map((data: Response) => {
      return data.json() as Funcionarios[];
    }).toPromise().then(x => {
      this.funcionarioLista = x;
    });
  }

  deleteFuncionario(id: number) {
    return this.http.delete('http://localhost:56105/api/Employee/' + id).map(res => res.json());
  }

}
