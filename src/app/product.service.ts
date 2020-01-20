import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Http, Response} from '@angular/http';
import  'rxjs/add/operators/map';
import { Album } from './album';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _albumUrl:string='../assets/album.json';
  constructor(private _http:HttpClient) { }

  getAlbum(id:number) : Observable<Album>{
    return this._http.get(this._albumUrl)
    .map( response => <Album>response.json());
        //.pipe(map((data:Album) => data));
  }
}
