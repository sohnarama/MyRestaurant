import { Injectable } from '@angular/core';
import { Commande } from '../Models/commande';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private httpClient : HttpClient) { }
  postCommande(plat : Commande): Observable<Commande> { 
    return this.httpClient.post<Commande>('http://localhost:1337'+"/plats",Commande).pipe();
   } 
  getCommandes():Observable<Commande[]> { 
    
    return this.httpClient.get<Commande[]>('http://localhost:1337'+"/plats").pipe(); 
  }
}
