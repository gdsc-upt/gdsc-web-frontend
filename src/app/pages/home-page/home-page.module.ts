import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page.component';
import { TextImageComponent } from './components/text-image/text-image.component';
import { FaqsSectionComponent } from './components/faqs-section/faqs-section.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { GdscDetailsComponent } from './components/gdsc-details/gdsc-details.component';

@NgModule({
  declarations: [
    HomePageComponent,
    TextImageComponent,
    FaqsSectionComponent,
    GdscDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HomePageComponent}]),
    MatExpansionModule,
  ]
})
export class HomePageModule { }
