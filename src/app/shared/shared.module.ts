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
import { LogoComponent } from './components/logo/logo.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { BubbleAnimationComponent } from './components/bubble-animation/bubble-animation.component';
import { JoinUsComponent } from './components/join-us/join-us.component';

const components = [
  FooterComponent,
  MenuComponent,
  TitleBarComponent,
  BackToTopComponent,
  ComingSoonComponent,
  LogoComponent,
  SubmitButtonComponent,
  JoinUsComponent,
  BubbleAnimationComponent
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    ...components,
  ]
})
export class SharedModule {
}
