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
    id: 0,
    image: 'assets/angular.jpg',
    name: 'Angular'
  },
    {
      id: 1,
      image: 'assets/javascript.svg',
      name: 'JavaScript'
    },
    {
      id: 2,
      image: 'assets/python.jpg',
      name: 'Python'
    },
    {
      id: 3,
      image: 'assets/android.svg',
      name: 'Android Development'
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
