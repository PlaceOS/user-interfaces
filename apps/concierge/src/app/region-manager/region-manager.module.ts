import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { SharedSpacesModule } from '@placeos/spaces';
import { SharedUsersModule } from '@placeos/users';

import { RegionManagerComponent } from './region-manager.component';
import { MatChipsModule } from '@angular/material/chips';
import { RegionListComponent } from './region-list.component';
import { RegionModalComponent } from './region-modal.component';

const ROUTES: Route[] = [
    { path: '', component: RegionManagerComponent },
    { path: 'new', component: RegionManagerComponent },
];

@NgModule({
    declarations: [
        RegionManagerComponent,
        RegionListComponent,
        RegionModalComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedSpacesModule,
        SharedUsersModule,
        MatChipsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class RegionManagerModule {}
