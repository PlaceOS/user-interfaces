import { Component, Input, Optional } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { CateringItem } from '@placeos/catering';
import {
    AsyncHandler,
    SettingsService,
    notifyError,
    openConfirmModal,
} from '@placeos/common';
import {
    CalendarEvent,
    EventFormService,
    formatRecurrence,
} from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';

@Component({
    selector: 'meeting-flow-confirm',
    template: `
        <button
            icon
            matRipple
            name="close-meeting-confirm"
            *ngIf="show_close"
            (click)="dismiss()"
        >
            <app-icon>close</app-icon>
        </button>
        <header class="flex items-center justify-between px-2">
            <h2 i18n>Confirm Meeting booking</h2>
            <mat-spinner diameter="32" *ngIf="loading | async"></mat-spinner>
        </header>
        <section period class="flex space-x-1 px-2">
            <app-icon class="text-success mt-1">done</app-icon>
            <div details class="leading-6">
                <h3>{{ event.title || 'Meeting Details' }}</h3>
                <div class="flex items-center space-x-2">
                    <app-icon>today</app-icon>
                    <div date>{{ event.date | date: 'fullDate' }}</div>
                </div>
                <div
                    class="flex items-center space-x-2"
                    *ngIf="event.recurrence?.pattern"
                >
                    <app-icon>update</app-icon>
                    <div date>{{ formatted_recurrence }}</div>
                </div>
                <div class="flex items-center space-x-2">
                    <app-icon>schedule</app-icon>
                    <div time>
                        {{
                            is_multiday
                                ? (event.date | date: 'MMM d') +
                                  (event.all_day
                                      ? ''
                                      : (event.date
                                        | date: ', ' + time_format)) +
                                  ' - ' +
                                  (event.date_end | date: 'MMM d') +
                                  (event.all_day
                                      ? ''
                                      : (event.date_end
                                        | date: ', ' + time_format))
                                : event.all_day
                                ? 'All Day'
                                : (event.date | date: time_format) +
                                  ' - ' +
                                  (event.date + event.duration * 60 * 1000
                                      | date: time_format + ' (z)')
                        }}
                    </div>
                </div>
            </div>
        </section>
        <section
            attendees
            class="flex space-x-1 px-2"
            *ngIf="event.attendees.length"
        >
            <app-icon class="text-success mt-1">done</app-icon>
            <div details class="leading-6">
                <h3 i18n>
                    {{ event.attendees.length }} { event.attendees.length,
                    plural, =1 { attendee } other { attendees } }
                </h3>
                <div attendee-list>
                    <mat-chip-list #chipList aria-label="User selection">
                        <mat-chip *ngFor="let user of event.attendees">
                            <div class="flex items-center">
                                <app-icon class="mr-2">business</app-icon>
                                {{ user.name || user.email }}
                            </div>
                        </mat-chip>
                    </mat-chip-list>
                </div>
            </div>
        </section>
        <section spaces class="flex space-x-1 px-2" *ngIf="space?.id">
            <app-icon class="text-success mt-1">done</app-icon>
            <div details class="leading-6">
                <h3 i18n>Booked Room</h3>
                <ng-container *ngFor="let s of event.resources">
                    <div class="flex items-center space-x-2">
                        <app-icon>meeting_room</app-icon>
                        <div>
                            {{ level?.display_name || level?.name }},
                            {{ s.display_name || s.name }}
                        </div>
                    </div>
                </ng-container>
                <div class="flex items-center space-x-2">
                    <app-icon>place</app-icon>
                    <div>{{ location }}</div>
                </div>
            </div>
        </section>
        <footer class="p-2 w-full border-t border-base-200 mt-4">
            <button
                btn
                name="confirm-meeting"
                matRipple
                class="w-full"
                *ngIf="!(loading | async)"
                (click)="postForm()"
                i18n
            >
                Confirm
            </button>
            <!-- <button
                btn
                matRipple
                class="inverse w-full"
                *ngIf="loading | async"
                (click)="cancelPost()"
                i18n
            >
                Undo
            </button> -->
        </footer>
    `,
    styles: [
        `
            section > app-icon {
                font-size: 1.5rem;
            }

            h2 {
                font-size: 1.5rem;
                font-weight: medium;
                margin-bottom: 0.5rem;
            }

            h3 {
                font-size: 1.25rem;
                font-weight: medium;
                margin: 0.5rem 0;
            }
        `,
    ],
    providers: [SpacePipe],
})
export class MeetingFlowConfirmComponent extends AsyncHandler {
    @Input() public show_close: boolean = false;

    public readonly loading = this._event_form.loading;

    public readonly postForm = async () => {
        if (!this.space) {
            const result = await openConfirmModal(
                {
                    title: 'Make Booking without a Room',
                    content:
                        'You are creating a booking without a room, are you sure?',
                    icon: { content: 'event_available' },
                },
                this._dialog
            );
            if (result.reason !== 'done') return;
        }
        await this._event_form.postForm().catch((_) => {
            notifyError(_);
            throw _;
        });
        this.dismiss(true);
    };
    public readonly cancelPost = () => this._event_form.cancelPostForm();
    public readonly dismiss = (e?) => this._sheet_ref?.dismiss(e);

    private _space = this.event.resources[0];

    public get is_multiday() {
        return this.event.duration > 24 * 60;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public get formatted_recurrence() {
        return formatRecurrence({
            ...this.event.recurrence,
            start: this.event.date || this.event.recurrence.start,
        });
    }

    public get event(): CalendarEvent {
        return this._event_form.form.getRawValue() as any;
    }

    public get space() {
        return this._space;
    }

    public get level() {
        return this._org.levelWithID(this.space.zones);
    }

    public get location() {
        const building = this._org.buildings.find((_) =>
            this.space.zones.includes(_.id)
        );
        return building?.address || building?.display_name || building?.name;
    }

    constructor(
        @Optional() private _sheet_ref: MatBottomSheetRef,
        private _event_form: EventFormService,
        private _org: OrganisationService,
        private _space_pipe: SpacePipe,
        private _dialog: MatDialog,
        private _settings: SettingsService
    ) {
        super();
    }

    public async ngOnInit() {
        this._space =
            (await this._space_pipe.transform(this.event.resources[0].email)) ||
            this._space;
    }

    public optionList(item: CateringItem) {
        return item.option_list?.map((_) => _.name).join('\n');
    }
}
