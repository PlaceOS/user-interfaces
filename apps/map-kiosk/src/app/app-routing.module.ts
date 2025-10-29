import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthorisedComponent } from '@placeos/components';
import { BootstrapComponent } from './bootstrap.component';
import { DeskBookingComponent } from './desk-booking.component';
import { ExploreComponent } from './explore.component';
import { ParkingComponent } from './parking.component';

const routes: Routes = [
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
    },
    { path: 'bootstrap', component: BootstrapComponent },
    { path: 'explore', component: ExploreComponent },
    { path: 'desks', component: DeskBookingComponent },
    { path: 'parking', component: ParkingComponent },
    { path: '**', redirectTo: 'bootstrap' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
        UnauthorisedComponent,
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
