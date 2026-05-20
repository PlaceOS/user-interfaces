import { NgModule } from '@angular/core';
import { CanDeactivateFn, Route, RouterModule } from '@angular/router';

import { BookComponent } from './book.component';
import { CodeFlowErrorComponent } from './code-flow-error.component';
import { CodeFlowSuccessComponent } from './code-flow-success.component';
import { BookCodeFlowComponent } from './code-flow.component';
import { DeskFlowNewComponent } from './desk-flow-new/desk-flow.component';
import { BookLockerFlowComponent } from './locker-flow.component';
import { MeetingFlowNewComponent } from './meeting-flow-new/meeting-flow.component';
import { NewParkingFlowComponent } from './parking-flow.component';
import { ParkingRequestFlowComponent } from './parking-request-flow.component';
import { VisitorFlowNewComponent } from './visitor-flow-new/visitor-flow.component';

const canDeactivateVisitorFlow: CanDeactivateFn<VisitorFlowNewComponent> = (
    component,
) => component.canDeactivate();

const ROUTES: Route[] = [
    {
        path: '',
        component: BookComponent,
        children: [
            {
                path: 'code',
                component: BookCodeFlowComponent,
                title: 'Code Booking',
            },
            {
                path: 'code/success',
                component: CodeFlowSuccessComponent,
                title: 'Booking Confirmed',
            },
            {
                path: 'code/error',
                component: CodeFlowErrorComponent,
                title: 'Booking Error',
            },
            { path: 'desk', redirectTo: 'desk/form' },
            { path: 'desks', redirectTo: 'desk/form' },
            {
                path: 'desk/:step',
                component: DeskFlowNewComponent,
                title: 'Desk Booking',
            },
            { path: 'meeting', redirectTo: 'meeting/form' },
            {
                path: 'meeting/:step',
                component: MeetingFlowNewComponent,
                title: 'Meeting Booking',
            },
            { path: 'parking', redirectTo: 'parking/form' },
            {
                path: 'parking/:step',
                component: NewParkingFlowComponent,
                title: 'Parking Booking',
            },
            { path: 'parking-request', redirectTo: 'parking-request/form' },
            {
                path: 'parking-request/:step',
                component: ParkingRequestFlowComponent,
                title: 'Parking Request',
            },
            { path: 'visitor', redirectTo: 'visitor/form' },
            {
                path: 'visitor/:step',
                component: VisitorFlowNewComponent,
                title: 'Visitor Booking',
                canDeactivate: [canDeactivateVisitorFlow],
            },
            { path: 'locker', redirectTo: 'locker/form' },
            {
                path: 'locker/:step',
                component: BookLockerFlowComponent,
                title: 'Locker Booking',
            },
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
    DeskFlowNewComponent,
    MeetingFlowNewComponent,
    VisitorFlowNewComponent,
    NewParkingFlowComponent,
    ParkingRequestFlowComponent,
    BookLockerFlowComponent,
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(ROUTES), ...STANDALONE_COMPONENTS],
})
export class BookModule {}
