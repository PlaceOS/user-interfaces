import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { GroupEventsComponent } from './group-events.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: GroupEventsComponent,
        title: 'Group Events',
    },
];

@NgModule({
    declarations: [],
    imports: [GroupEventsComponent, RouterModule.forChild(ROUTES)],
})
export class GroupEventsModule {}
