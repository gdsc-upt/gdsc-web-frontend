import { Component } from '@angular/core';

@Component({
  selector: 'gdsc-details-banner',
  templateUrl: './details-banner.component.html',
  styleUrls: ['./details-banner.component.scss']
})
export class DetailsBannerComponent {
  title = 'Who are GDSC?';
  text = 'Google Developer Student Clubs are university based community groups for ' +
    'students interested in Google developer technologies. ' +
    'Students from all undergraduate or graduate programs with an interest ' +
    'in growing as a developer are welcome!';
  image = 'assets/images/details-image.png';
}
