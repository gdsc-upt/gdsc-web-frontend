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
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingAnimationComponent } from './components/loading-animation/loading-animation.component';

export function playerFactory() {
  return player;
}

const components = [
  FooterComponent,
  MenuComponent,
  TitleBarComponent,
  BackToTopComponent,
  ComingSoonComponent,
  LogoComponent,
  SubmitButtonComponent,
  BubbleAnimationComponent
];

@NgModule({
  declarations: [
    ...components,
    LoadingAnimationComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    RouterModule,
    MatIconModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
    exports: [
        ...components,
        LoadingAnimationComponent,
    ]
})
export class SharedModule {
}
