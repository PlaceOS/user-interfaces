import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';

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
