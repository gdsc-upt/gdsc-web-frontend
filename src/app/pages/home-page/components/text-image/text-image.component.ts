import { Component, Input } from '@angular/core';

export enum Position {
  RIGHT = 'right',
  LEFT = 'left'
}

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
