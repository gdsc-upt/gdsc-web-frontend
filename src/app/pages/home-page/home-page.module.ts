import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { HomePageComponent } from './home-page.component';
import { TextImageComponent } from './components/text-image/text-image.component';
import { FaqsSectionComponent } from './components/faqs-section/faqs-section.component';
import { GdscDetailsComponent } from './components/gdsc-details/gdsc-details.component';
import { TechnologiesSectionComponent } from './components/technologies-section/technologies-section.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { TechnologyCardComponent } from './components/technology-card/technology-card.component';
import { IdeaFormComponent } from './components/idea-form/idea-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
  declarations: [
    HomePageComponent,
    TextImageComponent,
    FaqsSectionComponent,
    IdeaFormComponent,
    GdscDetailsComponent,
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
    MatGridListModule
  ]
})
export class HomePageModule {
}
