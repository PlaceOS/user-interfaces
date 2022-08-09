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
import { ComponentsModule } from '@placeos/components';

import { FormFieldsModule } from '@placeos/form-fields';
import { AttendeeListComponent } from './attendee-list.component';
import { EventCardComponent } from './event-card.component';
import { EventDetailsModalComponent } from './event-details-modal.component';

const COMPONENTS = [
    EventDetailsModalComponent,
    AttendeeListComponent,
    EventCardComponent
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
export class SharedEventsModule {}
