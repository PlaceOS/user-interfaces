import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { BookComponent } from './book.component';
import { CodeFlowErrorComponent } from './code-flow-error.component';
import { CodeFlowSuccessComponent } from './code-flow-success.component';
import { BookCodeFlowComponent } from './code-flow.component';
import { DeskFlowNewComponent } from './desk-flow-new/desk-flow.component';
import { NewDeskFlowComponent } from './desk-flow.component';
import { BookLockerFlowComponent } from './locker-flow.component';
import { MeetingFlowNewComponent } from './meeting-flow-new/meeting-flow-new.component';
import { BookMeetingFlowComponent } from './meeting-flow.component';
import { NewParkingFlowComponent } from './parking-flow.component';
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
            { path: 'desk/:step', component: DeskFlowNewComponent },
            { path: 'meeting', redirectTo: 'meeting/form' },
            { path: 'meeting/:step', component: MeetingFlowNewComponent },
            // { path: 'meeting', redirectTo: 'meeting/form' },
            // { path: 'meeting/:step', component: BookMeetingFlowComponent },
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

const STANDALONE_COMPONENTS = [
    BookComponent,
    CodeFlowSuccessComponent,
    CodeFlowErrorComponent,

    BookCodeFlowComponent,
    BookMeetingFlowComponent,
    NewDeskFlowComponent,
    VisitorFlowComponent,
    NewParkingFlowComponent,
    BookLockerFlowComponent,
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(ROUTES), ...STANDALONE_COMPONENTS],
})
export class BookModule {}
