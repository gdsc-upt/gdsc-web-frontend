import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'gdsc-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})

export class BackToTopComponent {
  readonly #isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  readonly showButton: Observable<boolean>;

  constructor() {
    this.showButton = this.#isBrowser ? fromEvent(window, 'scroll').pipe(
      map(() => window.scrollY > 300),
      tap(console.log),
    ) : new Observable();
  }

  goToTop(): void {
    try {
      window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    } catch (e) {
      window.scrollTo(0, 0);
    }
  }
}
