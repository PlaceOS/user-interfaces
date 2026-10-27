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
import { errorText } from '../modal-actions';
import {
    applyAppSettings,
    applyBookingFallbacks,
    appSettingOverrides,
    AppSettings,
    LOCKER_BOOKING_FALLBACKS,
    mergeAppSettings,
} from './app-settings.utilities';
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
                        <label for="concierge-settings-form-modal-logo_light"
                            >Light Mode Logo</label
                        >
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input
                                    id="concierge-settings-form-modal-logo_light"
                                    matInput
                                    [formField]="form.logo_light"
                                />
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
                        <label for="concierge-settings-form-modal-logo_dark"
                            >Dark Mode Logo</label
                        >
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input
                                    id="concierge-settings-form-modal-logo_dark"
                                    matInput
                                    [formField]="form.logo_dark"
                                />
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
                        <label
                            for="concierge-settings-form-modal-features"
                            id="concierge-settings-form-modal-features-label"
                            >Features</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                aria-labelledby="concierge-settings-form-modal-features-label"
                                [formField]="form.features"
                                multiple
                            >
                                <mat-option value="zones"> Zones </mat-option>
                                <mat-option value="maps"> Maps </mat-option>
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
                                <mat-option value="visitor-rules">
                                    Visitor Rules
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
                                <mat-option value="email-templates">
                                    Email Templates
                                </mat-option>
                                <mat-option value="deals-n-offers">
                                    Deals & Offers
                                </mat-option>
                                <mat-option value="attendance-report">
                                    Site Attendance Report
                                </mat-option>
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
                                <mat-option value="lockers-report">
                                    Lockers Report
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
                                <mat-option value="user-report">
                                    User Report
                                </mat-option>
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
                                <label
                                    for="concierge-settings-form-modal-banner-type"
                                    id="concierge-settings-form-modal-banner-type-label"
                                    >Type</label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        aria-labelledby="concierge-settings-form-modal-banner-type-label"
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
                                <label
                                    for="concierge-settings-form-modal-banner-type-2"
                                    >Message</label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        id="concierge-settings-form-modal-banner-type-2"
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
                        <label for="concierge-settings-form-modal-default-route"
                            >Default Route</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                id="concierge-settings-form-modal-default-route"
                                matInput
                                [formField]="form.default_route"
                                placeholder="/book/rooms/new"
                            />
                            <mat-hint> Main page of the application </mat-hint>
                        </mat-form-field>
                    </div>
                    @if (model().features.includes('events')) {
                        <div>
                            <label
                                for="concierge-settings-form-modal-group-events-calendar"
                            >
                                Group Events Calendar
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    id="concierge-settings-form-modal-group-events-calendar"
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
                            <label
                                for="concierge-settings-form-modal-workplace-url-path"
                                >Workplace URL Path</label
                            >
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    id="concierge-settings-form-modal-workplace-url-path"
                                    matInput
                                    [formField]="form.workplace_url_path"
                                    placeholder="/workplace"
                                />
                            </mat-form-field>
                        </div>
                        <div>
                            <label
                                for="concierge-settings-form-modal-public-url-path"
                                >Public URL Path</label
                            >
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    id="concierge-settings-form-modal-public-url-path"
                                    matInput
                                    [formField]="form.public_url_path"
                                    placeholder="/public"
                                />
                            </mat-form-field>
                        </div>
                        <div>
                            <label
                                for="concierge-settings-form-modal-kiosk-url-path"
                                >Map Kiosk URL Path</label
                            >
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    id="concierge-settings-form-modal-kiosk-url-path"
                                    matInput
                                    [formField]="form.kiosk_url_path"
                                    placeholder="/map-kiosk"
                                />
                            </mat-form-field>
                        </div>
                    </div>
                    <div class="grid gap-4 md:grid-cols-2">
                        <div>
                            <label
                                for="concierge-settings-form-modal-control-path"
                                >Control URL Path</label
                            >
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    id="concierge-settings-form-modal-control-path"
                                    matInput
                                    [formField]="form.control_path"
                                    placeholder="/control"
                                />
                            </mat-form-field>
                        </div>
                    </div>
                    <div>
                        <label
                            for="concierge-settings-form-modal-short-url-public-key"
                            >Short URL Public Key</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                id="concierge-settings-form-modal-short-url-public-key"
                                matInput
                                [formField]="form.short_url_public_key"
                                placeholder="your-short-url-public-key"
                            />
                        </mat-form-field>
                    </div>
                    <div>
                        <label
                            for="concierge-settings-form-modal-week-start"
                            id="concierge-settings-form-modal-week-start-label"
                            >Week Start</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                aria-labelledby="concierge-settings-form-modal-week-start-label"
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
                        <label
                            for="concierge-settings-form-modal-currency"
                            id="concierge-settings-form-modal-currency-label"
                            >Currency</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                aria-labelledby="concierge-settings-form-modal-currency-label"
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
                            aria-label="Room Bookings"
                            [attr.aria-expanded]="shown_group() === 'spaces'"
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
                                    <label
                                        for="concierge-settings-form-modal-day-timeline-view"
                                        id="concierge-settings-form-modal-day-timeline-view-label"
                                    >
                                        Day Timeline Default View
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            aria-labelledby="concierge-settings-form-modal-day-timeline-view-label"
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
                                        <label
                                            for="concierge-settings-form-modal-block-start"
                                            id="concierge-settings-form-modal-block-start-label"
                                            >Block Start Time</label
                                        >
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="concierge-settings-form-modal-block-start-label"
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
                                        <label
                                            for="concierge-settings-form-modal-block-end"
                                            id="concierge-settings-form-modal-block-end-label"
                                            >Block End Time</label
                                        >
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="concierge-settings-form-modal-block-end-label"
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
                                        <label
                                            for="concierge-settings-form-modal-block-height"
                                            id="concierge-settings-form-modal-block-height-label"
                                        >
                                            Block Height
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="concierge-settings-form-modal-block-height-label"
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
                                        <label
                                            for="concierge-settings-form-modal-max-duration"
                                            id="concierge-settings-form-modal-max-duration-label"
                                        >
                                            Max Duration
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="concierge-settings-form-modal-max-duration-label"
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
                                    <label
                                        for="concierge-settings-form-modal-available-period"
                                        id="concierge-settings-form-modal-available-period-label"
                                    >
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            aria-labelledby="concierge-settings-form-modal-available-period-label"
                                            [formField]="
                                                form.events.available_period
                                            "
                                            placeholder="No limit"
                                        >
                                            <mat-option [value]="null"
                                                >No limit</mat-option
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
                                            create group events
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label
                                            for="concierge-settings-form-modal-events-bookable-start"
                                            id="concierge-settings-form-modal-events-bookable-start-label"
                                        >
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="concierge-settings-form-modal-events-bookable-start-label"
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
                                        <label
                                            for="concierge-settings-form-modal-events-bookable-end"
                                            id="concierge-settings-form-modal-events-bookable-end-label"
                                        >
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="concierge-settings-form-modal-events-bookable-end-label"
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
                                        label="Allow international attendees"
                                        info="Show a checkbox on the event booking form that flags each attendee as international"
                                        [formField]="
                                            form.events.allow_international
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow attendees to be marked internal or external"
                                        info="Show a control on the event booking form that marks each attendee as internal (default) or external"
                                        [formField]="
                                            form.events
                                                .allow_attendee_internal_or_external
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
                                        <label
                                            for="concierge-settings-form-modal-events-all-day-start"
                                            id="concierge-settings-form-modal-events-all-day-start-label"
                                        >
                                            All Day Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="concierge-settings-form-modal-events-all-day-start-label"
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
                                        <label
                                            for="concierge-settings-form-modal-events-all-day-end"
                                            id="concierge-settings-form-modal-events-all-day-end-label"
                                        >
                                            All Day End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="concierge-settings-form-modal-events-all-day-end-label"
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
                            aria-label="Desk Assignments"
                            [attr.aria-expanded]="shown_group() === 'desks'"
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
                                    <label
                                        for="concierge-settings-form-modal-desks-max-assigned-count"
                                    >
                                        Max Assigned Desks Per User
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <input
                                            id="concierge-settings-form-modal-desks-max-assigned-count"
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
                            aria-label="Visitors"
                            [attr.aria-expanded]="shown_group() === 'visitors'"
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
                                        <label
                                            for="concierge-settings-form-modal-visitors-bookable-start"
                                            id="concierge-settings-form-modal-visitors-bookable-start-label"
                                        >
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="concierge-settings-form-modal-visitors-bookable-start-label"
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
                                        <label
                                            for="concierge-settings-form-modal-visitors-bookable-end"
                                            id="concierge-settings-form-modal-visitors-bookable-end-label"
                                        >
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="concierge-settings-form-modal-visitors-bookable-end-label"
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
                                <label
                                    for="concierge-settings-form-modal-hide-fields"
                                    id="concierge-settings-form-modal-hide-fields-label"
                                    >Hide Guest List fields</label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        aria-labelledby="concierge-settings-form-modal-hide-fields-label"
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
                                        <mat-option value="notes">
                                            {{ 'FORM.NOTES' | translate }}
                                        </mat-option>
                                    </mat-select>
                                    <mat-hint>
                                        Hide selected columns on the visitor
                                        listing table
                                    </mat-hint>
                                </mat-form-field>
                                <label
                                    for="concierge-settings-form-modal-all-visitors-action-window"
                                >
                                    Check-in/out all visitors action window
                                </label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        id="concierge-settings-form-modal-all-visitors-action-window"
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
                                        label="Allow visitors to be marked internal or external"
                                        [formField]="
                                            form.visitors
                                                .allow_visitor_internal_or_external
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
                            aria-label="PlaceOS Bookings"
                            [attr.aria-expanded]="shown_group() === 'bookings'"
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
                                    <label
                                        for="concierge-settings-form-modal-available-period-2"
                                        id="concierge-settings-form-modal-available-period-2-label"
                                    >
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            aria-labelledby="concierge-settings-form-modal-available-period-2-label"
                                            [formField]="
                                                form.bookings.available_period
                                            "
                                            placeholder="Not set"
                                        >
                                            <mat-option [value]="null"
                                                >Not set</mat-option
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
                                            able to book. Parking and lockers
                                            use this when their own period is
                                            not set
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div>
                                    <label
                                        for="concierge-settings-form-modal-max-duration-2"
                                        id="concierge-settings-form-modal-max-duration-2-label"
                                    >
                                        Max Duration
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            aria-labelledby="concierge-settings-form-modal-max-duration-2-label"
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
                                        <label
                                            for="concierge-settings-form-modal-bookings-bookable-start"
                                            id="concierge-settings-form-modal-bookings-bookable-start-label"
                                        >
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="concierge-settings-form-modal-bookings-bookable-start-label"
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
                                        <label
                                            for="concierge-settings-form-modal-bookings-bookable-end"
                                            id="concierge-settings-form-modal-bookings-bookable-end-label"
                                        >
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="concierge-settings-form-modal-bookings-bookable-end-label"
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
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label
                                            for="concierge-settings-form-modal-bookings-all-day-start"
                                            id="concierge-settings-form-modal-bookings-all-day-start-label"
                                        >
                                            All Day Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="concierge-settings-form-modal-bookings-all-day-start-label"
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
                                        <label
                                            for="concierge-settings-form-modal-bookings-all-day-end"
                                            id="concierge-settings-form-modal-bookings-all-day-end-label"
                                        >
                                            All Day End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="concierge-settings-form-modal-bookings-all-day-end-label"
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
                            aria-label="Parking"
                            [attr.aria-expanded]="shown_group() === 'parking'"
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
                                    <label
                                        for="concierge-settings-form-modal-available-period-3"
                                        id="concierge-settings-form-modal-available-period-3-label"
                                    >
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            aria-labelledby="concierge-settings-form-modal-available-period-3-label"
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
                                    <label
                                        for="concierge-settings-form-modal-max-duration-3"
                                        id="concierge-settings-form-modal-max-duration-3-label"
                                    >
                                        Max Duration
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            aria-labelledby="concierge-settings-form-modal-max-duration-3-label"
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
                                    <label
                                        for="concierge-settings-form-modal-parking-max-assigned-count"
                                    >
                                        Max Assigned Parking Spaces Per User
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <input
                                            id="concierge-settings-form-modal-parking-max-assigned-count"
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
                                        <label
                                            for="concierge-settings-form-modal-parking-bookable-start"
                                            id="concierge-settings-form-modal-parking-bookable-start-label"
                                        >
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="concierge-settings-form-modal-parking-bookable-start-label"
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
                                        <label
                                            for="concierge-settings-form-modal-parking-bookable-end"
                                            id="concierge-settings-form-modal-parking-bookable-end-label"
                                        >
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="concierge-settings-form-modal-parking-bookable-end-label"
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
                            aria-label="Locker Bookings"
                            [attr.aria-expanded]="shown_group() === 'lockers'"
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
                                    <label
                                        for="concierge-settings-form-modal-available-period-4"
                                        id="concierge-settings-form-modal-available-period-4-label"
                                    >
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            aria-labelledby="concierge-settings-form-modal-available-period-4-label"
                                            [formField]="
                                                form.lockers.available_period
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
                                    <label
                                        for="concierge-settings-form-modal-max-duration-4"
                                        id="concierge-settings-form-modal-max-duration-4-label"
                                    >
                                        Max Duration
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            aria-labelledby="concierge-settings-form-modal-max-duration-4-label"
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
                                        <label
                                            for="concierge-settings-form-modal-lockers-bookable-start"
                                            id="concierge-settings-form-modal-lockers-bookable-start-label"
                                        >
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="concierge-settings-form-modal-lockers-bookable-start-label"
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
                                        <label
                                            for="concierge-settings-form-modal-lockers-bookable-end"
                                            id="concierge-settings-form-modal-lockers-bookable-end-label"
                                        >
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="concierge-settings-form-modal-lockers-bookable-end-label"
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
    /** Form values right after loading, used to find user changes on save. */
    public initial_settings: AppSettings = {};
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
        this._settings.get('app.concierge_metadata_key') ||
        this._settings.get('app.concierge_app') ||
        'concierge_app';

    public readonly model = signal({
        logo_light: '',
        logo_dark: '',
        features: [] as string[],
        banner: {} as any,
        default_route: '',
        use_24_hour_time: false,
        week_start: 0,
        currency: 'USD',
        use_region: false,
        group_events_calendar: '',
        kiosk_url_path: '',
        short_url_public_key: '',
        control_path: '',
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
            allow_setup_breakdown: false,
            has_assets: false,
            hide_notes: false,
            hide_attendees: false,
            allow_externals: false,
            allow_international: false,
            allow_attendee_internal_or_external: false,
            strict_capacity_check: false,
            allow_multiday: false,
            use_building_timezone: false,
            day_timeline_view: 'inverted',
            block_start: 7,
            block_end: 19,
            block_height: 5,
            max_duration: 480,
            // Unset means no limit
            available_period: null as number | null,
            can_book_for_others: false,
            can_book_for_anyone: false,
            allow_visibility: false,
            allow_edit: false,
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
            allow_pass_number: true,
            allow_printing_label: true,
            allow_international: false,
            allow_visitor_internal_or_external: false,
            show_calendar_links: false,
            all_visitors_action_window: 15,
            hide_fields: [] as string[],
        },
        bookings: {
            allow_all_day: false,
            all_day_period: {
                start: null as number | null,
                end: null as number | null,
            },
            bookable_hours: {
                start: null as number | null,
                end: null as number | null,
            },
            use_building_timezone: false,
            // Unset so parking and lockers keep their own fallbacks
            available_period: null as number | null,
            max_duration: 480,
        },
        reports: {
            attendance_include_weekends: false,
        },
        parking: {
            allow_all_day: false,
            bookable_hours: {
                start: null as number | null,
                end: null as number | null,
            },
            show_users: false,
            show_status_details: true,
            disable_styles: false,
            disable_bookings: false,
            show_requests: false,
            show_waitlist: false,
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
            available_period: 90,
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
        try {
            const org_id = this._org.organisation.id;
            const org_metadata =
                zone.id !== org_id ? await this._getMetadata(org_id) : {};
            const parent_metadata =
                zone.id !== org_id &&
                !!zone.parent_id &&
                org_id !== zone.parent_id
                    ? await this._getMetadata(zone.parent_id)
                    : {};
            const metadata = await this._getMetadata(zone.id);
            this.existing_settings = mergeAppSettings(
                DEFAULT_SETTINGS.app,
                org_metadata,
                parent_metadata,
            );
            this._patchModel(this.existing_settings);
            this._patchModel(metadata || {});
            this.model.update((model) =>
                applyBookingFallbacks(
                    model,
                    mergeAppSettings(this.existing_settings, metadata),
                    'lockers',
                    LOCKER_BOOKING_FALLBACKS,
                ),
            );
            this.old_settings = metadata;
            this.initial_settings = this.model();
        } catch (e) {
            // Saving defaults over settings that failed to load would lose
            // them, so close instead.
            notifyError(`Failed to load existing settings. ${errorText(e)}`);
            this._dialog_ref.close();
        } finally {
            this.loading.set('');
        }
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
        const working_settings = mergeAppSettings(
            this.old_settings,
            this.model(),
        );
        const new_settings = appSettingOverrides(
            working_settings,
            this.existing_settings,
            this.initial_settings,
            this.old_settings,
        );

        const user = currentUser();
        new_settings.edited_by = {
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

    private _patchModel(patch: Record<string, unknown>) {
        this.model.update((model) => applyAppSettings(model, patch));
    }

    private async _getMetadata(id) {
        const metadata = await showMetadata(id, this.settings_key);
        return (metadata.details || {}) as Record<string, unknown>;
    }
}
