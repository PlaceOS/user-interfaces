import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';

import { SharedExploreModule } from '@placeos/explore';
import { UIModule } from '../ui/ui.module';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DeskBookingsComponent } from './desk-bookings.component';
import { DeskMapViewComponent } from './desk-map-view.component';
import { DesksManageComponent } from './desks-manage.component';
import { DesksTopbarComponent } from './desks-topbar.component';

import { UserPipe } from '@placeos/users';
import { NewDeskFormDetailsComponent } from 'apps/workplace/src/app/book/desk-flow/desk-form-details.component';
import { SharedBookingsModule } from 'libs/bookings/src/lib/bookings.module';
import { FormFieldsModule } from 'libs/form-fields/src/lib/form-fields.module';
import { DeskBookModalComponent } from './desk-book-modal.component';
import { DeskModalComponent } from './desk-modal.component';
import { DeskQrCodeModalComponent } from './desk-qr-code-modal.component';
import { DesksComponent } from './desks.component';

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
];

@NgModule({
    declarations: [
        DesksComponent,
        DeskBookingsComponent,
        DesksTopbarComponent,
        DeskMapViewComponent,
        DesksManageComponent,
        NewDeskFormDetailsComponent,
        DeskBookModalComponent,
        DeskModalComponent,
        DeskQrCodeModalComponent,
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
        UserPipe,
        RouterModule.forChild(ROUTES),
    ],
})
export class DesksModule {}
