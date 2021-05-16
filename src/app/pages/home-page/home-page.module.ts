import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { HomePageComponent } from './home-page.component';
import { TextImageComponent } from './components/text-image/text-image.component';
import { FaqsSectionComponent } from './components/faqs-section/faqs-section.component';
import { TechnologiesSectionComponent } from './components/technologies-section/technologies-section.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { TechnologyCardComponent } from './components/technology-card/technology-card.component';

const routes:
  Routes = [{path: '', component: HomePageComponent}];

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
    RouterModule.forChild(routes),
    MatExpansionModule,
    MatGridListModule
  ],
})


export class HomePageModule {
}
