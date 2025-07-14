import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { FormFieldsModule } from '@placeos/form-fields';

import { SharedComponentModule } from '../components/shared.module';
import { DealDetailsModalComponent } from './deal-details-modal.component';
import { DealsComponent } from './deals.component';

const ROUTES: Route[] = [{ path: '', component: DealsComponent }];

@NgModule({
    declarations: [DealsComponent],
    imports: [
        CommonModule,
        FormsModule,
        FormFieldsModule,
        SharedComponentModule,
        DealDetailsModalComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class DealsModule {}
