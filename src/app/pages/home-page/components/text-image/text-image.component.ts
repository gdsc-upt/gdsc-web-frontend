import { Component, Input } from '@angular/core';
import { Position } from '@gdsc/types';

@Component({
  selector: 'app-text-image-component',
  templateUrl: './text-image.component.html',
  styleUrls: ['./text-image.component.scss']
})
export class TextImageComponent {
  @Input() title: string;
  @Input() text: string;
  @Input() image: string;
  @Input() position: Position;
}
