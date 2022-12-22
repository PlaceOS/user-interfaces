import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';

import { FormFieldsModule } from 'libs/form-fields/src/lib/form-fields.module';
import { ComponentsModule } from 'libs/components/src/lib/components.module';

import { AttendeeListComponent } from './attendee-list.component';
import { EventCardComponent } from './event-card.component';
import { EventDetailsModalComponent } from './event-details-modal.component';
import { EventLinkModalComponent } from './event-link-modal.component';

const COMPONENTS = [
    EventDetailsModalComponent,
    AttendeeListComponent,
    EventCardComponent,
    EventLinkModalComponent
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
