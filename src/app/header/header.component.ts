import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ConnectionService,
  ConnectionServiceOptions,
  ConnectionState,
} from 'ng-connection-service';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  status!: string;
  currentState!: ConnectionState;
  subscription = new Subscription();

  constructor(private connectionService: ConnectionService) {}

  ngOnInit(): void {
    const options: any = {
      enableHeartbeat: true, // Optional, set to true if you want to use the heartbeat feature
      heartbeatUrl: '/heartbeat', // Optional, specify a URL for the heartbeat check
      timeout: 3000, // Optional, specify the timeout for the heartbeat check
    };
    this.subscription.add(
      this.connectionService
        .monitor(options)
        .pipe(
          tap((newState: ConnectionState) => {
            this.currentState = newState;

            if (this.currentState.hasNetworkConnection) {
              this.status = 'ONLINE';
            } else {
              this.status = 'OFFLINE';
            }
          })
        )
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
