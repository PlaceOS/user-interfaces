import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, OnInit, inject, signal } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AsyncHandler,
    SettingsService,
    TIMEZONES_IANA,
    currentUser,
    firstTruthyValueFrom,
    formatDuration,
    getInvalidFields,
    notifyError,
    unique,
} from '@placeos/common';
import {
    CalendarEvent,
    EventFormService,
    showEvent,
    showEventMetadata,
} from '@placeos/events';
import {
    Building,
    BuildingLevel,
    OrganisationService,
} from '@placeos/organisation';
import { Space, SpacePipe } from '@placeos/spaces';
import { StaffUser } from '@placeos/users';
import { differenceInMinutes, format, startOfDay } from 'date-fns';
import { lastValueFrom } from 'rxjs';
import { EventStateService } from './event-state.service';

const EMPTY = [];

@Component({
    selector: 'app-event-manage',
    template: `
        @if (!loading()) {
            <div class="absolute inset-0 overflow-auto bg-base-100">
                <header
                    class="sticky top-0 z-10 mx-auto my-2 flex w-full max-w-[640px] items-center justify-between rounded border-none bg-base-200 px-4 py-2"
                >
                    <h2 class="text-xl font-medium">
                        {{
                            (form.value.id
                                ? 'APP.CONCIERGE.EVENTS_EDIT'
                                : 'APP.CONCIERGE.EVENTS_NEW'
                            ) | translate
                        }}
                    </h2>
                    @if (!loading()) {
                        <a
                            icon
                            matRipple
                            [routerLink]="['/entertainment', 'events']"
                        >
                            <icon>close</icon>
                        </a>
                    }
                </header>
                <form
                    class="mx-auto my-2 flex w-[40rem] max-w-full flex-col px-4 pb-16"
                    [formGroup]="form"
                >
                    <section class="flex flex-col space-y-2">
                        <label for="title"
                            >{{ 'FORM.TITLE' | translate }}<span>*</span></label
                        >
                        <ng-container>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="title"
                                    formControlName="title"
                                    placeholder="e.g. Team Meeting"
                                />
                                <mat-error>
                                    {{ 'FORM.TITLE_ERROR' | translate }}
                                </mat-error>
                            </mat-form-field>
                            <label for="host"
                                >{{ 'FORM.HOST' | translate
                                }}<span>*</span></label
                            >
                            <div class="pb-4">
                                <a-user-search-field
                                    name="host"
                                    formControlName="organiser"
                                ></a-user-search-field>
                            </div>
                            <label for="tags">{{
                                'COMMON.TAGS' | translate
                            }}</label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-chip-grid
                                    #chipList
                                    aria-label="Event Tags"
                                >
                                    @for (tag of tag_list; track tag) {
                                        <mat-chip-row
                                            [selectable]="true"
                                            [removable]="true"
                                            (removed)="removeTag(tag)"
                                        >
                                            {{ tag }}
                                            <icon matChipRemove>close</icon>
                                        </mat-chip-row>
                                    }
                                    <input
                                        placeholder="Add new tags relevant to this event..."
                                        [matChipInputFor]="chipList"
                                        [matChipInputSeparatorKeyCodes]="
                                            separators
                                        "
                                        [matChipInputAddOnBlur]="true"
                                        (matChipInputTokenEnd)="addTag($event)"
                                    />
                                </mat-chip-grid>
                            </mat-form-field>
                            <div class="flex items-center space-x-4 py-4">
                                <settings-toggle
                                    class="flex-1"
                                    [name]="
                                        'CALENDAR_EVENT.GROUP_FEATURED'
                                            | translate
                                    "
                                    formControlName="featured"
                                >
                                </settings-toggle>
                                <settings-toggle
                                    class="flex-1"
                                    [name]="
                                        'APP.CONCIERGE.EVENTS_PUBLISH'
                                            | translate
                                    "
                                    [ngModel]="
                                        form.value.view_access === 'OPEN'
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    (ngModelChange)="
                                        form.patchValue({
                                            view_access: $event
                                                ? 'OPEN'
                                                : 'PRIVATE',
                                        })
                                    "
                                >
                                </settings-toggle>
                            </div>
                        </ng-container>
                        <!-- END BASIC DETAILS -->
                        <div class="h-px w-full bg-base-200"></div>
                        <h3 class="py-4 text-2xl font-medium">
                            {{ 'APP.CONCIERGE.EVENTS_DATE_TIME' | translate }}
                        </h3>
                        <ng-container>
                            <div
                                class="flex flex-wrap items-center sm:space-x-2"
                            >
                                <div class="relative min-w-[256px] flex-1">
                                    <label for="date">
                                        {{ 'FORM.DATE' | translate
                                        }}<span>*</span>
                                    </label>
                                    <a-date-field
                                        name="date"
                                        formControlName="date"
                                        [to]="end_date"
                                    >
                                        {{ 'FORM.DATE_ERROR' | translate }}
                                    </a-date-field>
                                </div>
                                <div class="relative min-w-[256px] flex-1">
                                    <label for="date">
                                        {{ 'FORM.DATE_END' | translate }}
                                        <span>*</span>
                                    </label>
                                    <a-date-field
                                        name="date"
                                        formControlName="date_end"
                                        [from]="start_date"
                                        [to]="end_date"
                                    >
                                        {{ 'FORM.DATE_ERROR' | translate }}
                                    </a-date-field>
                                </div>
                            </div>
                            @if (!form.value.all_day) {
                                <div class="flex items-center space-x-2">
                                    <div class="w-1/3 flex-1">
                                        <label for="start-time">
                                            {{ 'FORM.TIME_START' | translate }}
                                            <span>*</span>
                                        </label>
                                        <a-time-field
                                            name="start-time"
                                            [ngModel]="form.getRawValue().date"
                                            (ngModelChange)="
                                                form.patchValue({
                                                    date: $event,
                                                })
                                            "
                                            [disabled]="
                                                form.controls.date.disabled
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            [use_24hr]="use_24hr"
                                        ></a-time-field>
                                    </div>
                                    <div class="w-1/3 flex-1">
                                        <label for="end-time">
                                            {{ 'FORM.TIME_END' | translate }}
                                            <span>*</span>
                                        </label>
                                        <a-time-field
                                            name="end-time"
                                            [ngModel]="
                                                form.value.date_end ||
                                                form.value.date +
                                                    form.value.duration *
                                                        60 *
                                                        1000
                                            "
                                            (ngModelChange)="
                                                form.patchValue({
                                                    date_end: $event,
                                                })
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            [from]="
                                                form?.getRawValue()?.date +
                                                30 * 60 * 1000
                                            "
                                            [use_24hr]="use_24hr"
                                            [extra_info_fn]="duration_info"
                                        ></a-time-field>
                                    </div>
                                </div>
                            }
                            <div class="flex flex-col">
                                <label for="display-name">
                                    {{ 'COMMON.TIMEZONE' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <icon matPrefix class="text-2xl">
                                        search
                                    </icon>
                                    <input
                                        matInput
                                        formControlName="timezone"
                                        [placeholder]="
                                            'COMMON.TIMEZONE' | translate
                                        "
                                        [matAutocomplete]="auto"
                                    />
                                </mat-form-field>
                                <mat-autocomplete #auto="matAutocomplete">
                                    @for (tz of filtered_timezones; track tz) {
                                        <mat-option [value]="tz">
                                            {{ tz }}
                                        </mat-option>
                                    }
                                    @if (!timezones.length) {
                                        <mat-option [disabled]="true">
                                            {{
                                                'COMMON.TIMEZONE_EMPTY'
                                                    | translate
                                            }}
                                        </mat-option>
                                    }
                                </mat-autocomplete>
                            </div>
                        </ng-container>
                        <!-- END DATE TIME -->
                        <div class="h-px w-full bg-base-200"></div>
                        <h3 class="py-4 text-2xl font-medium">
                            {{ 'COMMON.LOCATION' | translate }}
                        </h3>
                        <ng-container>
                            <div class="flex items-center space-x-2 pb-2">
                                <button
                                    btn
                                    matRipple
                                    class="flex-1"
                                    [class.inverse]="false"
                                    [class.inverse]="
                                        form.value.attendance_type !== 'ONSITE'
                                    "
                                    (click)="
                                        form.patchValue({
                                            attendance_type: 'ONSITE',
                                        })
                                    "
                                >
                                    <icon class="text-2xl">domain</icon>
                                    <div class="mx-2">
                                        {{
                                            'APP.CONCIERGE.EVENTS_LOCATION_ONSITE'
                                                | translate
                                        }}
                                    </div>
                                </button>
                                <button
                                    btn
                                    matRipple
                                    class="flex-1"
                                    [class.inverse]="
                                        form.value.attendance_type !== 'ONLINE'
                                    "
                                    (click)="
                                        form.patchValue({
                                            attendance_type: 'ONLINE',
                                        })
                                    "
                                >
                                    <icon class="text-2xl">laptop_mac</icon>
                                    <div class="mx-2">
                                        {{
                                            'APP.CONCIERGE.EVENTS_LOCATION_ONLINE'
                                                | translate
                                        }}
                                    </div>
                                </button>
                                <button
                                    btn
                                    matRipple
                                    class="flex-1"
                                    [class.inverse]="
                                        form.value.attendance_type !== 'ANY'
                                    "
                                    (click)="
                                        form.patchValue({
                                            attendance_type: 'ANY',
                                        })
                                    "
                                >
                                    <icon class="text-2xl">add</icon>
                                    <div class="mx-2">
                                        {{
                                            'APP.CONCIERGE.EVENTS_LOCATION_BOTH'
                                                | translate
                                        }}
                                    </div>
                                </button>
                            </div>
                            @if (form.value.attendance_type !== 'ONLINE') {
                                <label for="location">
                                    {{ 'RESOURCE.BUILDING' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <mat-select
                                        [ngModel]="building_zone"
                                        [ngModelOptions]="{ standalone: true }"
                                        (ngModelChange)="setBuilding($event)"
                                        [placeholder]="
                                            'COMMON.BUILDING_SELECT' | translate
                                        "
                                    >
                                        @for (
                                            building of building_list | async;
                                            track building
                                        ) {
                                            <mat-option [value]="building">
                                                {{
                                                    building.display_name ||
                                                        building.name
                                                }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                                <div class="flex space-x-2">
                                    <div class="flex flex-[2] flex-col">
                                        <label for="level">{{
                                            'RESOURCE.LEVEL' | translate
                                        }}</label>
                                        <mat-form-field appearance="outline">
                                            <mat-select
                                                [ngModel]="level_zone"
                                                [ngModelOptions]="{
                                                    standalone: true,
                                                }"
                                                (ngModelChange)="
                                                    setLevel($event)
                                                "
                                                [placeholder]="
                                                    'COMMON.LEVEL_SELECT'
                                                        | translate
                                                "
                                            >
                                                @for (
                                                    level of active_levels
                                                        | async;
                                                    track level
                                                ) {
                                                    <mat-option [value]="level">
                                                        {{
                                                            level.display_name ||
                                                                level.name
                                                        }}
                                                    </mat-option>
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div class="flex flex-[3] flex-col">
                                        <label for="level">{{
                                            'RESOURCE.ROOM' | translate
                                        }}</label>
                                        <mat-form-field appearance="outline">
                                            <mat-select
                                                [(ngModel)]="resource"
                                                [ngModelOptions]="{
                                                    standalone: true,
                                                }"
                                                [disabled]="
                                                    (available_spaces | async)
                                                        ?.length === 0
                                                "
                                                [placeholder]="
                                                    'COMMON.ROOM_SELECT'
                                                        | translate
                                                "
                                            >
                                                <mat-option
                                                    ><i>{{
                                                        'COMMON.NONE'
                                                            | translate
                                                    }}</i></mat-option
                                                >
                                                @for (
                                                    room of available_spaces
                                                        | async;
                                                    track room
                                                ) {
                                                    <mat-option
                                                        [value]="room.email"
                                                    >
                                                        {{
                                                            room.display_name ||
                                                                room.name
                                                        }}
                                                    </mat-option>
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                            }
                        </ng-container>
                        <!-- END LOCATION -->
                        <div class="h-px w-full bg-base-200"></div>
                        <h3 class="py-4 text-2xl font-medium">
                            {{ 'APP.CONCIERGE.EVENTS_INFO' | translate }}
                        </h3>
                        <ng-container>
                            <label for="description">
                                {{ 'COMMON.DESCRIPTION' | translate }}
                            </label>
                            <div class="mb-16">
                                <rich-text-input
                                    formControlName="body"
                                ></rich-text-input>
                            </div>
                            <label for="images">
                                {{ 'COMMON.IMAGES' | translate }}
                            </label>
                            <image-list-field
                                formControlName="images"
                            ></image-list-field>
                        </ng-container>
                    </section>
                    @if (!loading()) {
                        <footer
                            class="fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-full max-w-[640px] -translate-x-1/2 items-center justify-end rounded border-none bg-base-200 px-4 py-2"
                        >
                            <button btn matRipple class="w-32" (click)="save()">
                                {{ 'COMMON.SAVE' | translate }}
                            </button>
                        </footer>
                    }
                </form>
            </div>
        } @else {
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-base-100"
            >
                <mat-spinner diameter="48"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.EVENTS_SAVING' | translate }}</p>
            </div>
        }
    `,
    styles: [``],
    standalone: false,
})
export class EventManageComponent extends AsyncHandler implements OnInit {
    private _form_state = inject(EventFormService);
    private _state = inject(EventStateService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly loading = signal(false);
    public timezones: string[] = [];
    public resource: string;
    public filtered_timezones: string[] = [];

    public readonly form = this._form_state.form;
    public readonly separators: number[] = [ENTER, COMMA, SPACE];
    public readonly building_list = this._org.building_list;
    public readonly active_levels = this._org.active_levels;
    public readonly available_spaces = this._form_state.available_spaces;

    public get tag_list() {
        return this.form.getRawValue().tags || EMPTY;
    }

    public get max_duration() {
        return this._settings.get('app.events.max_duration') || 480;
    }

    public get use_24hr() {
        return this._settings.get('app.use_24_hour_time');
    }

    public get building_zone() {
        const level = this.level_zone;
        const building = this._org.buildings.find(
            (b) => b.id === level?.parent_id,
        );
        return building || this._org.building;
    }

    public get level_zone() {
        const zones = this._form_state.options.zones || [];
        const level = this._org.levelWithID(zones);
        return level;
    }

    public readonly duration_info = (time: number) => {
        const date = this.form.getRawValue().date;
        if (format(date, 'yyyy-MM-dd') !== format(time, 'yyyy-MM-dd'))
            return '';
        const diff = differenceInMinutes(time, date);
        return ` (${formatDuration({
            hours: Math.floor(diff / 60),
            minutes: diff % 60,
        })})`;
    };

    public async ngOnInit() {
        await firstTruthyValueFrom(this._org.initialised);
        this.form.patchValue({
            location:
                this._org.building.address || this._org.building.display_name,
            organiser: currentUser(),
            attendance_type: 'ONSITE',
            shared_event: true,
        });
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe(async (params) => {
                if (params.has('id')) {
                    let booking = await lastValueFrom(
                        showEvent(params.get('id'), {
                            calendar: this._state.calendar,
                        }),
                    );
                    const metadata = await lastValueFrom(
                        showEventMetadata(
                            params.get('id'),
                            booking.system?.id,
                            { ical_uid: booking.ical_uid },
                        ),
                    ).catch(() => ({}));
                    booking = new CalendarEvent({
                        ...booking,
                        extension_data: {
                            ...booking.extension_data,
                            ...metadata,
                        },
                    });
                    if (!booking)
                        return this._router.navigate([
                            '/entertainment',
                            'events',
                        ]);
                    this._form_state.newForm(booking);
                    this.resource = booking.resources.find(
                        (_) => _.email !== this._state.calendar,
                    )?.email;
                    this.form.patchValue({
                        tags: booking.extension_data?.tags || [],
                        organiser: new StaffUser({
                            id: booking.organiser?.id,
                            email: booking.host,
                            name: booking.organiser?.name,
                        }),
                        resources: booking.resources.filter(
                            (_) => _.email !== this._state.calendar,
                        ),
                    });
                }
            }),
        );
        this._updateTimezoneList();
        this.subscription(
            'tz-change',
            this.form.valueChanges.subscribe(() => this._updateTimezoneList()),
        );
    }

