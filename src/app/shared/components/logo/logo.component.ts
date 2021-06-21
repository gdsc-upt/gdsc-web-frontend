import { Component, Input } from '@angular/core';

@Component({
  selector: 'gdsc-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  @Input() small = false;
}
