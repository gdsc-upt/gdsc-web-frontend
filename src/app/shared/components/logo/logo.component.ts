import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LogoComponent {
  @Input() small = false;
}
