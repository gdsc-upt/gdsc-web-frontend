import { provideHttpClient, withFetch } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasePageComponent } from './pages/base-page/base-page.component';
import { RedirectService } from './services/redirect.service';
import { SharedModule } from './shared/shared.module';

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
    provideClientHydration(),
    provideHttpClient(withFetch())
  ]
})
export class AppModule {
}
