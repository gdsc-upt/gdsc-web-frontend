import { Component, OnInit } from '@angular/core';
import { IFaq } from '@gdsc/models';
import { FaqsService } from '../../../../services/faqs.service';

@Component({
  selector: 'app-faqs-section',
  templateUrl: './faqs-section.component.html',
  styleUrls: ['./faqs-section.component.scss']
})
export class FaqsSectionComponent implements OnInit {
  faqs: IFaq[];

  constructor(
    private readonly _faqsService: FaqsService
  ) {
  }

  ngOnInit(): void {
    this._faqsService.get().subscribe(faqs => this.faqs = faqs);
  }
}
