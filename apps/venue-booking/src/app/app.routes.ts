import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () =>
            import('./landing/landing.component').then(
                (m) => m.LandingComponent,
            ),
    },
    {
        path: 'discover',
        loadComponent: () =>
            import('./discover/discover.component').then(
                (m) => m.DiscoverComponent,
            ),
    },
    {
        path: 'booking-request',
        loadComponent: () =>
            import('./booking/booking.component').then(
                (m) => m.BookingRequestComponent,
            ),
    },
    {
        path: 'manage',
        loadComponent: () =>
            import('./manage/manage.component').then(
                (m) => m.ManageRequestsComponent,
            ),
    },
];
