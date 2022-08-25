import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ComponentsModule } from 'libs/components/src/lib/components.module';

import { NewUserModalComponent } from './new-user-modal.component';
import { UserFormComponent } from './user-form.component';
import { UserPipe } from './user.pipe';
import { WFHSettingsModalComponent } from './wfh-settings-modal.component';

@NgModule({
    declarations: [
        NewUserModalComponent,
        UserFormComponent,
        WFHSettingsModalComponent,
        UserPipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        ComponentsModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatMenuModule
    ],
    exports: [NewUserModalComponent, WFHSettingsModalComponent, UserPipe],
})
export class SharedUsersModule {}
