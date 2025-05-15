import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, Optional } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { CateringItem } from '@placeos/catering';
import {
    AsyncHandler,
    SettingsService,
    formatRecurrence,
    fromEventRecurrence,
    getTimezoneOffsetString,
    i18n,
    notifyError,
} from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import { CalendarEvent, EventFormService } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';

import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';

@Component({
    selector: 'meeting-flow-confirm',
    template: `
        <button
            icon
            matRipple
            class="absolute right-2 top-2"
            *ngIf="show_close"
            (click)="dismiss()"
        >
            <icon class="text-2xl">close</icon>
        </button>
        <header class="mt-4 flex items-center justify-between px-4">
            <h2>{{ 'APP.WORKPLACE.MEETING_CONFIRM' | translate }}</h2>
            <mat-spinner diameter="32" *ngIf="loading | async"></mat-spinner>
        </header>
        <section period class="flex space-x-1 px-2">
            <icon class="mt-1 text-success">done</icon>
            <div details class="leading-6">
                <h3>{{ event.title || 'Meeting Details' }}</h3>
                <div class="flex items-center space-x-2">
                    <icon class="text-2xl">today</icon>
                    <div date>{{ event.date | date: 'fullDate' }}</div>
                </div>
                <div
                    class="flex items-center space-x-2"
                    *ngIf="event.recurrence?.pattern"
                >
                    <icon class="text-2xl">update</icon>
                    <div date>{{ formatted_recurrence }}</div>
                </div>
                <div class="flex items-center space-x-2">
                    <icon class="text-2xl">schedule</icon>
                    <div class="flex flex-col leading-tight">
                        <div time>{{ formattedTime() }}</div>
                        <div class="text-xs opacity-30" *ngIf="timezone">
                            {{ formattedTime(tz) }}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section
            attendees
            class="flex space-x-1 px-2"
            *ngIf="event.attendees?.length"
        >
            <icon class="mt-1 text-success">done</icon>
            <div details class="leading-6">
                <h3>
                    {{
                        'CALENDAR_EVENT.ATTENDEE_COUNT'
                            | translate: { count: event.attendees.length }
                    }}
                </h3>
                <div attendee-list>
                    <mat-chip-list #chipList aria-label="User selection">
                        <mat-chip *ngFor="let user of event.attendees">
                            <div class="flex items-center">
                                <icon class="mr-2">business</icon>
                                {{ user.name || user.email }}
                            </div>
                        </mat-chip>
                    </mat-chip-list>
                </div>
            </div>
        </section>
        <section spaces class="flex space-x-1 px-2" *ngIf="space?.id">
            <icon class="mt-1 text-success">done</icon>
            <div details class="leading-6">
                <h3>{{ 'APP.WORKPLACE.MEETING_BOOKED_ROOM' | translate }}</h3>
                <ng-container *ngFor="let s of event.resources">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">meeting_room</icon>
                        <div>
                            {{ level?.display_name || level?.name }},
                            {{ s.display_name || s.name }}
                        </div>
                    </div>
                </ng-container>
                <div class="flex items-center space-x-2">
                    <icon class="text-2xl">place</icon>
                    <div>{{ location }}</div>
                </div>
            </div>
        </section>
        <section class="px-2 pt-4">
            <div
                *ngIf="requires_approval"
                class="rounded !border-none bg-warning px-2 py-1 text-center text-sm text-warning-content"
            >
                {{ 'CALENDAR_EVENT.APPROVAL_REQUIRED_MSG' | translate }}
            </div>
        </section>
        <footer class="mt-4 w-full border-t border-base-200 p-2">
            <button
                btn
                name="confirm-meeting"
                matRipple
                class="w-full"
                *ngIf="!(loading | async)"
                (click)="postForm()"
            >
                {{ 'COMMON.CONFIRM' | translate }}
            </button>
            <!-- <button
                btn
                matRipple
                class="inverse w-full"
                *ngIf="loading | async"
                (click)="cancelPost()"

            >
                Undo
            </button> -->
        </footer>
    `,
    styles: [
        `
            section > icon {
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
    standalone: false,
})
export class MeetingFlowConfirmComponent
    extends AsyncHandler
    implements OnInit
{
    @Input() public show_close = false;

    private _date: DatePipe = new DatePipe('en');

    public readonly loading = this._event_form.loading$;

    public readonly postForm = async () => {
        if (!this.space) {
            const result = await openConfirmModal(
                {
                    title: i18n('APP.WORKPLACE.MEETING_WITHOUT_ROOM_TITLE'),
                    content: i18n('APP.WORKPLACE.MEETING_WITHOUT_ROOM_MSG'),
                    icon: { content: 'event_available' },
                },
                this._dialog,
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

    public get requires_approval() {
        return this.event.resources.some((s) => s.approval);
    }

    public formattedTime(tz?: string) {
        const date = this.event.date;
        const date_end = this.event.date_end;
        const all_day = this.event.all_day;
        const tz_format = this._date.transform(date, 'zzzz', tz);
        const start_date = this._date.transform(date, 'MMM d', tz);
        const start_time = this._date.transform(date, this.time_format, tz);
        const end_date = this._date.transform(date_end, 'MMM d', tz);
        const end_time = this._date.transform(date_end, this.time_format, tz);

        if (this.is_multiday) {
            return `${start_date}${all_day ? '' : ', ' + start_time} - ${end_date}${all_day ? '' : ', ' + end_time}`;
        } else if (all_day) {
            return i18n('COMMON.ALL_DAY');
        }
        return `${start_time} - ${end_time} ${'(' + tz_format + ')'}`;
    }

    private _space = this.event.resources[0];

    public get is_multiday() {
        return this.event.duration > 24 * 60;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public get timezone() {
        return this._settings.get('app.events.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public get tz() {
        const tz = this.timezone;
        if (!tz) return '';
        return getTimezoneOffsetString(tz);
    }

    public get formatted_recurrence() {
        return formatRecurrence(
            fromEventRecurrence({
                ...this.event.recurrence,
                start: this.event.date || this.event.recurrence.start,
            }),
        );
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
            this.space.zones.includes(_.id),
        );
        return building?.address || building?.display_name || building?.name;
    }

    constructor(
        @Optional() private _sheet_ref: MatBottomSheetRef,
        private _event_form: EventFormService,
        private _org: OrganisationService,
        private _space_pipe: SpacePipe,
        private _dialog: MatDialog,
        private _settings: SettingsService,
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
