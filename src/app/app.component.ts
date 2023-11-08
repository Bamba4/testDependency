import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  init,
  instrumentAngularRouting,
  BrowserTracing,
  getActiveTransaction,
} from '@sentry/angular-ivy';

// init({
//   dsn: '__DSN__',
//   integrations: [
//     new BrowserTracing({
//       tracingOrigins: ['localhost', 'https://yourserver.io/api'],
//       routingInstrumentation: instrumentAngularRouting,
//     }),
//   ],
//   tracesSampleRate: 1,
// });

// enableProdMode();
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .then((success) => console.log(`Bootstrap success`))
//   .catch((err) => console.error(err));

// const activeTransaction = getActiveTransaction();
// const boostrapSpan: any =
//   activeTransaction &&
//   activeTransaction.startChild({
//     description: 'platform-browser-dynamic',
//     op: 'ui.angular.bootstrap',
//   });

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .then(() => console.log(`Bootstrap success`))
//   .catch((err) => console.error(err))
//   .finally(() => {
//     if (boostrapSpan) {
//       boostrapSpan.finish();
//     }
//   });

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testDepency';
  faCoffee = faCoffee;
  selectedCar: number = 1;

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
}
