import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnauthorisedComponent, AuthorisedUserGuard } from '@user-interfaces/components';

const routes: Routes = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: 'dashboard',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
    {
        path: 'book',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () => import('./bookings/bookings.module').then((m) => m.BookingsModule),
    },
    {
        path: 'explore',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () => import('./explore/explore.module').then((m) => m.ExploreModule),
    },
    {
        path: 'control',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () => import('./control/control.module').then((m) => m.ControlModule),
    },
    {
        path: 'directory',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () => import('./directory/directory.module').then((m) => m.DirectoryModule),
    },
    {
        path: 'schedule',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () => import('./schedule/schedule.module').then((m) => m.ScheduleModule),
    },
    {
        path: 'help',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () => import('./help/help.module').then((m) => m.HelpModule),
    },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
