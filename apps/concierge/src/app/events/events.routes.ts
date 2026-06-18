import { Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventManageComponent } from './event-manage.component';
import { EventViewComponent } from './event-view.component';
import { EventsListComponent } from './events-list.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: EventsComponent,
        children: [
            { path: '', component: EventsListComponent, title: 'Events' },
        ],
    },
    { path: 'manage', component: EventManageComponent, title: 'Manage Event' },
    {
        path: 'manage/:id',
        component: EventManageComponent,
        title: 'Manage Event',
    },
    { path: 'view/:id', component: EventViewComponent, title: 'Event Details' },
    { path: '**', redirectTo: '' },
];
