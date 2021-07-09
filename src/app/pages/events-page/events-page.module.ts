import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventDetails, EventsPageComponent } from './events-page.component';
import { SharedModule } from '../../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [{ path: '', component: EventsPageComponent }];

@NgModule({
  declarations: [EventsPageComponent, EventDetails],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, MatTableModule, MatDialogModule, MatButtonModule]
})
export class EventsPageModule {
}
