import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page.component';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: ContactPageComponent }])],
})
export class ContactPageModule {}
