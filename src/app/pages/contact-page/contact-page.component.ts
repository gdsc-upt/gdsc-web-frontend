import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  contactForm: FormGroup;
  constructor() { }
  show = false;
  // tslint:disable-next-line:typedef
  showMessageSoon() {
    setTimeout(() => {
      this.show = true;
    }, 100);
  }
  ngOnInit(): void {
  this.contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^\\S+@\\S+$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });
  }

}
