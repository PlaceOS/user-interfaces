import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { FormFieldsModule } from '@placeos/form-fields';

import { SharedBookingsModule } from '@placeos/bookings';
import { SharedComponentModule } from '../components/shared.module';
import { GroupEventsFiltersListComponent } from './group-events-filters-list.component';
import { GroupEventsSidebarComponent } from './group-events-sidebar.component';
import { GroupEventsComponent } from './group-events.component';

const ROUTES: Route[] = [{ path: '', component: GroupEventsComponent }];

@NgModule({
    declarations: [
        GroupEventsComponent,
        GroupEventsSidebarComponent,
        GroupEventsFiltersListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedComponentModule,
        SharedBookingsModule,
        FormFieldsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class GroupEventsModule {}
