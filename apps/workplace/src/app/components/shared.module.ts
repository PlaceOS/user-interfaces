import { NgModule, Type } from '@angular/core';

import { EventTimelineComponent } from './event-timeline.component';
import { FooterMenuComponent } from './footer-menu.component';
import { GlobalSearchComponent } from './global-search.component';
import { TopMenuComponent } from './top-menu.component';
import { TopbarComponent } from './topbar.component';
import { UserAvailabilityModalComponent } from './user-availability.modal.component';
import { VerticalTimelineComponent } from './vertical-timeline.component';
import { ViewAttendeesModalComponent } from './view-attendees-modal.component';
import { ViewCateringModalComponent } from './view-catering-modal.component';

const COMPONENTS: Type<any>[] = [
    TopbarComponent,
    GlobalSearchComponent,
    VerticalTimelineComponent,
    EventTimelineComponent,
    TopMenuComponent,
    FooterMenuComponent,
    UserAvailabilityModalComponent,
    ViewAttendeesModalComponent,
    ViewCateringModalComponent,
];

@NgModule({
    declarations: [],
    imports: [...COMPONENTS],
    exports: [...COMPONENTS],
})
export class SharedComponentModule {}
