import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';

import { FormFieldsModule } from '@user-interfaces/form-fields';

import { DeskConfirmModalComponent } from './desk-confirm-modal.component';
import { DeskQuestionsModalComponent } from './desk-questions-modal.component';

const COMPONENTS = [DeskQuestionsModalComponent, DeskConfirmModalComponent];
@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatButtonModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        FormFieldsModule
    ],
    providers: [],
    exports: [...COMPONENTS],
})
export class SharedBookingsModule {}
