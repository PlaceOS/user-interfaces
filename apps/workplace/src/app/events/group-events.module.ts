import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { FormFieldsModule } from '@placeos/form-fields';

import { GroupEventsComponent } from './group-events.component';
import { SharedComponentModule } from '../components/shared.module';
import { GroupEventsSidebarComponent } from './group-events-sidebar.component';
import { GroupEventCardComponent } from './group-event-card.component';

const ROUTES: Route[] = [{ path: '', component: GroupEventsComponent }];

@NgModule({
    declarations: [
        GroupEventsComponent,
        GroupEventsSidebarComponent,
        GroupEventCardComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedComponentModule,
        FormFieldsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class GroupEventsModule {}
