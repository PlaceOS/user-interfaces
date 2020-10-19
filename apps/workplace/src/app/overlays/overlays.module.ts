import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedContentModule } from '../ui/shared.module';
import { ViewRoomModalComponent } from './view-room-modal/view-room-modal.component';

import { BookingConfirmComponent } from '../bookings/overlays/booking-confirm/booking-confirm.component';
import { SpaceSelectModalComponent } from './space-select-modal/space-select-modal.component';
import { ItemComponent } from './space-select-modal/item/item.component';
import { ViewAttendeesModalComponent } from './view-attendees-modal/view-attendees-modal.component';
import { ViewCateringModalComponent } from './view-catering-modal/view-catering-modal.component';
import { RecurrenceModalComponent } from './recurrence-modal/recurrence-modal.component';
import { UserAvailabilityModalComponent } from './user-availability-modal/user-availability.modal.component';


const OVERLAYS: Type<any>[] = [
    ViewRoomModalComponent,
    BookingConfirmComponent,
    ViewAttendeesModalComponent,
    ViewCateringModalComponent,
    RecurrenceModalComponent,
    UserAvailabilityModalComponent,
];

@NgModule({
    declarations: [...OVERLAYS, SpaceSelectModalComponent, ItemComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedContentModule],
    exports: [...OVERLAYS],
})
export class SharedOverlaysModule {}
