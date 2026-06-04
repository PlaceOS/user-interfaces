import { NgModule } from '@angular/core';

import { BookingCardComponent } from './booking-card.component';
import { BookingDetailsModalComponent } from './booking-details-modal.component';

import { BookingLinkModalComponent } from './booking-link-modal.component';
import { DeskConfirmModalComponent } from './desk-confirm-modal.component';
import { DeskListFieldComponent } from './desk-list-field.component';
import { DeskQuestionsModalComponent } from './desk-questions-modal.component';
import { DeskSettingsModalComponent } from './desk-settings-modal.component';
import { InviteVisitorFormComponent } from './invite-visitor-form.component';
import { LockerGridComponent } from './locker-grid.component';
import { LockerListFieldComponent } from './locker-list-field.component';
import { ParkingSpaceListFieldComponent } from './parking-space-list-field.component';

const STANDALONE_COMPONENTS = [
    LockerGridComponent,
    DeskQuestionsModalComponent,
    DeskConfirmModalComponent,
    InviteVisitorFormComponent,
    BookingDetailsModalComponent,
    BookingCardComponent,
    BookingLinkModalComponent,

    ParkingSpaceListFieldComponent,

    DeskListFieldComponent,
    DeskSettingsModalComponent,

    LockerListFieldComponent,
];

@NgModule({
    declarations: [],
    imports: [...STANDALONE_COMPONENTS],
    exports: [...STANDALONE_COMPONENTS],
})
export class SharedBookingsModule {}
