import { Component, Input } from '@angular/core';
import { ITechnology } from '@gdsc/models';

@Component({
  selector: 'gdsc-technology-card',
  templateUrl: './technology-card.component.html',
  styleUrls: ['./technology-card.component.scss']
})
export class TechnologyCardComponent {
  @Input() technology: ITechnology & { link?: string };

  magicHappens() {
    if (this.technology.link) {
      window.open(this.technology.link, '_blank');window.open(this.technology.link, '_blank');
    }
  }
}
