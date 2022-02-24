import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindSpaceComponent } from './rooms/find-space/find-space.component';
import { RoomBookingComponent } from './rooms/room-booking.component';

const routes: Routes = [
    // {
    //     path: 'dashboard',
    //     loadChildren: () =>
    //         import('./dashboard/dashboard.module').then(
    //             (m) => m.DashboardModule
    //         ),
    // },

    // { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },

    { path: 'book', component: RoomBookingComponent },

    { path: 'find', component: FindSpaceComponent },

    { path: '**', redirectTo: '/book', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
