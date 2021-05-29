import { Component, OnInit } from '@angular/core';
import { ITechnology } from '@gdsc/models';

@Component({
  selector: 'app-technologies-section',
  templateUrl: './technologies-section.component.html',
  styleUrls: ['./technologies-section.component.css']
})
export class TechnologiesSectionComponent implements OnInit {
  offSet = 500;

  technologies: ITechnology[] = [{
    id: '0',
    image: 'assets/angular.jpg',
    name: 'Angular',
    created: '',
    updated: ''
  },
    {
      id: '1',
      image: 'assets/javascript.svg',
      name: 'JavaScript',
      created: '',
      updated: ''
    },
    {
      id: '2',
      image: 'assets/python.jpg',
      name: 'Python',
      created: '',
      updated: ''
    },
    {
      id: '3',
      image: 'assets/android.svg',
      name: 'Android Development',
      created: '',
      updated: ''
    },
  ];
  breakpoint: number;

  ngOnInit(): void {
    this.breakpoint = (innerWidth / this.offSet);
  }

  onResize(event): void {
    this.breakpoint = (event.target.innerWidth / this.offSet);
  }

}
