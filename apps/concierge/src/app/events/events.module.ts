import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';

import { EventManageComponent } from './event-manage.component';
import { EventRequestWizardComponent } from './event-request-wizard.component';
import { EventViewComponent } from './event-view.component';
import { EventsListComponent } from './events-list.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: EventsComponent,
        children: [{ path: '', component: EventsListComponent }],
    },
    { path: 'manage', component: EventRequestWizardComponent },
    { path: 'manage/:id', component: EventManageComponent },
    { path: 'view/:id', component: EventViewComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    declarations: [],
    imports: [
        EventsComponent,
        EventsListComponent,
        EventManageComponent,
        EventRequestWizardComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class EventsModule {}
