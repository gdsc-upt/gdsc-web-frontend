import {Component, Input, OnInit} from '@angular/core';
import {Technology} from '../../../../models/technology';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-technologies-section',
  templateUrl: './technologies-section.component.html',
  styleUrls: ['./technologies-section.component.css']
})
export class TechnologiesSectionComponent implements OnInit {
  technologies: Technology[] = [{
    id: 0,
    image: 'assets/angular.jpg',
    name: 'Angular'
  }, {
    id: 1,
    image: 'assets/javascript.jpg',
    name: 'JavaScript'
  }, {
    id: 2,
    image: 'assets/python.jpg',
    name: 'Python'
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
