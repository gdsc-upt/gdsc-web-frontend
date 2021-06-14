import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private readonly _contactService: ContactService
  ) {
  }

  buildForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email,
        Validators.pattern('^\\S+@\\S+$')]),
      subject: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.buildForm();

  }

}
