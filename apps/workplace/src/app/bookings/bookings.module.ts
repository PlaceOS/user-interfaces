import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookingsComponent } from './bookings.component';
import { SharedContentModule } from '../ui/shared.module';

import { BookingDeskFlowComponent } from './desk-flow/desk-flow.component';
import { BookingDeskFormComponent } from './desk-flow/desk-form/desk-form.component';
import { BookingDeskQuestionsComponent } from './desk-flow/desk-questions/desk-questions.component';
import { BookingDeskConfirmComponent } from './desk-flow/desk-confirm/desk-confirm.component';

import { QrReaderComponent } from './qr-reader/qr-reader.component';

import { SpaceFlowComponent } from './space-flow/space-flow.component';
import { SpaceFlowFormComponent } from './space-flow/space-flow-form.component';
import { SpaceFlowListingComponent } from './space-flow/space-flow-listing.component';
import { SpaceFlowConfirmComponent } from './space-flow/space-flow-confirm.component';

const ROUTES: Route[] = [
    { path: ':flow', component: BookingsComponent },
    { path: ':flow/:step', component: BookingsComponent },
    { path: '', redirectTo: 'spaces' },
];

@NgModule({
    declarations: [
        BookingsComponent,

        BookingDeskFlowComponent,
        BookingDeskFormComponent,
        BookingDeskQuestionsComponent,
        BookingDeskConfirmComponent,

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
        SharedContentModule
    ],
})
export class BookingsModule {}
