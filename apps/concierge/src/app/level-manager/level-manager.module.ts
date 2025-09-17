import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { SharedUsersModule } from '@placeos/users';

import { MatChipsModule } from '@angular/material/chips';
import { LevelListComponent } from './level-list.component';
import { LevelManagerComponent } from './level-manager.component';
import { LevelModalComponent } from './level-modal.component';

const ROUTES: Route[] = [{ path: '', component: LevelManagerComponent }];

@NgModule({
    declarations: [
        LevelManagerComponent,
        LevelListComponent,
        LevelModalComponent,
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
export class LevelManagerModule {}
