import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventsPageComponent } from './events-page.component';

const routes: Routes = [{path: '', component: EventsPageComponent}];

@NgModule({
  declarations: [EventsPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EventsPageModule {
}
