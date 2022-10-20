import { Component } from '@angular/core';
import { RedirectService } from './services/redirect.service';

@Component({
  selector: 'gdsc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(readonly redirectService: RedirectService){}
}
