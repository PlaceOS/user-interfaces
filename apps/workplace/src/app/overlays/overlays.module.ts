import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedComponentModule } from '../components/shared.module';
import { UserAvailabilityModalComponent } from './user-availability-modal/user-availability.modal.component';
import { ViewAttendeesModalComponent } from './view-attendees-modal/view-attendees-modal.component';
import { ViewCateringModalComponent } from './view-catering-modal/view-catering-modal.component';

const OVERLAYS: Type<any>[] = [
    ViewAttendeesModalComponent,
    ViewCateringModalComponent,
    UserAvailabilityModalComponent,
];

@NgModule({
    declarations: [...OVERLAYS],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedComponentModule,
    ],
    exports: [...OVERLAYS],
})
export class SharedOverlaysModule {}
