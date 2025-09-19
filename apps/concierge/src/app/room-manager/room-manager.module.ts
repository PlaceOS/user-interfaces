import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { RoomManagerComponent } from './room-manager.component';

const ROUTES: Route[] = [{ path: '', component: RoomManagerComponent }];

@NgModule({
    declarations: [],
    imports: [RoomManagerComponent, RouterModule.forChild(ROUTES)],
})
export class RoomManagerModule {}
