import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { SharedSpacesModule } from '@placeos/spaces';
import { SharedUsersModule } from '@placeos/users';

import { LevelManagerComponent } from './level-manager.component';
import { MatChipsModule } from '@angular/material/chips';
import { LevelListComponent } from './level-list.component';
import { LevelModalComponent } from './level-modal.component';

const ROUTES: Route[] = [
    { path: '', component: LevelManagerComponent },
    { path: 'new', component: LevelManagerComponent },
];

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
        SharedSpacesModule,
        SharedUsersModule,
        MatChipsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class LevelManagerModule {}
