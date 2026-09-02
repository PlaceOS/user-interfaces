import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, inject, model } from '@angular/core';
import {
    MatBottomSheetModule,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    AsyncHandler,
    CalendarEvent,
    CateringItem,
    OrganisationService,
    SettingsService,
    Space,
    formatRecurrence,
    fromEventRecurrence,
    getTimezoneOffsetString,
    i18n,
    notifyError,
} from '@placeos/common';
import { EventFormService, multipleSpacesEnabled } from '@placeos/events';

import {
    IconComponent,
    TranslatePipe,
    openConfirmModal,
} from '@placeos/components';
import { SpacePipe } from '@placeos/events';

@Component({
    selector: 'meeting-flow-confirm',
    template: `
        <header
            class="bg-base-200 sticky top-2 z-10 mx-auto mb-4 flex h-14 w-full max-w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
        >
            <h2 class="m-0 flex-1 text-xl font-medium capitalize">
                {{ 'APP.WORKPLACE.MEETING_CONFIRM' | translate }}
            </h2>
            @if (loading()) {
                <mat-spinner diameter="32"></mat-spinner>
            }
            @if (show_close() && !loading()) {
                <button icon matRipple (click)="dismiss()">
                    <icon class="text-2xl">close</icon>
                </button>
            }
        </header>
        <section period class="flex space-x-1 px-2">
            <icon class="text-success mt-1">done</icon>
            <div details class="leading-6">
                <h3>{{ event.title || 'Meeting Details' }}</h3>
                <div class="flex items-center space-x-2">
                    <icon class="text-2xl">today</icon>
                    <div date>{{ event.date | date: 'fullDate' }}</div>
                </div>
                @if (event.recurrence?.pattern) {
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">update</icon>
                        <div date>{{ formatted_recurrence }}</div>
                    </div>
                }
                <div class="flex items-center space-x-2">
                    <icon class="text-2xl">schedule</icon>
                    <div class="flex flex-col leading-tight">
                        <div time>{{ formattedTime() }}</div>
                        @if (timezone) {
                            <div class="text-xs opacity-30">
                                {{ formattedTime(tz) }}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
        @if (event.attendees?.length) {
            <section attendees class="mt-2 flex space-x-1 px-2">
                <icon class="text-success mt-1">done</icon>
                <div details class="leading-6">
                    <h3>
                        {{
                            'CALENDAR_EVENT.ATTENDEE_COUNT'
                                | translate: { count: event.attendees.length }
                        }}
                    </h3>
                    <div attendee-list>
                        <mat-chip-set aria-label="User selection">
                            @for (user of event.attendees; track user) {
                                <mat-chip>
                                    <div class="flex items-center">
                                        <icon class="mr-2">business</icon>
                                        <div class="max-w-[50vw] truncate">
                                            {{ user.name || user.email }}
                                        </div>
                                    </div>
                                </mat-chip>
                            }
                        </mat-chip-set>
                    </div>
                </div>
            </section>
        }
        @if (event.resources?.length) {
            <section spaces class="mt-2 flex space-x-1 px-2">
                <icon class="text-success mt-1">done</icon>
                <div details class="leading-6">
                    <h3>
                        {{ 'APP.WORKPLACE.MEETING_BOOKED_ROOM' | translate }}
                    </h3>
                    @for (s of event.resources; track s) {
                        <div class="flex items-start space-x-2">
                            <icon class="text-2xl">meeting_room</icon>
                            <div class="flex flex-col">
                                <div>
                                    {{ spaceLocation(s) }} /
                                    {{ s.display_name || s.name }}
                                </div>
                                @if (roomTime(s); as room_time) {
                                    <div room-time class="text-xs opacity-60">
                                        {{ room_time }}
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>
            </section>
        }
        @if (requires_approval) {
            <section class="px-2 pt-4">
                <div
                    class="bg-warning text-warning-content rounded-sm border-none! px-2 py-1 text-center text-sm"
                >
                    {{ 'CALENDAR_EVENT.APPROVAL_REQUIRED_MSG' | translate }}
                </div>
            </section>
        }
        <footer class="border-base-200 mt-4 w-full border-t p-2">
            <button
                btn
                name="confirm-meeting"
                matRipple
                class="w-full"
                [disabled]="loading()"
                (click)="postForm()"
            >
                {{ 'COMMON.CONFIRM' | translate }}
            </button>
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
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        TranslatePipe,
        IconComponent,
        MatChipsModule,
        MatBottomSheetModule,
    ],
})
export class MeetingFlowConfirmComponent
    extends AsyncHandler
    implements OnInit
{
    private _sheet_ref = inject(MatBottomSheetRef, { optional: true });
    private _event_form = inject(EventFormService);
    private _org = inject(OrganisationService);
    private _space_pipe = inject(SpacePipe);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);

    public readonly show_close = model(false);

    private _date: DatePipe = new DatePipe('en');

    public readonly loading = this._event_form.loading;

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
        if (multipleSpacesEnabled(this._settings)) {
            return this.event.timezone || '';
        }
        return this._settings.get('app.events.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public get tz() {
        const tz = this.timezone;
        if (!tz) return '';
        return getTimezoneOffsetString(tz, new Date(this.event.date));
    }

    public get formatted_recurrence() {
        const recurrence_start = this.event.recurrence.start || this.event.date;
        return formatRecurrence(
            fromEventRecurrence({
                ...this.event.recurrence,
                start: recurrence_start,
            }),
            recurrence_start,
        );
    }

    public get event(): CalendarEvent {
        return this._event_form.model() as any;
    }

    public get space() {
        return this._space;
    }

    public get level() {
        return this._org.levelWithID(this.space.zones);
    }

    /** Get the region, building and level label for a room. */
    public spaceLocation(space: Space) {
        return this._org.locationWithID(space.zones).label;
    }

    /** Format a room's local time when it differs from the organiser's. */
    public roomTime(space: Space): string {
        if (!multipleSpacesEnabled(this._settings) || this.event.all_day) {
            return '';
        }
        const room_timezone = this._org.locationWithID(space.zones).building
            ?.timezone;
        const user_timezone =
            this.event.timezone ||
            Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (!room_timezone || !user_timezone) return '';
        try {
            const date = new Date(this.event.date);
            const room_offset = getTimezoneOffsetString(room_timezone, date);
            const user_offset = getTimezoneOffsetString(user_timezone, date);
            return room_offset === user_offset
                ? ''
                : this.formattedTime(room_offset);
        } catch {
            return '';
        }
    }

    public get location() {
        const building = this._org.buildings.find((_) =>
            this.space.zones.includes(_.id),
        );
        return building?.address || building?.display_name || building?.name;
    }

    public async ngOnInit() {
        this._space =
            (await this._space_pipe.transform(
                this.event.resources[0]?.email,
            )) || this._space;
    }

    public optionList(item: CateringItem) {
        return item.option_list?.map((_) => _.name).join('\n');
    }
}
