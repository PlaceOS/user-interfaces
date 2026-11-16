import { Route } from '@angular/router';
import { PublicGuestDetailsComponent } from './public-guest-details.component';

/** Guest details is the landing page. The events pages load on demand. */
const loadEvents = () =>
    import('./public-events.component').then((m) => m.PublicEventsComponent);

const EVENTS_TITLE = 'Events | Public Events';
const EVENT_TITLE = 'Event details | Public Events';

export const appRoutes: Route[] = [
    { path: '', redirectTo: 'guest-details', pathMatch: 'full' },
    {
        path: 'guest-details',
        component: PublicGuestDetailsComponent,
        title: 'Guest details | Public Events',
    },
    { path: 'events', loadComponent: loadEvents, title: EVENTS_TITLE },
    {
        path: 'events/:system_id',
        loadComponent: loadEvents,
        title: EVENTS_TITLE,
    },
    {
        path: 'events/:system_id/:event_id',
        loadComponent: loadEvents,
        title: EVENT_TITLE,
    },
    {
        path: 'event/:system_id/:event_id',
        loadComponent: loadEvents,
        title: EVENT_TITLE,
    },
    { path: '**', redirectTo: 'guest-details' },
];
