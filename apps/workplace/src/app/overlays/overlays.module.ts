import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MapLocateModalComponent } from './map-locate-modal.component';

import { SpaceSelectModalComponent } from './space-select-modal/space-select-modal.component';
import { ItemComponent } from './space-select-modal/item/item.component';
import { ViewAttendeesModalComponent } from './view-attendees-modal/view-attendees-modal.component';
import { ViewCateringModalComponent } from './view-catering-modal/view-catering-modal.component';
import { RecurrenceModalComponent } from './recurrence-modal.component';
import { UserAvailabilityModalComponent } from './user-availability-modal/user-availability.modal.component';
import { SharedComponentModule } from '../components/shared.module';

const OVERLAYS: Type<any>[] = [
    MapLocateModalComponent,
    ViewAttendeesModalComponent,
    ViewCateringModalComponent,
    RecurrenceModalComponent,
    UserAvailabilityModalComponent,
];

@NgModule({
    declarations: [...OVERLAYS, SpaceSelectModalComponent, ItemComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedComponentModule,
    ],
    exports: [...OVERLAYS],
})
export class SharedOverlaysModule {}
