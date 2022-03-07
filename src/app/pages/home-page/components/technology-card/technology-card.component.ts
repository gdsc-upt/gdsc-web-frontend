import { Component, Input } from '@angular/core';
import { ITechnology } from '@gdsc/models';

@Component({
  selector: 'gdsc-technology-card',
  templateUrl: './technology-card.component.html',
  styleUrls: ['./technology-card.component.scss']
})
export class TechnologyCardComponent {
  @Input() technology: ITechnology & { link?: string };
  isFlipped = false;

  magicHappens() {
    this.isFlipped = !this.isFlipped;
  }
}