    public setBuilding(bld: Building) {
        this._org.building = bld;
    }

    public setLevel(level: BuildingLevel) {
        const new_zones = unique([
            this._org.organisation.id,
            this._org.building.parent_id,
            this._org.building.id,
            level.id,
        ]);
        this._form_state.setOptions({ zones: [level.id] });
    }

    /**
     * Add a feature to the list of features for the item
     * @param event Input event
     */
    public addTag(event: MatChipInputEvent): void {
        if (!this.form || !this.form.controls.tags) return;
        const input = event.chipInput.inputElement;
        const value = event.value;
        const feature_list = this.tag_list;
        if ((value || '').trim()) {
            feature_list.push(value);
            this.form.controls.tags.setValue(feature_list);
        }
        if (input) input.value = '';
    }

    /**
     * Remove tag from the list
     * @param existing_tag Feature to remove
     */
    public removeTag(existing_tag: string): void {
        if (!this.form || !this.form.controls.tags) return;
        const tag_list = this.tag_list;
        const index = tag_list.indexOf(existing_tag);

        if (index >= 0) {
            tag_list.splice(index, 1);
            this.form.controls.tags.setValue(tag_list);
        }
    }

    public async save() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return notifyError(
                `Some form fields are invalid. [${getInvalidFields(this.form)}]`,
            );
        }
        this.loading.set(true);
        let resources = this.form.getRawValue().resources;
        const space = await new SpacePipe().transform(this._state.calendar);
        resources.push(
            space ||
                new Space({
                    id: this._state.calendar,
                    email: this._state.calendar,
                }),
        );
        if (this.resource) {
            const resource = await new SpacePipe().transform(this.resource);
            resources.push(resource);
        }
        resources = unique(resources, 'email');
        this.form.patchValue({
            resources,
            host: this._state.calendar,
            shared_event: true,
        });
        const date = this.form.getRawValue().date;
        const res = await this._form_state
            .postForm(false, [this._state.calendar], true, true)
            .catch((e) => notifyError(e));
        this._state.changed();
        this.loading.set(false);
        if (res) {
            this._router.navigate(['/entertainment', 'events'], {
                queryParams: { range: startOfDay(date).valueOf() },
            });
        }
    }

    private _updateTimezoneList() {
        const timezone = this.form?.value?.timezone || '';
        this.timezones = TIMEZONES_IANA;
        this.filtered_timezones = this.timezones.filter((_) =>
            _.toLowerCase().includes(timezone.toLowerCase()),
        );
    }
}
