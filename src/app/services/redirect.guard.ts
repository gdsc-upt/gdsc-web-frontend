import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { RedirectService } from './redirect.service';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  constructor(private _redirectService: RedirectService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._redirectService.get(route.url[0].path).pipe(switchMap(redirectTo => {
      if (redirectTo) {
        window.location.href = redirectTo;
        return Promise.reject();
      }
      return this._router.navigate(['/']);
    }));
  }
}
