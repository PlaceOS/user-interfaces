import { Routes } from '@angular/router';

import { CheckinCovidComponent } from './checkin-covid.component';
import { CheckinDetailsComponent } from './checkin-details.component';
import { CheckinErrorComponent } from './checkin-error.component';
import { CheckinInductionComponent } from './checkin-induction.component';
import { CheckinPhotoComponent } from './checkin-photo.component';
import { CheckinPreferencesComponent } from './checkin-preferences.component';
import { CheckinQRScanComponent } from './checkin-qr-scan.component';
import { CheckinResultsComponent } from './checkin-result.component';
import { CheckinComponent } from './checkin.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: CheckinComponent,
        children: [
            {
                path: 'scan',
                component: CheckinQRScanComponent,
                data: { flow: 'checkin' },
            },
            { path: 'details', component: CheckinDetailsComponent },
            { path: 'preferences', component: CheckinPreferencesComponent },
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
