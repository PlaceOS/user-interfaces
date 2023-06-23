import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { SharedSpacesModule } from '@placeos/spaces';
import { SharedUsersModule } from '@placeos/users';

import { RoomManagerComponent } from './room-manager.component';
import { RoomManagerTopbarComponent } from './room-manager-topbar.component';
import { RoomListComponent } from './room-list.component';
import { RoomModalComponent } from './room-modal.component';
import { MatChipsModule } from '@angular/material/chips';
import { NewRoomManagerComponent } from './new-room-manager.component';

const ROUTES: Route[] = [
    { path: '', component: RoomManagerComponent },
    { path: 'new', component: NewRoomManagerComponent },
];

@NgModule({
    declarations: [
        NewRoomManagerComponent,
        RoomManagerComponent,
        RoomManagerTopbarComponent,
        RoomListComponent,
        RoomModalComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedSpacesModule,
        SharedUsersModule,
        MatChipsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class RoomManagerModule {}
