import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuario() {
    let parametros = new HttpParams().append('page', '1');
    parametros = parametros.append('nombre', 'Edgar Plazola');

    return this.http.get(`https://reqres1.in/api/user`, {
      params: parametros
    }).pipe(
      map((resp: any) => resp.data)
    );
  }
}
