import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';

import { SharedExploreModule } from '@placeos/explore';
import { UIModule } from '../ui/ui.module';

import { LockersComponent } from './lockers.component';
import { LockerBookingsComponent } from './locker-bookings.component';
import { LockersTopbarComponent } from './locker-topbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { SharedBookingsModule } from '@placeos/bookings';
import { FormFieldsModule } from '@placeos/form-fields';
import { NewLockersComponent } from './new-lockers.component';

const ROUTES: Route[] = [
    {
        path: 'new',
        component: NewLockersComponent,
        children: [
            { path: 'events', component: LockerBookingsComponent },
            { path: '**', redirectTo: 'events' },
        ],
    },
    {
        path: '',
        component: LockersComponent,
        children: [
            { path: 'events', component: LockerBookingsComponent },
            { path: '**', redirectTo: 'events' },
        ],
    },
];

@NgModule({
    declarations: [
        NewLockersComponent,
        LockersComponent,
        LockerBookingsComponent,
        LockersTopbarComponent,
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
export class LockersModule {}
