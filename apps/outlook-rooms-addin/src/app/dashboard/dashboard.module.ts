import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardAvailabilityComponent } from './dashboard-availability/dashboard-availability.component';

const ROUTES: Route[] = [{ path: '', component: DashboardComponent }];

@NgModule({
    declarations: [DashboardComponent, DashboardAvailabilityComponent],
    imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class DashboardModule {}
