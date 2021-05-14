import {Component} from '@angular/core';
import {Input} from '@angular/core';
import {Technology} from '../../../../models/technology';

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  styleUrls: ['./technology-card.component.css']
})
export class TechnologyCardComponent{
  @Input() technology: Technology;

}
