import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'gdsc-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})

export class BackToTopComponent {
  @HostListener('window:scroll', ['$event'])
  showOnScroll(): void {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('myBtn').style.display = 'block';
    } else {
      document.getElementById('myBtn').style.display = 'none';
    }
  }

  goToTop(): void {
    try {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    } catch (e) {
      window.scrollTo(0, 0);
    }
  }
}
