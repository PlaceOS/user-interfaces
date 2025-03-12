import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { SharedSpacesModule } from '@placeos/spaces';
import { SharedUsersModule } from '@placeos/users';

import { MatChipsModule } from '@angular/material/chips';
import { MapShowElementComponent } from './map-show-element.component';
import { POIListComponent } from './poi-list.component';
import { POIManagerComponent } from './poi-manager.component';
import { POIModalComponent } from './poi-modal.component';

const ROUTES: Route[] = [{ path: '', component: POIManagerComponent }];

@NgModule({
    declarations: [
        POIManagerComponent,
        POIListComponent,
        POIModalComponent,
        MapShowElementComponent,
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
export class POIManagerModule {}
