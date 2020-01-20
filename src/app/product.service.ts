import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http,Response } from '@angular/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private _albumUrl:string='../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number){
    return this._http.get(this._albumUrl).map((response) => 
    response.json());      
  }
}
