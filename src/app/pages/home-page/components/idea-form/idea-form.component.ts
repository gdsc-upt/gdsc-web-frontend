import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { IdeasService } from '../../../../services/ideas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'gdsc-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss']
})
export class IdeaFormComponent implements OnInit {
  @ViewChild(FormGroupDirective) private readonly _formDirective: FormGroupDirective;

  ideasForm: UntypedFormGroup;

  constructor(
    private readonly _ideasService: IdeasService,
    private readonly _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.ideasForm = new UntypedFormGroup({
      name: new UntypedFormControl('', [Validators.required]),
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      branch: new UntypedFormControl('', [Validators.required]),
      year: new UntypedFormControl('', [Validators.required, Validators.min(1), Validators.max(6)]),
      description: new UntypedFormControl('', [Validators.required])
    });
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
