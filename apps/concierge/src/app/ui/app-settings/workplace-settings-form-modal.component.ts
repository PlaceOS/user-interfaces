import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField, validate } from '@angular/forms/signals';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { PlaceZone, showMetadata, updateMetadata } from '@placeos/ts-client';

import {
    buildCurrencyOptions,
    currentUser,
    notifyError,
    notifySuccess,
    OrganisationService,
    SettingsService,
} from '@placeos/common';

import { isValidUrl } from '@placeos/events';
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
    TranslatePipe,
} from '@placeos/components';
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
    BANNER_TYPE_OPTIONS,
    BLOCK_END_OPTIONS,
    BLOCK_START_OPTIONS,
    BOOKABLE_HOUR_END_OPTIONS,
    BOOKABLE_HOUR_START_OPTIONS,
    EXPLORE_FEATURE_OPTIONS,
    MAX_DURATION_FULL_OPTIONS,
    MAX_DURATION_SHORT_OPTIONS,
    SETUP_BREAKDOWN_OPTIONS,
    WEEK_START_OPTIONS,
} from './settings-option.constants';
import { UploadButtonComponent } from './upload-button.component';
import { errorText } from '../modal-actions';

@Component({
    selector: 'workplace-settings-form-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="heading()"
            [loading]="loading()"
            (confirm)="save()"
        >
            <form class="flex flex-col space-y-8 pb-4">
                <section general class="bg-base-100 space-y-2 rounded-sm">
                    <div>
                        <label for="workplace-settings-form-modal-logo_light">Light Mode Logo</label>
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input id="workplace-settings-form-modal-logo_light" matInput [formField]="form.logo_light" />
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
                        <label for="workplace-settings-form-modal-logo_dark">Dark Mode Logo</label>
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input id="workplace-settings-form-modal-logo_dark" matInput [formField]="form.logo_dark" />
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
                        <label for="workplace-settings-form-modal-features" id="workplace-settings-form-modal-features-label">Features</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select aria-labelledby="workplace-settings-form-modal-features-label" [formField]="form.features" multiple>
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
                        <label for="workplace-settings-form-modal-hide-landing-widgets"
                             id="workplace-settings-form-modal-hide-landing-widgets-label">Hidden Landing Widgets</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                aria-labelledby="workplace-settings-form-modal-hide-landing-widgets-label"
                                [formField]="form.hide_landing_widgets"
                                placeholder="None"
                                multiple
                            >
                                <mat-option value="available_now">
                                    Available Now
                                </mat-option>
                                <mat-option value="quick_actions">
                                    Quick Actions
                                </mat-option>
                                <mat-option value="desk_week">
                                    My Desk Bookings
                                </mat-option>
                                <mat-option value="favourites">
                                    Favourites
                                </mat-option>
                                <mat-option value="colleagues">
                                    Colleagues
                                </mat-option>
                                <mat-option value="focus_timer">
                                    Focus Timer
                                </mat-option>
                                <mat-option value="world_clock">
                                    World Clock
                                </mat-option>
                            </mat-select>
                            <mat-hint>
                                Widgets that users cannot have on the landing
                                page
                            </mat-hint>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="workplace-settings-form-modal-features-2"
                             id="workplace-settings-form-modal-features-2-label">Hide Global Search Item Types</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                aria-labelledby="workplace-settings-form-modal-features-2-label"
                                [formField]="form.hide_global_search_items"
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
                                <label for="workplace-settings-form-modal-banner-type" id="workplace-settings-form-modal-banner-type-label">Type</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        aria-labelledby="workplace-settings-form-modal-banner-type-label"
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
                                <label for="workplace-settings-form-modal-banner-type-2">Message</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        id="workplace-settings-form-modal-banner-type-2"
                                        matInput
                                        name="banner-message"
                                        placeholder="Banner Message"
                                        [ngModel]="model().banner?.content || ''"
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
                        <label for="workplace-settings-form-modal-external-support-url">
                            External Support URL
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                id="workplace-settings-form-modal-external-support-url"
                                matInput
                                [formField]="form.external_support_url"
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
                        <label for="workplace-settings-form-modal-support-email">Support Email</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                id="workplace-settings-form-modal-support-email"
                                matInput
                                [formField]="form.support_email"
                                placeholder="support@acme.tech"
                            />
                            <mat-hint>
                                Email to send tickets when created in the app
                            </mat-hint>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="workplace-settings-form-modal-default-route">Default Route</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                id="workplace-settings-form-modal-default-route"
                                matInput
                                [formField]="form.default_route"
                                placeholder="/landing"
                            />
                            <mat-hint> Main page of the application </mat-hint>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="workplace-settings-form-modal-catering-provider">Catering Provider</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                id="workplace-settings-form-modal-catering-provider"
                                matInput
                                [formField]="form.catering_provider"
                                placeholder="Catering Provider"
                            />
                            <mat-hint>
                                Name of the catering provider to force orders to
                                use
                            </mat-hint>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="workplace-settings-form-modal-week-start" id="workplace-settings-form-modal-week-start-label">Week Start</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                aria-labelledby="workplace-settings-form-modal-week-start-label"
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
                        <label for="workplace-settings-form-modal-currency" id="workplace-settings-form-modal-currency-label">Currency</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                aria-labelledby="workplace-settings-form-modal-currency-label"
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
                    <div>
                        <label for="workplace-settings-form-modal-locales" id="workplace-settings-form-modal-locales-label">Locales</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                aria-labelledby="workplace-settings-form-modal-locales-label"
                                [formField]="form.locales"
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
                            label="Use 24 hour time"
                            [formField]="form.use_24_hour_time"
                        ></settings-toggle>
                        <settings-toggle
                            label="Use region over building"
                            [formField]="form.use_region"
                        ></settings-toggle>
                        <settings-toggle
                            label="Use imperial units for measurements"
                            [formField]="form.use_imperial_units"
                        ></settings-toggle>
                        @if (model().features.includes('support-ticket')) {
                            <settings-toggle
                                label="Allow images in support tickets"
                                [formField]="form.allow_support_ticket_images"
                            ></settings-toggle>
                        }
                        <settings-toggle
                            label="Search only authenticated users"
                            [formField]="form.basic_user_search"
                        ></settings-toggle>
                        <settings-toggle
                            label="Only authenticated colleagues"
                            info="Will limit the available users to add as colleagues to only
 those who have authenticated with the application"
                            [formField]="form.colleagues_require_auth"
                        ></settings-toggle>
                        <settings-toggle
                            label="Hide landing spaces"
                            [formField]="form.hide_landing_spaces"
                        ></settings-toggle>
                        <settings-toggle
                            label="Hide landing rooms"
                            [formField]="form.hide_landing_rooms"
                        ></settings-toggle>
                        <settings-toggle
                            label="Hide colleagues"
                            [formField]="form.hide_colleagues"
                        ></settings-toggle>
                        <settings-toggle
                            label="Hide landing customise"
                            info="Will stop users from changing the layout of the landing page"
                            [formField]="form.hide_landing_customise"
                        ></settings-toggle>
                        <settings-toggle
                            label="Show landing quick links"
                            [formField]="form.show_quick_links"
                        ></settings-toggle>
                        <settings-toggle
                            label="Show landing quick book"
                            [formField]="form.show_quick_book"
                        ></settings-toggle>
                        <settings-toggle
                            label="Allow dark mode"
                            [formField]="form.allow_dark_mode"
                        ></settings-toggle>
                        <settings-toggle
                            label="Show changelog link"
                            [formField]="form.show_changelog"
                        ></settings-toggle>
                        <settings-toggle
                            label="Show global search"
                            [formField]="form.global_search"
                        ></settings-toggle>
                    </div>
                </section>
                @if (model().features?.includes('spaces')) {
                    <section
                        events
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
                                <div>
                                    <label for="workplace-settings-form-modal-available-period" id="workplace-settings-form-modal-available-period-label">
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            aria-labelledby="workplace-settings-form-modal-available-period-label"
                                            [formField]="form.events.allowed_future_days"
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
                                    <label for="workplace-settings-form-modal-force-host">Force Host</label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <input
                                            id="workplace-settings-form-modal-force-host"
                                            matInput
                                            [formField]="form.events.force_host"
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
                                    <label for="workplace-settings-form-modal-max-duration" id="workplace-settings-form-modal-max-duration-label">
                                        Max Duration
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            aria-labelledby="workplace-settings-form-modal-max-duration-label"
                                            [formField]="form.events.max_duration"
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
                                        <label for="workplace-settings-form-modal-setup" id="workplace-settings-form-modal-setup-label">
                                            Default Setup Duration
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-setup-label"
                                                [formField]="form.events.setup"
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
                                        <label for="workplace-settings-form-modal-breakdown" id="workplace-settings-form-modal-breakdown-label">
                                            Default Breakdown Duration
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-breakdown-label"
                                                [formField]="form.events.breakdown"
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
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label for="workplace-settings-form-modal-events-bookable-start" id="workplace-settings-form-modal-events-bookable-start-label">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-events-bookable-start-label"
                                                [formField]="form.events.bookable_hours.start"
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
                                        <label for="workplace-settings-form-modal-events-bookable-end" id="workplace-settings-form-modal-events-bookable-end-label">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-events-bookable-end-label"
                                                [formField]="form.events.bookable_hours.end"
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
                                        label="Allow all day bookings"
                                        [formField]="form.events.allow_all_day"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Disable booking requests"
                                        [formField]="form.events.booking_unavailable"
                                        info="Prevent making backend requests for bookings and give users links to create the booking in their own calendars"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking for other users"
                                        [formField]="form.events.can_book_for_others"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking for any users"
                                        [formField]="form.events.can_book_for_anyone"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking with assets"
                                        [formField]="form.events.has_assets"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking multiple spaces"
                                        [formField]="form.events.multiple_spaces"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Force room as host"
                                        [formField]="form.events.room_as_host"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow external attendees"
                                        [formField]="form.events.allow_externals"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow international attendees"
                                        info="Show a checkbox on the meeting form that flags each attendee as international"
                                        [formField]="form.events.allow_international"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow attendees to be marked internal or external"
                                        info="Show a control on the meeting form that marks each attendee as internal (default) or external"
                                        [formField]="form.events.allow_attendee_internal_or_external"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Enforce room capacity limits"
                                        [formField]="form.events.strict_capacity_check"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Disable notes field"
                                        [formField]="form.events.hide_notes"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide attendees field"
                                        [formField]="form.events.hide_attendees"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide nearby desk action"
                                        info="Hide the book nearby desks button on the meeting success view"
                                        [formField]="form.events.hide_nearby_desks"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow recurring meetings"
                                        [formField]="form.events.allow_recurrence"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow multi-day bookings"
                                        [formField]="form.events.allow_multiday"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Use PlaceOS bookings"
                                        [formField]="form.events.use_bookings"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Display times with building timezone"
                                        [formField]="form.events.use_building_timezone"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow daily all-day recurrence"
                                        [formField]="form.events.allow_daily_allday_recurrence"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Disable standalone bookings"
                                        [formField]="form.events.no_standalone"
                                    ></settings-toggle>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label for="workplace-settings-form-modal-events-all-day-start" id="workplace-settings-form-modal-events-all-day-start-label">
                                            All Day Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-events-all-day-start-label"
                                                [formField]="form.events.all_day_period.start"
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
                                        <label for="workplace-settings-form-modal-events-all-day-end" id="workplace-settings-form-modal-events-all-day-end-label">
                                            All Day End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-events-all-day-end-label"
                                                [formField]="form.events.all_day_period.end"
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
                            Desk Bookings
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            aria-label="Desk Bookings"
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
                                    <label for="workplace-settings-form-modal-max-duration-2" id="workplace-settings-form-modal-max-duration-2-label">
                                        Max Duration
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            aria-labelledby="workplace-settings-form-modal-max-duration-2-label"
                                            [formField]="form.desks.max_duration"
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
                                    <label for="workplace-settings-form-modal-available-period-2" id="workplace-settings-form-modal-available-period-2-label">
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            aria-labelledby="workplace-settings-form-modal-available-period-2-label"
                                            [formField]="form.desks.available_period"
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
                                >
                                    <div>
                                        <label for="workplace-settings-form-modal-desks-bookable-start" id="workplace-settings-form-modal-desks-bookable-start-label">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-desks-bookable-start-label"
                                                [formField]="form.desks.bookable_hours.start"
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
                                        <label for="workplace-settings-form-modal-desks-bookable-end" id="workplace-settings-form-modal-desks-bookable-end-label">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-desks-bookable-end-label"
                                                [formField]="form.desks.bookable_hours.end"
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
                                        [formField]="form.desks.allow_all_day"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Default bookings to all day"
                                        [formField]="form.desks.all_day_default"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow group bookings"
                                        [formField]="form.desks.allow_groups"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow time changes"
                                        [formField]="form.desks.allow_time_changes"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Auto-allocation"
                                        [formField]="form.desks.auto_allocation"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking for others"
                                        [formField]="form.desks.can_book_for_others"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow also booking a locker"
                                        [formField]="form.desks.can_book_lockers"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow requesting assets with booking"
                                        [formField]="form.desks.has_assets"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow Recurring Desk bookings"
                                        [formField]="form.desks.allow_recurrence"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Auto-checkin map bookingss"
                                        [formField]="form.desks.auto_checkin"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Default to desk select modal to map view"
                                        [formField]="form.desks.default_select_as_map"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show calendar links after booking"
                                        [formField]="form.desks.show_calendar_links"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Enabled desk height"
                                        [formField]="form.desks.height_enabled"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide Checkin Options"
                                        [formField]="form.desks.hide_checkin"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Display times with building timezone"
                                        [formField]="form.desks.use_building_timezone"
                                    ></settings-toggle>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (
                    model().features.includes('desks') ||
                    model().features.includes('parking') ||
                    model().features.includes('lockers') ||
                    model().features.includes('visitor-invite')
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
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label for="workplace-settings-form-modal-bookings-bookable-start" id="workplace-settings-form-modal-bookings-bookable-start-label">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-bookings-bookable-start-label"
                                                [formField]="form.bookings.bookable_hours.start"
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
                                        <label for="workplace-settings-form-modal-bookings-bookable-end" id="workplace-settings-form-modal-bookings-bookable-end-label">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-bookings-bookable-end-label"
                                                [formField]="form.bookings.bookable_hours.end"
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
                                        [formField]="form.bookings.allow_all_day"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Default bookings to all day"
                                        [formField]="form.bookings.all_day_default"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Display times with building timezone"
                                        [formField]="form.bookings.use_building_timezone"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking for other users"
                                        [formField]="form.bookings.can_book_for_others"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking multiple visitors"
                                        [formField]="form.bookings.multiple_visitors"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Auto-approve bookings"
                                        [formField]="form.bookings.no_approval"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking with assets"
                                        [formField]="form.bookings.has_assets"
                                    ></settings-toggle>
                                    <ng-container>
                                        <settings-toggle
                                            label="Show calendar links after visitor invite"
                                            [formField]="
                                                form.visitors.show_calendar_links
                                            "
                                        ></settings-toggle>
                                    </ng-container>
                                    <ng-container>
                                        <settings-toggle
                                            label="Allow international flag for visitors"
                                            [formField]="
                                                form.visitors.allow_international
                                            "
                                        ></settings-toggle>
                                    </ng-container>
                                    <ng-container>
                                        <settings-toggle
                                            label="Allow visitors to be marked internal or external"
                                            [formField]="
                                                form.visitors
                                                    .allow_visitor_internal_or_external
                                            "
                                        ></settings-toggle>
                                    </ng-container>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label for="workplace-settings-form-modal-bookings-all-day-start" id="workplace-settings-form-modal-bookings-all-day-start-label">
                                            All Day Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-bookings-all-day-start-label"
                                                [formField]="form.bookings.all_day_period.start"
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
                                        <label for="workplace-settings-form-modal-bookings-all-day-end" id="workplace-settings-form-modal-bookings-all-day-end-label">
                                            All Day End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-bookings-all-day-end-label"
                                                [formField]="form.bookings.all_day_period.end"
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
                @if (model().features.includes('explore')) {
                    <section
                        explore
                        id="feature-explore"
                        class="border-base-300 relative rounded-sm border"
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
                            aria-label="PlaceOS Maps"
                            [attr.aria-expanded]="shown_group() === 'explore'"
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
                                    <label for="workplace-settings-form-modal-disable" id="workplace-settings-form-modal-disable-label">
                                        Disabled Features
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            aria-labelledby="workplace-settings-form-modal-disable-label"
                                            [formField]="form.explore.disable"
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
                                        <label for="workplace-settings-form-modal-disable-actions" id="workplace-settings-form-modal-disable-actions-label">
                                            Disabled Feature Actions
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-disable-actions-label"
                                                [formField]="form.explore.disable_actions"
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
                                        <label for="workplace-settings-form-modal-available-period-3" id="workplace-settings-form-modal-available-period-3-label">
                                            Disabled Feature Labels
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-available-period-3-label"
                                                [formField]="form.explore.disable_labels"
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
                                        <label for="workplace-settings-form-modal-disable-features" id="workplace-settings-form-modal-disable-features-label">
                                            Disabled Feature Displays
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-disable-features-label"
                                                [formField]="form.explore.disable_features"
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
                                        <label for="workplace-settings-form-modal-disable-styles" id="workplace-settings-form-modal-disable-styles-label">
                                            Disabled Feature Styles
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-disable-styles-label"
                                                [formField]="form.explore.disable_styles"
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
                                @if (model().explore?.show_legend) {
                                    <div
                                        class="border-base-300 relative rounded-sm border p-4"
                                    >
                                        <h3
                                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                                        >
                                            Legend
                                        </h3>
                                        @for (
                                            item of model().explore.legend ||
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
                                                    [attr.aria-label]="
                                                        'COMMON.DELETE' | translate
                                                    "
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
                                <div>
                                    <label for="workplace-settings-form-modal-hide-device-fields" id="workplace-settings-form-modal-hide-device-fields-label">
                                        Hidden Device Fields
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            aria-labelledby="workplace-settings-form-modal-hide-device-fields-label"
                                            [formField]="form.explore.hide_device_fields"
                                            placeholder="None"
                                            multiple
                                        >
                                            <mat-option value="mac">
                                                MAC Address
                                            </mat-option>
                                            <mat-option value="manufacturer">
                                                Manufacturer
                                            </mat-option>
                                            <mat-option value="os">OS</mat-option>
                                            <mat-option value="ssid">SSID</mat-option>
                                            <mat-option value="username">
                                                Username
                                            </mat-option>
                                            <mat-option value="user">User</mat-option>
                                        </mat-select>
                                        <mat-hint>
                                            Fields hidden from device info
                                            tooltips
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        label="Show Legend"
                                        [formField]="form.explore.show_legend"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide Areas Toggle"
                                        [formField]="form.explore.hide_zones"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide Devices Toggle"
                                        [formField]="form.explore.hide_devices"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide Sensors Toggle"
                                        [formField]="form.explore.hide_sensors"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show Booking QR Code"
                                        [formField]="form.explore.show_booking_qr"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Use defined polygons for zones"
                                        [formField]="form.explore.use_zone_polygons"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show labels for zones"
                                        [formField]="form.explore.show_zone_labels"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show zone sensor info"
                                        [formField]="form.explore.show_zone_sensor_info"
                                    ></settings-toggle>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (model().features.includes('parking')) {
                    <section
                        parking
                        id="feature-parking"
                        class="border-base-300 relative rounded-sm border"
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
                            aria-label="Parking Bookings"
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
                                    <label for="workplace-settings-form-modal-max-duration-3" id="workplace-settings-form-modal-max-duration-3-label">
                                        Max Duration
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            aria-labelledby="workplace-settings-form-modal-max-duration-3-label"
                                            [formField]="form.parking.max_duration"
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
                                    <label for="workplace-settings-form-modal-available-period-4" id="workplace-settings-form-modal-available-period-4-label">
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            aria-labelledby="workplace-settings-form-modal-available-period-4-label"
                                            [formField]="form.parking.available_period"
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
                                >
                                    <div>
                                        <label for="workplace-settings-form-modal-parking-bookable-start" id="workplace-settings-form-modal-parking-bookable-start-label">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-parking-bookable-start-label"
                                                [formField]="form.parking.bookable_hours.start"
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
                                        <label for="workplace-settings-form-modal-parking-bookable-end" id="workplace-settings-form-modal-parking-bookable-end-label">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-parking-bookable-end-label"
                                                [formField]="form.parking.bookable_hours.end"
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
                                        label="Default bookings to all day"
                                        [formField]="form.parking.all_day_default"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show assigned users on parking map"
                                        [formField]="form.parking.show_users"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show parking status details on map"
                                        [formField]="form.parking.show_status_details"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow user selecting booking time"
                                        [formField]="form.parking.allow_time_changes"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Auto-allocate parking spaces"
                                        [formField]="form.parking.auto_allocation"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking for other users"
                                        [formField]="form.parking.can_book_for_others"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow recurring parking bookings"
                                        [formField]="form.parking.allow_recurrence"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Display times with building timezone"
                                        [formField]="form.parking.use_building_timezone"
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
                                    <label for="workplace-settings-form-modal-max-duration-4" id="workplace-settings-form-modal-max-duration-4-label">
                                        Max Duration
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            aria-labelledby="workplace-settings-form-modal-max-duration-4-label"
                                            [formField]="form.lockers.max_duration"
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
                                >
                                    <div>
                                        <label for="workplace-settings-form-modal-lockers-bookable-start" id="workplace-settings-form-modal-lockers-bookable-start-label">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-lockers-bookable-start-label"
                                                [formField]="form.lockers.bookable_hours.start"
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
                                        <label for="workplace-settings-form-modal-lockers-bookable-end" id="workplace-settings-form-modal-lockers-bookable-end-label">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                aria-labelledby="workplace-settings-form-modal-lockers-bookable-end-label"
                                                [formField]="form.lockers.bookable_hours.end"
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
                                        [formField]="form.lockers.all_day_default"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show Calendar Links after booking"
                                        [formField]="form.lockers.show_calendar_links"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide End time option"
                                        [formField]="form.lockers.hide_end_time"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow user selecting booking time"
                                        [formField]="form.lockers.allow_time_changes"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Display times with building timezone"
                                        [formField]="form.lockers.use_building_timezone"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Disable Date selection"
                                        [formField]="form.lockers.disabled_date_select"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Disable start time option"
                                        [formField]="form.lockers.disabled_start_time"
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
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        UploadButtonComponent,
        TranslatePipe,
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
    /** Form values right after loading, used to find user changes on save. */
    public initial_settings: AppSettings = {};
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
    public readonly EXPLORE_FEATURE = EXPLORE_FEATURE_OPTIONS;
    public readonly BANNER_TYPE = BANNER_TYPE_OPTIONS;

    public readonly model = signal({
        logo_light: '',
        logo_dark: '',
        banner: {} as any,
        features: [] as string[],
        feature_groups: {} as Record<string, string[]>,
        use_24_hour_time: false,
        use_region: false,
        default_route: '',
        allow_support_ticket_images: false,
        basic_user_search: false,
        colleagues_require_auth: true,
        hide_landing_spaces: false,
        hide_landing_rooms: false,
        hide_colleagues: false,
        hide_landing_customise: false,
        hide_landing_widgets: [] as string[],
        show_quick_links: true,
        show_quick_book: true,
        allow_dark_mode: false,
        show_changelog: true,
        global_search: true,
        use_imperial_units: false,
        external_support_url: '',
        support_email: 'support@place.tech',
        catering_provider: '',
        currency: 'USD',
        week_start: 0,
        locales: [] as any[],
        hide_global_search_items: [] as string[],
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
            booking_unavailable: false,
            can_book_for_others: false,
            can_book_for_anyone: false,
            has_assets: false,
            multiple_spaces: false,
            room_as_host: false,
            allow_externals: false,
            allow_international: false,
            allow_attendee_internal_or_external: false,
            strict_capacity_check: false,
            hide_notes: false,
            hide_attendees: false,
            hide_nearby_desks: false,
            allow_recurrence: false,
            allow_multiday: false,
            use_bookings: false,
            use_building_timezone: false,
            force_host: '',
            allow_daily_allday_recurrence: false,
            no_standalone: false,
            allowed_future_days: 180,
            setup: 0,
            breakdown: 0,
            max_duration: 480,
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
            all_day_default: false,
            use_building_timezone: false,
            has_assets: false,
            no_approval: false,
            can_book_for_others: false,
            multiple_visitors: false,
        },
        desks: {
            allow_all_day: false,
            bookable_hours: {
                start: null as number | null,
                end: null as number | null,
            },
            all_day_default: false,
            allow_groups: false,
            allow_time_changes: false,
            auto_allocation: false,
            can_book_for_others: false,
            can_book_lockers: false,
            has_assets: false,
            hide_reason: false,
            allow_recurrence: false,
            default_select_as_map: false,
            show_calendar_links: false,
            auto_checkin: false,
            available_period: 90,
            max_duration: 480,
            use_building_timezone: false,
            height_enabled: false,
            hide_checkin: false,
        },
        parking: {
            allow_all_day: false,
            bookable_hours: {
                start: null as number | null,
                end: null as number | null,
            },
            all_day_default: false,
            show_users: false,
            show_status_details: true,
            allow_time_changes: false,
            auto_allocation: false,
            can_book_for_others: false,
            allow_recurrence: false,
            show_calendar_links: false,
            auto_checkin: false,
            available_period: 7,
            max_duration: 480,
            use_building_timezone: false,
        },
        lockers: {
            allow_all_day: true,
            bookable_hours: {
                start: null as number | null,
                end: null as number | null,
            },
            all_day_default: false,
            show_calendar_links: false,
            allow_time_changes: true,
            use_building_timezone: false,
            max_duration: 480,
            hide_end_time: false,
            disabled_start_time: false,
            disabled_date_select: false,
        },
        visitors: {
            all_day_default: false,
            bookable_hours: {
                start: null as number | null,
                end: null as number | null,
            },
            show_calendar_links: false,
            allow_international: false,
            allow_visitor_internal_or_external: false,
        },
        explore: {
            hide_device_fields: [] as string[],
            show_legend: false,
            hide_zones: false,
            hide_devices: true,
            hide_sensors: true,
            legend: [] as [string, string][],
            colors: {} as Record<string, string>,
            show_booking_qr: false,
            disable: [] as string[],
            disable_actions: [] as string[],
            disable_labels: [] as string[],
            disable_features: [] as string[],
            disable_styles: [] as string[],
            use_zone_polygons: false,
            area_count_key: 'count',
            show_zone_labels: false,
            show_zone_sensor_info: false,
        },
    });

    public readonly form = form(this.model, (p) => {
        validate(p.external_support_url, ({ value }) =>
            value() && !isValidUrl(value()) ? { kind: 'url' } : undefined,
        );
        validate(p.support_email, ({ value }) =>
            value() && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value())
                ? { kind: 'email' }
                : undefined,
        );
        validate(p.events.force_host, ({ value }) =>
            value() && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value())
                ? { kind: 'email' }
                : undefined,
        );
    });

    public get date_string() {
        return format(Date.now(), 'yyyy-MM-dd+HH');
    }

    public async ngOnInit() {
        const zone = this._data.zone;
        this.loading.set('Loading existing settings...');
        this.heading.set(
            `Workplace Settings <div class="font-mono text-xs px-2 py-1 rounded bg-base-300 ml-2">${this.zone.display_name || this.zone.name || 'Organisation'}</div>`,
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
                description: `[${VERSION.hash}|C] Workplace Application Settings`,
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
        notifySuccess('Successfully saved workplace app settings');
        this._dialog_ref.close();
    }

    private _patchModel(patch: Record<string, unknown>) {
        this.model.update((model) => applyAppSettings(model, patch));
    }

    private async _getMetadata(id: string) {
        const metadata = await showMetadata(id, this.settings_key);
        return (metadata.details || {}) as Record<string, unknown>;
    }

    public addLegend() {
        let legend = this.model().explore?.legend || [];
        if (!(legend instanceof Array)) legend = [];
        const new_legend: [string, string][] = [
            ...legend,
            ['', '#1E88E5'],
        ];
        this.model.update((m) => ({
            ...m,
            explore: { ...m.explore, legend: new_legend },
        }));
    }

    public removeLegend(index: number) {
        let legend = this.model().explore?.legend || [];
        if (!(legend instanceof Array)) legend = [];
        if (index >= legend.length) return;
        const new_legend = legend.filter((_, i) => i !== index);
        this.model.update((m) => ({
            ...m,
            explore: { ...m.explore, legend: new_legend },
        }));
    }
}
