import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@placeos/components';

import { GlobalSearchComponent } from './global-search.component';
import { NavMenuComponent } from './nav-menu.component';
import { TopbarComponent } from './topbar.component';
import { BookingFormModalComponent } from './booking-form-modal.component';
import { EventTimelineComponent } from './event-timeline/event-timeline.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';

const COMPONENTS: Type<any>[] = [
    TopbarComponent,
    NavMenuComponent,
    GlobalSearchComponent,
    BookingFormModalComponent,
    VerticalTimelineComponent,
    EventTimelineComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        RouterModule.forChild([]),
        FormsModule,
        ComponentsModule,
        MatAutocompleteModule,
        MatButtonModule,
    ],
    exports: [...COMPONENTS, ComponentsModule],
})
export class SharedComponentModule {}
