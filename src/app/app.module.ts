import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { createErrorHandler } from '@sentry/angular-ivy';
import { Router } from '@angular/router';
import { TraceService } from '@sentry/angular-ivy';
import { APP_INITIALIZER } from '@angular/core';
import { TraceModule } from '@sentry/angular-ivy';
import { HeaderComponent } from './header/header.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { FooterComponent } from './footer/footer.component';
import { ChartModule } from 'angular-highcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ConnectionServiceModule } from 'ng-connection-service';
import { RecaptchaModule } from 'ng-recaptcha';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlesListComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgSelectModule,
    FormsModule,
    TraceModule,
    ChartModule,
    NgbModule,
    HttpClientModule,
    ConnectionServiceModule,
    RecaptchaModule,
    NgxImageZoomModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [TraceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
