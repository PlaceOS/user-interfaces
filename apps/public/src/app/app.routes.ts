import { Route } from '@angular/router';
import { PublicEventsComponent } from './public-events.component';
import { PublicGuestDetailsComponent } from './public-guest-details.component';

export const appRoutes: Route[] = [
    { path: '', redirectTo: 'guest-details', pathMatch: 'full' },
    { path: 'guest-details', component: PublicGuestDetailsComponent },
    { path: 'events', component: PublicEventsComponent },
    { path: 'events/:system_id', component: PublicEventsComponent },
    { path: 'events/:system_id/:event_id', component: PublicEventsComponent },
    { path: 'event/:system_id/:event_id', component: PublicEventsComponent },
    { path: '**', redirectTo: 'guest-details' },
];
