import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IdeasService } from '../../../../services/ideas.service';

@Component({
  selector: 'gdsc-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss']
})
export class IdeaFormComponent {
  @ViewChild(FormGroupDirective) private readonly _formDirective: FormGroupDirective;

  readonly ideasForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    branch: new FormControl('', [Validators.required]),
    year: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(6)]),
    description: new FormControl('', [Validators.required])
  });

  constructor(
    private readonly _ideasService: IdeasService,
    private readonly _snackBar: MatSnackBar
  ) {
  }

  getErrorMessage(): string {
    if (this.ideasForm.controls.email.hasError('required')) {
      return 'This field is required';
    }
    return this.ideasForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  getYearError(error: string): boolean {
    return this.ideasForm.controls.year.hasError(error);
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
