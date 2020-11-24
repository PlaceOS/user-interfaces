import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookingsComponent } from './bookings.component';
import { SharedContentModule } from '../ui/shared.module';
import { SharedExploreModule } from '@user-interfaces/explore';
import { SharedUsersModule } from '@user-interfaces/users';

import { QrReaderComponent } from './qr-reader/qr-reader.component';

import { SpaceFlowComponent } from './space-flow/space-flow.component';
import { SpaceFlowFormComponent } from './space-flow/space-flow-form.component';
import { SpaceFlowListingComponent } from './space-flow/space-flow-listing.component';
import { SpaceFlowConfirmComponent } from './space-flow/space-flow-confirm.component';

import { DeskFlowComponent } from './desk-flow/desk-flow.component';
import { DeskFlowListingComponent } from './desk-flow/desk-flow-listing.component';
import { DeskFlowConfirmModalComponent } from './desk-flow/desk-flow-confirm-modal.component';
import { DeskFlowQuestionsModalComponent } from './desk-flow/desk-flow-questions-modal.component';

const ROUTES: Route[] = [
    { path: ':flow', component: BookingsComponent },
    { path: ':flow/:step', component: BookingsComponent },
    { path: '', redirectTo: 'spaces' },
];

@NgModule({
    declarations: [
        BookingsComponent,

        DeskFlowComponent,
        DeskFlowListingComponent,
        DeskFlowConfirmModalComponent,
        DeskFlowQuestionsModalComponent,

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
        SharedExploreModule
    ],
})
export class BookingsModule {

}
