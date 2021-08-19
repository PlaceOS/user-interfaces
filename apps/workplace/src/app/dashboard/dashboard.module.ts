import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardAvailabilityComponent } from './dashboard-availability.component';
import { DashboardUpcomingComponent } from './dashboard-upcoming.component';
import { DashboardContactsComponent } from './dashboard-contacts.component';
import { SharedComponentModule } from '../components/shared.module';
import { DashboardDeliveriesComponent } from './dashboard-deliveries.component';
import { DashboardDeliveryModalComponent } from './dashboard-delivery-modal.component';

const ROUTES: Route[] = [{ path: '', component: DashboardComponent }];

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardAvailabilityComponent,
        DashboardUpcomingComponent,
        DashboardContactsComponent,
        DashboardDeliveriesComponent,
        DashboardDeliveryModalComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedComponentModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class DashboardModule {}
