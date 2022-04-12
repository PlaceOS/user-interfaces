import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindSpaceComponent } from './rooms/find-space/find-space.component';
import { RoomBookingComponent } from './rooms/room-booking.component';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';

const routes: Routes = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: 'book/spaces',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        component: RoomBookingComponent,
    },
    {
        path: 'schedule/view',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        component: FindSpaceComponent,
    },
    { path: '**', redirectTo: 'book/spaces', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
