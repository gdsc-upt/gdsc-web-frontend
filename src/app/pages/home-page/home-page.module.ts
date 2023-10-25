import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { DetailsBannerComponent } from './components/details-banner/details-banner.component';
import { FaqsSectionComponent } from './components/faqs-section/faqs-section.component';
import { IdeaFormComponent } from './components/idea-form/idea-form.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import {
  TechnologiesSectionComponent
} from './components/technologies-section/technologies-section.component';
import { TechnologyCardComponent } from './components/technology-card/technology-card.component';
import { TextImageComponent } from './components/text-image/text-image.component';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [{path: '', component: HomePageComponent}];

@NgModule({
  declarations: [
    HomePageComponent,
    TextImageComponent,
    FaqsSectionComponent,
    IdeaFormComponent,
    DetailsBannerComponent,
    JoinUsComponent,
    TechnologiesSectionComponent,
    TechnologyCardComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatExpansionModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatSnackBarModule
  ]
})
export class HomePageModule {
}
