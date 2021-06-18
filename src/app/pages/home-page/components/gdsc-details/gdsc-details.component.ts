import { Component } from '@angular/core';

@Component({
  selector: 'app-gdsc-details',
  templateUrl: './gdsc-details.component.html',
  styleUrls: ['./gdsc-details.component.scss']
})
export class GdscDetailsComponent {
  title: string = 'Developer Student Clubs UPT';
  text: string = 'Developer Student Clubs are university based community groups for ' +
    'students interested in Google developer technologies.' +
    'Students from all undergraduate or graduate programs with an interest ' +
    'in growing as a developer are welcome!';
  image: string = './assets/home.webp';
}
