import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ComponentsModule } from '@user-interfaces/components';

import { NewUserModalComponent } from './new-user-modal/new-user-modal.component';

@NgModule({
    declarations: [NewUserModalComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule, ComponentsModule],
    exports: [NewUserModalComponent]
})
export class SharedUsersModule { }
