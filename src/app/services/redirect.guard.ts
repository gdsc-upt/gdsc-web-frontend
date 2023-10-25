import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { RedirectService } from './redirect.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  readonly #isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor(private _redirectService: RedirectService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._redirectService.get(route.url[0].path).pipe(switchMap(redirectTo => {
      if (redirectTo) {
        if (this.#isBrowser) {
          window.location.href = redirectTo;
          return Promise.reject();
        } else {
          return this._router.navigate(['/redirect?to=' + redirectTo]).then(() => false);
        }
      }
      return this._router.navigate(['/']);
    }));
  }
}
