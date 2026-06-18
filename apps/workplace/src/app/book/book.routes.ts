import { CanDeactivateFn, Routes } from '@angular/router';

import type { VisitorFlowNewComponent } from './visitor-flow-new/visitor-flow.component';

const canDeactivateVisitorFlow: CanDeactivateFn<VisitorFlowNewComponent> = (
    component,
) => component.canDeactivate();

export const ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./book.component').then((m) => m.BookComponent),
        children: [
            {
                path: 'code',
                loadComponent: () =>
                    import('./code-flow.component').then(
                        (m) => m.BookCodeFlowComponent,
                    ),
                title: 'Code Booking',
            },
            {
                path: 'code/success',
                loadComponent: () =>
                    import('./code-flow-success.component').then(
                        (m) => m.CodeFlowSuccessComponent,
                    ),
                title: 'Booking Confirmed',
            },
            {
                path: 'code/error',
                loadComponent: () =>
                    import('./code-flow-error.component').then(
                        (m) => m.CodeFlowErrorComponent,
                    ),
                title: 'Booking Error',
            },
            { path: 'desk', redirectTo: 'desk/form' },
            { path: 'desks', redirectTo: 'desk/form' },
            {
                path: 'desk/:step',
                loadComponent: () =>
                    import('./desk-flow-new/desk-flow.component').then(
                        (m) => m.DeskFlowNewComponent,
                    ),
                title: 'Desk Booking',
            },
            { path: 'meeting', redirectTo: 'meeting/form' },
            {
                path: 'meeting/:step',
                loadComponent: () =>
                    import('./meeting-flow-new/meeting-flow.component').then(
                        (m) => m.MeetingFlowNewComponent,
                    ),
                title: 'Meeting Booking',
            },
            { path: 'parking', redirectTo: 'parking/form' },
            {
                path: 'parking/:step',
                loadComponent: () =>
                    import('./parking-flow.component').then(
                        (m) => m.NewParkingFlowComponent,
                    ),
                title: 'Parking Booking',
            },
            { path: 'parking-request', redirectTo: 'parking-request/form' },
            {
                path: 'parking-request/:step',
                loadComponent: () =>
                    import('./parking-request-flow.component').then(
                        (m) => m.ParkingRequestFlowComponent,
                    ),
                title: 'Parking Request',
            },
            { path: 'visitor', redirectTo: 'visitor/form' },
            {
                path: 'visitor/:step',
                loadComponent: () =>
                    import('./visitor-flow-new/visitor-flow.component').then(
                        (m) => m.VisitorFlowNewComponent,
                    ),
                title: 'Visitor Booking',
                canDeactivate: [canDeactivateVisitorFlow],
            },
            { path: 'locker', redirectTo: 'locker/form' },
            {
                path: 'locker/:step',
                loadComponent: () =>
                    import('./locker-flow.component').then(
                        (m) => m.BookLockerFlowComponent,
                    ),
                title: 'Locker Booking',
            },
            { path: '*', redirectTo: 'meeting/form' },
        ],
    },
    { path: '*', redirectTo: 'meeting/form' },
];
