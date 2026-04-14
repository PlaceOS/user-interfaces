import { Component, computed, inject, OnInit, signal } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { PlaceZone, showMetadata, updateMetadata } from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import {
    buildCurrencyOptions,
    currentUser,
    notifyError,
    notifySuccess,
    OrganisationService,
    SettingsService,
} from '@placeos/common';

import { validateURL } from '@placeos/events';
import { DEFAULT_SETTINGS } from 'apps/workplace/src/environments/settings';
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
} from '@placeos/components';
import { lastValueFrom } from 'rxjs';
import {
    AVAILABLE_PERIOD_EXTENDED_OPTIONS,
    BANNER_TYPE_OPTIONS,
    BLOCK_END_OPTIONS,
    BLOCK_START_OPTIONS,
    BOOKABLE_HOUR_END_OPTIONS,
    BOOKABLE_HOUR_START_OPTIONS,
    CACHE_DURATION_OPTIONS,
    EXPLORE_FEATURE_OPTIONS,
    MAX_DURATION_FULL_OPTIONS,
    MAX_DURATION_SHORT_OPTIONS,
    SETUP_BREAKDOWN_OPTIONS,
    WEEK_START_OPTIONS,
} from './settings-option.constants';
import { UploadButtonComponent } from './upload-button.component';

