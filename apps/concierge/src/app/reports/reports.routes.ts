import { Route, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';

// Each report loads in its own chunk, so a report does not download the
// charts and code of the other reports
const children: Route[] = [
    { path: '', redirectTo: 'desks', pathMatch: 'full' },
    {
        path: 'bookings',
        loadComponent: () =>
            import('./spaces/report-spaces.component').then(
                (m) => m.ReportSpacesComponent,
            ),
        title: 'Booking Reports',
    },
    {
        path: 'attendance',
        loadComponent: () =>
            import('./attendance/site-attendance-report.component').then(
                (m) => m.SiteAttendanceReportComponent,
            ),
        title: 'Attendance Reports',
    },
    {
        path: 'desks',
        loadComponent: () =>
            import('./desks/report-desks.component').then(
                (m) => m.ReportDesksComponent,
            ),
        title: 'Desk Reports',
    },
    {
        path: 'parking',
        loadComponent: () =>
            import('./parking/parking-report.component').then(
                (m) => m.ParkingReportComponent,
            ),
        title: 'Parking Reports',
    },
    {
        path: 'lockers',
        loadComponent: () =>
            import('./lockers/lockers-report.component').then(
                (m) => m.LockersReportComponent,
            ),
        title: 'Locker Reports',
    },
    {
        path: 'catering',
        loadComponent: () =>
            import('./catering/catering-report.component').then(
                (m) => m.CateringReportComponent,
            ),
        title: 'Catering Reports',
    },
    {
        path: 'contact-tracing',
        loadComponent: () =>
            import('./contact-tracing/contact-tracing-report.component').then(
                (m) => m.ContactTracingReportComponent,
            ),
        title: 'Contact Tracing Reports',
    },
    {
        path: 'assets',
        loadComponent: () =>
            import('./assets/assets-report.component').then(
                (m) => m.AssetsReportComponent,
            ),
        title: 'Asset Reports',
    },
    {
        path: 'visitors',
        loadComponent: () =>
            import('./visitors/visitors-report.component').then(
                (m) => m.VisitorsReportComponent,
            ),
        title: 'Visitor Reports',
    },
    {
        path: 'user',
        loadComponent: () =>
            import('./user/user-report.component').then(
                (m) => m.UserReportComponent,
            ),
        title: 'User Booking Reports',
    },
    {
        path: ':id',
        loadComponent: () =>
            import('./custom-report.component').then(
                (m) => m.CustomReportComponent,
            ),
        title: 'Reports',
    },
    { path: '**', redirectTo: 'desks', pathMatch: 'full' },
];

export const ROUTES: Routes = [
    { path: '', component: ReportsComponent, children },
];
