import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [{path: '', component: AboutUsPageComponent}];

@NgModule({
  declarations: [AboutUsPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class AboutUsPageModule {
}
