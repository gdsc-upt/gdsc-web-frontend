import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { IdeasService } from '../../../../services/ideas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss']
})
export class IdeaFormComponent implements OnInit {
  @ViewChild(FormGroupDirective) private readonly _formDirective: FormGroupDirective;

  ideasForm: FormGroup;

  constructor(
    private readonly _ideasService: IdeasService,
    private readonly _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.ideasForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      branch: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  getErrorMessage(): string {
    if (this.ideasForm.controls.email.hasError('required')) {
      return 'This field is required';
    }
    return this.ideasForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  async submit(): Promise<void> {
    if (!this.ideasForm.valid) {
      this._snackBar.open('The form is not valid!', 'Close');
      return;
    }
    try {
      await this._ideasService.post(this.ideasForm.value);
      this._formDirective.resetForm();
      this._snackBar.open('Success!', 'Close');
    } catch (err) {
      this._snackBar.open('Oops! Delivery of your message failed successfully!', 'Close');
    }
  }
}
