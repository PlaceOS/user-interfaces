import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AssetsReportComponent } from './assets/assets-report.component';
import { SiteAttendanceReportComponent } from './attendance/site-attendance-report.component';
import { CateringReportComponent } from './catering/catering-report.component';
import { ContactTracingReportComponent } from './contact-tracing/contact-tracing-report.component';
import { CustomReportComponent } from './custom-report.component';
import { ReportDesksComponent } from './desks/report-desks.component';
import { LockersReportComponent } from './lockers/lockers-report.component';
import { ParkingReportComponent } from './parking/parking-report.component';
import { ReportsOptionsComponent } from './reports-options.component';
import { ReportsComponent } from './reports.component';
import { ReportSpacesComponent } from './spaces/report-spaces.component';
import { VisitorsReportComponent } from './visitors/visitors-report.component';

const children: Route[] = [
    { path: '', component: ReportsOptionsComponent },
    { path: 'bookings', component: ReportSpacesComponent },
    { path: 'attendance', component: SiteAttendanceReportComponent },
    { path: 'desks', component: ReportDesksComponent },
    { path: 'parking', component: ParkingReportComponent },
    { path: 'lockers', component: LockersReportComponent },
    { path: 'catering', component: CateringReportComponent },
    {
        path: 'contact-tracing',
        component: ContactTracingReportComponent,
    },
    { path: 'assets', component: AssetsReportComponent },
    { path: 'visitors', component: VisitorsReportComponent },
    { path: ':id', component: CustomReportComponent },
    { path: '**', redirectTo: 'desks', pathMatch: 'full' },
];

const ROUTES: Route[] = [{ path: '', component: ReportsComponent, children }];

@NgModule({
    declarations: [],
    imports: [
        ReportsComponent,
        SiteAttendanceReportComponent,
        ReportSpacesComponent,
        ReportDesksComponent,
        ParkingReportComponent,
        LockersReportComponent,
        CateringReportComponent,
        AssetsReportComponent,
        VisitorsReportComponent,
        ContactTracingReportComponent,
        CustomReportComponent,
        ReportsOptionsComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class ReportsModule {}
