import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import {
    BookingFormService,
    removeBooking,
    showBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    SettingsService,
    TIMEZONES_IANA,
    currentUser,
    getInvalidFields,
    notifyError,
    randomString,
    unique,
} from '@placeos/common';
import {
    Building,
    BuildingLevel,
    OrganisationService,
} from '@placeos/organisation';
import { first, startWith, take } from 'rxjs/operators';
import { EventStateService } from './event-state.service';
import {
    differenceInMinutes,
    format,
    formatDuration,
    startOfDay,
} from 'date-fns';
import { CalendarEvent, EventFormService, removeEvent } from '@placeos/events';
import { StaffUser, User } from '@placeos/users';

const EMPTY = [];

@Component({
    selector: 'app-event-manage',
    template: `
        <div
            class="absolute inset-0 bg-base-100 overflow-auto"
            *ngIf="!loading; else load_state"
        >
            <a
                icon
                matRipple
                class="sticky top-2 right-2 ml-auto"
                [routerLink]="['/entertainment', 'events']"
            >
                <app-icon>close</app-icon>
            </a>
            <form
                class="flex flex-col w-[40rem] max-w-full mx-auto px-4"
                [formGroup]="form"
            >
                <h3 class="py-4 text-2xl font-medium">
                    {{ form.value.id ? 'Edit' : 'New' }} Group Event
                </h3>
                <section class="flex flex-col space-y-2">
                    <label for="title">Event Title<span>*</span></label>
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
                        <label for="host">Organiser<span>*</span></label>
                        <a-user-search-field
                            class="block mb-4"
                            name="host"
                            formControlName="user"
                        ></a-user-search-field>
                        <label for="tags">Tags</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-chip-grid #chipList aria-label="Event Tags">
                                <mat-chip-row
                                    *ngFor="let tag of tag_list"
                                    [selectable]="true"
                                    [removable]="true"
                                    (removed)="removeTag(tag)"
                                >
                                    {{ tag }}
                                    <app-icon matChipRemove>close</app-icon>
                                </mat-chip-row>
                                <input
                                    placeholder="Add new tags relevant to this event..."
                                    [matChipInputFor]="chipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="addTag($event)"
                                />
                            </mat-chip-grid>
                        </mat-form-field>
                        <div class="py-4 flex items-center space-x-8">
                            <mat-checkbox formControlName="featured">
                                Featured
                            </mat-checkbox>
                            <mat-checkbox
                                [ngModel]="form.value.permission === 'OPEN'"
                                [ngModelOptions]="{ standalone: true }"
                                (ngModelChange)="
                                    form.patchValue({
                                        permission: $event ? 'OPEN' : 'PRIVATE'
                                    })
                                "
                            >
                                Publish
                            </mat-checkbox>
                        </div>
                    </ng-container>
                    <!-- END BASIC DETAILS -->
                    <div class="w-full h-px bg-base-200"></div>
                    <h3 class="py-4 text-2xl font-medium">Date and Time</h3>
                    <ng-container>
                        <div class="flex items-center flex-wrap sm:space-x-2">
                            <div class="flex-1 min-w-[256px] relative">
                                <label for="date">
                                    {{ 'FORM.DATE' | translate }}<span>*</span>
                                </label>
                                <a-date-field
                                    name="date"
                                    formControlName="date"
                                    [to]="end_date"
                                >
                                    {{ 'FORM.DATE_ERROR' | translate }}
                                </a-date-field>
                            </div>
                            <div class="flex-1 min-w-[256px] relative">
                                <label for="date">
                                    {{ 'FORM.END_DATE' | translate
                                    }}<span>*</span>
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
                        <div
                            class="flex items-center space-x-2"
                            *ngIf="!form.value.all_day"
                        >
                            <div class="flex-1 w-1/3">
                                <label for="start-time">
                                    {{ 'FORM.START_TIME' | translate }}
                                    <span>*</span>
                                </label>
                                <a-time-field
                                    name="start-time"
                                    [ngModel]="form.getRawValue().date"
                                    (ngModelChange)="
                                        form.patchValue({ date: $event })
                                    "
                                    [disabled]="form.controls.date.disabled"
                                    [ngModelOptions]="{ standalone: true }"
                                    [use_24hr]="use_24hr"
                                ></a-time-field>
                            </div>
                            <div class="flex-1 w-1/3">
                                <label for="end-time">
                                    {{ 'FORM.END_TIME' | translate
                                    }}<span>*</span>
                                </label>
                                <a-time-field
                                    name="end-time"
                                    [ngModel]="
                                        form.value.date_end ||
                                        form.value.date +
                                            form.value.duration * 60 * 1000
                                    "
                                    (ngModelChange)="
                                        form.patchValue({ date_end: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [from]="
                                        form?.getRawValue()?.date +
                                        30 * 60 * 1000
                                    "
                                    [use_24hr]="use_24hr"
                                    [extra_info_fn]="duration_info"
                                ></a-time-field>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <label for="display-name" i18n="@@displayNameLabel">
                                Timezone:
                            </label>
                            <mat-form-field appearance="outline">
                                <app-icon matPrefix class="text-2xl">
                                    search
                                </app-icon>
                                <input
                                    matInput
                                    formControlName="timezone"
                                    placeholder="Timezone"
                                    [matAutocomplete]="auto"
                                />
                            </mat-form-field>
                            <mat-autocomplete #auto="matAutocomplete">
                                <mat-option
                                    *ngFor="let tz of filtered_timezones"
                                    [value]="tz"
                                >
                                    {{ tz }}
                                </mat-option>
                                <mat-option
                                    *ngIf="!timezones.length"
                                    [disabled]="true"
                                >
                                    No matching timezones
                                </mat-option>
                            </mat-autocomplete>
                        </div>
                    </ng-container>
                    <!-- END DATE TIME -->
                    <div class="w-full h-px bg-base-200"></div>
                    <h3 class="py-4 text-2xl font-medium">Location</h3>
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
                                        attendance_type: 'ONSITE'
                                    })
                                "
                            >
                                <app-icon class="text-2xl">domain</app-icon>
                                <div class="mx-2">On Premise</div>
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
                                        attendance_type: 'ONLINE'
                                    })
                                "
                            >
                                <app-icon class="text-2xl">laptop_mac</app-icon>
                                <div class="mx-2">Online Only</div>
                            </button>
                            <button
                                btn
                                matRipple
                                class="flex-1"
                                [class.inverse]="
                                    form.value.attendance_type !== 'ANY'
                                "
                                (click)="
                                    form.patchValue({ attendance_type: 'ANY' })
                                "
                            >
                                <app-icon class="text-2xl">add</app-icon>
                                <div class="mx-2">Both</div>
                            </button>
                        </div>
                        <ng-container
                            *ngIf="form.value.attendance_type !== 'ONLINE'"
                        >
                            <label for="location">Building Location</label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    [ngModel]="building_zone"
                                    [ngModelOptions]="{ standalone: true }"
                                    (ngModelChange)="
                                        form.controls.zones.setValue([
                                            $event.parent_id,
                                            $event.id
                                        ]);
                                        setBuilding($event)
                                    "
                                    placeholder="Select Building"
                                >
                                    <mat-option
                                        *ngFor="
                                            let building of building_list
                                                | async
                                        "
                                        [value]="building"
                                    >
                                        {{
                                            building.display_name ||
                                                building.name
                                        }}
                                    </mat-option>
                                </mat-select>
                            </mat-form-field>
                            <div class="flex space-x-2">
                                <div class="flex flex-col flex-[2]">
                                    <label for="level">Level</label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            [ngModel]="level_zone"
                                            [ngModelOptions]="{
                                                standalone: true
                                            }"
                                            (ngModelChange)="setLevel($event)"
                                            placeholder="Select Level"
                                        >
                                            <mat-option
                                                *ngFor="
                                                    let level of active_levels
                                                        | async
                                                "
                                                [value]="level"
                                            >
                                                {{
                                                    level.display_name ||
                                                        level.name
                                                }}
                                            </mat-option>
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                                <div class="flex flex-col flex-[3]">
                                    <label for="level">Room</label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            formControlName="secondary_resource"
                                            [disabled]="
                                                (available_spaces | async)
                                                    ?.length === 0
                                            "
                                            placeholder="Select Room"
                                        >
                                            <mat-option><i>None</i></mat-option>
                                            <mat-option
                                                *ngFor="
                                                    let room of available_spaces
                                                        | async
                                                "
                                                [value]="room.id"
                                            >
                                                {{
                                                    room.display_name ||
                                                        room.name
                                                }}
                                            </mat-option>
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            </div>
                        </ng-container>
                    </ng-container>
                    <!-- END LOCATION -->
                    <div class="w-full h-px bg-base-200"></div>
                    <h3 class="py-4 text-2xl font-medium">Event Information</h3>
                    <ng-container>
                        <label for="title">Event Description</label>
                        <rich-text-input
                            formControlName="description"
                        ></rich-text-input>
                        <label for="tags">Images</label>
                        <image-list-field
                            formControlName="images"
                        ></image-list-field>
                    </ng-container>
                </section>
                <div
                    class="flex justify-end space-x-2 sticky bottom-0 w-full bg-base-100 py-4"
                >
                    <a
                        btn
                        matRipple
                        class="inverse w-32"
                        [routerLink]="['/entertainment', 'events']"
                    >
                        Cancel
                    </a>
                    <button btn matRipple class="w-32" (click)="save()">
                        Save
                    </button>
                </div>
            </form>
        </div>
        <ng-template #load_state>
            <div
                class="absolute inset-0 bg-base-100 flex flex-col items-center justify-center space-y-4"
            >
                <mat-spinner diameter="48"></mat-spinner>
                <p>Saving event...</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class EventManageComponent extends AsyncHandler {
    public loading = false;
    public timezones: string[] = [];
    public filtered_timezones: string[] = [];

    public readonly form = this._form_state.form;
    public readonly separators: number[] = [ENTER, COMMA, SPACE];
    public readonly building_list = this._org.building_list;
    public readonly active_levels = this._org.active_levels;
    public readonly available_spaces = this._event_form.available_spaces;

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
        const zones = this.form.getRawValue().zones || [];
        const building = this._org.buildings.find((b) => zones.includes(b.id));
        return building || this._org.building;
    }

    public get level_zone() {
        const zones = this.form.getRawValue().zones;
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

    constructor(
        private _form_state: BookingFormService,
        private _event_form: EventFormService,
        private _state: EventStateService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this._form_state.setOptions({ type: 'group-event' });
        this.form.patchValue({
            booking_type: 'group-event',
            asset_id: `${
                currentUser()?.name || currentUser()?.email
            } [${randomString(4)}]`,
            permission: 'OPEN',
            zones: unique([
                this._org.organisation.id,
                this._org.building.id,
                this._org.building.parent_id,
            ]),
            location:
                this._org.building.address || this._org.building.display_name,
            user: currentUser(),
            attendance_type: 'ONSITE',
        });
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe(async (params) => {
                if (params.has('id')) {
                    const booking = await showBooking(
                        params.get('id')
                    ).toPromise();
                    if (!booking)
                        return this._router.navigate([
                            '/entertainment',
                            'events',
                        ]);
                    this._form_state.newForm(booking);
                    console.log('Booking:', booking.tags);
                    if (booking.linked_event) {
                        this._event_form.newForm(
                            new CalendarEvent(booking.linked_event)
                        );
                        this.form.patchValue({
                            secondary_resource: booking.linked_event.system_id,
                        });
                    }
                    this.form.patchValue({
                        tags: booking.tags,
                        user: new StaffUser({
                            id: booking.user_id,
                            email: booking.user_email,
                            name: booking.user_name,
                        }),
                    });
                }
            })
        );
        this.subscription(
            'form_change',
            this.form.valueChanges
                .pipe(startWith(this.form.value))
                .subscribe(() => {
                    this._event_form.form.patchValue(this.form.value);
                    this._event_form.setOptions({
                        zone_ids: [
                            this.level_zone?.id || this.building_zone?.id,
                        ],
                    });
                })
        );
        this.subscription(
            'organiser_change',
            this.form.controls.user.valueChanges.subscribe((value) => {
                const name = value?.name || value?.email;
                const value_name =
                    (name ? `${name} [${randomString(4)}]` : '') ||
                    this.form.getRawValue().asset_id;
                this.form.patchValue({ asset_id: value_name });
            })
        );
        this._updateTimezoneList();
        this.subscription(
            'tz-change',
            this.form.valueChanges.subscribe(() => this._updateTimezoneList())
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
        this.form.controls.zones.setValue(new_zones);
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
                `Some form fields are invalid. [${getInvalidFields(this.form)}]`
            );
        }
        this.loading = true;
        const booking = this._form_state.booking;
        // Remove Old Event if linked
        if (
            booking?.id &&
            (booking.linked_event || this.form.getRawValue().secondary_resource)
        ) {
            if (booking.linked_event) {
                await removeEvent(booking.linked_event.event_id, {
                    system_id: booking.linked_event.system_id,
                })
                    .toPromise()
                    .catch((e) => {
                        notifyError(e);
                        this.loading = false;
                        throw e;
                    });
            }
            await removeBooking(booking.id)
                .toPromise()
                .catch((e) => {
                    notifyError(e);
                    this.loading = false;
                    throw e;
                });
            this._form_state.form.patchValue({ id: null });
        }
        // Create event if linked to a space
        if (this.form.getRawValue().secondary_resource) {
            const spaces = await this.available_spaces
                .pipe(take(1))
                .toPromise();
            const space = spaces.find(
                (s) => s.id === this.form.getRawValue().secondary_resource
            );
            const value = { ...this.form.getRawValue() };
            delete value.id;
            console.log('Event value:', value);
            this._event_form.form.patchValue({
                ...value,
                id: null,
                resources: [space],
            });
            const event = await this._event_form.postForm().catch((e) => {
                notifyError(e);
                this.loading = false;
                throw e;
            });
            console.log('Event:', event);
            if (!event) return;
            this.form.patchValue({
                ical_uid: event.ical_uid,
                event_id: event.id,
                location: space.display_name || space.name,
            });
        }
        this.form.patchValue({ asset_name: '' });
        if (!this.form.getRawValue().description)
            this.form.patchValue({ description: ' ' });
        const date = this.form.getRawValue().date;
        const res = await this._form_state.postForm().catch(async (e) => {
            notifyError(e);
            if (this.form.getRawValue().event_id) {
                await removeEvent(this.form.getRawValue().event_id).toPromise();
            }
        });
        this._state.changed();
        this.loading = false;
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
            _.toLowerCase().includes(timezone.toLowerCase())
        );
    }
}
