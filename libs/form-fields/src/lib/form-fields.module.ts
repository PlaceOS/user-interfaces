import { NgModule } from '@angular/core';

import { ActionFieldComponent } from './action-field.component';
import { BookingRulesFormComponent } from './booking-rules-form.component';
import { CompactCounterComponent } from './compact-counter.component';
import { CounterComponent } from './counter.component';
import { CronInputFieldComponent } from './cron-input-field.component';
import { DateCalendarComponent } from './date-calendar.component';
import { DateFieldComponent } from './date-field.component';
import { DateRangeCalendarComponent } from './date-range-calendar.component';
import { DateRangeFieldComponent } from './date-range-field.component';
import { DurationFieldComponent } from './duration-field.component';
import { HostSelectFieldComponent } from './host-select-field.component';
import { ImageFieldComponent } from './image-field.component';
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

const COMPONENTS = [
    ActionFieldComponent,
    CounterComponent,
    CompactCounterComponent,
    DateFieldComponent,
    DateCalendarComponent,
    DateRangeFieldComponent,
    DateRangeCalendarComponent,
    DurationFieldComponent,
    HostSelectFieldComponent,
    ItemListFieldComponent,
    ImageListFieldComponent,
    RecurrenceFieldComponent,
    RichTextInputComponent,
    SpaceListFieldComponent,
    SupportTicketModalComponent,
    TimeFieldComponent,
    UploadFileFieldComponent,
    UploadListFieldComponent,
    UserListFieldComponent,
    UserSearchFieldComponent,
    CronInputFieldComponent,
    ImageFieldComponent,

    RecurrenceModalComponent,
    BookingRulesFormComponent,

    PlaceUserPipe,
];

@NgModule({
    declarations: [],
    imports: [...COMPONENTS],
    exports: [...COMPONENTS],
})
export class FormFieldsModule {}
