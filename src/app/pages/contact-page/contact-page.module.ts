import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactPageComponent} from './contact-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';

const routes: Routes = [{ path: '', component: ContactPageComponent }];

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
    SharedModule,
    MatSnackBarModule
  ],
})
export class ContactPageModule {
}
