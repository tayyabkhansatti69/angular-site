import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardSidebarComponent } from '../../shared/components/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardHeaderComponent } from '../../shared/components/dashboard-header/dashboard-header.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, DashboardSidebarComponent, DashboardHeaderComponent],
  templateUrl: './dashboard-layout.component.html',
})
export class DashboardLayoutComponent {}
