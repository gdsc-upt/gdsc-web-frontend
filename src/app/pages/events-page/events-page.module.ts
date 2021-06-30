import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventsPageComponent } from './events-page.component';
import { SharedModule } from '../../shared/shared.module';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [{ path: '', component: EventsPageComponent }];

@NgModule({
  declarations: [EventsPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, MatTableModule]
})
export class EventsPageModule {
}
