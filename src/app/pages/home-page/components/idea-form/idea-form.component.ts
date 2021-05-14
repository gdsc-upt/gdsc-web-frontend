import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css'],
})
export class IdeaFormComponent implements OnInit{
  hide = true;
  ideasForm: FormGroup;
  ngOnInit(): void {
    this.ideasForm = new FormGroup({
      name : new FormControl(''),
      email : new FormControl('', [Validators.required, Validators.email]),
      branch : new FormControl(''),
      year : new FormControl(''),
      idea : new FormControl('')
    });
  }
  getErrorMessage(): string {
    if (this.ideasForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.ideasForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }
}


