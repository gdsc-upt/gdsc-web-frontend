import { Component, Input } from '@angular/core';


@Component({
  selector: 'gdsc-cards',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() url: string = '';
  @Input() start_date: string = '';

  redirectLink(url: string): void {
    window.location.href = url;
  }
}
