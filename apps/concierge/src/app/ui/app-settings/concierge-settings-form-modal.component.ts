import { Component, computed, inject, OnInit, signal } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import {
    buildCurrencyOptions,
    currentUser,
    notifyError,
    notifySuccess,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { PlaceZone, showMetadata, updateMetadata } from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import { DEFAULT_SETTINGS } from 'apps/concierge/src/environments/settings';
import { format } from 'date-fns';

import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { VERSION } from '@placeos/common';
import {
    FullscreenModalShellComponent,
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { lastValueFrom } from 'rxjs';
import {
    AVAILABLE_PERIOD_EXTENDED_OPTIONS,
    AVAILABLE_PERIOD_SHORT_OPTIONS,
    BANNER_TYPE_OPTIONS,
    BLOCK_END_OPTIONS,
    BLOCK_HEIGHT_OPTIONS,
    BLOCK_START_OPTIONS,
    BOOKABLE_HOUR_END_OPTIONS,
    BOOKABLE_HOUR_START_OPTIONS,
    DAY_TIMELINE_VIEW_OPTIONS,
    MAX_DURATION_FULL_OPTIONS,
    WEEK_START_OPTIONS,
} from './settings-option.constants';
import { UploadButtonComponent } from './upload-button.component';

@Component({
    selector: 'concierge-settings-form-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="heading()"
            [loading]="loading()"
            (confirm)="save()"
        >
            <form [formGroup]="form" class="flex flex-col space-y-8 pb-4">
                <section general class="bg-base-100 space-y-2 rounded-sm">
                    <div>
                        <label for="logo_light">Light Mode Logo</label>
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input
                                    matInput
                                    name="logo_light"
                                    formControlName="logo_light"
                                />
                            </mat-form-field>
                            <upload-button
                                ngModel
                                (ngModelChange)="
                                    form.patchValue({
                                        logo_light: $event,
                                    })
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></upload-button>
                        </div>
                    </div>
                    <div>
                        <label for="logo_dark">Dark Mode Logo</label>
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input
                                    matInput
                                    name="logo_dark"
                                    formControlName="logo_dark"
                                />
                            </mat-form-field>
                            <upload-button
                                ngModel
                                (ngModelChange)="
                                    form.patchValue({
                                        logo_dark: $event,
                                    })
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></upload-button>
                        </div>
                    </div>
                    <div>
                        <label for="features">Features</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="features"
                                formControlName="features"
                                multiple
                            >
                                <mat-option value="zones"> Zones </mat-option>
                                <mat-option value="spaces"> Rooms </mat-option>
                                <mat-option value="assets">Assets</mat-option>
                                <mat-option value="desks">Desks</mat-option>
                                <mat-option value="lockers">
                                    Lockers
                                </mat-option>
                                <mat-option value="parking">Parking</mat-option>
                                <mat-option value="parking-bookings"
                                    >Parking Bookings</mat-option
                                >
                                <mat-option value="parking-manage"
                                    >Parking Management</mat-option
                                >
                                <mat-option value="visitors">
                                    Visitors
                                </mat-option>
                                <mat-option value="internal-users">
                                    User Directory
                                </mat-option>
                                <mat-option value="surveys">
                                    Surveys
                                </mat-option>
                                <mat-option value="catering">
                                    Catering
                                </mat-option>
                                <mat-option value="points-of-interest">
                                    Points of Interest
                                </mat-option>
                                <mat-option value="url-management">
                                    URL Management
                                </mat-option>
                                <mat-option value="events">
                                    Group Events
                                </mat-option>
                                <mat-option value="points"> Points </mat-option>
                                <mat-option value="emergency-contacts">
                                    Emergency Contacts
                                </mat-option>
                                <mat-option value="signage">
                                    Digital Signage
                                </mat-option>
                                <mat-option value="email-templates">
                                    Email Templates
                                </mat-option>
                                <mat-option value="deals-n-offers">
                                    Deals & Offers
                                </mat-option>
                                <mat-option value="reports">
                                    Reports
                                </mat-option>
                                @if (form.value.features.includes('reports')) {
                                    <mat-option value="booking-report">
                                        Room Report
                                    </mat-option>
                                    <mat-option value="desk-report">
                                        Desk Report
                                    </mat-option>
                                    <mat-option value="catering-report">
                                        Catering Report
                                    </mat-option>
                                    <mat-option value="parking-report">
                                        Parking Report
                                    </mat-option>
                                    <mat-option value="contact-tracing-report">
                                        Contact Tracing Report
                                    </mat-option>
                                    <mat-option value="assets-report">
                                        Assets Report
                                    </mat-option>
                                    <mat-option value="visitors-report">
                                        Visitors Report
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div
                        class="border-base-300 relative rounded-sm border px-4 pt-4 pb-2"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Banner
                        </h3>
                        <div class="flex items-center space-x-4">
                            <div class="flex-1">
                                <label for="banner-type">Type</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        name="banner-type"
                                        [ngModel]="
                                            form.value.banner?.type || ''
                                        "
                                        (ngModelChange)="
                                            form.patchValue({
                                                banner: {
                                                    id: date_string,
                                                    content:
                                                        form.value.banner
                                                            ?.content || '',
                                                    type: $event,
                                                },
                                            })
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                    >
                                        @for (
                                            opt of BANNER_TYPE;
                                            track opt.value
                                        ) {
                                            <mat-option [value]="opt.value">{{
                                                opt.label
                                            }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <div class="flex-1">
                                <label for="banner-type">Message</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        name="banner-message"
                                        placeholder="Banner Message"
                                        [ngModel]="
                                            form.value.banner?.content || ''
                                        "
                                        (ngModelChange)="
                                            form.patchValue({
                                                banner: {
                                                    id: date_string,
                                                    type:
                                                        form.value.banner
                                                            ?.type || '',
                                                    content: $event,
                                                },
                                            })
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                    />
                                </mat-form-field>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label for="default-route">Default Route</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="default-route"
                                formControlName="default_route"
                                placeholder="/book/rooms/new"
                            />
                            <mat-hint> Main page of the application </mat-hint>
                        </mat-form-field>
                    </div>
                    @if (form.value.features.includes('events')) {
                        <div>
                            <label for="group-events-calendar">
                                Group Events Calendar
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="group-events-calendar"
                                    formControlName="group_events_calendar"
                                    placeholder="shared.events@calendar.acme.tech"
                                />
                                <mat-hint>
                                    Calendar to add all group events to
                                </mat-hint>
                            </mat-form-field>
                        </div>
                    }
                    <div class="grid gap-4 md:grid-cols-2">
                        <div>
                            <label for="workplace-url-path"
                                >Workplace URL Path</label
                            >
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="workplace-url-path"
                                    formControlName="workplace_url_path"
                                    placeholder="/workplace"
                                />
                            </mat-form-field>
                        </div>
                        <div>
                            <label for="kiosk-url-path"
                                >Map Kiosk URL Path</label
                            >
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="kiosk-url-path"
                                    formControlName="kiosk_url_path"
                                    placeholder="/map-kiosk"
                                />
                            </mat-form-field>
                        </div>
                    </div>
                    <div class="grid gap-4 md:grid-cols-2">
                        <div>
                            <label for="control-path">Control URL Path</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="control-path"
                                    formControlName="control_path"
                                    placeholder="/control"
                                />
                            </mat-form-field>
                        </div>
                        <div>
                            <label for="signage-path">Signage URL Path</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="signage-path"
                                    formControlName="signage_path"
                                    placeholder="/signage"
                                />
                            </mat-form-field>
                        </div>
                    </div>
                    <div>
                        <label for="short-url-public-key"
                            >Short URL Public Key</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="short-url-public-key"
                                formControlName="short_url_public_key"
                                placeholder="your-short-url-public-key"
                            />
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="week-start">Week Start</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="week-start"
                                formControlName="week_start"
                                placeholder="Sunday"
                            >
                                @for (opt of WEEK_START; track opt.value) {
                                    <mat-option [value]="opt.value">{{
                                        opt.label
                                    }}</mat-option>
                                }
                            </mat-select>
                            <mat-hint>
                                Day of the week to show initially on various
                                calendars
                            </mat-hint>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="currency">Currency</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="currency"
                                formControlName="currency"
                                placeholder="Select currency code"
                                (openedChange)="
                                    onCurrencySelectStateChange($event)
                                "
                            >
                                <mat-option disabled class="!h-auto !py-2">
                                    <input
                                        matInput
                                        placeholder="Search currency code or name"
                                        [ngModel]="currency_filter()"
                                        (ngModelChange)="
                                            updateCurrencyFilter($event)
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                        (click)="$event.stopPropagation()"
                                        (keydown)="$event.stopPropagation()"
                                    />
                                </mat-option>
                                @for (
                                    option of filtered_currency_options();
                                    track option.code
                                ) {
                                    <mat-option [value]="option.code">
                                        {{ option.display_name }}
                                    </mat-option>
                                }
                                @if (!filtered_currency_options().length) {
                                    <mat-option disabled>
                                        No currencies match your search
                                    </mat-option>
                                }
                            </mat-select>
                            <mat-hint>
                                ISO 4217 currency code for pricing
                            </mat-hint>
                        </mat-form-field>
                    </div>
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            name="Use 24 hour time"
                            formControlName="use_24_hour_time"
                        ></settings-toggle>
                        <settings-toggle
                            name="Delegated"
                            formControlName="delegated"
                        ></settings-toggle>
                        <settings-toggle
                            name="Force upload state"
                            formControlName="force_upload_state"
                        ></settings-toggle>
                        <settings-toggle
                            name="All uploads are private"
                            formControlName="private_uploads"
                        ></settings-toggle>
                        <settings-toggle
                            name="Use region over building"
                            formControlName="use_region"
                        ></settings-toggle>
                    </div>
                </section>
                @if (form.value.features.includes('spaces')) {
                    <section
                        spaces
                        id="feature-spaces"
                        class="border-base-300 relative rounded-sm border"
                        formGroupName="events"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Room Bookings
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            (click)="toggleGroup('spaces')"
                        >
                            <icon>{{
                                shown_group() === 'spaces'
                                    ? 'chevron_left'
                                    : 'keyboard_arrow_down'
                            }}</icon>
                        </button>
                        <div
                            collapsible
                            [class.open]="shown_group() === 'spaces'"
                        >
                            <div class="content px-4 pt-4 pb-2">
                                <div class="flex-1">
                                    <label for="day-timeline-view">
                                        Day Timeline Default View
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            name="day-timeline-view"
                                            formControlName="day_timeline_view"
                                        >
                                            @for (
                                                opt of DAY_TIMELINE_VIEW;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Default day timeline layout for room
                                            bookings
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <div class="flex-1">
                                        <label for="block-start"
                                            >Block Start Time</label
                                        >
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="block-start"
                                                formControlName="block_start"
                                                placeholder="12AM (Midnight)"
                                            >
                                                @for (
                                                    opt of BLOCK_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                            <mat-hint>
                                                Start time of dayview blocks
                                            </mat-hint>
                                        </mat-form-field>
                                    </div>
                                    <div class="flex-1">
                                        <label for="block-end"
                                            >Block End Time</label
                                        >
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="block-end"
                                                formControlName="block_end"
                                                placeholder="12AM (Midnight)"
                                            >
                                                @for (
                                                    opt of BLOCK_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                            <mat-hint>
                                                End time of dayview blocks
                                            </mat-hint>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <div class="flex-1">
                                        <label for="block-height">
                                            Block Height
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="block-height"
                                                formControlName="block_height"
                                            >
                                                @for (
                                                    opt of BLOCK_HEIGHT;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                            <mat-hint>
                                                Height of 1 hour in dayview
                                            </mat-hint>
                                        </mat-form-field>
                                    </div>
                                    <div class="flex-1">
                                        <label for="max-duration">
                                            Max Duration
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="max-duration"
                                                formControlName="max_duration"
                                            >
                                                @for (
                                                    opt of MAX_DURATION_FULL;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                            <mat-hint>
                                                Max duration for single day
                                                bookings
                                            </mat-hint>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div>
                                    <label for="available-period">
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            name="available-period"
                                            formControlName="available_period"
                                        >
                                            @for (
                                                opt of AVAILABLE_PERIOD_SHORT;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Number of days ahead users can
                                            create bookings from the room
                                            booking manager
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                    formGroupName="bookable_hours"
                                >
                                    <div>
                                        <label for="events-bookable-start">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="events-bookable-start"
                                                formControlName="start"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="events-bookable-end">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="events-bookable-end"
                                                formControlName="end"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        name="Allow all day bookings"
                                        formControlName="allow_all_day"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Default to all day"
                                        formControlName="all_day_default"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow editing setup/breakdown times"
                                        formControlName="allow_setup_breakdown"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow booking for other users"
                                        formControlName="can_book_for_others"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow booking for any other users"
                                        formControlName="can_book_for_anyone"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow booking with assets"
                                        formControlName="has_assets"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Hide notes field when booking"
                                        formControlName="hide_notes"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Hide attendees field when booking"
                                        formControlName="hide_attendees"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow booking for external users"
                                        formControlName="allow_externals"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Enforce capacity for rooms"
                                        formControlName="strict_capacity_check"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow booking for multiple days"
                                        formControlName="allow_multiday"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Display times with building timezone"
                                        formControlName="use_building_timezone"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow Visibility options"
                                        formControlName="allow_visibility"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow editing bookings"
                                        formControlName="allow_edit"
                                    ></settings-toggle>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                    formGroupName="all_day_period"
                                >
                                    <div>
                                        <label for="events-all-day-start">
                                            All Day Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="events-all-day-start"
                                                formControlName="start"
                                                placeholder="None"
                                            >
                                                @for (
                                                    opt of BLOCK_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="events-all-day-end">
                                            All Day End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="events-all-day-end"
                                                formControlName="end"
                                                placeholder="None"
                                            >
                                                @for (
                                                    opt of BLOCK_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (form.value.features.includes('desks')) {
                    <section
                        desks
                        id="feature-desks"
                        class="border-base-300 relative rounded-sm border"
                        formGroupName="desks"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Desk Assignments
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            (click)="toggleGroup('desks')"
                        >
                            <icon>{{
                                shown_group() === 'desks'
                                    ? 'chevron_left'
                                    : 'keyboard_arrow_down'
                            }}</icon>
                        </button>
                        <div
                            collapsible
                            [class.open]="shown_group() === 'desks'"
                        >
                            <div class="content px-4 pt-4 pb-2">
                                <div>
                                    <label for="desks-max-assigned-count">
                                        Max Assigned Desks Per User
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <input
                                            matInput
                                            type="number"
                                            min="0"
                                            name="desks-max-assigned-count"
                                            formControlName="max_assigned_count"
                                        />
                                        <mat-hint>
                                            Maximum number of desk assignments a
                                            user can have at one time. Set to 0
                                            for unlimited.
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (form.value.features.includes('visitors')) {
                    <section
                        visitors
                        id="feature-visitors"
                        class="border-base-300 relative rounded-sm border"
                        formGroupName="visitors"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Visitors
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            (click)="toggleGroup('visitors')"
                        >
                            <icon>{{
                                shown_group() === 'visitors'
                                    ? 'chevron_left'
                                    : 'keyboard_arrow_down'
                            }}</icon>
                        </button>
                        <div
                            collapsible
                            [class.open]="shown_group() === 'visitors'"
                        >
                            <div class="content px-4 pt-4 pb-2">
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                    formGroupName="bookable_hours"
                                >
                                    <div>
                                        <label for="visitors-bookable-start">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="visitors-bookable-start"
                                                formControlName="start"
                                                placeholder="None"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="visitors-bookable-end">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="visitors-bookable-end"
                                                formControlName="end"
                                                placeholder="None"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <label for="hide-fields"
                                    >Hide Guest List fields</label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        name="hide-fields"
                                        formControlName="hide_fields"
                                        placeholder="No fields selected"
                                        multiple
                                    >
                                        <mat-option value="checked_in_at">
                                            {{
                                                'COMMON.CHECKED_IN_AT'
                                                    | translate
                                            }}
                                        </mat-option>
                                        <mat-option value="checked_out_at">
                                            {{
                                                'COMMON.CHECKED_OUT_AT'
                                                    | translate
                                            }}
                                        </mat-option>
                                        <mat-option value="state">
                                            {{
                                                'COMMON.CHECKED_IN' | translate
                                            }}
                                        </mat-option>
                                        <mat-option value="date">
                                            {{ 'FORM.TIME' | translate }}
                                        </mat-option>
                                        <mat-option value="user_name">
                                            {{ 'FORM.HOST' | translate }}
                                        </mat-option>
                                        <mat-option value="status">
                                            {{ 'COMMON.STATE' | translate }}
                                        </mat-option>
                                    </mat-select>
                                    <mat-hint>
                                        Hide selected columns on the visitor
                                        listing table
                                    </mat-hint>
                                </mat-form-field>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        name="Allow booking parking for visitors"
                                        formControlName="has_parking"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow setting pass number for visitors"
                                        formControlName="allow_pass_number"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow printing visitor labels"
                                        formControlName="allow_printing_label"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow international flag for visitors"
                                        formControlName="allow_international"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Show calendar links after booking"
                                        formControlName="show_calendar_links"
                                    ></settings-toggle>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (
                    form.value.features.includes('visitors') ||
                    form.value.features.includes('parking') ||
                    form.value.features.includes('lockers')
                ) {
                    <section
                        bookings
                        id="feature-bookings"
                        class="border-base-300 relative rounded-sm border"
                        formGroupName="bookings"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            PlaceOS Bookings
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            (click)="toggleGroup('bookings')"
                        >
                            <icon>{{
                                shown_group() === 'bookings'
                                    ? 'chevron_left'
                                    : 'keyboard_arrow_down'
                            }}</icon>
                        </button>
                        <div
                            collapsible
                            [class.open]="shown_group() === 'bookings'"
                        >
                            <div class="content px-4 pt-4 pb-2">
                                <div>
                                    <label for="available-period">
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            name="available-period"
                                            formControlName="available_period"
                                        >
                                            @for (
                                                opt of AVAILABLE_PERIOD_EXTENDED;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Number of days ahead the user is
                                            able to book
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div>
                                    <label for="max-duration">
                                        Max Duration
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            name="max-duration"
                                            formControlName="max_duration"
                                        >
                                            @for (
                                                opt of MAX_DURATION_FULL;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Max duration for single day bookings
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                    formGroupName="bookable_hours"
                                >
                                    <div>
                                        <label for="bookings-bookable-start">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="bookings-bookable-start"
                                                formControlName="start"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="bookings-bookable-end">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="bookings-bookable-end"
                                                formControlName="end"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        name="Allow all day bookings"
                                        formControlName="allow_all_day"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Display times with building timezone"
                                        formControlName="use_building_timezone"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow booking with assets"
                                        formControlName="has_assets"
                                    ></settings-toggle>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                    formGroupName="all_day_period"
                                >
                                    <div>
                                        <label for="bookings-all-day-start">
                                            All Day Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="bookings-all-day-start"
                                                formControlName="start"
                                            >
                                                @for (
                                                    opt of BLOCK_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="bookings-all-day-end">
                                            All Day End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="bookings-all-day-end"
                                                formControlName="end"
                                            >
                                                @for (
                                                    opt of BLOCK_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (
                    form.value.features.includes('parking') ||
                    form.value.features.includes('parking-bookings')
                ) {
                    <section
                        parking
                        id="feature-parking"
                        class="border-base-300 relative rounded-sm border"
                        formGroupName="parking"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Parking
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            (click)="toggleGroup('parking')"
                        >
                            <icon>{{
                                shown_group() === 'parking'
                                    ? 'chevron_left'
                                    : 'keyboard_arrow_down'
                            }}</icon>
                        </button>
                        <div
                            collapsible
                            [class.open]="shown_group() === 'parking'"
                        >
                            <div class="content px-4 pt-4 pb-2">
                                <div>
                                    <label for="available-period">
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            name="available-period"
                                            formControlName="available_period"
                                        >
                                            @for (
                                                opt of AVAILABLE_PERIOD_EXTENDED;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Number of days ahead the user is
                                            able to book
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div>
                                    <label for="max-duration">
                                        Max Duration
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            name="max-duration"
                                            formControlName="max_duration"
                                        >
                                            @for (
                                                opt of MAX_DURATION_FULL;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Max duration for single day bookings
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div>
                                    <label for="parking-max-assigned-count">
                                        Max Assigned Parking Spaces Per User
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <input
                                            matInput
                                            type="number"
                                            min="0"
                                            name="parking-max-assigned-count"
                                            formControlName="max_assigned_count"
                                        />
                                        <mat-hint>
                                            Maximum number of parking space
                                            assignments a user can have at one
                                            time. Set to 0 for unlimited.
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                    formGroupName="bookable_hours"
                                >
                                    <div>
                                        <label for="parking-bookable-start">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="parking-bookable-start"
                                                formControlName="start"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="parking-bookable-end">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="parking-bookable-end"
                                                formControlName="end"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        name="Allow all day bookings"
                                        formControlName="allow_all_day"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Show assigned users on parking map"
                                        formControlName="show_users"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Show parking status details on map"
                                        formControlName="show_status_details"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Disable parking map styles"
                                        formControlName="disable_styles"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Disable reservations"
                                        formControlName="disable_bookings"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Show booking requests"
                                        formControlName="show_requests"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Show waitlisted status and filter"
                                        formControlName="show_waitlist"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Always hide bay number column"
                                        formControlName="hide_bay_number"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Hide level selector on booking list"
                                        formControlName="hide_level_selector_on_booking_list"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Hide assign space action"
                                        formControlName="hide_assign_space"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Assign a space when approving requests"
                                        formControlName="assign_space_on_approve"
                                    ></settings-toggle>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (form.value.features.includes('lockers')) {
                    <section
                        lockers
                        id="feature-lockers"
                        class="border-base-300 relative rounded-sm border"
                        formGroupName="lockers"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Locker Bookings
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            (click)="toggleGroup('lockers')"
                        >
                            <icon>{{
                                shown_group() === 'lockers'
                                    ? 'chevron_left'
                                    : 'keyboard_arrow_down'
                            }}</icon>
                        </button>
                        <div
                            collapsible
                            [class.open]="shown_group() === 'lockers'"
                        >
                            <div class="content px-4 pt-4 pb-2">
                                <div>
                                    <label for="available-period">
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            name="available-period"
                                            formControlName="available_period"
                                        >
                                            @for (
                                                opt of AVAILABLE_PERIOD_SHORT;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Number of days ahead the user is
                                            able to book
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div>
                                    <label for="max-duration">
                                        Max Duration
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            name="max-duration"
                                            formControlName="max_duration"
                                        >
                                            @for (
                                                opt of MAX_DURATION_FULL;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                    formGroupName="bookable_hours"
                                >
                                    <div>
                                        <label for="lockers-bookable-start">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="lockers-bookable-start"
                                                formControlName="start"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="lockers-bookable-end">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="lockers-bookable-end"
                                                formControlName="end"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        name="Allow all day bookings"
                                        formControlName="allow_all_day"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Default bookings to all day"
                                        formControlName="all_day_default"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Show Calendar Links after booking"
                                        formControlName="show_calendar_links"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Hide End time option"
                                        formControlName="hide_end_time"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Disable Date selection"
                                        formControlName="disabled_date_select"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Disable start time option"
                                        formControlName="disabled_start_time"
                                    ></settings-toggle>
                                </div>
                            </div>
                        </div>
                    </section>
                }
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [
        `
            settings-toggle {
                width: calc(50% - 1rem);
                margin: 0.5rem;
            }
        `,
    ],
    imports: [
        MatDialogModule,
        FullscreenModalShellComponent,
        SettingsToggleComponent,
        ReactiveFormsModule,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        UploadButtonComponent,
    ],
})
export class ConciergeSettingsFormModalComponent implements OnInit {
    private _data = inject<{
        zone: PlaceZone;
    }>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<ConciergeSettingsFormModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public existing_settings: Record<string, any> = {};
    public old_settings: Record<string, any> = {};
    public readonly zone = this._data.zone;
    public readonly AVAILABLE_PERIOD_SHORT = AVAILABLE_PERIOD_SHORT_OPTIONS;
    public readonly AVAILABLE_PERIOD_EXTENDED =
        AVAILABLE_PERIOD_EXTENDED_OPTIONS;
    public readonly MAX_DURATION_FULL = MAX_DURATION_FULL_OPTIONS;
    public readonly WEEK_START = WEEK_START_OPTIONS;
    public readonly BLOCK_START = BLOCK_START_OPTIONS;
    public readonly BLOCK_END = BLOCK_END_OPTIONS;
    public readonly BOOKABLE_HOUR_START = BOOKABLE_HOUR_START_OPTIONS;
    public readonly BOOKABLE_HOUR_END = BOOKABLE_HOUR_END_OPTIONS;
    public readonly BLOCK_HEIGHT = BLOCK_HEIGHT_OPTIONS;
    public readonly DAY_TIMELINE_VIEW = DAY_TIMELINE_VIEW_OPTIONS;
    public readonly BANNER_TYPE = BANNER_TYPE_OPTIONS;
    public readonly heading = signal('');
    public readonly loading = signal('');
    public readonly shown_group = signal('');
    public readonly currency_filter = signal('');
    public readonly currency_options = buildCurrencyOptions();
    public readonly filtered_currency_options = computed(() => {
        const filter_text = this.currency_filter().trim().toLowerCase();
        if (!filter_text) return this.currency_options;
        return this.currency_options.filter((option) =>
            option.search_text.includes(filter_text),
        );
    });
    public readonly settings_key =
        this._settings.get('app.concierge_metadata_key') || 'concierge_app';

    public readonly form = new FormGroup({
        logo_light: new FormControl(''),
        logo_dark: new FormControl(''),
        features: new FormControl([]),
        banner: new FormControl({} as any),
        default_route: new FormControl(''),
        use_24_hour_time: new FormControl(false),
        delegated: new FormControl(false),
        force_upload_state: new FormControl(false),
        private_uploads: new FormControl(false),
        week_start: new FormControl(0),
        currency: new FormControl('USD'),
        use_region: new FormControl(false),
        group_events_calendar: new FormControl(''),
        kiosk_url_path: new FormControl(''),
        short_url_public_key: new FormControl(''),
        control_path: new FormControl(''),
        signage_path: new FormControl(''),
        workplace_url_path: new FormControl(''),
        admin_group: new FormControl(''),
        events: new FormGroup({
            allow_all_day: new FormControl(false),
            all_day_period: new FormGroup({
                start: new FormControl<number | null>(null),
                end: new FormControl<number | null>(null),
            }),
            bookable_hours: new FormGroup({
                start: new FormControl<number | null>(null),
                end: new FormControl<number | null>(null),
            }),
            all_day_default: new FormControl(false),
            allow_setup_breakdown: new FormControl(false),
            has_assets: new FormControl(false),
            hide_notes: new FormControl(false),
            hide_attendees: new FormControl(false),
            allow_externals: new FormControl(false),
            strict_capacity_check: new FormControl(false),
            allow_multiday: new FormControl(false),
            use_building_timezone: new FormControl(false),
            day_timeline_view: new FormControl('default'),
            block_start: new FormControl(0),
            block_end: new FormControl(24),
            block_height: new FormControl(3),
            max_duration: new FormControl(360),
            available_period: new FormControl(14),
            can_book_for_others: new FormControl(false),
            can_book_for_anyone: new FormControl(false),
            allow_visibility: new FormControl(false),
            allow_edit: new FormControl(true),
        }),
        desks: new FormGroup({
            max_assigned_count: new FormControl(0),
        }),
        visitors: new FormGroup({
            bookable_hours: new FormGroup({
                start: new FormControl<number | null>(null),
                end: new FormControl<number | null>(null),
            }),
            has_parking: new FormControl(false),
            allow_pass_number: new FormControl(false),
            allow_printing_label: new FormControl(false),
            allow_international: new FormControl(false),
            show_calendar_links: new FormControl(false),
            hide_fields: new FormControl([]),
        }),
        bookings: new FormGroup({
            allow_all_day: new FormControl(true),
            all_day_period: new FormGroup({
                start: new FormControl<number | null>(null),
                end: new FormControl<number | null>(null),
            }),
            bookable_hours: new FormGroup({
                start: new FormControl<number | null>(null),
                end: new FormControl<number | null>(null),
            }),
            has_assets: new FormControl(false),
            use_building_timezone: new FormControl(false),
            available_period: new FormControl(14),
            max_duration: new FormControl(480),
        }),
        parking: new FormGroup({
            allow_all_day: new FormControl(true),
            bookable_hours: new FormGroup({
                start: new FormControl<number | null>(null),
                end: new FormControl<number | null>(null),
            }),
            show_users: new FormControl(false),
            show_status_details: new FormControl(true),
            disable_styles: new FormControl(false),
            disable_bookings: new FormControl(false),
            show_requests: new FormControl(false),
            show_waitlist: new FormControl(true),
            hide_bay_number: new FormControl(false),
            hide_level_selector_on_booking_list: new FormControl(false),
            hide_assign_space: new FormControl(false),
            assign_space_on_approve: new FormControl(false),
            available_period: new FormControl(7),
            max_duration: new FormControl(480),
            max_assigned_count: new FormControl(0),
        }),
        lockers: new FormGroup({
            allow_all_day: new FormControl(true),
            bookable_hours: new FormGroup({
                start: new FormControl<number | null>(null),
                end: new FormControl<number | null>(null),
            }),
            all_day_default: new FormControl(false),
            show_calendar_links: new FormControl(false),
            available_period: new FormControl(14),
            max_duration: new FormControl(480),
            hide_end_time: new FormControl(false),
            disabled_start_time: new FormControl(false),
            disabled_date_select: new FormControl(false),
        }),
    });

    public get date_string() {
        return format(Date.now(), 'yyyy-MM-dd+HH');
    }

    public async ngOnInit() {
        const zone = this._data.zone;
        this.loading.set('Loading existing settings...');
        this.heading.set(
            `Concierge Settings <div class="font-mono text-xs px-2 py-1 rounded bg-base-300 ml-2">${this.zone.display_name || this.zone.name || 'Organisation'}</div>`,
        );
        this.form.patchValue(DEFAULT_SETTINGS.app);
        const org_id = this._org.organisation.id;
        const org_metadata = await this._getMetadata(org_id);
        const parent_metadata =
            org_id !== zone.parent_id
                ? await this._getMetadata(zone.parent_id)
                : {};
        const metadata = await this._getMetadata(zone.id);
        this.existing_settings = {
            ...DEFAULT_SETTINGS.app,
            ...org_metadata,
            ...parent_metadata,
        };
        this.form.patchValue(org_metadata || {});
        this.form.patchValue(parent_metadata || {});
        this.form.patchValue(metadata || {});
        this.old_settings = metadata;
        this.loading.set('');
    }

    public toggleGroup(group: string) {
        this.shown_group.update((shown) => (group === shown ? '' : group));
    }

    public updateCurrencyFilter(value: string) {
        this.currency_filter.set((value || '').trim());
    }

    public onCurrencySelectStateChange(is_open: boolean) {
        if (!is_open) {
            this.currency_filter.set('');
        }
    }

    public async save() {
        this.loading.set('Saving settings...');
        const zone = this._data.zone;
        const form_value = this.form.getRawValue();
        const new_settings = { ...this.old_settings };
        for (const key in form_value) {
            if (form_value[key] instanceof Array) {
                new_settings[key] = form_value[key];
            } else if (form_value[key] instanceof Object) {
                new_settings[key] = {
                    ...(this.existing_settings[key] || {}),
                    ...form_value[key],
                };
            } else {
                new_settings[key] = form_value[key];
            }
        }
        for (const key in new_settings) {
            if (
                !this._isValid(new_settings[key], this.existing_settings[key])
            ) {
                delete new_settings[key];
            } else if (
                new_settings[key] instanceof Object &&
                !(new_settings[key] instanceof Array) &&
                this.existing_settings[key]
            ) {
                for (const sub_key in new_settings[key]) {
                    if (
                        !this._isValid(
                            new_settings[key][sub_key],
                            this.existing_settings[key][sub_key],
                        )
                    ) {
                        delete new_settings[key][sub_key];
                    }
                }
            }
        }

        const user = currentUser();
        (new_settings as any).edited_by = {
            id: user.id,
            name: user.name,
            email: user.email,
            domain: location.hostname,
            role: user.groups.includes('placeos_admin')
                ? 'Admin'
                : user.groups.includes('placeos_support')
                  ? 'Support'
                  : 'User',
        };
        await lastValueFrom(
            updateMetadata(zone.id, {
                name: `${this.settings_key}`,
                details: new_settings,
                description: `[${VERSION.hash}|C] Concierge Application Settings`,
            }),
        ).catch((e) => {
            console.error(e);
            this.loading.set('');
            notifyError(
                `Failed to save settings: ${e.message || e.error || e}`,
            );
            throw e;
        });
        this.loading.set('');
        notifySuccess('Successfully saved concierge app settings');
        this._dialog_ref.close();
    }

    private _isValid<T>(new_value: T, existing_value: T) {
        return (
            new_value !== '' &&
            new_value !== undefined &&
            new_value !== null &&
            JSON.stringify(new_value) !== JSON.stringify(existing_value)
        );
    }

    private _getMetadata(id) {
        return lastValueFrom(
            showMetadata(id, this.settings_key).pipe(
                map((m) => m.details as Record<string, any>),
            ),
        );
    }
}
