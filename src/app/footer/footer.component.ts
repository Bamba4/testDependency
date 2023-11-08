import { Component, OnInit } from '@angular/core';
import { TraceMethodDecorator } from '@sentry/angular-ivy';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @TraceMethodDecorator()
  ngOnInit() {}

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
