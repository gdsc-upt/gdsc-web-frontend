import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactPageComponent} from './contact-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [{path: '', component: ContactPageComponent}];

@NgModule({
  declarations: [
    ContactPageComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    SharedModule
  ],
})
export class ContactPageModule {
}
