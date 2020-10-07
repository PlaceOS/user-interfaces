import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookingsComponent } from './bookings.component';
import { SharedContentModule } from '../shared/shared.module';
import { BookingSpaceFlowComponent } from './space-flow/space-flow.component';
import { BookingSpaceFlowFormComponent } from './space-flow/form/form.component';
import { BookingFindSpaceComponent } from './space-flow/find-space/find-space.component';
import { BookingSpaceItemComponent } from './space-flow/find-space/item/item.component';
import { BookingSpaceFiltersComponent } from './space-flow/find-space/filters/filters.component';
import { SpaceConfirmComponent } from './space-flow/space-confirm/space-confirm.component';
import { FilterComponent } from './space-flow/components/filter/filter.component';

import { BookingDeskFlowComponent } from './desk-flow/desk-flow.component';
import { BookingDeskFormComponent } from './desk-flow/desk-form/desk-form.component';
import { BookingDeskQuestionsComponent } from './desk-flow/desk-questions/desk-questions.component';
import { BookingDeskConfirmComponent } from './desk-flow/desk-confirm/desk-confirm.component';

import { QrReaderComponent } from './qr-reader/qr-reader.component';

import { SpaceFlowComponent } from './space-flow-new/space-flow.component';
import { SpaceFlowFormComponent } from './space-flow-new/space-flow-form.component';

const ROUTES: Route[] = [
    { path: ':flow', component: BookingsComponent },
    { path: ':flow/:step', component: BookingsComponent },
    { path: '', redirectTo: 'spaces' },
];

@NgModule({
    declarations: [
        BookingsComponent,
        BookingSpaceFlowComponent,
        BookingSpaceFlowFormComponent,
        BookingFindSpaceComponent,
        BookingSpaceItemComponent,
        BookingSpaceFiltersComponent,
        SpaceConfirmComponent,
        FilterComponent,

        BookingDeskFlowComponent,
        BookingDeskFormComponent,
        BookingDeskQuestionsComponent,
        BookingDeskConfirmComponent,

        SpaceFlowComponent,
        SpaceFlowFormComponent,

        QrReaderComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        FormsModule,
        ReactiveFormsModule,
        SharedContentModule,
    ],
})
export class BookingsModule {}
