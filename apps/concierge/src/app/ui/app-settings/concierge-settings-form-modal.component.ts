import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField, min } from '@angular/forms/signals';
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
            <form class="flex flex-col space-y-8 pb-4">
                <section general class="bg-base-100 space-y-2 rounded-sm">
                    <div>
                        <label for="logo_light">Light Mode Logo</label>
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input matInput [formField]="form.logo_light" />
                            </mat-form-field>
                            <upload-button
                                ngModel
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        logo_light: $event,
                                    }))
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
                                <input matInput [formField]="form.logo_dark" />
                            </mat-form-field>
                            <upload-button
                                ngModel
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        logo_dark: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></upload-button>
                        </div>
                    </div>
                    <div>
                        <label for="features">Features</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select [formField]="form.features" multiple>
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
                                @if (model().features.includes('reports')) {
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
                                        [ngModel]="model().banner?.type || ''"
                                        (ngModelChange)="
                                            model.update((m) => ({
                                                ...m,
                                                banner: {
                                                    id: date_string,
                                                    content:
                                                        m.banner?.content || '',
                                                    type: $event,
                                                },
                                            }))
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
                                        placeholder="Banner Message"
                                        [ngModel]="
                                            model().banner?.content || ''
                                        "
                                        (ngModelChange)="
                                            model.update((m) => ({
                                                ...m,
                                                banner: {
                                                    id: date_string,
                                                    type: m.banner?.type || '',
                                                    content: $event,
                                                },
                                            }))
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
                                [formField]="form.default_route"
                                placeholder="/book/rooms/new"
                            />
                            <mat-hint> Main page of the application </mat-hint>
                        </mat-form-field>
                    </div>
                    @if (model().features.includes('events')) {
                        <div>
                            <label for="group-events-calendar">
                                Group Events Calendar
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.group_events_calendar"
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
                                    [formField]="form.workplace_url_path"
                                    placeholder="/workplace"
                                />
                            </mat-form-field>
                        </div>
                        <div>
                            <label for="public-url-path">Public URL Path</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.public_url_path"
                                    placeholder="/public"
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
                                    [formField]="form.kiosk_url_path"
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
                                    [formField]="form.control_path"
                                    placeholder="/control"
                                />
                            </mat-form-field>
                        </div>
                        <div>
                            <label for="signage-path">Signage URL Path</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.signage_path"
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
                                [formField]="form.short_url_public_key"
                                placeholder="your-short-url-public-key"
                            />
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="week-start">Week Start</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [formField]="form.week_start"
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
                                [formField]="form.currency"
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
                            label="Use 24 hour time"
                            [formField]="form.use_24_hour_time"
                        ></settings-toggle>
                        <settings-toggle
                            label="Delegated"
                            [formField]="form.delegated"
                        ></settings-toggle>
                        <settings-toggle
                            label="Force upload state"
                            [formField]="form.force_upload_state"
                        ></settings-toggle>
                        <settings-toggle
                            label="All uploads are private"
                            [formField]="form.private_uploads"
                        ></settings-toggle>
                        <settings-toggle
                            label="Use region over building"
                            [formField]="form.use_region"
                        ></settings-toggle>
                    </div>
                </section>
                @if (model().features.includes('attendance-report')) {
                    <section
                        reports
                        id="feature-reports"
                        class="border-base-300 relative rounded-sm border px-2 pt-4 pb-2"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Reports
                        </h3>
                        <settings-toggle
                            label="Include weekends in site attendance averages"
                            [formField]="
                                form.reports.attendance_include_weekends
                            "
                        ></settings-toggle>
                    </section>
                }
                @if (model().features.includes('spaces')) {
                    <section
                        spaces
                        id="feature-spaces"
                        class="border-base-300 relative rounded-sm border"
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
                                            [formField]="
                                                form.events.day_timeline_view
                                            "
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
                                                [formField]="
                                                    form.events.block_start
                                                "
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
                                                [formField]="
                                                    form.events.block_end
                                                "
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
                                                [formField]="
                                                    form.events.block_height
                                                "
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
                                                [formField]="
                                                    form.events.max_duration
                                                "
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
                                            [formField]="
                                                form.events.available_period
                                            "
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
                                                [formField]="
                                                    form.events.bookable_hours
                                                        .start
                                                "
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
                                                [formField]="
                                                    form.events.bookable_hours
                                                        .end
                                                "
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
                                        label="Allow all day bookings"
                                        [formField]="form.events.allow_all_day"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Default to all day"
                                        [formField]="
                                            form.events.all_day_default
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow editing setup/breakdown times"
                                        [formField]="
                                            form.events.allow_setup_breakdown
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking for other users"
                                        [formField]="
                                            form.events.can_book_for_others
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking for any other users"
                                        [formField]="
                                            form.events.can_book_for_anyone
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking with assets"
                                        [formField]="form.events.has_assets"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide notes field when booking"
                                        [formField]="form.events.hide_notes"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide attendees field when booking"
                                        [formField]="form.events.hide_attendees"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking for external users"
                                        [formField]="
                                            form.events.allow_externals
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Enforce capacity for rooms"
                                        [formField]="
                                            form.events.strict_capacity_check
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking for multiple days"
                                        [formField]="form.events.allow_multiday"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Display times with building timezone"
                                        [formField]="
                                            form.events.use_building_timezone
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow Visibility options"
                                        [formField]="
                                            form.events.allow_visibility
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow editing bookings"
                                        [formField]="form.events.allow_edit"
                                    ></settings-toggle>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
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
                                                [formField]="
                                                    form.events.all_day_period
                                                        .start
                                                "
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
                                                [formField]="
                                                    form.events.all_day_period
                                                        .end
                                                "
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
                @if (model().features.includes('desks')) {
                    <section
                        desks
                        id="feature-desks"
                        class="border-base-300 relative rounded-sm border"
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
                                            [formField]="
                                                form.desks.max_assigned_count
                                            "
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
                @if (model().features.includes('visitors')) {
                    <section
                        visitors
                        id="feature-visitors"
                        class="border-base-300 relative rounded-sm border"
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
                                                [formField]="
                                                    form.visitors.bookable_hours
                                                        .start
                                                "
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
                                                [formField]="
                                                    form.visitors.bookable_hours
                                                        .end
                                                "
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
                                        [formField]="form.visitors.hide_fields"
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
                                            {{ 'COMMON.TIME' | translate }}
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
                                <label for="all-visitors-action-window">
                                    Check-in/out all visitors action window
                                </label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        type="number"
                                        [formField]="
                                            form.visitors
                                                .all_visitors_action_window
                                        "
                                    />
                                    <mat-hint>
                                        Minutes before and after the booking
                                        time to show all visitor check-in/out
                                        actions
                                    </mat-hint>
                                </mat-form-field>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        label="Allow booking parking for visitors"
                                        [formField]="form.visitors.has_parking"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow setting pass number for visitors"
                                        [formField]="
                                            form.visitors.allow_pass_number
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow printing visitor labels"
                                        [formField]="
                                            form.visitors.allow_printing_label
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow international flag for visitors"
                                        [formField]="
                                            form.visitors.allow_international
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show calendar links after booking"
                                        [formField]="
                                            form.visitors.show_calendar_links
                                        "
                                    ></settings-toggle>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (
                    model().features.includes('visitors') ||
                    model().features.includes('parking') ||
                    model().features.includes('lockers')
                ) {
                    <section
                        bookings
                        id="feature-bookings"
                        class="border-base-300 relative rounded-sm border"
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
                                            [formField]="
                                                form.bookings.available_period
                                            "
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
                                            [formField]="
                                                form.bookings.max_duration
                                            "
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
                                                [formField]="
                                                    form.bookings.bookable_hours
                                                        .start
                                                "
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
                                                [formField]="
                                                    form.bookings.bookable_hours
                                                        .end
                                                "
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
                                        label="Allow all day bookings"
                                        [formField]="
                                            form.bookings.allow_all_day
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Display times with building timezone"
                                        [formField]="
                                            form.bookings.use_building_timezone
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking with assets"
                                        [formField]="form.bookings.has_assets"
                                    ></settings-toggle>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
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
                                                [formField]="
                                                    form.bookings.all_day_period
                                                        .start
                                                "
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
                                                [formField]="
                                                    form.bookings.all_day_period
                                                        .end
                                                "
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
                    model().features.includes('parking') ||
                    model().features.includes('parking-bookings')
                ) {
                    <section
                        parking
                        id="feature-parking"
                        class="border-base-300 relative rounded-sm border"
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
                                            [formField]="
                                                form.parking.available_period
                                            "
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
                                            [formField]="
                                                form.parking.max_duration
                                            "
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
                                            [formField]="
                                                form.parking.max_assigned_count
                                            "
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
                                                [formField]="
                                                    form.parking.bookable_hours
                                                        .start
                                                "
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
                                                [formField]="
                                                    form.parking.bookable_hours
                                                        .end
                                                "
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
                                        label="Allow all day bookings"
                                        [formField]="form.parking.allow_all_day"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show assigned users on parking map"
                                        [formField]="form.parking.show_users"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show parking status details on map"
                                        [formField]="
                                            form.parking.show_status_details
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Disable parking map styles"
                                        [formField]="
                                            form.parking.disable_styles
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Disable reservations"
                                        [formField]="
                                            form.parking.disable_bookings
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show booking requests"
                                        [formField]="form.parking.show_requests"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show waitlisted status and filter"
                                        [formField]="form.parking.show_waitlist"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Always hide bay number column"
                                        [formField]="
                                            form.parking.hide_bay_number
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide level selector on booking list"
                                        [formField]="
                                            form.parking
                                                .hide_level_selector_on_booking_list
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide user tab"
                                        [formField]="form.parking.hide_users"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide vehicle tab"
                                        [formField]="form.parking.hide_vehicles"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide user and vehicle tabs"
                                        [formField]="
                                            form.parking.hide_users_and_vehicles
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide assign space action"
                                        [formField]="
                                            form.parking.hide_assign_space
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        [label]="
                                            'APP.CONCIERGE.PARKING_ALLOW_DELETING'
                                                | translate
                                        "
                                        [formField]="
                                            form.parking.allow_deleting
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Assign a space when approving requests"
                                        [formField]="
                                            form.parking.assign_space_on_approve
                                        "
                                    ></settings-toggle>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (model().features.includes('lockers')) {
                    <section
                        lockers
                        id="feature-lockers"
                        class="border-base-300 relative rounded-sm border"
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
                                            [formField]="
                                                form.lockers.available_period
                                            "
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
                                            [formField]="
                                                form.lockers.max_duration
                                            "
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
                                                [formField]="
                                                    form.lockers.bookable_hours
                                                        .start
                                                "
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
                                                [formField]="
                                                    form.lockers.bookable_hours
                                                        .end
                                                "
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
                                        label="Allow all day bookings"
                                        [formField]="form.lockers.allow_all_day"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Default bookings to all day"
                                        [formField]="
                                            form.lockers.all_day_default
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show Calendar Links after booking"
                                        [formField]="
                                            form.lockers.show_calendar_links
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide End time option"
                                        [formField]="form.lockers.hide_end_time"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Disable Date selection"
                                        [formField]="
                                            form.lockers.disabled_date_select
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Disable start time option"
                                        [formField]="
                                            form.lockers.disabled_start_time
                                        "
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
        FormField,
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

    public readonly model = signal({
        logo_light: '',
        logo_dark: '',
        features: [] as string[],
        banner: {} as any,
        default_route: '',
        use_24_hour_time: false,
        delegated: false,
        force_upload_state: false,
        private_uploads: false,
        week_start: 0,
        currency: 'USD',
        use_region: false,
        group_events_calendar: '',
        kiosk_url_path: '',
        short_url_public_key: '',
        control_path: '',
        signage_path: '',
        workplace_url_path: '',
        public_url_path: '',
        admin_group: '',
        events: {
            allow_all_day: false,
            all_day_period: {
                start: null as number | null,
                end: null as number | null,
            },
            bookable_hours: {
                start: null as number | null,
                end: null as number | null,
            },
            all_day_default: false,
            allow_setup_breakdown: false,
            has_assets: false,
            hide_notes: false,
            hide_attendees: false,
            allow_externals: false,
            strict_capacity_check: false,
            allow_multiday: false,
            use_building_timezone: false,
            day_timeline_view: 'default',
            block_start: 0,
            block_end: 24,
            block_height: 3,
            max_duration: 360,
            available_period: 14,
            can_book_for_others: false,
            can_book_for_anyone: false,
            allow_visibility: false,
            allow_edit: true,
        },
        desks: {
            max_assigned_count: 0,
        },
        visitors: {
            bookable_hours: {
                start: null as number | null,
                end: null as number | null,
            },
            has_parking: false,
            allow_pass_number: false,
            allow_printing_label: false,
            allow_international: false,
            show_calendar_links: false,
            all_visitors_action_window: 15,
            hide_fields: [] as string[],
        },
        bookings: {
            allow_all_day: true,
            all_day_period: {
                start: null as number | null,
                end: null as number | null,
            },
            bookable_hours: {
                start: null as number | null,
                end: null as number | null,
            },
            has_assets: false,
            use_building_timezone: false,
            available_period: 14,
            max_duration: 480,
        },
        reports: {
            attendance_include_weekends: false,
        },
        parking: {
            allow_all_day: true,
            bookable_hours: {
                start: null as number | null,
                end: null as number | null,
            },
            show_users: false,
            show_status_details: true,
            disable_styles: false,
            disable_bookings: false,
            show_requests: false,
            show_waitlist: true,
            hide_bay_number: false,
            hide_level_selector_on_booking_list: false,
            hide_users: false,
            hide_vehicles: false,
            hide_users_and_vehicles: false,
            hide_assign_space: false,
            allow_deleting: false,
            assign_space_on_approve: false,
            available_period: 7,
            max_duration: 480,
            max_assigned_count: 0,
        },
        lockers: {
            allow_all_day: true,
            bookable_hours: {
                start: null as number | null,
                end: null as number | null,
            },
            all_day_default: false,
            show_calendar_links: false,
            available_period: 14,
            max_duration: 480,
            hide_end_time: false,
            disabled_start_time: false,
            disabled_date_select: false,
        },
    });

    public readonly form = form(this.model, (p) => {
        // Preserve the `min="0"` browser constraint the template inputs had;
        // signal-forms manages the DOM min attr from this validator instead.
        min(p.desks.max_assigned_count, 0);
        min(p.visitors.all_visitors_action_window, 0);
        min(p.parking.max_assigned_count, 0);
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
        this._patchModel(DEFAULT_SETTINGS.app);
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
        this._patchModel(org_metadata || {});
        this._patchModel(parent_metadata || {});
        this._patchModel(metadata || {});
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
        const form_value: any = this.model();
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
        try {
            await updateMetadata(zone.id, {
                name: `${this.settings_key}`,
                details: new_settings,
                description: `[${VERSION.hash}|C] Concierge Application Settings`,
            });
        } catch (e) {
            console.error(e);
            this.loading.set('');
            notifyError(
                `Failed to save settings: ${e.message || e.error || e}`,
            );
            throw e;
        }
        this.loading.set('');
        notifySuccess('Successfully saved concierge app settings');
        this._dialog_ref.close();
    }

    private _patchModel(patch: Record<string, any>) {
        this.model.update((m) => this._mergeInto(m, patch));
    }

    private _mergeInto(target: any, patch: Record<string, any>): any {
        if (!patch || typeof patch !== 'object') return target;
        const result = { ...target };
        for (const key in patch) {
            if (!(key in result)) continue;
            const patch_value = patch[key];
            const current_value = result[key];
            if (
                patch_value &&
                typeof patch_value === 'object' &&
                !Array.isArray(patch_value) &&
                current_value &&
                typeof current_value === 'object' &&
                !Array.isArray(current_value)
            ) {
                result[key] = this._mergeInto(current_value, patch_value);
            } else if (patch_value !== undefined) {
                result[key] = patch_value;
            }
        }
        return result;
    }

    private _isValid<T>(new_value: T, existing_value: T) {
        return (
            new_value !== '' &&
            new_value !== undefined &&
            new_value !== null &&
            JSON.stringify(new_value) !== JSON.stringify(existing_value)
        );
    }

    private async _getMetadata(id) {
        const metadata: any = await showMetadata(id, this.settings_key);
        return metadata.details as Record<string, any>;
    }
}
