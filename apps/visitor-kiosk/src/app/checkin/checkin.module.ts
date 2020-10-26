
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { SharedContentModule } from '../ui/shared.module';

import { CheckinDetailsComponent } from './checkin-details.component';
import { CheckinGroupComponent } from './checkin-group.component';
import { CheckinPhotoComponent } from './checkin-photo.component';
import { CheckinPreferencesComponent } from './checkin-preferences.component';
import { CheckinQRScanComponent } from './checkin-qr-scan.component';
import { CheckinResultsComponent } from './checkin-result.component';
import { CheckinErrorComponent } from './checkin-error.component';
import { CheckinCovidComponent } from './checkin-covid.component';
import { CheckinComponent } from './checkin.component';

const ROUTES: Route[] = [
    { path: '', component: CheckinComponent, children: [
        { path: 'scan', component: CheckinQRScanComponent },
        { path: 'details', component: CheckinDetailsComponent },
        { path: 'group', component: CheckinGroupComponent },
        { path: 'preferences', component: CheckinPreferencesComponent },
        { path: 'photo', component: CheckinPhotoComponent },
        { path: 'results', component: CheckinResultsComponent },
        { path: 'error', component: CheckinErrorComponent },
        { path: 'covid', component: CheckinCovidComponent },
        { path: '**', redirectTo: 'scan' }
    ] },
    { path: '**', redirectTo: '' }
]

@NgModule({
    declarations: [
        CheckinComponent,
        CheckinResultsComponent,
        CheckinQRScanComponent,
        CheckinPreferencesComponent,
        CheckinPhotoComponent,
        CheckinGroupComponent,
        CheckinDetailsComponent,
        CheckinErrorComponent,
        CheckinCovidComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedContentModule,
        RouterModule.forChild(ROUTES)
    ]
})
export class VisitorCheckinModule { }
