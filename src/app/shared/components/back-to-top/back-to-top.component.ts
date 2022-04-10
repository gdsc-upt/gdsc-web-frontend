import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'gdsc-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})

export class BackToTopComponent {
  readonly showButton = fromEvent(window, 'scroll').pipe(map(() => document.body.scrollTop > 20 || document.documentElement.scrollTop > 20));

  goToTop(): void {
    try {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    } catch (e) {
      window.scrollTo(0, 0);
    }
  }
}