@Component({
    selector: 'workplace-settings-form-modal',
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
                                <mat-label>Light Mode Logo</mat-label>
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
                                <mat-label>Dark Mode Logo</mat-label>
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
                            <mat-label>Features</mat-label>
                            <mat-select
                                name="features"
                                formControlName="features"
                                multiple
                            >
                                <mat-option value="spaces"> Rooms </mat-option>
                                <mat-option value="desks">Desks</mat-option>
                                <mat-option value="explore">Explore</mat-option>
                                <mat-option value="parking">Parking</mat-option>
                                <mat-option value="visitor-invite">
                                    Visitors
                                </mat-option>
                                <mat-option value="lockers">Lockers</mat-option>
                                <mat-option value="help">Help Desk</mat-option>
                                <mat-option value="schedule">
                                    Your Bookings
                                </mat-option>
                                <mat-option value="wfh"
                                    >Work Schedule</mat-option
                                >
                                <mat-option value="support-ticket">
                                    Support Tickets
                                </mat-option>
                                <mat-option value="group-events"
                                    >Group Events</mat-option
                                >
                                <mat-option value="deals-n-offers">
                                    Deals & Offers
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="features"
                            >Hide Global Search Item Types</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>Hide Global Search Item Types</mat-label>
                            <mat-select
                                name="hide-global-search-items"
                                formControlName="hide_global_search_items"
                                multiple
                            >
                                <mat-option value="mapspeople">
                                    MapsPeople
                                </mat-option>
                                <mat-option value="spaces"> Rooms </mat-option>
                                <mat-option value="emergency_contacts">
                                    Emergency Contacts
                                </mat-option>
                                <mat-option value="features">
                                    Map Features
                                </mat-option>
                                <mat-option value="points_of_interest">
                                    Points of Interest
                                </mat-option>
                                <mat-option value="contacts">
                                    Contacts
                                </mat-option>
                                <mat-option value="users"> Users </mat-option>
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
                                    <mat-label>Type</mat-label>
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
                                    <mat-label>Message</mat-label>
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
                        <label for="external-support-url">
                            External Support URL
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>External Support URL</mat-label>
                            <input
                                matInput
                                name="external-support-url"
                                formControlName="external_support_url"
                                placeholder="https://support.com/ticket"
                            />
                            <mat-hint>
                                External URL to link users to for support
                                tickets
                            </mat-hint>
                            <mat-error>Invalid URL</mat-error>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="support-email">Support Email</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>Support Email</mat-label>
                            <input
                                matInput
                                name="support-email"
                                formControlName="support_email"
                                placeholder="support@acme.tech"
                            />
                            <mat-hint>
                                Email to send tickets when created in the app
                            </mat-hint>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="default-route">Default Route</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>Default Route</mat-label>
                            <input
                                matInput
                                name="default-route"
                                formControlName="default_route"
                                placeholder="/landing"
                            />
                            <mat-hint> Main page of the application </mat-hint>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="catering-provider">Catering Provider</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>Catering Provider</mat-label>
                            <input
                                matInput
                                name="catering-provider"
                                formControlName="catering_provider"
                                placeholder="Catering Provider"
                            />
                            <mat-hint>
                                Name of the catering provider to force orders to
                                use
                            </mat-hint>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="week-start">Week Start</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>Week Start</mat-label>
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
                    <div>
                        <label for="locales">Locales</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>Locales</mat-label>
                            <mat-select
                                name="locales"
                                formControlName="locales"
                                multiple
                                placeholder="Select locales"
                            >
                                <mat-option
                                    [value]="{
                                        id: 'en-GB',
                                        name: 'English',
                                        flag: '🇬🇧',
                                    }"
                                >
                                    English (British)
                                </mat-option>
                                <mat-option
                                    [value]="{
                                        id: 'en-US',
                                        name: 'English',
                                        flag: '🇺🇸',
                                    }"
                                >
                                    English (US)
                                </mat-option>
                                <mat-option
                                    [value]="{
                                        id: 'fr',
                                        name: 'French',
                                        flag: '🇫🇷',
                                    }"
                                >
                                    French
                                </mat-option>
                                <mat-option
                                    [value]="{
                                        id: 'es',
                                        name: 'Spanish',
                                        flag: '🇪🇸',
                                    }"
                                >
                                    Spanish
                                </mat-option>
                                <mat-option
                                    [value]="{
                                        id: 'pt',
                                        name: 'Portuguese',
                                        flag: '🇵🇹',
                                    }"
                                >
                                    Portuguese
                                </mat-option>
                                <mat-option
                                    [value]="{
                                        id: 'ar',
                                        name: 'Arabic',
                                        flag: '',
                                    }"
                                >
                                    Arabic
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            name="Use 24 hour time"
                            formControlName="use_24_hour_time"
                        ></settings-toggle>
                        <settings-toggle
                            name="Use region over building"
                            formControlName="use_region"
                        ></settings-toggle>
                        <settings-toggle
                            name="Use imperial units for measurements"
                            formControlName="use_imperial_units"
                        ></settings-toggle>
                        @if (form.value.features.includes('support-ticket')) {
                            <settings-toggle
                                name="Allow images in support tickets"
                                formControlName="allow_support_ticket_images"
                            ></settings-toggle>
                        }
                        <settings-toggle
                            name="Search only authenticated users"
                            formControlName="basic_user_search"
                        ></settings-toggle>
                        <settings-toggle
                            name="Only authenticated colleagues"
                            info="Will limit the available users to add as colleagues to only
 those who have authenticated with the application"
                            formControlName="colleagues_require_auth"
                        ></settings-toggle>
                        <settings-toggle
                            name="Hide landing sidebar"
                            formControlName="hide_landing_sidebar"
                        ></settings-toggle>
                        <settings-toggle
                            name="Hide landing spaces"
                            formControlName="hide_landing_spaces"
                        ></settings-toggle>
                        <settings-toggle
                            name="Hide landing rooms"
                            formControlName="hide_landing_rooms"
                        ></settings-toggle>
                        <settings-toggle
                            name="Hide colleagues"
                            formControlName="hide_colleagues"
                        ></settings-toggle>
                        <settings-toggle
                            name="Show landing quick links"
                            formControlName="show_quick_links"
                        ></settings-toggle>
                        <settings-toggle
                            name="Show landing quick book"
                            formControlName="show_quick_book"
                        ></settings-toggle>
                        <settings-toggle
                            name="Allow dark mode"
                            formControlName="allow_dark_mode"
                        ></settings-toggle>
                        <settings-toggle
                            name="Show global search"
                            formControlName="global_search"
                        ></settings-toggle>
                    </div>
                </section>
                @if (form.value.features?.includes('spaces')) {
                    <section
                        events
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
                                <div>
                                    <label for="available-period">
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-label>Available Period</mat-label>
                                        <mat-select
                                            name="available-period"
                                            formControlName="allowed_future_days"
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
                                    <label for="force-host">Force Host</label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-label>Force Host</mat-label>
                                        <input
                                            matInput
                                            name="force-host"
                                            formControlName="force_host"
                                            placeholder="global.host@acme.tech"
                                        />
                                        <mat-hint>
                                            Force host of room bookings to be
                                            this user
                                        </mat-hint>
                                        <mat-error
                                            >Invalid email address</mat-error
                                        >
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
                                        <mat-label>Max Duration</mat-label>
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
                                <div class="flex items-center space-x-4">
                                    <div>
                                        <label for="setup">
                                            Default Setup Duration
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-label>Default Setup Duration</mat-label>
                                            <mat-select
                                                name="setup"
                                                formControlName="setup"
                                                placeholder="No default setup"
                                            >
                                                @for (
                                                    opt of SETUP_BREAKDOWN;
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
                                        <label for="breakdown">
                                            Default Breakdown Duration
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-label>Default Breakdown Duration</mat-label>
                                            <mat-select
                                                name="breakdown"
                                                formControlName="breakdown"
                                                placeholder="No default breakdown"
                                            >
                                                @for (
                                                    opt of SETUP_BREAKDOWN;
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
                                <div>
                                    <label for="cache-duration">
                                        Cache Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-label>Cache Period</mat-label>
                                        <mat-select
                                            name="cache-duration"
                                            formControlName="cache_duration_in_days"
                                        >
                                            @for (
                                                opt of CACHE_DURATION;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Number of days ahead to grab
                                            bookings from the room driver
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
                                        name="Disable booking requests"
                                        formControlName="booking_unavailable"
                                        info="Prevent making backend requests for bookings and give users links to create the booking in their own calendars"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow booking for other users"
                                        formControlName="can_book_for_others"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow booking for any users"
                                        formControlName="can_book_for_anyone"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow booking with assets"
                                        formControlName="has_assets"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Hide attendee actions"
                                        formControlName="hide_user_actions"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow booking multiple spaces"
                                        formControlName="multiple_spaces"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Force room as host"
                                        formControlName="room_as_host"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow external attendees"
                                        formControlName="allow_externals"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Enforce room capacity limits"
                                        formControlName="strict_capacity_check"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow Visibility options"
                                        formControlName="allow_visibility"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Disable notes field"
                                        formControlName="hide_notes"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Hide attendees field"
                                        formControlName="hide_attendees"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Hide nearby desk action"
                                        info="Hide the book nearby desks button on the meeting success view"
                                        formControlName="hide_nearby_desks"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow recurring meetings"
                                        formControlName="allow_recurrence"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow multi-day bookings"
                                        formControlName="allow_multiday"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Use PlaceOS bookings"
                                        formControlName="use_bookings"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Display times with building timezone"
                                        formControlName="use_building_timezone"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow daily all-day recurrence"
                                        formControlName="allow_daily_allday_recurrence"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Disable standalone bookings"
                                        formControlName="no_standalone"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Hide End Time option"
                                        formControlName="hide_end_time"
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
                            Desk Bookings
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
                                                opt of MAX_DURATION_SHORT;
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
                                <div>
                                    <label for="available-period">
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-label>Available Period</mat-label>
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
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                    formGroupName="bookable_hours"
                                >
                                    <div>
                                        <label for="desks-bookable-start">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="desks-bookable-start"
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
                                        <label for="desks-bookable-end">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                name="desks-bookable-end"
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
                                        name="Allow group bookings"
                                        formControlName="allow_groups"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow time changes"
                                        formControlName="allow_time_changes"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Auto-allocation"
                                        formControlName="auto_allocation"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow booking for others"
                                        formControlName="can_book_for_others"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow also booking a locker"
                                        formControlName="can_book_lockers"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow requesting assets with booking"
                                        formControlName="has_assets"
                                    ></settings-toggle>
                                    <!-- <settings-toggle
                                                                                                      name="Hide reason field for desk booking"
                                                                                                      formControlName="hide_reason"
                                                                                                    ></settings-toggle>
                                                                                                    <settings-toggle
                                                                                                      name="Require a reason for desk booking"
                                                                                                      formControlName="needs_reason"
                                                                                                    ></settings-toggle> -->
                                    <settings-toggle
                                        name="Allow Recurring Desk bookings"
                                        formControlName="allow_recurrence"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Auto-checkin map bookingss"
                                        formControlName="auto_checkin"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Default to desk select modal to map view"
                                        formControlName="default_select_as_map"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Show calendar links after booking"
                                        formControlName="show_calendar_links"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Enabled desk height"
                                        formControlName="height_enabled"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Hide Checkin Options"
                                        formControlName="hide_checkin"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Hide End Time option"
                                        formControlName="hide_end_time"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Display times with building timezone"
                                        formControlName="use_building_timezone"
                                    ></settings-toggle>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (
                    form.value.features.includes('desks') ||
                    form.value.features.includes('parking') ||
                    form.value.features.includes('lockers') ||
                    form.value.features.includes('visitor-invite')
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
                                        name="Default bookings to all day"
                                        formControlName="all_day_default"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Display times with building timezone"
                                        formControlName="use_building_timezone"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow booking for other users"
                                        formControlName="can_book_for_others"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow booking multiple visitors"
                                        formControlName="multiple_visitors"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Auto-approve bookings"
                                        formControlName="no_approval"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow booking with assets"
                                        formControlName="allow_assets"
                                    ></settings-toggle>
                                    <ng-container>
                                        <settings-toggle
                                            name="Show calendar links after visitor invite"
                                            [ngModel]="
                                                form.value.visitors
                                                    .show_calendar_links
                                            "
                                            (ngModelChange)="
                                                form.controls.visitors.patchValue(
                                                    {
                                                        show_calendar_links:
                                                            $event,
                                                    }
                                                )
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        ></settings-toggle>
                                    </ng-container>
                                    <ng-container>
                                        <settings-toggle
                                            name="Allow international flag for visitors"
                                            [ngModel]="
                                                form.value.visitors
                                                    .allow_international
                                            "
                                            (ngModelChange)="
                                                form.controls.visitors.patchValue(
                                                    {
                                                        allow_international:
                                                            $event,
                                                    }
                                                )
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        ></settings-toggle>
                                    </ng-container>
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
                @if (form.value.features.includes('explore')) {
                    <section
                        explore
                        id="feature-explore"
                        class="border-base-300 relative rounded-sm border"
                        formGroupName="explore"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            PlaceOS Maps
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            (click)="toggleGroup('explore')"
                        >
                            <icon>{{
                                shown_group() === 'explore'
                                    ? 'chevron_left'
                                    : 'keyboard_arrow_down'
                            }}</icon>
                        </button>
                        <div
                            collapsible
                            [class.open]="shown_group() === 'explore'"
                        >
                            <div class="content px-4 pt-4 pb-2">
                                <div>
                                    <label for="disable">
                                        Disabled Features
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-label>Disabled Features</mat-label>
                                        <mat-select
                                            name="disable"
                                            formControlName="disable"
                                            placeholder="No disabled features"
                                            multiple
                                        >
                                            @for (
                                                opt of EXPLORE_FEATURE;
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
                                <div class="flex items-center space-x-4">
                                    <div class="flex-1">
                                        <label for="disable-actions">
                                            Disabled Feature Actions
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-label>Disabled Feature Actions</mat-label>
                                            <mat-select
                                                name="disable-actions"
                                                formControlName="disable_actions"
                                                placeholder="No disabled actions"
                                                multiple
                                            >
                                                @for (
                                                    opt of EXPLORE_FEATURE;
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
                                    <div class="flex-1">
                                        <label for="available-period">
                                            Disabled Feature Labels
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-label>Disabled Feature Labels</mat-label>
                                            <mat-select
                                                name="disable-labels"
                                                formControlName="disable_labels"
                                                placeholder="No disabled labels"
                                                multiple
                                            >
                                                @for (
                                                    opt of EXPLORE_FEATURE;
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
                                <div class="flex items-center space-x-4">
                                    <div class="flex-1">
                                        <label for="disable-features">
                                            Disabled Feature Displays
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-label>Disabled Feature Displays</mat-label>
                                            <mat-select
                                                name="disable-features"
                                                formControlName="disable_features"
                                                placeholder="No disabled displays"
                                                multiple
                                            >
                                                @for (
                                                    opt of EXPLORE_FEATURE;
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
                                    <div class="flex-1">
                                        <label for="disable-styles">
                                            Disabled Feature Styles
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-label>Disabled Feature Styles</mat-label>
                                            <mat-select
                                                name="disable-styles"
                                                formControlName="disable_styles"
                                                placeholder="No disabled styles"
                                                multiple
                                            >
                                                @for (
                                                    opt of EXPLORE_FEATURE;
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
                                @if (form.value.explore?.show_legend) {
                                    <div
                                        class="border-base-300 relative rounded-sm border p-4"
                                    >
                                        <h3
                                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                                        >
                                            Legend
                                        </h3>
                                        @for (
                                            item of form.value.explore.legend ||
                                                [];
                                            track item;
                                            let i = $index
                                        ) {
                                            <div
                                                class="mb-4 flex items-center space-x-4"
                                            >
                                                <div class="w-3/4 flex-1">
                                                    <mat-form-field
                                                        appearance="outline"
                                                        class="no-subscript w-full"
                                                    >
                                                        <mat-label>Legend Key</mat-label>
                                                        <input
                                                            matInput
                                                            placeholder="Legend Key"
                                                            [(ngModel)]="
                                                                item[0]
                                                            "
                                                            [ngModelOptions]="{
                                                                standalone: true,
                                                            }"
                                                        />
                                                    </mat-form-field>
                                                </div>
                                                <div
                                                    class="flex w-12 items-center justify-center"
                                                    matTooltip="Legend Color"
                                                >
                                                    <input
                                                        type="color"
                                                        class="border-base-content h-11 rounded-lg border"
                                                        [(ngModel)]="item[1]"
                                                        [ngModelOptions]="{
                                                            standalone: true,
                                                        }"
                                                    />
                                                </div>
                                                <button
                                                    icon
                                                    matRipple
                                                    class="border-error text-error h-12 w-12 rounded-sm border"
                                                    (click)="removeLegend(i)"
                                                >
                                                    <icon>delete</icon>
                                                </button>
                                            </div>
                                        }
                                        <button
                                            btn
                                            matRipple
                                            class="w-full"
                                            (click)="addLegend()"
                                        >
                                            Add Legend Item
                                        </button>
                                    </div>
                                }
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        name="Hide device fields"
                                        formControlName="hide_device_fields"
                                        info="Hides the MAC address, manufacturer, OS and SSID fields from device info tooltips"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Show Legend"
                                        formControlName="show_legend"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Hide Zones"
                                        formControlName="hide_zones"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Show Booking QR Code"
                                        formControlName="show_booking_qr"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Use defined polygons for zones"
                                        formControlName="use_zone_polygons"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Show labels for zones"
                                        formControlName="show_zone_labels"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Show zone sensor info"
                                        formControlName="show_zone_sensor_info"
                                    ></settings-toggle>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (form.value.features.includes('parking')) {
                    <section
                        parking
                        id="feature-parking"
                        class="border-base-300 relative rounded-sm border"
                        formGroupName="parking"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Parking Bookings
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
                                                opt of MAX_DURATION_SHORT;
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
                                <div>
                                    <label for="available-period">
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-label>Available Period</mat-label>
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
                                        name="Default bookings to all day"
                                        formControlName="all_day_default"
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
                                        name="Allow user selecting booking time"
                                        formControlName="allow_time_changes"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Auto-allocate parking spaces"
                                        formControlName="auto_allocation"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow booking for other users"
                                        formControlName="can_book_for_others"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Allow recurring parking bookings"
                                        formControlName="allow_recurrence"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Hide End time option"
                                        formControlName="hide_end_time"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Display times with building timezone"
                                        formControlName="use_building_timezone"
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
                                                opt of MAX_DURATION_SHORT;
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
                                        name="Allow user selecting booking time"
                                        formControlName="allow_time_changes"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Display times with building timezone"
                                        formControlName="use_building_timezone"
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
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        UploadButtonComponent,
    ],
})
export class WorkplaceSettingsFormModalComponent implements OnInit {
    private _data = inject<{
        zone: PlaceZone;
    }>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<WorkplaceSettingsFormModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly heading = signal('');

    public existing_settings: Record<string, any> = {};
    public old_settings: Record<string, any> = {};
    public readonly loading = signal('');
    public readonly shown_group = signal<string>('');
    public readonly currency_filter = signal('');
    public readonly currency_options = buildCurrencyOptions();
    public readonly filtered_currency_options = computed(() => {
        const filter_text = this.currency_filter().trim().toLowerCase();
        if (!filter_text) return this.currency_options;
        return this.currency_options.filter((option) =>
            option.search_text.includes(filter_text),
        );
    });
    public readonly zone = this._data.zone;
    public readonly settings_key =
        this._settings.get('app.workplace_metadata_key') || 'workplace_app';

    public readonly AVAILABLE_PERIOD_EXTENDED =
        AVAILABLE_PERIOD_EXTENDED_OPTIONS;
    public readonly BLOCK_START = BLOCK_START_OPTIONS;
    public readonly BLOCK_END = BLOCK_END_OPTIONS;
    public readonly BOOKABLE_HOUR_START = BOOKABLE_HOUR_START_OPTIONS;
    public readonly BOOKABLE_HOUR_END = BOOKABLE_HOUR_END_OPTIONS;
    public readonly MAX_DURATION_FULL = MAX_DURATION_FULL_OPTIONS;
    public readonly MAX_DURATION_SHORT = MAX_DURATION_SHORT_OPTIONS;
    public readonly WEEK_START = WEEK_START_OPTIONS;
    public readonly SETUP_BREAKDOWN = SETUP_BREAKDOWN_OPTIONS;
    public readonly CACHE_DURATION = CACHE_DURATION_OPTIONS;
    public readonly EXPLORE_FEATURE = EXPLORE_FEATURE_OPTIONS;
    public readonly BANNER_TYPE = BANNER_TYPE_OPTIONS;

    public readonly form = new FormGroup({
        logo_light: new FormControl(''),
        logo_dark: new FormControl(''),
        banner: new FormControl({} as any),
        features: new FormControl([]),
        feature_groups: new FormControl<Record<string, string[]>>({}),
        use_24_hour_time: new FormControl(false),
        use_region: new FormControl(false),
        default_route: new FormControl(''),
        allow_support_ticket_images: new FormControl(false),
        basic_user_search: new FormControl(false),
        hide_contacts: new FormControl(false),
        colleagues_require_auth: new FormControl(false),
        no_user_calendar: new FormControl(false),
        hide_landing_sidebar: new FormControl(false),
        hide_landing_spaces: new FormControl(false),
        hide_landing_rooms: new FormControl(false),
        hide_colleagues: new FormControl(false),
        show_quick_links: new FormControl(false),
        show_quick_book: new FormControl(false),
        allow_dark_mode: new FormControl(true),
        global_search: new FormControl(true),
        use_imperial_units: new FormControl(false),
        external_support_url: new FormControl('', [validateURL]),
        support_email: new FormControl('', [Validators.email]),
        catering_provider: new FormControl(''),
        currency: new FormControl('USD'),
        departments: new FormGroup<Record<string, any>>({}),
        week_start: new FormControl(0),
        locales: new FormControl([]),
        hide_global_search_items: new FormControl([]),
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
            booking_unavailable: new FormControl(false),
            can_book_for_others: new FormControl(false),
            can_book_for_anyone: new FormControl(false),
            has_assets: new FormControl(false),
            hide_user_actions: new FormControl(false),
            multiple_spaces: new FormControl(false),
            room_as_host: new FormControl(false),
            allow_externals: new FormControl(false),
            strict_capacity_check: new FormControl(false),
            hide_notes: new FormControl(false),
            hide_attendees: new FormControl(false),
            hide_nearby_desks: new FormControl(false),
            allow_recurrence: new FormControl(false),
            all_day_default: new FormControl(false),
            allow_multiday: new FormControl(false),
            use_bookings: new FormControl(false),
            allow_visibility: new FormControl(false),
            use_building_timezone: new FormControl(false),
            force_host: new FormControl('', Validators.email),
            allow_daily_allday_recurrence: new FormControl(false),
            no_standalone: new FormControl(false),
            allowed_future_days: new FormControl(45),
            setup: new FormControl(0),
            breakdown: new FormControl(0),
            max_duration: new FormControl(360),
            cache_duration_in_days: new FormControl(14),
            idle_timeout: new FormControl(5),
            hide_end_time: new FormControl(false),
        }),
        bookings: new FormGroup({
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
            use_building_timezone: new FormControl(false),
            allow_assets: new FormControl(false),
            no_approval: new FormControl(false),
            can_book_for_others: new FormControl(false),
            multiple_visitors: new FormControl(false),
            hide_end_time: new FormControl(false),
        }),
        desks: new FormGroup({
            allow_all_day: new FormControl(false),
            bookable_hours: new FormGroup({
                start: new FormControl<number | null>(null),
                end: new FormControl<number | null>(null),
            }),
            all_day_default: new FormControl(false),
            allow_groups: new FormControl(false),
            allow_time_changes: new FormControl(false),
            auto_allocation: new FormControl(false),
            can_book_for_others: new FormControl(false),
            can_book_lockers: new FormControl(false),
            has_assets: new FormControl(false),
            hide_reason: new FormControl(false),
            needs_reason: new FormControl(false),
            allow_recurrence: new FormControl(false),
            default_select_as_map: new FormControl(false),
            show_calendar_links: new FormControl(false),
            auto_checkin: new FormControl(false),
            available_period: new FormControl(14),
            max_duration: new FormControl(480),
            use_building_timezone: new FormControl(false),
            hide_map: new FormControl(false),
            height_enabled: new FormControl(false),
            hide_checkin: new FormControl(false),
            hide_end_time: new FormControl(false),
        }),
        parking: new FormGroup({
            allow_all_day: new FormControl(false),
            bookable_hours: new FormGroup({
                start: new FormControl<number | null>(null),
                end: new FormControl<number | null>(null),
            }),
            all_day_default: new FormControl(false),
            show_users: new FormControl(false),
            show_status_details: new FormControl(true),
            allow_time_changes: new FormControl(false),
            auto_allocation: new FormControl(false),
            can_book_for_others: new FormControl(false),
            allow_recurrence: new FormControl(false),
            default_select_as_map: new FormControl(false),
            show_calendar_links: new FormControl(false),
            auto_checkin: new FormControl(false),
            available_period: new FormControl(14),
            max_duration: new FormControl(480),
            use_building_timezone: new FormControl(false),
            hide_end_time: new FormControl(false),
        }),
        lockers: new FormGroup({
            allow_all_day: new FormControl(false),
            bookable_hours: new FormGroup({
                start: new FormControl<number | null>(null),
                end: new FormControl<number | null>(null),
            }),
            all_day_default: new FormControl(false),
            show_calendar_links: new FormControl(false),
            allow_time_changes: new FormControl(false),
            use_building_timezone: new FormControl(false),
            max_duration: new FormControl(480),
            hide_end_time: new FormControl(false),
            disabled_start_time: new FormControl(false),
            disabled_date_select: new FormControl(false),
        }),
        visitors: new FormGroup({
            all_day_default: new FormControl(false),
            bookable_hours: new FormGroup({
                start: new FormControl<number | null>(null),
                end: new FormControl<number | null>(null),
            }),
            show_calendar_links: new FormControl(false),
            allow_international: new FormControl(false),
        }),
        explore: new FormGroup({
            hide_device_fields: new FormControl(false),
            show_legend: new FormControl(false),
            hide_zones: new FormControl(false),
            legend: new FormControl<[string, string][]>([]),
            colors: new FormControl<Record<string, string>>({}),
            show_booking_qr: new FormControl(false),
            disable: new FormControl<string[]>([]),
            disable_actions: new FormControl<string[]>([]),
            disable_labels: new FormControl<string[]>([]),
            disable_features: new FormControl<string[]>([]),
            disable_styles: new FormControl<string[]>([]),
            use_zone_polygons: new FormControl(false),
            area_count_key: new FormControl('count'),
            show_zone_labels: new FormControl(false),
            show_zone_sensor_info: new FormControl(false),
        }),
    });

    public get date_string() {
        return format(Date.now(), 'yyyy-MM-dd+HH');
    }

    public async ngOnInit() {
        const zone = this._data.zone;
        this.loading.set('Loading existing settings...');
        this.form.patchValue(DEFAULT_SETTINGS.app);
        this.heading.set(
            `Workplace Settings <div class="font-mono text-xs px-2 py-1 rounded bg-base-300 ml-2">${this.zone.display_name || this.zone.name || 'Organisation'}</div>`,
        );
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
                description: `[${VERSION.hash}|C] Workplace Application Settings`,
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
        notifySuccess('Successfully saved workplace app settings');
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

    private _getMetadata(id: string) {
        return lastValueFrom(
            showMetadata(id, this.settings_key).pipe(
                map((m) => m.details as Record<string, any>),
            ),
        );
    }

    public addLegend() {
        console.log('Legend:', this.form.value.explore?.legend);
        let legend = this.form.value.explore?.legend || [];
        if (!(legend instanceof Array)) legend = [];
        legend.push(['', '#1E88E5']);
        this.form.controls.explore.patchValue({ legend });
    }

    public removeLegend(index: number) {
        let legend = this.form.value.explore?.legend || [];
        if (!(legend instanceof Array)) legend = [];
        if (index >= legend.length) return;
        legend.splice(index, 1);
        this.form.controls.explore.patchValue({ legend });
    }
}
