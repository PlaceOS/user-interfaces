import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { ReportsComponent } from './reports.component';
import { SharedSpacesModule } from '@user-interfaces/spaces';
import { SharedUsersModule } from '@user-interfaces/users';
import { ReportsOptionsComponent } from './reports-options.component';
import { ReportSpacesComponent } from './report-spaces.component';
import { ReportDesksComponent } from './report-desks.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: ReportsComponent,
        children: [
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
        ReportDesksComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedSpacesModule,
        SharedUsersModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class ReportsModule {}
