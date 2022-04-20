import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Route, RouterModule } from '@angular/router';

import { SharedExploreModule } from '@placeos/explore';

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
import { NewBookSpaceFlowComponent } from './new-space-flow.component';
import { NewSpaceFlowFormComponent } from './new-space-flow/space-flow-form.component';
import { SpaceFormDetailsComponent } from './new-space-flow/space-form-details.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: BookComponent,
        children: [
            { path: 'code', component: BookCodeFlowComponent },
            { path: 'desks', redirectTo: 'desks/form' },
            { path: 'desks/:step', component: BookDeskFlowComponent },
            { path: 'spaces', redirectTo: 'spaces/form' },
            { path: 'spaces/:step', component: BookSpaceFlowComponent },
            { path: 'new-spaces', redirectTo: 'new-spaces/form' },
            { path: 'new-spaces/:step', component: NewBookSpaceFlowComponent },
            { path: 'parking', redirectTo: 'parking/form' },
            { path: 'parking/:step', component: BookParkingFlowComponent },
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
        NewBookSpaceFlowComponent,
        NewSpaceFlowFormComponent,
        SpaceFormDetailsComponent,
    ],
    imports: [
        CommonModule,
        SharedComponentModule,
        FormsModule,
        SharedExploreModule,
        ReactiveFormsModule,
        MatButtonToggleModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class BookModule {}
