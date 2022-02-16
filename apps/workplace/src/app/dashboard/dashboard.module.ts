import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { SharedComponentModule } from '../components/shared.module';
import { DashboardAvailabilityComponent } from './dashboard-availability.component';
import { DashboardContactsComponent } from './dashboard-contacts.component';
import { DashboardDeliveriesComponent } from './dashboard-deliveries.component';
import { DashboardDeliveryModalComponent } from './dashboard-delivery-modal.component';
import { DashboardScheduledItemComponent } from './dashboard-schedule-item.component';
import { DashboardUpcomingComponent } from './dashboard-upcoming.component';
import { DashboardComponent } from './dashboard.component';

const ROUTES: Route[] = [{ path: '', component: DashboardComponent }];

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardAvailabilityComponent,
        DashboardUpcomingComponent,
        DashboardContactsComponent,
        DashboardDeliveriesComponent,
        DashboardDeliveryModalComponent,
        DashboardScheduledItemComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedComponentModule,
        ReactiveFormsModule,
        ScrollingModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class DashboardModule {}
