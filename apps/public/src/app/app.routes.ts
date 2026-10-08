import { Route } from '@angular/router';
import { PublicGuestDetailsComponent } from './public-guest-details.component';

/** Guest details is the landing page. The events pages load on demand. */
const loadEvents = () =>
    import('./public-events.component').then((m) => m.PublicEventsComponent);

export const appRoutes: Route[] = [
    { path: '', redirectTo: 'guest-details', pathMatch: 'full' },
    { path: 'guest-details', component: PublicGuestDetailsComponent },
    { path: 'events', loadComponent: loadEvents },
    { path: 'events/:system_id', loadComponent: loadEvents },
    { path: 'events/:system_id/:event_id', loadComponent: loadEvents },
    { path: 'event/:system_id/:event_id', loadComponent: loadEvents },
    { path: '**', redirectTo: 'guest-details' },
];
