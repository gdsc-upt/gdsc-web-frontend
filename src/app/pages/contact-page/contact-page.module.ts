import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactPageComponent} from './contact-page.component';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule.forChild([{path: '', component: ContactPageComponent}]),
    MatFormFieldModule
  ],
})
export class ContactPageModule { }
