import { NgModule } from '@angular/core';

import { AttendeeListComponent } from './attendee-list.component';
import { EventCardComponent } from './event-card.component';
import { EventDetailsModalComponent } from './event-details-modal.component';
import { EventLinkModalComponent } from './event-link-modal.component';
import { GroupEventCardComponent } from './group-event-card.component';
import { GroupEventDetailsModalComponent } from './group-event-details-modal.component';
import { SetupBreakdownModalComponent } from './setup-breakdown-modal.component';

const STANDALONE_COMPONENTS = [
    EventDetailsModalComponent,
    AttendeeListComponent,
    EventCardComponent,
    EventLinkModalComponent,
    SetupBreakdownModalComponent,
    GroupEventDetailsModalComponent,
    GroupEventCardComponent,
];

@NgModule({
    declarations: [],
    imports: [...STANDALONE_COMPONENTS],
    exports: [...STANDALONE_COMPONENTS],
})
export class SharedEventsModule {}
