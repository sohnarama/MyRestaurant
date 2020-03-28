import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs'; 
import { Plat } from '../Models/plat';


@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private httpClient : HttpClient) { }
  postPlat(plat : Plat): Observable<Plat> { 
    return this.httpClient.post<Plat>('http://localhost:1337'+"/plats",plat).pipe();
   } 
  getPlats():Observable<Plat[]> { 
    
    return this.httpClient.get<Plat[]>('http://localhost:1337'+"/plats").pipe(); 
  }
  getPlat(id :number):Observable<Plat> { 
    return this.httpClient.get<Plat>('http://localhost:1337'+"/plats"+id).pipe(); 
  } 
  deletePlat(id : number) {
     return this.httpClient.delete('http://localhost:1337'+"/plats"+id).pipe();
     } 
  updatePlat(id : number, plat : Plat) : Observable <Plat> {
     return this.httpClient.put<Plat>('http://localhost:1337'+"/plats"+id, plat).pipe();
     }
}
