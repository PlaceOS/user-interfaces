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
import { ReportSpacesUserListingComponent } from './spaces/report-spaces-user-listing.component';
import { CateringReportComponent } from './catering/catering-report.component';
import { CateringReportOverallComponent } from './catering/catering-report-overall.component';
import { CateringReportOrdersComponent } from './catering/catering-report-orders.component';
import { CateringReportItemsComponent } from './catering/catering-report-items.component';
import { ReportDesksChartsComponent } from './desks/report-desks-charts.component';
import { ContactTracingReportComponent } from './contact-tracing/contact-tracing-report.component';
import { GetUserPipe } from './contact-tracing/get-user.pipe';
import { ContactTracingOptionsComponent } from './contact-tracing/contact-tracing-options.component';
import { CustomReportComponent } from './custom-report.component';
import { NewReportsComponent } from './new-reports.component';
import { ReportSpacesOverallListComponent } from './spaces/report-spaces-overall-list.component';

const children: Route[] = [
    { path: '', component: ReportsOptionsComponent },
    { path: 'bookings', component: ReportSpacesComponent },
    { path: 'desks', component: ReportDesksComponent },
    { path: 'catering', component: CateringReportComponent },
    {
        path: 'contact-tracing',
        component: ContactTracingReportComponent,
    },
    { path: ':id', component: CustomReportComponent },
    { path: '**', redirectTo: 'desks', pathMatch: 'full' },
];

const ROUTES: Route[] = [
    { path: 'new', component: NewReportsComponent, children },
    { path: '', component: ReportsComponent, children },
];

@NgModule({
    declarations: [
        NewReportsComponent,
        ReportsComponent,
        ReportsOptionsComponent,

        ReportSpacesComponent,
        ReportSpacesOverallComponent,
        ReportSpacesOverallListComponent,
        ReportSpacesSpaceListing,
        ReportSpacesUserListingComponent,

        ReportDesksComponent,
        ReportDesksOverallListComponent,
        ReportDesksLevelListComponent,
        ReportDesksChartsComponent,
        ReportsMenuComponent,

        CateringReportComponent,
        CateringReportOverallComponent,
        CateringReportOrdersComponent,
        CateringReportItemsComponent,

        ContactTracingReportComponent,
        ContactTracingOptionsComponent,
        GetUserPipe,
        CustomReportComponent,
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
