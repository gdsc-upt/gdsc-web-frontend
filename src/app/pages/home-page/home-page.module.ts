import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page.component';
import { TextImageComponent } from './components/text-image/text-image.component';
import { FaqsSectionComponent } from './components/faqs-section/faqs-section.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {TechnologiesSectionComponent} from "./components/technologies-section/technologies-section.component";
import {MatGridListModule} from "@angular/material/grid-list";
import { TechnologyCardComponent } from './components/technology-card/technology-card.component';

@NgModule({
  declarations: [
    HomePageComponent,
    TextImageComponent,
    FaqsSectionComponent,
    TechnologiesSectionComponent,
    TechnologyCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HomePageComponent}]),
    MatExpansionModule,
    MatGridListModule,
  ]
})
export class HomePageModule { }
