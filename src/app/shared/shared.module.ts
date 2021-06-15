import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { MatIconModule } from '@angular/material/icon';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

const components = [
  FooterComponent,
  MenuComponent,
  TitleBarComponent,
  BackToTopComponent
];

@NgModule({
  declarations: [
    ...components,
    ComingSoonComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    RouterModule,
    MatIconModule
  ],
    exports: [
        ...components,
        ComingSoonComponent
    ]
})
export class SharedModule {
}
