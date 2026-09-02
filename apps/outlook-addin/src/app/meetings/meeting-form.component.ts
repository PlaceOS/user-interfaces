import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AssetListFieldComponent } from '@placeos/assets';
import { CateringListFieldComponent } from '@placeos/catering';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    AsyncHandler,
    Building,
    currentUser,
    OrganisationService,
    settingSignal,
} from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    HostSelectFieldComponent,
    RichTextInputComponent,
    SpaceListFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
} from '@placeos/form-fields';
import { FindAvailabilityModalComponent } from '@placeos/users';

@Component({
    selector: 'meeting-booking-form',
    template: `
        @if (form) {
            <div class="divide-base-200 z-0 space-y-2 divide-y">
                <section class="p-4">
                    <h3 class="flex items-center space-x-2">
                        <div
                            class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                        >
                            1
                        </div>
                        <div class="text-xl">Details</div>
                        <div class="w-px flex-1"></div>
                        <button
                            icon
                            matRipple
                            (click)="
                                hide_block.update((h) => ({
                                    ...h,
                                    details: !h.details,
                                }))
                            "
                        >
                            <icon>{{
                                hide_block().details
                                    ? 'expand_more'
                                    : 'expand_less'
                            }}</icon>
                        </button>
                    </h3>
                    <div
                        class="overflow-hidden"
                        [@show]="hide_block().details ? 'hide' : 'show'"
                    >
                        @if (buildings().length > 1) {
                            <div class="min-w-[256px] flex-1">
                                <label for="title">Building</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        name="building"
                                        [ngModel]="building()"
                                        (ngModelChange)="setBuilding($event)"
                                        [ngModelOptions]="{ standalone: true }"
                                        [placeholder]="
                                            building()?.display_name ||
                                            building()?.name
                                        "
                                    >
                                        @for (bld of buildings(); track bld) {
                                            <mat-option [value]="bld">
                                                {{
                                                    bld.display_name || bld.name
                                                }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        }
                        <div class="flex flex-col sm:flex-row sm:space-x-2">
                            <div class="w-full sm:flex-1">
                                <label for="title"
                                    >Add Title<span>*</span></label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        [formField]="form.title"
                                        placeholder="e.g. Team Meeting"
                                    />
                                    <mat-error
                                        >Meeting title is required.</mat-error
                                    >
                                </mat-form-field>
                            </div>
                            <div class="relative w-full sm:flex-1">
                                <label for="date">Date<span>*</span></label>
                                <a-date-field [formField]="form.date">
                                    Date and time must be in the future
                                </a-date-field>
                                @if (allow_all_day()) {
                                    <mat-checkbox
                                        [formField]="form.all_day"
                                        class="absolute -top-2 right-0"
                                        >All Day</mat-checkbox
                                    >
                                }
                            </div>
                        </div>
                        @if (!model().all_day) {
                            <div class="flex flex-col sm:flex-row sm:space-x-2">
                                <div class="w-full sm:flex-1">
                                    <label for="start-time"
                                        >Start Time<span>*</span></label
                                    >
                                    <a-time-field
                                        name="start-time"
                                        [ngModel]="model().date"
                                        (ngModelChange)="
                                            model.update((m) => ({
                                                ...m,
                                                date: $event,
                                            }))
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                        [range]="bookable_hours()"
                                        [min_duration]="
                                            effective_min_duration()
                                        "
                                    ></a-time-field>
                                </div>
                                <div class="w-full sm:flex-1">
                                    <label for="end-time"
                                        >End Time<span>*</span></label
                                    >
                                    <a-duration-field
                                        [formField]="form.duration"
                                        [time]="model().date"
                                        [max]="max_duration()"
                                        [custom_options]="
                                            custom_duration_options()
                                        "
                                        [end_time]="bookable_hours()?.end"
                                    >
                                    </a-duration-field>
                                </div>
                            </div>
                        }
                        @if (can_book_for_others()) {
                            <div class="w-full">
                                <label for="host">Host<span>*</span></label>
                                <host-select-field
                                    [formField]="form.organiser"
                                ></host-select-field>
                            </div>
                        }
                    </div>
                </section>
                @if (!hide_attendees()) {
                    <section class="p-4">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                2
                            </div>
                            <div class="text-xl">Attendees</div>
                            <div class="w-px flex-1"></div>
                            <button
                                matRipple
                                class="bg-none text-xs text-blue-500 underline"
                                (click)="findAvailableTime()"
                            >
                                Availability
                            </button>
                            <button
                                icon
                                matRipple
                                (click)="
                                    hide_block.update((h) => ({
                                        ...h,
                                        attendees: !h.attendees,
                                    }))
                                "
                            >
                                <icon>{{
                                    hide_block().attendees
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</icon>
                            </button>
                        </h3>
                        <div
                            class="overflow-hidden"
                            [@show]="hide_block().attendees ? 'hide' : 'show'"
                        >
                            <a-user-list-field
                                class="mt-4"
                                [formField]="form.attendees"
                            ></a-user-list-field>
                        </div>
                    </section>
                }
                <section class="p-4">
                    <h3 class="flex items-center space-x-2">
                        <div
                            class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                        >
                            3
                        </div>
                        <div class="text-xl">Room</div>
                        <div class="w-px flex-1"></div>
                        <button
                            icon
                            matRipple
                            (click)="
                                hide_block.update((h) => ({
                                    ...h,
                                    resources: !h.resources,
                                }))
                            "
                        >
                            <icon>{{
                                hide_block().resources
                                    ? 'expand_more'
                                    : 'expand_less'
                            }}</icon>
                        </button>
                    </h3>
                    <div
                        class="overflow-hidden"
                        [@show]="hide_block().resources ? 'hide' : 'show'"
                    >
                        <space-list-field
                            class="mt-4"
                            [formField]="form.resources"
                        ></space-list-field>
                    </div>
                </section>
                @if (has_catering()) {
                    <section class="p-4">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                4
                            </div>
                            <div class="text-xl">Catering</div>
                            <div class="w-px flex-1"></div>
                            <button
                                icon
                                matRipple
                                (click)="
                                    hide_block.update((h) => ({
                                        ...h,
                                        catering: !h.catering,
                                    }))
                                "
                            >
                                <icon>{{
                                    hide_block().catering
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</icon>
                            </button>
                        </h3>
                        <div
                            class="overflow-hidden"
                            [@show]="hide_block().catering ? 'hide' : 'show'"
                        >
                            <catering-list-field
                                [formField]="form.catering"
                                [options]="{
                                    date: model().date,
                                    duration: model().duration,
                                    zone_id:
                                        model().resources[0]?.level?.parent_id,
                                    resources: model().resources,
                                }"
                            ></catering-list-field>
                        </div>
                    </section>
                }
                <section class="p-4">
                    <h3 class="flex items-center space-x-2">
                        <div
                            class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                        >
                            {{ !has_catering() ? '4' : '5' }}
                        </div>
                        <div class="text-xl">Assets</div>
                        <div class="w-px flex-1"></div>
                        <button
                            icon
                            matRipple
                            (click)="
                                hide_block.update((h) => ({
                                    ...h,
                                    assets: !h.assets,
                                }))
                            "
                        >
                            <icon>{{
                                hide_block().assets
                                    ? 'expand_more'
                                    : 'expand_less'
                            }}</icon>
                        </button>
                    </h3>
                    <div
                        class="overflow-hidden"
                        [@show]="hide_block().assets ? 'hide' : 'show'"
                    >
                        <asset-list-field
                            [options]="{
                                date: model().date,
                                duration: model().duration,
                            }"
                            [formField]="form.assets"
                        ></asset-list-field>
                    </div>
                </section>
                @if (!hide_notes()) {
                    <section class="p-4">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                {{ !has_catering() ? '5' : '6' }}
                            </div>
                            <div class="text-xl">Notes</div>
                        </h3>
                        <div class="flex w-full flex-col">
                            <label for="notes"
                                >General information for attendees</label
                            >
                            <rich-text-input
                                [formField]="form.body"
                                placeholder="Notes..."
                            ></rich-text-input>
                        </div>
                    </section>
                }
            </div>
        }
    `,
    styles: [``],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
    imports: [
        MatRippleModule,
        FormsModule,
        FormField,
        RichTextInputComponent,
        AssetListFieldComponent,
        CateringListFieldComponent,
        SpaceListFieldComponent,
        IconComponent,
        UserListFieldComponent,
        DateFieldComponent,
        TimeFieldComponent,
        DurationFieldComponent,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        HostSelectFieldComponent,
    ],
})
export class MeetingBookingFormComponent extends AsyncHandler {
    private _service = inject(EventFormService);
    private _dialog = inject(MatDialog);
    private _org = inject(OrganisationService);

