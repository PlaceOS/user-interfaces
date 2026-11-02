import { Routes } from '@angular/router';
import { AuthorisedUserGuard } from '@placeos/components';

import { UnauthorisedComponent } from '@placeos/components';

export const routes: Routes = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: '',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        children: [
            {
                path: 'calendar',
                loadComponent: () =>
                    import('./calendar/calendar-pane.component').then(
                        (m) => m.CalendarPaneComponent,
                    ),
            },
            { path: '**', redirectTo: 'calendar' },
        ],
    },
    { path: '**', redirectTo: 'calendar', pathMatch: 'full' },
];
