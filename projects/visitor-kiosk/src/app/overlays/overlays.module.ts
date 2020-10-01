
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedContentModule } from '../ui/shared.module';

import { ConfirmModalComponent } from 'src/app/ui/confirm-modal/confirm-modal.component';
import { ViewRoomModalComponent } from './view-room-modal/view-room-modal.component';

import { NewUserModalComponent } from 'src/app/users/new-user-modal/new-user-modal.component';
import { ExploreBookingModalComponent } from './explore-booking-modal/explore-booking-modal.component';

const OVERLAYS: Type<any>[] = [
    ConfirmModalComponent,
    ViewRoomModalComponent,
    NewUserModalComponent
];

@NgModule({
    declarations: [
        ...OVERLAYS,
        ExploreBookingModalComponent
    ],
    imports: [
        CommonModule,
        SharedContentModule
    ],
    exports: [
        ...OVERLAYS
    ],
    entryComponents: [
        ...OVERLAYS
    ]
})
export class SharedOverlaysModule {}
