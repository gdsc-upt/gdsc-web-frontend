import { Component, OnInit } from '@angular/core';
import { ITechnology } from '@gdsc/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-technologies-section',
  templateUrl: './technologies-section.component.html',
  styleUrls: ['./technologies-section.component.scss']
})
export class TechnologiesSectionComponent implements OnInit {
  offSet = 500;
  _counter = -1;
  audioSubject = new BehaviorSubject<HTMLAudioElement>(null);
  counter$ = this.audioSubject.asObservable();

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
  }
  ];
  breakpoint: number;

  ngOnInit(): void {
    this.breakpoint = (innerWidth / this.offSet);

    this.counter$.subscribe(async audio => {
      this._counter = this._counter + 1;
      if (this._counter > 1 && this._counter % 4 === 0) {
        await audio.play();
      } else {
        audio?.pause();
      }
    });
  }

  onResize(event): void {
    this.breakpoint = (event.target.innerWidth / this.offSet);
  }
}
