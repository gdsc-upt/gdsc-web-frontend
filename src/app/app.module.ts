import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
