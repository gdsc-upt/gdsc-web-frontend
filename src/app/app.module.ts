import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RedirectService } from './services/redirect.service';
import { BasePageComponent } from './pages/base-page/base-page.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    BasePageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    MatCardModule
  ],
  bootstrap: [AppComponent],

  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (redirectService: RedirectService) => {
        return () => redirectService.load();
      },
      deps: [RedirectService]
    },
    provideClientHydration()
  ]
})
export class AppModule {
}
