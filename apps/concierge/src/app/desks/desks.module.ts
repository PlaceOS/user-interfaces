import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';

import { SharedExploreModule } from '@placeos/explore';
import { UIModule } from '../ui/ui.module';

import { DesksComponent } from './desks.component';
import { DeskBookingsComponent } from './desk-bookings.component';
import { DesksTopbarComponent } from './desks-topbar.component';
import { DeskMapViewComponent } from './desk-map-view.component';
import { DesksManageComponent } from './desks-manage.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

const ROUTES: Route[] = [
    {
        path: '',
        component: DesksComponent,
        children: [
            { path: 'events', component: DeskBookingsComponent },
            { path: 'map', component: DeskMapViewComponent },
            { path: 'manage', component: DesksManageComponent },
            { path: '**', redirectTo: 'events' },
        ],
    },
    { path: '**', redirectTo: 'events' },
];

@NgModule({
    declarations: [
        DesksComponent,
        DeskBookingsComponent,
        DesksTopbarComponent,
        DeskMapViewComponent,
        DesksManageComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatTabsModule,
        ReactiveFormsModule,
        UIModule,
        SharedExploreModule,
        MatRadioModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatInputModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class DesksModule {}
