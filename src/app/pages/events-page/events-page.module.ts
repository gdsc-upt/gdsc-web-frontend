import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventsPageComponent } from './events-page.component';
import { SharedModule } from '../../shared/shared.module';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [{ path: '', component: EventsPageComponent }];

@NgModule({
  declarations: [EventsPageComponent,CardComponent],
  exports: [
    EventsPageComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, MatCardModule]
})
export class EventsPageModule {
}
