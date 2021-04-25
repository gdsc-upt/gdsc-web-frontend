import {Component, Input, OnInit} from '@angular/core';
import {Faq} from '../../../../models/faq';

@Component({
  selector: 'app-faqs-section',
  templateUrl: './faqs-section.component.html',
  styleUrls: ['./faqs-section.component.css']
})
export class FaqsSectionComponent implements OnInit {

  faqs: Faq[] = [{
    id: 0,
    question: 'What is GDSC?',
    answer: 'GDSC is a thing'
  }, {
    id: 1,
    question: 'Why is GDSC?',
    answer: 'GDSC is a why it is'
  }, {
    id: 2,
    question: 'How is GDSC?',
    answer: 'GDSC is a very well'
  }];


  constructor() { }

  ngOnInit(): void {
  }

}
