import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { SharedExploreModule } from '@placeos/explore';
import { SharedBookingsModule } from '@placeos/bookings';
import { AssetsModule } from '@placeos/assets';
import { SharedCateringModule } from '@placeos/catering';

import { BookComponent } from './book.component';
import { BookCodeFlowComponent } from './code-flow.component';
import { BookDeskFlowComponent } from './desk-flow.component';
import { DeskFlowConfirmComponent } from './desk-flow/confirm.component';
import { DeskFlowFormComponent } from './desk-flow/form.component';
import { DeskFlowDetailedFormComponent } from './desk-flow/detailed-form.component';
import { DeskFlowMapComponent } from './desk-flow/map.component';
import { FlowSuccessComponent } from './flow-success.component';
import { BookSpaceFlowComponent } from './space-flow.component';
import { SpaceFlowConfirmComponent } from './space-flow/confirm.component';
import { DetailBookSpaceFormComponent } from './space-flow/detailed-form.component';
import { SpaceFlowFindItemComponent } from './space-flow/find-item.component';
import { SpaceFlowFindComponent } from './space-flow/find.component';
import { SpaceFlowFormComponent } from './space-flow/form.component';
import { SharedComponentModule } from '../components/shared.module';
import { BookParkingFlowComponent } from './parking-flow.component';
import { ParkingFlowMapComponent } from './parking-flow/parking-flow-map.component';
import { ParkingFlowConfirmComponent } from './parking-flow/parking-flow-confirm.component';
import { BookMeetingFlowComponent } from './meeting-flow.component';
import { MeetingFlowFormComponent } from './meeting-flow/meeting-flow-form.component';
import { MeetingFormDetailsComponent } from './meeting-flow/meeting-form-details.component';
import { MeetingFlowConfirmComponent } from './meeting-flow/meeting-flow-confirm.component';
import { MeetingFlowSuccessComponent } from './meeting-flow/meeting-flow-success.component';
import { NewDeskFlowComponent } from './new-desk-flow.component';
import { NewDeskFlowFormComponent } from './new-desk-flow/new-desk-flow-form.component';
import { NewDeskFormDetailsComponent } from './new-desk-flow/new-desk-form-details.component';
import { NewDeskFlowConfirmComponent } from './new-desk-flow/new-desk-flow-confirm.component';
import { NewDeskFlowSuccessComponent } from './new-desk-flow/new-desk-flow-success.component';
import { VisitorFlowComponent } from './visitor-flow.component';
import { NewParkingFlowComponent } from './new-parking-flow.component';
import { ParkingFlowFormComponent } from './new-parking-flow/parking-flow-form.component';
import { ParkingFlowSuccessComponent } from './new-parking-flow/parking-flow-success.component';
import { ParkingFormDetailsComponent } from './new-parking-flow/parking-form-details.component';
import { MeetingFlowConfirmModalComponent } from './meeting-flow/meeting-flow-confirm-modal.component';
import { NewParkingFlowConfirmComponent } from './new-parking-flow/parking-flow-confirm.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: BookComponent,
        children: [
            { path: 'code', component: BookCodeFlowComponent },
            { path: 'newdesk', redirectTo: 'newdesk/form'},
            { path: 'newdesk/:step', component: NewDeskFlowComponent},
            { path: 'desks', redirectTo: 'desks/form' },
            { path: 'desks/:step', component: BookDeskFlowComponent },
            { path: 'spaces', redirectTo: 'spaces/form' },
            { path: 'spaces/:step', component: BookSpaceFlowComponent },
            { path: 'meeting', redirectTo: 'meeting/form' },
            { path: 'meeting/:step', component: BookMeetingFlowComponent },
            { path: 'parking', redirectTo: 'parking/form' },
            { path: 'parking/:step', component: BookParkingFlowComponent },
            { path: 'new-parking', redirectTo: 'new-parking/form' },
            { path: 'new-parking/:step', component: NewParkingFlowComponent },
            { path: 'visitor', redirectTo: 'visitor/form' },
            { path: 'visitor/:step', component: VisitorFlowComponent },
            { path: '*', redirectTo: 'spaces/form' },
        ],
    },
    { path: '*', redirectTo: 'spaces/form' },
];

@NgModule({
    declarations: [
        BookComponent,
        BookSpaceFlowComponent,
        SpaceFlowFormComponent,
        SpaceFlowFindComponent,
        SpaceFlowFindItemComponent,
        SpaceFlowConfirmComponent,
        DetailBookSpaceFormComponent,
        BookDeskFlowComponent,
        DeskFlowFormComponent,
        DeskFlowDetailedFormComponent,
        DeskFlowMapComponent,
        DeskFlowConfirmComponent,
        BookCodeFlowComponent,
        BookParkingFlowComponent,
        ParkingFlowMapComponent,
        ParkingFlowConfirmComponent,
        FlowSuccessComponent,
        BookMeetingFlowComponent,
        MeetingFlowFormComponent,
        MeetingFormDetailsComponent,
        MeetingFlowConfirmComponent,
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
        ParkingFormDetailsComponent
    ],
    imports: [
        CommonModule,
        SharedComponentModule,
        FormsModule,
        AssetsModule,
        SharedCateringModule,
        SharedExploreModule,
        ReactiveFormsModule,
        MatButtonToggleModule,
        MatBottomSheetModule,
        SharedBookingsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class BookModule {}
