import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { DesksComponent } from './desks.component';
import { DeskListingsComponent } from './desk-listings.component';
import { DeskDetailsComponent } from './desk-details.component';
import { DesksTopbarComponent } from './desks-topbar.component';
import { DeskListModalComponent } from './desk-list-modal.component';

const ROUTES: Route[] = [{ path: '', component: DesksComponent }];

@NgModule({
    declarations: [
        DesksComponent,
        DeskListingsComponent,
        DeskDetailsComponent,
        DesksTopbarComponent,
        DeskListModalComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class DesksModule {}
