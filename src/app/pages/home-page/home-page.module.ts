import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page.component';
import { TextImageComponent } from './text-image/text-image.component';
import { FaqsSectionComponent } from './components/faqs-section/faqs-section.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    HomePageComponent,
    TextImageComponent,
    FaqsSectionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HomePageComponent}]),
    MatExpansionModule,
  ]
})
export class HomePageModule { }
