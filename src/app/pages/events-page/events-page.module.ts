import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventsPageComponent } from './events-page.component';

@NgModule({
  declarations: [EventsPageComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: EventsPageComponent }])],
})
export class EventsPageModule {}
