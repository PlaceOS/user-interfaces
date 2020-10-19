
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedContentModule } from '../ui/shared.module';

import { ViewRoomModalComponent } from './view-room-modal/view-room-modal.component';
import { ExploreBookingModalComponent } from './explore-booking-modal/explore-booking-modal.component';
import { SharedUsersModule } from '@user-interfaces/users';

const OVERLAYS: Type<any>[] = [
    ViewRoomModalComponent
];

@NgModule({
    declarations: [
        ...OVERLAYS,
        ExploreBookingModalComponent
    ],
    imports: [
        CommonModule,
        SharedUsersModule,
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
