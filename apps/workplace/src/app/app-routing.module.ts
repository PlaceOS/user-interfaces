import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { reloadOnChunkLoadError } from '@placeos/common';
import {
    AuthorisedUserGuard,
    MisconfiguredComponent,
    RedirectComponent,
    UnauthorisedComponent,
} from '@placeos/components';

const routes: Routes = [
    { path: '-', component: RedirectComponent },
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
        title: 'Unauthorised',
    },
    {
        path: 'misconfigured',
        component: MisconfiguredComponent,
        title: 'Misconfigured',
    },
    {
        path: 'book',
        title: 'Book',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./book/book.module').then((m) => m.BookModule),
    },
    {
        path: 'explore',
        title: 'Explore',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./explore/explore.module').then((m) => m.ExploreModule),
    },
    {
        path: 'control',
        title: 'Control',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./control/control.module').then((m) => m.ControlModule),
    },
    {
        path: 'directory',
        title: 'Directory',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./directory/directory.module').then(
                (m) => m.DirectoryModule,
            ),
    },
    {
        path: 'your-bookings',
        title: 'Your Bookings',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./schedule/schedule.module').then(
                (m) => m.AppScheduleModule,
            ),
    },
    {
        path: 'group-events',
        title: 'Group Events',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./events/group-events.module').then(
                (m) => m.GroupEventsModule,
            ),
    },
    {
        path: 'deals-n-offers',
        title: 'Deals & Offers',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./deals/deals.module').then((m) => m.DealsModule),
    },
    {
        path: 'landing',
        title: 'Home',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadComponent: () =>
            import('./landing-new/landing-new.component').then(
                (m) => m.LandingNewComponent,
            ),
    },
    {
        path: 'team-schedule',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadComponent: () =>
            import('./team-schedule/team-schedule.component').then(
                (m) => m.TeamScheduleComponent,
            ),
    },
    { path: '**', redirectTo: '-', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            errorHandler: (error) => reloadOnChunkLoadError(error),
            useHash: true,
            paramsInheritanceStrategy: 'always',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
