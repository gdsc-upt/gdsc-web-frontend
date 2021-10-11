import { Component } from '@angular/core';
import { EPositions } from '@gdsc/types';

@Component({
  selector: 'gdsc-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent {
  readonly positions = EPositions;
}
