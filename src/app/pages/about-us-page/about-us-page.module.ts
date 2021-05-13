import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page.component';

@NgModule({
  declarations: [AboutUsPageComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: AboutUsPageComponent }])],
})
export class AboutUsPageModule {}
