import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from "../servicios/auth.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
    private authservice:AuthService,
    private router: Router
  ) { }

  canActivate (){
    if(this.authservice.loggedIn()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  
}
