import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { WhatsOnComponent } from './whats-on.component';
import { SharedComponentModule } from '../components/shared.module';
import { WhatsOnHeaderComponent } from './whats-on-header.component';
import { WhatsOnEventListComponent } from './whats-on-event-list.component';

const ROUTES: Route[] = [{ path: '', component: WhatsOnComponent }];

@NgModule({
    declarations: [
        WhatsOnComponent,
        WhatsOnHeaderComponent,
        WhatsOnEventListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedComponentModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class WhatsOnModule {}
