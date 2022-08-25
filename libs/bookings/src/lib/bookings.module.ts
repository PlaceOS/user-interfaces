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

import { ComponentsModule } from 'libs/components/src/lib/components.module';
import { FormFieldsModule } from 'libs/form-fields/src/lib/form-fields.module';

import { BookingCardComponent } from './booking-card.component';
import { BookingDetailsModalComponent } from './booking-details-modal.component';

import { DeskConfirmModalComponent } from './desk-confirm-modal.component';
import { DeskQuestionsModalComponent } from './desk-questions-modal.component';
import { InviteVisitorFormComponent } from './invite-visitor-form.component';

const COMPONENTS = [
    DeskQuestionsModalComponent,
    DeskConfirmModalComponent,
    InviteVisitorFormComponent,
    BookingDetailsModalComponent,
    BookingCardComponent
];
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
        FormFieldsModule,
        ComponentsModule
    ],
    providers: [ReactiveFormsModule],
    exports: [...COMPONENTS],
})
export class SharedBookingsModule {}
