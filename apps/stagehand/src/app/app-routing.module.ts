import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './alerts.component';
import { AnalyticsComponent } from './analytics.component';
import { RemoteSupportComponent } from './remote-support.component';

import { UnauthorisedComponent } from '@placeos/components';
import { RecorderGridViewComponent } from './recorder-view.component';

const routes: Routes = [
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
    },
    { path: 'alerts', component: AlertsComponent },
    { path: 'remote-support', component: RemoteSupportComponent },
    { path: 'analytics', component: AnalyticsComponent },
    { path: 'recorder-grid', component: RecorderGridViewComponent },
    { path: '**', redirectTo: 'alerts' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
