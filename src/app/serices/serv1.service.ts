import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Serv1Service {

  constructor(public http: HttpClient) { }

  getApi(){
    return this.http.get(' http://www.mocky.io/v2/5e1870622f00007e0a97dfbf');
  }
}
