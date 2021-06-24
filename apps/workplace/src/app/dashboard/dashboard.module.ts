import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardAvailabilityComponent } from './dashboard-availability.component';
import { DashboardUpcomingComponent } from './dashboard-upcoming.component';
import { DashboardContactsComponent } from './dashboard-contacts.component';
import { SharedComponentModule } from '../components/shared.module';

const ROUTES: Route[] = [{ path: '', component: DashboardComponent }];

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardAvailabilityComponent,
        DashboardUpcomingComponent,
        DashboardContactsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedComponentModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class DashboardModule {}
