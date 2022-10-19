import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { RedirectService } from './redirect.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  constructor(private _redirectService: RedirectService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const redirectTo = this._redirectService.get(route.url[0].path);
    if (redirectTo) {
      window.location.href = redirectTo;
      return true;
    }
    return this._router.navigate(['/']);
  }


}
