import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';

import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
    AsyncHandler,
    Building,
    BuildingLevel,
    CalendarEvent,
    OrganisationService,
    SettingsService,
    Space,
    StaffUser,
    TIMEZONES_IANA,
    currentUser,
    formatDuration,
    getInvalidSignalFields,
    notifyError,
    unique,
} from '@placeos/common';
import {
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    EventFormService,
    SpacePipe,
    showEvent,
    showEventMetadata,
} from '@placeos/events';
import {
    DateFieldComponent,
    ImageListFieldComponent,
    RichTextInputComponent,
    TimeFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { differenceInMinutes, format, startOfDay } from 'date-fns';
import { EventStateService } from './event-state.service';

const EMPTY = [];

@Component({
    selector: 'app-event-manage',
    template: `
        @if (!loading()) {
            <div class="bg-base-100 absolute inset-0 overflow-auto">
                <header
                    class="bg-base-200 sticky top-0 z-10 mx-auto my-2 flex w-full max-w-[640px] items-center justify-between rounded-sm border-none px-4 py-2"
                >
                    <h2 class="text-xl font-medium">
                        {{
                            (model().id
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
                    class="mx-auto my-2 flex w-160 max-w-full flex-col px-4 pb-16"
                >
                    <section class="flex flex-col space-y-2">
                        <label for="title"
                            >{{ 'FORM.TITLE' | translate }}<span>*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.title"
                                placeholder="e.g. Team Meeting"
                            />
                            <mat-error>
                                {{ 'FORM.TITLE_REQUIRED' | translate }}
                            </mat-error>
                        </mat-form-field>
                        <label for="host"
                            >{{ 'FORM.HOST' | translate }}<span>*</span></label
                        >
                        <div class="pb-4">
                            <a-user-search-field
                                [formField]="form.organiser"
                            ></a-user-search-field>
                        </div>
                        <label for="tags">{{
                            'COMMON.TAGS' | translate
                        }}</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-chip-grid #chipList aria-label="Event Tags">
                                @for (tag of tag_list(); track tag) {
                                    <mat-chip-row
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
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="addTag($event)"
                                />
                            </mat-chip-grid>
                        </mat-form-field>
                        <div class="flex items-center space-x-2 py-4">
                            <settings-toggle
                                class="flex-1"
                                [label]="
                                    'CALENDAR_EVENT.GROUP_FEATURED' | translate
                                "
                                [formField]="form.featured"
                            >
                            </settings-toggle>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select [formField]="form.view_access">
                                    <mat-option value="PRIVATE">{{
                                        'APP.CONCIERGE.EVENTS_DRAFT' | translate
                                    }}</mat-option>
                                    <mat-option value="OPEN">{{
                                        'APP.CONCIERGE.EVENTS_PUBLISH'
                                            | translate
                                    }}</mat-option>
                                    <mat-option value="PUBLIC">{{
                                        'APP.CONCIERGE.EVENTS_PUBLISH_PUBLIC'
                                            | translate
                                    }}</mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <!-- END BASIC DETAILS -->
                        <div class="bg-base-200 h-px w-full"></div>
                        <h3 class="py-4 text-2xl font-medium">
                            {{ 'APP.CONCIERGE.EVENTS_DATE_TIME' | translate }}
                        </h3>
                        <div class="flex flex-wrap items-center sm:space-x-2">
                            <div class="relative min-w-[256px] flex-1">
                                <label for="date">
                                    {{ 'FORM.DATE' | translate }}<span>*</span>
                                </label>
                                <a-date-field
                                    [formField]="form.date"
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
                                    [formField]="form.date_end"
                                    [from]="start_date()"
                                    [to]="end_date"
                                >
                                    {{ 'FORM.DATE_ERROR' | translate }}
                                </a-date-field>
                            </div>
                        </div>
                        @if (!model().all_day) {
                            <div class="flex items-center space-x-2">
                                <div class="w-1/3 flex-1">
                                    <label for="start-time">
                                        {{ 'FORM.TIME_START' | translate }}
                                        <span>*</span>
                                    </label>
                                    <a-time-field
                                        name="start-time"
                                        [ngModel]="model().date"
                                        (ngModelChange)="
                                            model.update((m) => ({
                                                ...m,
                                                date: $event,
                                            }))
                                        "
                                        [disabled]="form.date().disabled()"
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
                                            model().date_end ||
                                            model().date +
                                                model().duration * 60 * 1000
                                        "
                                        (ngModelChange)="
                                            model.update((m) => ({
                                                ...m,
                                                date_end: $event,
                                            }))
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                        [from]="model().date + 30 * 60 * 1000"
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
                                <icon matPrefix class="text-2xl"> search </icon>
                                <input
                                    matInput
                                    [formField]="form.timezone"
                                    [placeholder]="
                                        'COMMON.TIMEZONE' | translate
                                    "
                                    [matAutocomplete]="auto"
                                />
                            </mat-form-field>
                            <mat-autocomplete #auto="matAutocomplete">
                                @for (tz of filtered_timezones(); track tz) {
                                    <mat-option [value]="tz">
                                        {{ tz }}
                                    </mat-option>
                                }
                                @if (!filtered_timezones().length) {
                                    <mat-option [disabled]="true">
                                        {{
                                            'COMMON.TIMEZONE_EMPTY' | translate
                                        }}
                                    </mat-option>
                                }
                            </mat-autocomplete>
                        </div>
                        <!-- END DATE TIME -->
                        <div class="bg-base-200 h-px w-full"></div>
                        <h3 class="py-4 text-2xl font-medium">
                            {{ 'COMMON.LOCATION' | translate }}
                        </h3>
                        <div class="flex items-center space-x-2 pb-2">
                            <button
                                btn
                                matRipple
                                class="flex-1"
                                [class.inverse]="false"
                                [class.inverse]="
                                    model().attendance_type !== 'ONSITE'
                                "
                                (click)="
                                    model.update((m) => ({
                                        ...m,
                                        attendance_type: 'ONSITE',
                                    }))
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
                                    model().attendance_type !== 'ONLINE'
                                "
                                (click)="
                                    model.update((m) => ({
                                        ...m,
                                        attendance_type: 'ONLINE',
                                    }))
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
                                    model().attendance_type !== 'ANY'
                                "
                                (click)="
                                    model.update((m) => ({
                                        ...m,
                                        attendance_type: 'ANY',
                                    }))
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
                        @if (model().attendance_type !== 'ONLINE') {
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
                                        building of building_list();
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
                                <div class="flex flex-2 flex-col">
                                    <label for="level">{{
                                        'RESOURCE.LEVEL' | translate
                                    }}</label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            [ngModel]="level_zone"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            (ngModelChange)="setLevel($event)"
                                            [placeholder]="
                                                'COMMON.LEVEL_SELECT'
                                                    | translate
                                            "
                                        >
                                            @for (
                                                level of active_levels();
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
                                <div class="flex flex-3 flex-col">
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
                                                available_spaces().length === 0
                                            "
                                            [placeholder]="
                                                'COMMON.ROOM_SELECT' | translate
                                            "
                                        >
                                            <mat-option
                                                ><i>{{
                                                    'COMMON.NONE' | translate
                                                }}</i></mat-option
                                            >
                                            @for (
                                                room of available_spaces();
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
                        <!-- END LOCATION -->
                        <div class="bg-base-200 h-px w-full"></div>
                        <h3 class="py-4 text-2xl font-medium">
                            {{ 'APP.CONCIERGE.EVENTS_INFO' | translate }}
                        </h3>
                        <ng-container>
                            <label for="description">
                                {{ 'COMMON.DESCRIPTION' | translate }}
                            </label>
                            <div class="mb-16">
                                <rich-text-input
                                    [formField]="form.body"
                                ></rich-text-input>
                            </div>
                            <label for="images">
                                {{ 'COMMON.IMAGES' | translate }}
                            </label>
                            <image-list-field
                                [formField]="form.images"
                            ></image-list-field>
                        </ng-container>
                    </section>
                    @if (!loading()) {
                        <footer
                            class="bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-full max-w-[640px] -translate-x-1/2 items-center justify-end rounded-sm border-none px-4 py-2"
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
                class="bg-base-100 absolute inset-0 flex flex-col items-center justify-center space-y-4"
            >
                <mat-spinner diameter="48"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.EVENTS_SAVING' | translate }}</p>
            </div>
        }
    `,
    styles: [``],
    imports: [
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MatProgressSpinnerModule,
        ImageListFieldComponent,
        RichTextInputComponent,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatChipsModule,
        MatAutocompleteModule,
        FormsModule,
        FormField,
        SettingsToggleComponent,
        DateFieldComponent,
        TimeFieldComponent,
        UserSearchFieldComponent,
        RouterModule,
    ],
})
export class EventManageComponent extends AsyncHandler implements OnInit {
    private _form_state = inject(EventFormService);
    private _state = inject(EventStateService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly loading = signal(false);
    public readonly resource = signal<string>('');

    public readonly form = this._form_state.form;
    public readonly model = this._form_state.model;
    private readonly _form_value = this.model;
    public readonly separators: number[] = [ENTER, COMMA, SPACE];
    public readonly building_list = this._org.building_list;
    public readonly active_levels = this._org.active_levels;
    public readonly available_spaces = this._form_state.available_spaces;
    public readonly tag_list = computed(
        () => this._form_value()?.tags || EMPTY,
    );
    public readonly filtered_timezones = computed(() => {
        const timezone = this._form_value()?.timezone || '';
        return TIMEZONES_IANA.filter((_) =>
            _.toLowerCase().includes(timezone.toLowerCase()),
        );
    });
    public readonly start_date = computed(() => this._form_value()?.date);

    public get max_duration() {
        return this._settings.get('app.events.max_duration') || 480;
    }

    public get use_24hr() {
        return this._settings.get('app.use_24_hour_time');
    }

    public get end_date() {
        return this._settings.get('app.events.available_period')
            ? startOfDay(Date.now()).valueOf() +
                  this._settings.get('app.events.available_period') *
                      24 *
                      60 *
                      60 *
                      1000
            : undefined;
    }

    public get building_zone() {
        const level = this.level_zone;
        const building = this._org.buildings.find(
            (b) => b.id === level?.parent_id,
        );
        return building || this._org.building;
    }

    public get level_zone() {
        const zones = this._form_state.options().zones || [];
        return this._org.levelWithID(zones);
    }

    public readonly duration_info = (time: number) => {
        const date = this.model().date;
        if (format(date, 'yyyy-MM-dd') !== format(time, 'yyyy-MM-dd'))
            return '';
        const diff = differenceInMinutes(time, date);
        return ` (${formatDuration({
            hours: Math.floor(diff / 60),
            minutes: diff % 60,
        })})`;
    };

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        const space_pipe = new SpacePipe();
        this.model.update((m) => ({
            ...m,
            location:
                this._org.building.address || this._org.building.display_name,
            organiser: currentUser(),
            attendance_type: 'ONSITE',
            shared_event: true,
        }));
        if (!this.model().view_access)
            this.model.update((m) => ({ ...m, view_access: 'OPEN' }));
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe(async (params) => {
                if (params.has('id')) {
                    let booking = await showEvent(params.get('id'), {
                        calendar: this._state.calendar,
                    });
                    const space = await space_pipe.transform(
                        this._state.calendar,
                    );
                    const metadata = await showEventMetadata(
                        params.get('id'),
                        space?.id || booking.system?.id,
                        { ical_uid: booking.ical_uid },
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
                    this.resource.set(
                        booking.resources.find(
                            (_) => _.email !== this._state.calendar,
                        )?.email,
                    );
                    this.model.update((m) => ({
                        ...m,
                        tags: booking.extension_data?.tags || [],
                        organiser: new StaffUser({
                            id: booking.organiser?.id,
                            email: booking.host,
                            name: booking.organiser?.name,
                        }),
                        resources: booking.resources.filter(
                            (_) => _.email !== this._state.calendar,
                        ),
                        ...metadata,
                    }));
                    if (!this.model().view_access)
                        this.model.update((m) => ({
                            ...m,
                            view_access: 'OPEN',
                        }));
                }
            }),
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
        if (!this.form || !this.form.tags) return;
        const input = event.chipInput.inputElement;
        const value = event.value;
        const feature_list = [...this.tag_list()];
        if ((value || '').trim()) {
            feature_list.push(value);
            this.model.update((m) => ({ ...m, tags: feature_list }));
        }
        if (input) input.value = '';
    }

    /**
     * Remove tag from the list
     * @param existing_tag Feature to remove
     */
    public removeTag(existing_tag: string): void {
        if (!this.form || !this.form.tags) return;
        const tag_list = [...this.tag_list()];
        const index = tag_list.indexOf(existing_tag);

        if (index >= 0) {
            tag_list.splice(index, 1);
            this.model.update((m) => ({ ...m, tags: tag_list }));
        }
    }

    public async save() {
        this.form().markAsTouched();
        if (!this.form().valid()) {
            return notifyError(
                `Some form fields are invalid. [${getInvalidSignalFields(
                    this.form,
                    this.model,
                )}]`,
            );
        }
        this.loading.set(true);
        let resources = this.model().resources;
        const space = await new SpacePipe().transform(this._state.calendar);
        resources.push(
            space ||
                new Space({
                    id: this._state.calendar,
                    email: this._state.calendar,
                }),
        );
        if (this.resource()) {
            const resource = await new SpacePipe().transform(this.resource());
            resources.push(resource);
        }
        resources = unique(resources, 'email');
        this.model.update((m) => ({
            ...m,
            resources,
            creator: currentUser()?.email,
            host: this._state.calendar,
            shared_event: true,
        }));
        const date = this.model().date;
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
}
