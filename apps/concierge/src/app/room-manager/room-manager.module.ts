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

const ROUTES: Route[] = [{ path: '', component: RoomManagerComponent }];

@NgModule({
    declarations: [
        RoomManagerComponent,
        RoomManagerTopbarComponent,
        RoomListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedSpacesModule,
        SharedUsersModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class RoomManagerModule {}
