import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { Route, RouterModule } from '@angular/router';

import { SharedBookingsModule } from '@placeos/bookings';
import { SharedCateringModule } from '@placeos/catering';
import { SharedExploreModule } from '@placeos/explore';

import { SharedComponentModule } from '../components/shared.module';
import { BookComponent } from './book.component';
import { CodeFlowErrorComponent } from './code-flow-error.component';
import { CodeFlowSuccessComponent } from './code-flow-success.component';
import { BookCodeFlowComponent } from './code-flow.component';
import { NewDeskFlowComponent } from './desk-flow.component';
import { NewDeskFlowConfirmComponent } from './desk-flow/desk-flow-confirm.component';
import { NewDeskFlowFormComponent } from './desk-flow/desk-flow-form.component';
import { NewDeskFlowSuccessComponent } from './desk-flow/desk-flow-success.component';
import { NewDeskFormDetailsComponent } from './desk-flow/desk-form-details.component';
import { FlowSuccessComponent } from './flow-success.component';
import { BookLockerFlowComponent } from './locker-flow.component';
import { BookLockerFlowConfirmComponent } from './locker-flow/locker-flow-confirm.component';
import { BookLockerFlowFormComponent } from './locker-flow/locker-flow-form.component';
import { BookLockerFlowSuccessComponent } from './locker-flow/locker-flow-success.component';
import { LockerFormDetailsComponent } from './locker-flow/locker-form-details.component';
import { BookMeetingFlowComponent } from './meeting-flow.component';
import { MeetingFlowConfirmModalComponent } from './meeting-flow/meeting-flow-confirm-modal.component';
import { MeetingFlowConfirmComponent } from './meeting-flow/meeting-flow-confirm.component';
import { MeetingFlowFormComponent } from './meeting-flow/meeting-flow-form.component';
import { MeetingFlowSuccessComponent } from './meeting-flow/meeting-flow-success.component';
import { MeetingFormDetailsComponent } from './meeting-flow/meeting-form-details.component';
import { NewParkingFlowComponent } from './parking-flow.component';
import { NewParkingFlowConfirmComponent } from './parking-flow/parking-flow-confirm.component';
import { ParkingFlowFormComponent } from './parking-flow/parking-flow-form.component';
import { ParkingFlowSuccessComponent } from './parking-flow/parking-flow-success.component';
import { ParkingFormDetailsComponent } from './parking-flow/parking-form-details.component';
import { VisitorFlowComponent } from './visitor-flow.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: BookComponent,
        children: [
            { path: 'code', component: BookCodeFlowComponent },
            { path: 'code/success', component: CodeFlowSuccessComponent },
            { path: 'code/error', component: CodeFlowErrorComponent },
            { path: 'desk', redirectTo: 'desk/form' },
            { path: 'desks', redirectTo: 'desk/form' },
            { path: 'desk/:step', component: NewDeskFlowComponent },
            { path: 'meeting', redirectTo: 'meeting/form' },
            { path: 'meeting/:step', component: BookMeetingFlowComponent },
            { path: 'parking', redirectTo: 'parking/form' },
            { path: 'parking/:step', component: NewParkingFlowComponent },
            { path: 'visitor', redirectTo: 'visitor/form' },
            { path: 'visitor/:step', component: VisitorFlowComponent },
            { path: 'locker', redirectTo: 'locker/form' },
            { path: 'locker/:step', component: BookLockerFlowComponent },
            { path: '*', redirectTo: 'spaces/form' },
        ],
    },
    { path: '*', redirectTo: 'spaces/form' },
];

const STANDALONE_COMPONENTS = [MeetingFlowConfirmComponent];

@NgModule({
    declarations: [
        BookComponent,
        BookCodeFlowComponent,
        CodeFlowSuccessComponent,
        CodeFlowErrorComponent,
        FlowSuccessComponent,
        BookMeetingFlowComponent,
        MeetingFlowFormComponent,
        MeetingFormDetailsComponent,
        MeetingFlowConfirmModalComponent,
        MeetingFlowSuccessComponent,

        NewDeskFlowFormComponent,
        NewDeskFormDetailsComponent,
        NewDeskFlowComponent,
        NewDeskFlowConfirmComponent,
        NewDeskFlowSuccessComponent,
        VisitorFlowComponent,

        NewParkingFlowComponent,
        ParkingFlowFormComponent,
        NewParkingFlowConfirmComponent,
        ParkingFlowSuccessComponent,
        ParkingFormDetailsComponent,

        BookLockerFlowComponent,
        BookLockerFlowFormComponent,
        BookLockerFlowConfirmComponent,
        BookLockerFlowSuccessComponent,
        LockerFormDetailsComponent,
    ],
    imports: [
        CommonModule,
        SharedComponentModule,
        FormsModule,
        SharedCateringModule,
        SharedExploreModule,
        ReactiveFormsModule,
        MatBottomSheetModule,
        SharedBookingsModule,
        RouterModule.forChild(ROUTES),
        ...STANDALONE_COMPONENTS,
    ],
})
export class BookModule {}
