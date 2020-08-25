import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean {

    const authenticated = this.authService.isAuthenticated();

    if (authenticated) {      
      
      if (next.data.roles) {
        for (let r of next.data.roles) {          
          if (this.authService.hasRole(r)) {
            return true;
          }
        }
        console.log("NAO TEM PERMISSAO!");
        return false;

      } else {
        return true;
      }

    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}