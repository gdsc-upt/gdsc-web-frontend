import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventsPageComponent} from './events-page.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    EventsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: EventsPageComponent }])
  ]
})
export class EventsPageModule { }
