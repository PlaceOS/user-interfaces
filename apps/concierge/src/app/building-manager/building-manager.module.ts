import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { SharedUsersModule } from 'libs/users/src/lib/users.module';

import { MatChipsModule } from '@angular/material/chips';
import { AutoReleaseSettingsModalComponent } from './auto-release-settings-modal.component';
import { BuildingFormComponent } from './building-form.component';
import { BuildingListComponent } from './building-list.component';
import { BuildingManagerComponent } from './building-manager.component';
import { BuildingModalComponent } from './building-modal.component';
import { InductionSettingsModalComponent } from './induction-settings-modal.component';
import { ItemListModalComponent } from './item-list-modal.component';

const ROUTES: Route[] = [{ path: '', component: BuildingManagerComponent }];

@NgModule({
    declarations: [
        BuildingManagerComponent,
        BuildingListComponent,
        BuildingFormComponent,
        BuildingModalComponent,
        AutoReleaseSettingsModalComponent,
        InductionSettingsModalComponent,
        ItemListModalComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedUsersModule,
        MatChipsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class BuildingManagerModule {}