    public readonly form = this._service.form;
    public readonly model = this._service.model;

    public readonly hide_block = signal<Record<string, boolean>>({});

    public readonly building = this._org.active_building;
    public readonly buildings = this._org.building_list;

    private readonly _catering_enabled = settingSignal(
        'events.catering_enabled',
        false,
    );
    private readonly _has_catering_enabled = settingSignal(
        'events.has_catering',
        false,
    );
    public readonly has_catering = computed(
        () => !!this._catering_enabled() || !!this._has_catering_enabled(),
    );
    public readonly hide_notes = settingSignal('events.hide_notes', false);
    public readonly hide_attendees = settingSignal(
        'events.hide_attendees',
        false,
    );
    public readonly max_duration = settingSignal('events.max_duration', 480);
    public readonly min_duration = settingSignal('events.min_duration', 30);
    public readonly bookable_hours = settingSignal(
        'events.bookable_hours',
        null,
    );
    public readonly custom_duration_options = settingSignal(
        'events.custom_duration_options',
        [],
    );
    public readonly effective_min_duration = computed(() =>
        Math.min(this.min_duration(), ...this.custom_duration_options()),
    );
    public readonly can_book_for_others = settingSignal(
        'events.can_book_for_others',
        false,
    );
    public readonly allow_all_day = settingSignal(
        'events.allow_all_day',
        false,
    );
    public readonly allow_assets = settingSignal('events.allow_assets', false);

    public findAvailableTime() {
        const { attendees, organiser, date, duration } = this.model();
        const ref = this._dialog.open(FindAvailabilityModalComponent, {
            data: {
                users: attendees,
                host: organiser || currentUser(),
                date,
                duration,
            },
        });
        ref.afterClosed().subscribe((d) => {
            if (!d) return;
            this.model.update((m) => ({
                ...m,
                date: ref.componentInstance.date(),
                attendees: ref.componentInstance.users(),
                duration: ref.componentInstance.duration(),
            }));
        });
    }

    public setBuilding(bld: Building) {
        this._org.building = bld;
        this._org.setBuilding(bld, true);
    }
}
