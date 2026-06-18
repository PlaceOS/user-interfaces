import { Routes } from '@angular/router';
import {
    AuthorisedUserGuard,
    MisconfiguredComponent,
    RedirectComponent,
    UnauthorisedComponent,
} from '@placeos/components';
import { EmbeddedUrlComponent } from './components/embedded-url.component';

export const routes: Routes = [
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
        path: 'landing',
        title: 'Home',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./landing/landing.routes').then((m) => m.ROUTES),
    },
    {
        path: 'book',
        title: 'Book',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () => import('./book/book.routes').then((m) => m.ROUTES),
    },
    {
        path: 'explore',
        title: 'Explore',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./explore/explore.routes').then((m) => m.ROUTES),
    },
    {
        path: 'control',
        title: 'Control',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./control/control.routes').then((m) => m.ROUTES),
    },
    {
        path: 'directory',
        title: 'Directory',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./directory/directory.routes').then((m) => m.ROUTES),
    },
    {
        path: 'your-bookings',
        title: 'Your Bookings',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./schedule/schedule.routes').then((m) => m.ROUTES),
    },
    {
        path: 'group-events',
        title: 'Group Events',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./events/group-events.routes').then((m) => m.ROUTES),
    },
    {
        path: 'deals-n-offers',
        title: 'Deals & Offers',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./deals/deals.routes').then((m) => m.ROUTES),
    },
    {
        path: 'embedded/:id',
        title: 'Embedded Page',
        canActivate: [AuthorisedUserGuard],
        component: EmbeddedUrlComponent,
    },
    { path: '**', redirectTo: '-', pathMatch: 'full' },
];
