import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { SharedComponentsModule } from '../components/shared-components.module';

import { CheckinDetailsComponent } from './checkin-details.component';
import { CheckinPhotoComponent } from './checkin-photo.component';
import { CheckinPreferencesComponent } from './checkin-preferences.component';
import { CheckinQRScanComponent } from './checkin-qr-scan.component';
import { CheckinResultsComponent } from './checkin-result.component';
import { CheckinErrorComponent } from './checkin-error.component';
import { CheckinCovidComponent } from './checkin-covid.component';
import { CheckinComponent } from './checkin.component';
import { CheckinInductionComponent } from './checkin-induction.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: CheckinComponent,
        children: [
            { path: 'scan', component: CheckinQRScanComponent },
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

@NgModule({
    declarations: [
        CheckinComponent,
        CheckinResultsComponent,
        CheckinQRScanComponent,
        CheckinPreferencesComponent,
        CheckinPhotoComponent,
        CheckinDetailsComponent,
        CheckinErrorComponent,
        CheckinCovidComponent,
        CheckinInductionComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedComponentsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class VisitorCheckinModule {}
