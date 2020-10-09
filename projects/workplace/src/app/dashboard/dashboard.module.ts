import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { SharedContentModule } from '../ui/shared.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardAvailabilityComponent } from './dashboard-availability.component';
import { DashboardUpcomingComponent } from './dashboard-upcoming.component';
import { DashboardContactsComponent } from './dashboard-contacts.component';

const ROUTES: Route[] = [{ path: '', component: DashboardComponent }];

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardAvailabilityComponent,
        DashboardUpcomingComponent,
        DashboardContactsComponent
    ],
    imports: [CommonModule, FormsModule, SharedContentModule, RouterModule.forChild(ROUTES)],
})
export class DashboardModule {}
