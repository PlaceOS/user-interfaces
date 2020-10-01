import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedContentModule } from '../ui/shared.module';

import { ROUTES } from './checkin.routes';
import { AppCheckinComponent } from './checkin.component';
import { CheckinQrScanComponent } from './qr-scan/qr-scan.component';
import { CheckinGroupDetailsComponent } from './group-details/group-details.component';
import { CheckinDetailsComponent } from './details/details.component';
import { CheckinResultComponent } from './result/result.component';
import { CheckinErrorComponent } from './error/error.component';
import { VisitorPreferencesComponent } from './visitor-preferences/visitor-preferences.component';
import { VisitorPhotoComponent } from './visitor-photo/visitor-photo.component';
import { VisitorPassComponent } from './visitor-pass/visitor-pass.component';

export const COMPONENTS: any[] = [
    AppCheckinComponent,
    CheckinQrScanComponent,
    CheckinGroupDetailsComponent,
    CheckinDetailsComponent,
    CheckinResultComponent,
    CheckinErrorComponent,
    VisitorPreferencesComponent,
    VisitorPhotoComponent,
    VisitorPassComponent,
];

@NgModule({
    declarations: [
        ...COMPONENTS,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule
    ],
    exports: [],
    providers: [],
})
export class AppCheckinModule { }
