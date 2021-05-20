import { Component } from '@angular/core';
import { IFaq } from '@gdsc/models';

@Component({
  selector: 'app-faqs-section',
  templateUrl: './faqs-section.component.html',
  styleUrls: ['./faqs-section.component.scss'],
})
export class FaqsSectionComponent {
  faqs: IFaq[] = [
    {
      id: 0,
      question: 'What is GDSC?',
      answer: 'GDSC is a thing',
    },
    {
      id: 1,
      question: 'Why is GDSC?',
      answer: 'GDSC is a why it is',
    },
    {
      id: 2,
      question: 'How is GDSC?',
      answer: 'GDSC is a very well',
    },
  ];
}
