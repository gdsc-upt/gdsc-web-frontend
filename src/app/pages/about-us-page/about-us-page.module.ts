import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page.component';

const routes: Routes = [{ path: '', component: AboutUsPageComponent }];

@NgModule({
  declarations: [AboutUsPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AboutUsPageModule {
}
