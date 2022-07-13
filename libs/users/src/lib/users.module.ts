import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ComponentsModule } from '@placeos/components';

import { NewUserModalComponent } from './new-user-modal.component';
import { UserFormComponent } from './user-form.component';
import { UserPipe } from './user.pipe';
import { WFHSettingsModalComponent } from './wfh-settings-modal.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
        MatProgressSpinnerModule
    ],
    exports: [NewUserModalComponent, WFHSettingsModalComponent],
})
export class SharedUsersModule {}
