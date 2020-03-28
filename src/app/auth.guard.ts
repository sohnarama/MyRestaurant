import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router,Route,
   UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import { AuthService } from './Service/auth.service';
import { isNull } from'util';
@Injectable({

  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private service: AuthService, private router: Router){
  }
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> { 
      this.service.redirectUrl = state.url;
       return this.checkConnexion(); } 

      checkConnexion(): boolean 
      { 
        if (window.localStorage.getItem("token")) { 
        return true; } 
       this.router.navigate(['/login']); 
       return false;
      }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
