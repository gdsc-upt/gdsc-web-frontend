import { Component } from '@angular/core';
import { Position } from './components/text-image/text-image.component';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  imagePosition = Position;
}
