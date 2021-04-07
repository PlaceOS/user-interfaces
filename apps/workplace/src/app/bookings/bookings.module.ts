import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookingsComponent } from './bookings.component';
import { SharedContentModule } from '../ui/shared.module';
import { SharedExploreModule } from '@placeos/explore';
import { SharedUsersModule } from '@placeos/users';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { QrReaderComponent } from './qr-reader.component';

import { SpaceFlowComponent } from './space-flow/space-flow.component';
import { SpaceFlowFormComponent } from './space-flow/space-flow-form.component';
import { SpaceFlowListingComponent } from './space-flow/space-flow-listing.component';
import { SpaceFlowConfirmComponent } from './space-flow/space-flow-confirm.component';

import { DeskFlowComponent } from './desk-flow/desk-flow.component';
import { DeskFlowListingComponent } from './desk-flow/desk-flow-listing.component';
import { DeskFlowCheckinComponent } from './desk-flow/desk-flow-checkin.component';
import { DeskFlowFormComponent } from './desk-flow/desk-flow-form.component';

import { BookingSuccessComponent } from './booking-success.component';

const ROUTES: Route[] = [
    { path: 'desk', component: DeskFlowCheckinComponent },
    { path: ':flow', component: BookingsComponent },
    { path: ':flow/:step', component: BookingsComponent },
    { path: '', redirectTo: 'spaces' },
];

@NgModule({
    declarations: [
        BookingsComponent,
        BookingSuccessComponent,

        DeskFlowComponent,
        DeskFlowListingComponent,
        DeskFlowCheckinComponent,
        DeskFlowFormComponent,

        SpaceFlowComponent,
        SpaceFlowFormComponent,
        SpaceFlowListingComponent,
        SpaceFlowConfirmComponent,

        QrReaderComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        FormsModule,
        ReactiveFormsModule,
        SharedContentModule,
        SharedUsersModule,
        SharedExploreModule,
        MatButtonToggleModule
    ]
})
export class BookingsModule {

}
