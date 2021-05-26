import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

const components = [
  FooterComponent,
  MenuComponent,
  TitleBarComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    RouterModule
  ],
  exports: [
    ...components
  ]
})
export class SharedModule {
}
