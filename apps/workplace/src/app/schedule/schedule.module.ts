import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { SharedComponentModule } from '../components/shared.module';
import { ScheduleListItemComponent } from './schedule-list-item.component';
import { ScheduleListComponent } from './schedule-list.component';
import { ScheduleViewComponent } from './schedule-view.component';
import { ScheduleComponent } from './schedule.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: ScheduleComponent,
        children: [
            { path: '', component: ScheduleListComponent },
            { path: 'view/:id', component: ScheduleViewComponent },
        ],
    },
    { path: '*', redirectTo: '' },
];

@NgModule({
    declarations: [
        ScheduleComponent,
        ScheduleListComponent,
        ScheduleListItemComponent,
        ScheduleViewComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedComponentModule,
        ScrollingModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class AppScheduleModule {}
