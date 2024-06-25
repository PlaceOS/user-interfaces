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

import { NewDeskFormDetailsComponent } from 'apps/workplace/src/app/book/new-desk-flow/new-desk-form-details.component';
import { DeskBookModalComponent } from './desk-book-modal.component';
import { SharedBookingsModule } from '@placeos/bookings';
import { FormFieldsModule } from '@placeos/form-fields';
import { NewDesksComponent } from './new-desks.component';
import { DeskModalComponent } from './desk-modal.component';

const ROUTES: Route[] = [
    {
        path: 'new',
        component: NewDesksComponent,
        children: [
            { path: 'events', component: DeskBookingsComponent },
            { path: 'map', component: DeskMapViewComponent },
            { path: 'manage', component: DesksManageComponent },
            { path: '**', redirectTo: 'events' },
        ],
    },
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
];

@NgModule({
    declarations: [
        NewDesksComponent,
        DesksComponent,
        DeskBookingsComponent,
        DesksTopbarComponent,
        DeskMapViewComponent,
        DesksManageComponent,
        NewDeskFormDetailsComponent,
        DeskBookModalComponent,
        DeskModalComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatTabsModule,
        ReactiveFormsModule,
        UIModule,
        SharedExploreModule,
        SharedBookingsModule,
        FormFieldsModule,
        MatRadioModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatInputModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class DesksModule {}
