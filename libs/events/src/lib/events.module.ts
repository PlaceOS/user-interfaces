import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';

import { FormFieldsModule } from 'libs/form-fields/src/lib/form-fields.module';
import { ComponentsModule } from 'libs/components/src/lib/components.module';
import { SharedSpacesModule } from 'libs/spaces/src/lib/spaces.module';

import { AttendeeListComponent } from './attendee-list.component';
import { EventCardComponent } from './event-card.component';
import { EventDetailsModalComponent } from './event-details-modal.component';
import { EventLinkModalComponent } from './event-link-modal.component';
import { SetupBreakdownModalComponent } from './setup-breakdown-modal.component';
import { GroupEventCardComponent } from './group-event-card.component';
import { GroupEventDetailsModalComponent } from './group-event-details-modal.component';

import { setDefaultCreator } from './event.class';
import { currentUser, current_user } from 'libs/common/src/lib/user-state';
import { first } from 'rxjs/operators';

const COMPONENTS = [
    EventDetailsModalComponent,
    AttendeeListComponent,
    EventCardComponent,
    EventLinkModalComponent,
    SetupBreakdownModalComponent,
    GroupEventDetailsModalComponent,
    GroupEventCardComponent,
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
        SharedSpacesModule,
    ],
    providers: [ReactiveFormsModule],
    exports: [...COMPONENTS],
})
export class SharedEventsModule {
    public async ngOnInit() {
        await current_user.pipe(first((_) => !!_)).toPromise();
        setDefaultCreator(currentUser());
    }
}
