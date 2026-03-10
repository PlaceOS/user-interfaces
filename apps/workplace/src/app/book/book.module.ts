import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { BookComponent } from './book.component';
import { CodeFlowErrorComponent } from './code-flow-error.component';
import { CodeFlowSuccessComponent } from './code-flow-success.component';
import { BookCodeFlowComponent } from './code-flow.component';
import { DeskFlowNewComponent } from './desk-flow-new/desk-flow.component';
import { NewDeskFlowComponent } from './desk-flow.component';
import { BookLockerFlowComponent } from './locker-flow.component';
import { MeetingFlowNewComponent } from './meeting-flow-new/meeting-flow.component';
import { BookMeetingFlowComponent } from './meeting-flow.component';
import { NewParkingFlowComponent } from './parking-flow.component';
import { VisitorFlowNewComponent } from './visitor-flow-new/visitor-flow.component';
import { ParkingRequestFlowComponent } from './parking-request-flow.component';
import { VisitorFlowComponent } from './visitor-flow.component';
import { VipVisitorFlowComponent } from './vip-visitor-flow/vip-visitor-flow.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: BookComponent,
        children: [
            { path: 'code', component: BookCodeFlowComponent },
            { path: 'code/success', component: CodeFlowSuccessComponent },
            { path: 'code/error', component: CodeFlowErrorComponent },
            { path: 'desk/:step', component: DeskFlowNewComponent },
            { path: 'desk', redirectTo: 'desk/form' },
            { path: 'desks', redirectTo: 'desk/form' },
            { path: 'meeting/:step', component: MeetingFlowNewComponent },
            { path: 'meeting', redirectTo: 'meeting/form' },
            // { path: 'meeting', redirectTo: 'meeting/form' },
            // { path: 'meeting/:step', component: BookMeetingFlowComponent },
            { path: 'parking/:step', component: NewParkingFlowComponent },
            { path: 'parking', redirectTo: 'parking/form' },
            { path: 'visitor/:step', component: VisitorFlowNewComponent },
            { path: 'parking-request', redirectTo: 'parking-request/form' },
            {
                path: 'parking-request/:step',
                component: ParkingRequestFlowComponent,
            },
            { path: 'visitor', redirectTo: 'visitor/form' },
            { path: 'vip-visitor/:step', component: VipVisitorFlowComponent },
            { path: 'vip-visitor', redirectTo: 'vip-visitor/form' },
            { path: 'locker/:step', component: BookLockerFlowComponent },
            { path: 'locker', redirectTo: 'locker/form' },
            { path: '*', redirectTo: 'meeting/form' },
        ],
    },
    { path: '*', redirectTo: 'meeting/form' },
];

const STANDALONE_COMPONENTS = [
    BookComponent,
    CodeFlowSuccessComponent,
    CodeFlowErrorComponent,

    BookCodeFlowComponent,
    BookMeetingFlowComponent,
    NewDeskFlowComponent,
    VisitorFlowComponent,
    VisitorFlowNewComponent,
    VipVisitorFlowComponent,
    NewParkingFlowComponent,
    ParkingRequestFlowComponent,
    BookLockerFlowComponent,
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(ROUTES), ...STANDALONE_COMPONENTS],
})
export class BookModule {}
