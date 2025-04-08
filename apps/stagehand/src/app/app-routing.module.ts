import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthorisedComponent } from '@placeos/components';
import { AlertsComponent } from './alerts.component';
import { AnalyticsComponent } from './analytics.component';
import { DashboardComponent } from './dashboard.component';
import { RemoteSupportComponent } from './remote-support.component';

const routes: Routes = [
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
    },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'alerts', component: AlertsComponent },
    { path: 'remote-support', component: RemoteSupportComponent },
    { path: 'analytics', component: AnalyticsComponent },
    { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
