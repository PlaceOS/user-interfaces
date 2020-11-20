import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { MatRadioModule } from '@angular/material/radio';

import { UIModule } from '../ui/ui.module';

import { DesksComponent } from './desks.component';
import { DeskListingsComponent } from './desk-listings.component';
import { DeskDetailsComponent } from './desk-details.component';
import { DesksTopbarComponent } from './desks-topbar.component';
import { DeskListModalComponent } from './desk-list-modal.component';
import { DeskMapViewComponent } from './desk-map-view.component';
import { SharedExploreModule } from '@user-interfaces/explore';
import { DeskFlowConfirmModalComponent } from 'apps/workplace/src/app/bookings/desk-flow/desk-flow-confirm-modal.component';
import { DeskFlowQuestionsModalComponent } from 'apps/workplace/src/app/bookings/desk-flow/desk-flow-questions-modal.component';

const ROUTES: Route[] = [{ path: '', component: DesksComponent }];

@NgModule({
    declarations: [
        DesksComponent,
        DeskListingsComponent,
        DeskDetailsComponent,
        DesksTopbarComponent,
        DeskListModalComponent,
        DeskMapViewComponent,
        DeskFlowConfirmModalComponent,
        DeskFlowQuestionsModalComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UIModule,
        SharedExploreModule,
        MatRadioModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class DesksModule {}
