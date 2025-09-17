import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { SharedUsersModule } from '@placeos/users';

import { MatChipsModule } from '@angular/material/chips';
import { RoomAlertModalComponent } from './room-alert-modal.component';
import { RoomListComponent } from './room-list.component';
import { RoomManagerTopbarComponent } from './room-manager-topbar.component';
import { RoomManagerComponent } from './room-manager.component';
import { RoomModalComponent } from './room-modal.component';

const ROUTES: Route[] = [{ path: '', component: RoomManagerComponent }];

@NgModule({
    declarations: [
        RoomManagerComponent,
        RoomManagerTopbarComponent,
        RoomListComponent,
        RoomModalComponent,
        RoomAlertModalComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedUsersModule,
        MatChipsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class RoomManagerModule {}
