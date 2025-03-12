import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { MatPaginatorModule } from '@angular/material/paginator';
import { UIModule } from '../ui/ui.module';

import { SharedSpacesModule } from '@placeos/spaces';
import { SharedUsersModule } from '@placeos/users';
import { AssetReportDailyUsageComponent } from './assets/asset-report-daily-usage.component';
import { AssetReportExpiredItemsComponent } from './assets/asset-report-expired-items.component';
import { AssetReportOverallComponent } from './assets/asset-report-overall.component';
import { AssetReportProductUsageComponent } from './assets/asset-report-product-usage.component';
import { AssetReportUsersComponent } from './assets/asset-report-users.component';
import { AssetsReportComponent } from './assets/assets-report.component';
import { CateringReportItemsComponent } from './catering/catering-report-items.component';
import { CateringReportOrdersComponent } from './catering/catering-report-orders.component';
import { CateringReportOverallComponent } from './catering/catering-report-overall.component';
import { CateringReportComponent } from './catering/catering-report.component';
import { ContactTracingOptionsComponent } from './contact-tracing/contact-tracing-options.component';
import { ContactTracingReportComponent } from './contact-tracing/contact-tracing-report.component';
import { GetUserPipe } from './contact-tracing/get-user.pipe';
import { CustomReportComponent } from './custom-report.component';
import { ReportDesksChartsComponent } from './desks/report-desks-charts.component';
import { ReportDesksLevelListComponent } from './desks/report-desks-level-list.component';
import { ReportDesksOverallListComponent } from './desks/report-desks-overall-list.component';
import { ReportDesksComponent } from './desks/report-desks.component';
import { LockersReportChartsComponent } from './lockers/lockers-report-charts.component';
import { LockersReportDailyUsageComponent } from './lockers/lockers-report-daily-usage.component';
import { LockersReportListComponent } from './lockers/lockers-report-list.component';
import { LockersReportOverallComponent } from './lockers/lockers-report-overall.component';
import { LockersReportComponent } from './lockers/lockers-report.component';
import { ParkingReportChartsComponent } from './parking/parking-report-charts.component';
import { ParkingReportDailyUsageComponent } from './parking/parking-report-daily-usage.component';
import { ParkingReportListComponent } from './parking/parking-report-list.component';
import { ParkingReportOverallComponent } from './parking/parking-report-overall.component';
import { ParkingReportComponent } from './parking/parking-report.component';
import { ReportsMenuComponent } from './reports-menu.component';
import { ReportsOptionsComponent } from './reports-options.component';
import { ReportsComponent } from './reports.component';
import { ReportSpacesChartsComponent } from './spaces/report-spaces-charts.component';
import { ReportSpacesOverallListComponent } from './spaces/report-spaces-overall-list.component';
import { ReportSpacesOverallComponent } from './spaces/report-spaces-overall.component';
import { ReportSpacesSpaceListingComponent } from './spaces/report-spaces-space-listing.component';
import { ReportSpacesUserListingComponent } from './spaces/report-spaces-user-listing.component';
import { ReportSpacesComponent } from './spaces/report-spaces.component';
import { VisitorReportDailyUsageComponent } from './visitors/visitor-report-daily-usage.component';
import { VisitorReportListComponent } from './visitors/visitor-report-list.component';
import { VisitorReportOverallComponent } from './visitors/visitor-report-overall.component';
import { VisitorsReportComponent } from './visitors/visitors-report.component';

const children: Route[] = [
    { path: '', component: ReportsOptionsComponent },
    { path: 'bookings', component: ReportSpacesComponent },
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
    declarations: [
        ReportsComponent,
        ReportsOptionsComponent,

        ReportSpacesComponent,
        ReportSpacesOverallComponent,
        ReportSpacesOverallListComponent,
        ReportSpacesSpaceListingComponent,
        ReportSpacesUserListingComponent,
        ReportSpacesChartsComponent,

        ReportDesksComponent,
        ReportDesksOverallListComponent,
        ReportDesksLevelListComponent,
        ReportDesksChartsComponent,
        ReportsMenuComponent,

        ParkingReportComponent,
        ParkingReportDailyUsageComponent,
        ParkingReportOverallComponent,
        ParkingReportListComponent,
        ParkingReportChartsComponent,

        LockersReportComponent,
        LockersReportDailyUsageComponent,
        LockersReportOverallComponent,
        LockersReportListComponent,
        LockersReportChartsComponent,

        CateringReportComponent,
        CateringReportOverallComponent,
        CateringReportOrdersComponent,
        CateringReportItemsComponent,

        AssetsReportComponent,
        AssetReportOverallComponent,
        AssetReportDailyUsageComponent,
        AssetReportProductUsageComponent,
        AssetReportUsersComponent,
        AssetReportExpiredItemsComponent,

        VisitorsReportComponent,
        VisitorReportOverallComponent,
        VisitorReportDailyUsageComponent,
        VisitorReportListComponent,

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
