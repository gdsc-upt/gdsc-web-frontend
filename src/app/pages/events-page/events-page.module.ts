import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventsPageComponent } from './events-page.component';
import { SharedModule } from '../../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EventDetailsComponent } from './components/event-details/event-details.component';

const routes: Routes = [{ path: '', component: EventsPageComponent }];

@NgModule({
  declarations: [EventsPageComponent, EventDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, MatTableModule, MatDialogModule, MatButtonModule, MatIconModule]
})
export class EventsPageModule {
}
