import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../../services/contact.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tryCatch } from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

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
      text: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  async submit(): Promise<void> {
    if(!this.contactForm.valid) {
      this._snackBar.open('The form is not valid!','Close');
      return;
    }
    try {
      await this._contactService.post(this.contactForm.value);
      this.contactForm.reset();
      this._snackBar.open('Success!','Close');
    }catch (err) {
      this._snackBar.open('Oops! PERCIC couldn\'t send your gift!');
    }
  }
}
