import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page.component';
import { MatIconModule } from '@angular/material/icon'

const routes: Routes = [{path: '', component: ContactPageComponent}];

@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatIconModule],
})
export class ContactPageModule {
}
