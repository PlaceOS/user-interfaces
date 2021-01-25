import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import {MatPaginatorModule} from '@angular/material/paginator';

import { ReportsComponent } from './reports.component';
import { SharedSpacesModule } from '@user-interfaces/spaces';
import { SharedUsersModule } from '@user-interfaces/users';
import { ReportsOptionsComponent } from './reports-options.component';
import { ReportSpacesComponent } from './report-spaces.component';
import { ReportDesksComponent } from './desks/report-desks.component';
import { ReportDesksOverallListComponent } from './desks/report-desks-overall-list.component';
import { ReportDesksLevelListComponent } from './desks/report-desks-level-list.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: ReportsComponent,
        children: [
            { path: '' },
            { path: 'spaces', component: ReportSpacesComponent },
            { path: 'desks', component: ReportDesksComponent },
            { path: '**', redirectTo: 'desks' },
        ],
    },
];

@NgModule({
    declarations: [
        ReportsComponent,
        ReportsOptionsComponent,
        ReportSpacesComponent,
        ReportDesksComponent,
        ReportDesksOverallListComponent,
        ReportDesksLevelListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedSpacesModule,
        SharedUsersModule,
        MatPaginatorModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class ReportsModule {}
