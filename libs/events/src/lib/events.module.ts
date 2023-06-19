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

import { FormFieldsModule } from 'libs/form-fields/src/lib/form-fields.module';
import { ComponentsModule } from 'libs/components/src/lib/components.module';

import { AttendeeListComponent } from './attendee-list.component';
import { EventCardComponent } from './event-card.component';
import { EventDetailsModalComponent } from './event-details-modal.component';
import { EventLinkModalComponent } from './event-link-modal.component';
import { MatRippleModule } from '@angular/material/core';
import { SetupBreakdownModalComponent } from './setup-breakdown-modal.component';

const COMPONENTS = [
    EventDetailsModalComponent,
    AttendeeListComponent,
    EventCardComponent,
    EventLinkModalComponent,
    SetupBreakdownModalComponent,
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
        ComponentsModule,
        MatRippleModule,
    ],
    providers: [ReactiveFormsModule],
    exports: [...COMPONENTS],
})
export class SharedEventsModule {}
