import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorisedUserGuard, UnauthorisedComponent } from '@user-interfaces/components';

const routes: Routes = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: 'day-view',
        loadChildren: () => import('./day-view/day-view.module').then((m) => m.DayViewModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'facilities',
        loadChildren: () => import('./facilities/facilities.module').then((m) => m.FacilitiesModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'visitors',
        loadChildren: () => import('./visitors/visitors.module').then((m) => m.VisitorsModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'catering',
        loadChildren: () => import('./catering/catering.module').then((m) => m.CateringModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: 'day-view' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
