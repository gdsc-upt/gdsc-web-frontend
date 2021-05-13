import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-image-component',
  templateUrl: './text-image.component.html',
  styleUrls: ['./text-image.component.css'],
})
export class TextImageComponent {
  @Input() title: string;

  @Input() text: string;

  @Input() image: string;

  @Input() position: boolean;
}
