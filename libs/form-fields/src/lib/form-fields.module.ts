import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ComponentsModule } from 'libs/components/src/lib/components.module';

import { ActionFieldComponent } from './action-field.component';
import { BookingRulesFormComponent } from './booking-rules-form.component';
import { CompactCounterComponent } from './compact-counter.component';
import { CounterComponent } from './counter.component';
import { DateCalendarComponent } from './date-calendar.component';
import { DateFieldComponent } from './date-field.component';
import { DateRangeCalendarComponent } from './date-range-calendar.component';
import { DateRangeFieldComponent } from './date-range-field.component';
import { DurationFieldComponent } from './duration-field.component';
import { HostSelectFieldComponent } from './host-select-field.component';
import { ImageListFieldComponent } from './image-list-field.component';
import { ItemListFieldComponent } from './item-list-field.component';
import { PlaceUserPipe } from './place-user.pipe';
import { RecurrenceFieldComponent } from './recurrence-field.component';
import { RecurrenceModalComponent } from './recurrence-modal.component';
import { RichTextInputComponent } from './rich-text-input.component';
import { SpaceListFieldComponent } from './space-list-field.component';
import { SupportTicketModalComponent } from './support-ticket-modal.component';
import { TimeFieldComponent } from './time-field.component';
import { UploadFileFieldComponent } from './upload-file-field.component';
import { UploadListFieldComponent } from './upload-list-field.component';
import { UserListFieldComponent } from './user-list-field.component';
import { UserSearchFieldComponent } from './user-search-field.component';

const COMPONENTS: Type<any>[] = [
    ActionFieldComponent,
    CounterComponent,
    CompactCounterComponent,
    DateFieldComponent,
    DateRangeFieldComponent,
    DateRangeCalendarComponent,
    DurationFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
    UserSearchFieldComponent,
    ItemListFieldComponent,
    UploadListFieldComponent,
    UploadFileFieldComponent,
    SpaceListFieldComponent,
    RichTextInputComponent,
    HostSelectFieldComponent,
    ImageListFieldComponent,
    SupportTicketModalComponent,

    RecurrenceFieldComponent,
    RecurrenceModalComponent,
    DateCalendarComponent,
    BookingRulesFormComponent,

    PlaceUserPipe,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatRippleModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatRadioModule,
        MatChipsModule,
        ClipboardModule,
        ComponentsModule,
    ],
    exports: [...COMPONENTS],
})
export class FormFieldsModule {}
