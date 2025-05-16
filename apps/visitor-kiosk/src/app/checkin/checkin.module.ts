import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
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

const MAT_MODULES = [
    MatProgressSpinnerModule,
    MatRippleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
];

const STANDALONE_COMPONENTS = [IconComponent, TranslatePipe];

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
        CheckoutComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        ...MAT_MODULES,
        ...STANDALONE_COMPONENTS,
    ],
})
export class VisitorCheckinModule {}
