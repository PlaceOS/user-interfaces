import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { BookComponent } from './book.component';
import { CodeFlowErrorComponent } from './code-flow-error.component';
import { CodeFlowSuccessComponent } from './code-flow-success.component';
import { BookCodeFlowComponent } from './code-flow.component';
import { NewDeskFlowComponent } from './desk-flow.component';
import { BookLockerFlowComponent } from './locker-flow.component';
import { BookMeetingFlowComponent } from './meeting-flow.component';
import { NewParkingFlowComponent } from './parking-flow.component';
import { ParkingRequestFlowComponent } from './parking-request-flow.component';
import { VisitorFlowComponent } from './visitor-flow.component';

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
                component: NewDeskFlowComponent,
                title: 'Desk Booking',
            },
            { path: 'meeting', redirectTo: 'meeting/form' },
            {
                path: 'meeting/:step',
                component: BookMeetingFlowComponent,
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
                component: VisitorFlowComponent,
                title: 'Visitor Booking',
            },
            { path: 'locker', redirectTo: 'locker/form' },
            {
                path: 'locker/:step',
                component: BookLockerFlowComponent,
                title: 'Locker Booking',
            },
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
    ParkingRequestFlowComponent,
    BookLockerFlowComponent,
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(ROUTES), ...STANDALONE_COMPONENTS],
})
export class BookModule {}
