import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TicketListComponent } from './dashboard/ticket-list/ticket-list.component';
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TrafficComponent, ServerStatusComponent, TicketListComponent, DashboardItemComponent],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
 

}
