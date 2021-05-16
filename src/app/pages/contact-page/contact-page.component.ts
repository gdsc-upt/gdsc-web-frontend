import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contactForm: FormGroup;
  constructor() { }
  show = false;
  // tslint:disable-next-line:typedef
  showMessageSoon() {
    setTimeout(() => {
      this.show = true;
    }, 1000);
  }
  ngOnInit(): void {
  this.contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  });
  }

}
