import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedContentModule } from '../shared/shared.module';
import { ConfirmModalComponent } from 'src/app/ui/confirm-modal/confirm-modal.component';
import { ViewRoomModalComponent } from './view-room-modal/view-room-modal.component';

import { BookingConfirmComponent } from '../bookings/overlays/booking-confirm/booking-confirm.component';
import { NewUserModalComponent } from 'src/app/users/new-user-modal/new-user-modal.component';
import { SpaceSelectModalComponent } from './space-select-modal/space-select-modal.component';
import { ItemComponent } from './space-select-modal/item/item.component';
import { ViewAttendeesModalComponent } from './view-attendees-modal/view-attendees-modal.component';
import { ViewCateringModalComponent } from './view-catering-modal/view-catering-modal.component';
import { RecurrenceModalComponent } from './recurrence-modal/recurrence-modal.component';
import { UserAvailabilityModalComponent } from './user-availability-modal/user-availability.modal.component';
import { CateringOrderModalComponent } from 'src/app/catering/catering-order-modal/catering-order-modal.component';
import { CateringOptionsModalComponent } from 'src/app/catering/catering-options-modal/catering-options-modal.component';


const OVERLAYS: Type<any>[] = [
    ConfirmModalComponent,
    ViewRoomModalComponent,
    BookingConfirmComponent,
    NewUserModalComponent,
    ViewAttendeesModalComponent,
    ViewCateringModalComponent,
    RecurrenceModalComponent,
    UserAvailabilityModalComponent,
    CateringOrderModalComponent,
    CateringOptionsModalComponent
];

@NgModule({
    declarations: [...OVERLAYS, SpaceSelectModalComponent, ItemComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedContentModule],
    exports: [...OVERLAYS],
})
export class SharedOverlaysModule {}
