import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Route, RouterModule } from '@angular/router';

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
        FlowSuccessComponent,
    ],
    imports: [
        CommonModule,
        SharedComponentModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonToggleModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class BookModule {}
