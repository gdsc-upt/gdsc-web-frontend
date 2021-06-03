import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

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
