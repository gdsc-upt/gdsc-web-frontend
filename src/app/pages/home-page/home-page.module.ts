import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page.component';
<<<<<<< Updated upstream
import { TextImageComponent } from './components/text-image/text-image.component';
import { FaqsSectionComponent } from './components/faqs-section/faqs-section.component';
import {MatExpansionModule} from '@angular/material/expansion';

=======
import { TextImageComponent } from './text-image/text-image.component';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> Stashed changes
@NgModule({
  declarations: [
    HomePageComponent,
    TextImageComponent,
    FaqsSectionComponent,
  ],
  imports: [
    CommonModule,
<<<<<<< Updated upstream
    RouterModule.forChild([{path: '', component: HomePageComponent}]),
    MatExpansionModule,
=======
    RouterModule.forChild([{ path: '', component: HomePageComponent}]),
    ReactiveFormsModule
>>>>>>> Stashed changes
  ]
})
export class HomePageModule { }

