import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss'],
})
export class IdeaFormComponent implements OnInit {
  hide = true;
  ideasForm: FormGroup;

  ngOnInit(): void {
    this.ideasForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      branch: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      idea: new FormControl('', [Validators.required])
    });
  }

  getErrorMessage(): string {
    if (this.ideasForm.controls.email.hasError('required')) {
      return 'This field is required';
    }

    return this.ideasForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }
}


