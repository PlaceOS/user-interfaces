import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ComponentsModule } from 'libs/components/src/lib/components.module';
import { FormFieldsModule } from 'libs/form-fields/src/lib/form-fields.module';

import { NewUserModalComponent } from './new-user-modal.component';
import { UserFormComponent } from './user-form.component';
import { UserPipe } from './user.pipe';
import { WFHSettingsModalComponent } from './wfh-settings-modal.component';
import { FindAvailabilityModalComponent } from './find-availability-modal/find-availability-modal.component';
import { UserAvailabilityComponent } from './find-availability-modal/user-availability.component';

const COMPONENTS = [
    NewUserModalComponent,
    UserFormComponent,
    WFHSettingsModalComponent,
    UserPipe,
    FindAvailabilityModalComponent,
    UserAvailabilityComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        FormFieldsModule,
        ComponentsModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatMenuModule,
    ],
    exports: [...COMPONENTS],
})
export class SharedUsersModule {}
