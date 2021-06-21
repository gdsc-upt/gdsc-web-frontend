import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ContactService } from '../../../services/contact.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'gdsc-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @ViewChild(FormGroupDirective) private readonly _formDirective: FormGroupDirective;

  contactForm: FormGroup;

  constructor(
    private readonly _contactService: ContactService,
    private readonly _snackBar: MatSnackBar
  ) {
  }

  buildForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email,
        Validators.pattern('^\\S+@\\S+$')]),
      subject: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  async submit(): Promise<void> {
    if (!this.contactForm.valid) {
      this._snackBar.open('The form is not valid!', 'Close');
      return;
    }
    try {
      await this._contactService.post(this.contactForm.value);
      this._formDirective.resetForm();
      this._snackBar.open('Success!', 'Close');
    } catch (err) {
      this._snackBar.open('Oops! Delivery of your message failed successfully!', 'Close');
    }
  }
}
