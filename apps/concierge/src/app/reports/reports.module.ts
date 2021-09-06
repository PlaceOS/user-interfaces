import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ReportsComponent } from './reports.component';
import { SharedSpacesModule } from '@placeos/spaces';
import { SharedUsersModule } from '@placeos/users';
import { ReportsOptionsComponent } from './reports-options.component';
import { ReportSpacesComponent } from './spaces/report-spaces.component';
import { ReportDesksComponent } from './desks/report-desks.component';
import { ReportDesksOverallListComponent } from './desks/report-desks-overall-list.component';
import { ReportDesksLevelListComponent } from './desks/report-desks-level-list.component';
import { ReportsMenuComponent } from './reports-menu.component';
import { ReportSpacesOverallComponent } from './spaces/report-spaces-overall.component';
import { ReportSpacesSpaceListing } from './spaces/report-spaces-space-listing.component';
import { ReportSpacesUserListing } from './spaces/report-spaces-user-listing';
import { CateringReportComponent } from './catering/catering-report.component';
import { CateringReportOverallComponent } from './catering/catering-report-overall.component';
import { CateringReportOrdersComponent } from './catering/catering-report-orders.component';
import { CateringReportItemsComponent } from './catering/catering-report-items.component';
import { ReportDesksChartsComponent } from './desks/report-desks-charts.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: ReportsComponent,
        children: [
            { path: '' },
            { path: 'spaces', component: ReportSpacesComponent },
            { path: 'desks', component: ReportDesksComponent },
            { path: 'catering', component: CateringReportComponent },
            { path: '**', redirectTo: 'desks' },
        ],
    },
];

@NgModule({
    declarations: [
        ReportsComponent,
        ReportsOptionsComponent,

        ReportSpacesComponent,
        ReportSpacesOverallComponent,
        ReportSpacesSpaceListing,
        ReportSpacesUserListing,

        ReportDesksComponent,
        ReportDesksOverallListComponent,
        ReportDesksLevelListComponent,
        ReportDesksChartsComponent,
        ReportsMenuComponent,

        CateringReportComponent,
        CateringReportOverallComponent,
        CateringReportOrdersComponent,
        CateringReportItemsComponent,
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
