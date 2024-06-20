import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { SharedSpacesModule } from '@placeos/spaces';
import { SharedUsersModule } from '@placeos/users';

import { POIManagerComponent } from './poi-manager.component';
import { MatChipsModule } from '@angular/material/chips';
import { POIListComponent } from './poi-list.component';
import { POIModalComponent } from './poi-modal.component';
import { SelectPOIMapModalComponent } from './select-poi-map-modal.component';
import { MapShowElementComponent } from './map-show-element.component';

const ROUTES: Route[] = [
    { path: '', component: POIManagerComponent },
    { path: 'new', component: POIManagerComponent },
];

@NgModule({
    declarations: [
        POIManagerComponent,
        POIListComponent,
        POIModalComponent,
        SelectPOIMapModalComponent,
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
