import { Injectable } from '@angular/core';
import { Utilisateur } from '../Models/utilisateur';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string; 
  constructor(private http: HttpClient) { }
   login(user : Utilisateur): 
   Observable<any> 
    { 
      
     return this.http.post('http://localhost:1337'+'/auth/local',user).pipe();
     
   }  
  register(user: Utilisateur) { 
    return this.http.post('http://localhost:1337'+'/auth/local/register',user).pipe();
    
   }
   getUserauthentified (){
    return this.login;
   }
} 
