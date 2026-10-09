import { Routes } from '@angular/router';
import { unsavedChangesGuard } from '../ui/unsaved-changes.guard';
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
    {
        path: 'manage',
        component: EventManageComponent,
        title: 'Manage Event',
        canDeactivate: [unsavedChangesGuard],
    },
    {
        path: 'manage/:id',
        component: EventManageComponent,
        title: 'Manage Event',
        canDeactivate: [unsavedChangesGuard],
    },
    { path: 'view/:id', component: EventViewComponent, title: 'Event Details' },
    { path: '**', redirectTo: '' },
];
