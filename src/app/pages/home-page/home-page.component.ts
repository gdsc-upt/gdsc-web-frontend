import { Component } from '@angular/core';
import { EPositions } from '@gdsc/types';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  positions = EPositions;
}
