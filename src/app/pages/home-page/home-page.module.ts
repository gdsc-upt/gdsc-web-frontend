import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page.component';
import { TextImageComponent } from './text-image/text-image.component';
import { FaqsSectionComponent } from './components/faqs-section/faqs-section.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { TechnologyCardComponent } from './components/technology-card/technology-card.component';
import { TechnologiesSectionComponent } from './components/technologies-section/technologies-section.component';
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    HomePageComponent,
    TextImageComponent,
    FaqsSectionComponent,
    TechnologyCardComponent,
    TechnologiesSectionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HomePageComponent}]),
    MatExpansionModule,
    MatGridListModule
  ]
})
export class HomePageModule { }
