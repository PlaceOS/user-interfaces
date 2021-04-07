import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ComponentsModule } from '@placeos/components';

import { NewUserModalComponent } from './new-user-modal/new-user-modal.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
    declarations: [NewUserModalComponent, UserFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        ComponentsModule,
        MatCheckboxModule,
    ],
    exports: [NewUserModalComponent],
})
export class SharedUsersModule {}
