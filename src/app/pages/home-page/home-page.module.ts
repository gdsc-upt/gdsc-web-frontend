import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { HomePageComponent } from './home-page.component';
import { TextImageComponent } from './components/text-image/text-image.component';
import { FaqsSectionComponent } from './components/faqs-section/faqs-section.component';

@NgModule({
  declarations: [HomePageComponent, TextImageComponent, FaqsSectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomePageComponent }]),
    MatExpansionModule,
  ],
})
export class HomePageModule {}
