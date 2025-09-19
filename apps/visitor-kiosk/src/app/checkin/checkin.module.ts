import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { CheckinCovidComponent } from './checkin-covid.component';
import { CheckinDetailsComponent } from './checkin-details.component';
import { CheckinErrorComponent } from './checkin-error.component';
import { CheckinInductionComponent } from './checkin-induction.component';
import { CheckinPhotoComponent } from './checkin-photo.component';
import { CheckinPreferencesComponent } from './checkin-preferences.component';
import { CheckinQRScanComponent } from './checkin-qr-scan.component';
import { CheckinResultsComponent } from './checkin-result.component';
import { CheckinComponent } from './checkin.component';
import { CheckoutComponent } from './checkout.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: CheckinComponent,
        children: [
            { path: 'scan', component: CheckinQRScanComponent },
            { path: 'details', component: CheckinDetailsComponent },
            { path: 'preferences', component: CheckinPreferencesComponent },
            { path: 'checkout', component: CheckoutComponent },
            { path: 'photo', component: CheckinPhotoComponent },
            { path: 'results', component: CheckinResultsComponent },
            { path: 'error', component: CheckinErrorComponent },
            { path: 'covid', component: CheckinCovidComponent },
            { path: 'induction', component: CheckinInductionComponent },
            { path: '**', redirectTo: 'scan' },
        ],
    },
    { path: '**', redirectTo: '' },
];

const STANDALONE_COMPONENTS = [
    CheckinComponent,
    CheckinResultsComponent,
    CheckinQRScanComponent,
    CheckinPreferencesComponent,
    CheckinPhotoComponent,
    CheckinDetailsComponent,
    CheckinErrorComponent,
    CheckinCovidComponent,
    CheckinInductionComponent,
    CheckoutComponent,
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        ...STANDALONE_COMPONENTS,
    ],
})
export class VisitorCheckinModule {}
