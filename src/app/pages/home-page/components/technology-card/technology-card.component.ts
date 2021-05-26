import { Component, Input } from '@angular/core';
import { ITechnology } from '@gdsc/models';

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  styleUrls: ['./technology-card.component.css']
})
export class TechnologyCardComponent {
  @Input() technology: ITechnology;

}
