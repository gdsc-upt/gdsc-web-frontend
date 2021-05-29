import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})

export class BackToTopComponent {

  public goToTop(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  @HostListener('window:scroll', ['$event'])

  public showOnScroll(): void {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
}
