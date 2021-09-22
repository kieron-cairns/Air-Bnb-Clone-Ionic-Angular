import { Injectable } from '@angular/core';
import { CanLoad, UrlTree, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

//If user is not authenticated, display different componentns
//to if they were logged in.

export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router) {

  }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //return true or false depending if the user is authenticated
      if(!this.authService.userIsAuthenticated) {
        this.router.navigateByUrl('/auth');
      }
      return this.authService.userIsAuthenticated;
    }
  }

