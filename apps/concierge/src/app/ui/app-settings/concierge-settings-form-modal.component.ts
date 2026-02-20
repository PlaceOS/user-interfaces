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
import { UploadButtonComponent } from './upload-button.component';

@Component({
    selector: 'concierge-settings-form-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                'Concierge Settings - ' +
                (zone.display_name || zone.name || 'Organisation')
            "
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
                                        <mat-option value="">None</mat-option>
                                        <mat-option value="info">
                                            Info
                                        </mat-option>
                                        <mat-option value="warn">
                                            Warning
                                        </mat-option>
                                        <mat-option value="error">
                                            Error
                                        </mat-option>
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
                                            form.value.banner?.message || ''
                                        "
                                        (ngModelChange)="
                                            form.patchValue({
                                                banner: {
                                                    id: date_string,
                                                    type:
                                                        form.value.banner
                                                            ?.type || '',
                                                    message: $event,
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
                            <label for="workplace-url-path">Workplace URL Path</label>
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
                            <label for="kiosk-url-path">Map Kiosk URL Path</label>
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
                        <label for="short-url-public-key">Short URL Public Key</label>
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
                                <mat-option [value]="0">Sunday</mat-option>
                                <mat-option [value]="1">Monday</mat-option>
                                <mat-option [value]="2">Tuesday</mat-option>
                                <mat-option [value]="3">Wednesday</mat-option>
                                <mat-option [value]="4">Thursday</mat-option>
                                <mat-option [value]="5">Friday</mat-option>
                                <mat-option [value]="6">Saturday</mat-option>
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
                                                <mat-option [value]="0"
                                                    >12AM (Midnight)</mat-option
                                                >
                                                <mat-option [value]="1"
                                                    >1AM</mat-option
                                                >
                                                <mat-option [value]="2"
                                                    >2AM</mat-option
                                                >
                                                <mat-option [value]="3"
                                                    >3AM</mat-option
                                                >
                                                <mat-option [value]="4"
                                                    >4AM</mat-option
                                                >
                                                <mat-option [value]="5"
                                                    >5AM</mat-option
                                                >
                                                <mat-option [value]="6"
                                                    >6AM</mat-option
                                                >
                                                <mat-option [value]="7"
                                                    >7AM</mat-option
                                                >
                                                <mat-option [value]="8"
                                                    >8AM</mat-option
                                                >
                                                <mat-option [value]="9"
                                                    >9AM</mat-option
                                                >
                                                <mat-option [value]="10"
                                                    >10AM</mat-option
                                                >
                                                <mat-option [value]="11"
                                                    >11AM</mat-option
                                                >
                                            </mat-select>
                                            <mat-hint>
                                                Start time of dayview blocks
                                            </mat-hint>
                                        </mat-form-field>
                                    </div>
                                    <div class="flex-1">
                                        <label for="block-start"
                                            >Block End Time</label
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
                                                <mat-option [value]="12"
                                                    >12PM (Midday)</mat-option
                                                >
                                                <mat-option [value]="13"
                                                    >1PM</mat-option
                                                >
                                                <mat-option [value]="14"
                                                    >2PM</mat-option
                                                >
                                                <mat-option [value]="15"
                                                    >3PM</mat-option
                                                >
                                                <mat-option [value]="16"
                                                    >4PM</mat-option
                                                >
                                                <mat-option [value]="17"
                                                    >5PM</mat-option
                                                >
                                                <mat-option [value]="18"
                                                    >6PM</mat-option
                                                >
                                                <mat-option [value]="19"
                                                    >7PM</mat-option
                                                >
                                                <mat-option [value]="20"
                                                    >8PM</mat-option
                                                >
                                                <mat-option [value]="21"
                                                    >9PM</mat-option
                                                >
                                                <mat-option [value]="22"
                                                    >10PM</mat-option
                                                >
                                                <mat-option [value]="23"
                                                    >11PM</mat-option
                                                >
                                                <mat-option [value]="24"
                                                    >12AM (Midnight)</mat-option
                                                >
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
                                                <mat-option [value]="1"
                                                    >1rem (16px)</mat-option
                                                >
                                                <mat-option [value]="1.5"
                                                    >1.5rem (24px)</mat-option
                                                >
                                                <mat-option [value]="2"
                                                    >2rem (32px)</mat-option
                                                >
                                                <mat-option [value]="2.5"
                                                    >2.5rem (40px)</mat-option
                                                >
                                                <mat-option [value]="3"
                                                    >3rem (48px)</mat-option
                                                >
                                                <mat-option [value]="3.5"
                                                    >3.5rem (56px)</mat-option
                                                >
                                                <mat-option [value]="4"
                                                    >4rem (64px)</mat-option
                                                >
                                                <mat-option [value]="4.5"
                                                    >4.5rem (72px)</mat-option
                                                >
                                                <mat-option [value]="5"
                                                    >5rem (80px)</mat-option
                                                >
                                                <mat-option [value]="5.5"
                                                    >5.5rem (88px)</mat-option
                                                >
                                                <mat-option [value]="6"
                                                    >6rem (96px)</mat-option
                                                >
                                                <mat-option [value]="6.5"
                                                    >6.5rem (104px)</mat-option
                                                >
                                                <mat-option [value]="7"
                                                    >7rem (112px)</mat-option
                                                >
                                                <mat-option [value]="7.5"
                                                    >7.5rem (120px)</mat-option
                                                >
                                                <mat-option [value]="8"
                                                    >8rem (128px)</mat-option
                                                >
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
                                                <mat-option [value]="60"
                                                    >1 Hour</mat-option
                                                >
                                                <mat-option [value]="90"
                                                    >1 Hour 30
                                                    Minutes</mat-option
                                                >
                                                <mat-option [value]="120"
                                                    >2 Hours</mat-option
                                                >
                                                <mat-option [value]="180"
                                                    >3 Hours</mat-option
                                                >
                                                <mat-option [value]="240"
                                                    >4 Hours</mat-option
                                                >
                                                <mat-option [value]="300"
                                                    >5 Hours</mat-option
                                                >
                                                <mat-option [value]="360"
                                                    >6 Hours</mat-option
                                                >
                                                <mat-option [value]="420"
                                                    >7 Hours</mat-option
                                                >
                                                <mat-option [value]="480"
                                                    >8 Hours</mat-option
                                                >
                                                <mat-option [value]="540"
                                                    >9 Hours</mat-option
                                                >
                                                <mat-option [value]="600"
                                                    >10 Hours</mat-option
                                                >
                                                <mat-option [value]="660"
                                                    >11 Hours</mat-option
                                                >
                                                <mat-option [value]="720"
                                                    >12 Hours</mat-option
                                                >
                                                <mat-option [value]="780"
                                                    >13 Hours</mat-option
                                                >
                                                <mat-option [value]="840"
                                                    >14 Hours</mat-option
                                                >
                                                <mat-option [value]="900"
                                                    >15 Hours</mat-option
                                                >
                                                <mat-option [value]="960"
                                                    >16 Hours</mat-option
                                                >
                                                <mat-option [value]="1020"
                                                    >17 Hours</mat-option
                                                >
                                                <mat-option [value]="1080"
                                                    >18 Hours</mat-option
                                                >
                                                <mat-option [value]="1140"
                                                    >19 Hours</mat-option
                                                >
                                                <mat-option [value]="1200"
                                                    >20 Hours</mat-option
                                                >
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
                                            <mat-option [value]="1"
                                                >1 Day</mat-option
                                            >
                                            <mat-option [value]="2"
                                                >2 Days</mat-option
                                            >
                                            <mat-option [value]="3"
                                                >3 Days</mat-option
                                            >
                                            <mat-option [value]="4"
                                                >4 Days</mat-option
                                            >
                                            <mat-option [value]="5"
                                                >5 Days</mat-option
                                            >
                                            <mat-option [value]="6"
                                                >6 Days</mat-option
                                            >
                                            <mat-option [value]="7"
                                                >1 Week</mat-option
                                            >
                                            <mat-option [value]="8"
                                                >8 Days</mat-option
                                            >
                                            <mat-option [value]="9"
                                                >9 Days</mat-option
                                            >
                                            <mat-option [value]="10"
                                                >10 Days</mat-option
                                            >
                                            <mat-option [value]="11"
                                                >11 Days</mat-option
                                            >
                                            <mat-option [value]="12"
                                                >12 Days</mat-option
                                            >
                                            <mat-option [value]="13"
                                                >13 Days</mat-option
                                            >
                                            <mat-option [value]="14">
                                                2 Weeks
                                            </mat-option>
                                            <mat-option [value]="21">
                                                3 Weeks
                                            </mat-option>
                                            <mat-option [value]="30">
                                                1 Month
                                            </mat-option>
                                        </mat-select>
                                        <mat-hint>
                                            Number of days ahead users can
                                            create bookings from the room
                                            booking manager
                                        </mat-hint>
                                    </mat-form-field>
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
                                            <mat-option [value]="1"
                                                >1 Day</mat-option
                                            >
                                            <mat-option [value]="2"
                                                >2 Days</mat-option
                                            >
                                            <mat-option [value]="3"
                                                >3 Days</mat-option
                                            >
                                            <mat-option [value]="4"
                                                >4 Days</mat-option
                                            >
                                            <mat-option [value]="5"
                                                >5 Days</mat-option
                                            >
                                            <mat-option [value]="6"
                                                >6 Days</mat-option
                                            >
                                            <mat-option [value]="7"
                                                >1 Week</mat-option
                                            >
                                            <mat-option [value]="8"
                                                >8 Days</mat-option
                                            >
                                            <mat-option [value]="9"
                                                >9 Days</mat-option
                                            >
                                            <mat-option [value]="10"
                                                >10 Days</mat-option
                                            >
                                            <mat-option [value]="11"
                                                >11 Days</mat-option
                                            >
                                            <mat-option [value]="12"
                                                >12 Days</mat-option
                                            >
                                            <mat-option [value]="13"
                                                >13 Days</mat-option
                                            >
                                            <mat-option [value]="14">
                                                2 Weeks
                                            </mat-option>
                                            <mat-option [value]="21">
                                                3 Weeks
                                            </mat-option>
                                            <mat-option [value]="30">
                                                1 Month
                                            </mat-option>
                                            <mat-option [value]="60">
                                                2 Months
                                            </mat-option>
                                            <mat-option [value]="90">
                                                3 Months
                                            </mat-option>
                                            <mat-option [value]="120">
                                                4 Months
                                            </mat-option>
                                            <mat-option [value]="150">
                                                5 Months
                                            </mat-option>
                                            <mat-option [value]="180">
                                                6 Month
                                            </mat-option>
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
                                            <mat-option [value]="60"
                                                >1 Hour</mat-option
                                            >
                                            <mat-option [value]="90"
                                                >1 Hour 30 Minutes</mat-option
                                            >
                                            <mat-option [value]="120"
                                                >2 Hours</mat-option
                                            >
                                            <mat-option [value]="180"
                                                >3 Hours</mat-option
                                            >
                                            <mat-option [value]="240"
                                                >4 Hours</mat-option
                                            >
                                            <mat-option [value]="300"
                                                >5 Hours</mat-option
                                            >
                                            <mat-option [value]="360"
                                                >6 Hours</mat-option
                                            >
                                            <mat-option [value]="420"
                                                >7 Hours</mat-option
                                            >
                                            <mat-option [value]="480"
                                                >8 Hours</mat-option
                                            >
                                            <mat-option [value]="540"
                                                >9 Hours</mat-option
                                            >
                                            <mat-option [value]="600"
                                                >10 Hours</mat-option
                                            >
                                            <mat-option [value]="660"
                                                >11 Hours</mat-option
                                            >
                                            <mat-option [value]="720"
                                                >12 Hours</mat-option
                                            >
                                            <mat-option [value]="780"
                                                >13 Hours</mat-option
                                            >
                                            <mat-option [value]="840"
                                                >14 Hours</mat-option
                                            >
                                            <mat-option [value]="900"
                                                >15 Hours</mat-option
                                            >
                                            <mat-option [value]="960"
                                                >16 Hours</mat-option
                                            >
                                            <mat-option [value]="1020"
                                                >17 Hours</mat-option
                                            >
                                            <mat-option [value]="1080"
                                                >18 Hours</mat-option
                                            >
                                            <mat-option [value]="1140"
                                                >19 Hours</mat-option
                                            >
                                            <mat-option [value]="1200"
                                                >20 Hours</mat-option
                                            >
                                        </mat-select>
                                        <mat-hint>
                                            Max duration for single day bookings
                                        </mat-hint>
                                    </mat-form-field>
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
                                            <mat-option [value]="1"
                                                >1 Day</mat-option
                                            >
                                            <mat-option [value]="2"
                                                >2 Days</mat-option
                                            >
                                            <mat-option [value]="3"
                                                >3 Days</mat-option
                                            >
                                            <mat-option [value]="4"
                                                >4 Days</mat-option
                                            >
                                            <mat-option [value]="5"
                                                >5 Days</mat-option
                                            >
                                            <mat-option [value]="6"
                                                >6 Days</mat-option
                                            >
                                            <mat-option [value]="7"
                                                >1 Week</mat-option
                                            >
                                            <mat-option [value]="8"
                                                >8 Days</mat-option
                                            >
                                            <mat-option [value]="9"
                                                >9 Days</mat-option
                                            >
                                            <mat-option [value]="10"
                                                >10 Days</mat-option
                                            >
                                            <mat-option [value]="11"
                                                >11 Days</mat-option
                                            >
                                            <mat-option [value]="12"
                                                >12 Days</mat-option
                                            >
                                            <mat-option [value]="13"
                                                >13 Days</mat-option
                                            >
                                            <mat-option [value]="14">
                                                2 Weeks
                                            </mat-option>
                                            <mat-option [value]="21">
                                                3 Weeks
                                            </mat-option>
                                            <mat-option [value]="30">
                                                1 Month
                                            </mat-option>
                                            <mat-option [value]="60">
                                                2 Months
                                            </mat-option>
                                            <mat-option [value]="90">
                                                3 Months
                                            </mat-option>
                                            <mat-option [value]="120">
                                                4 Months
                                            </mat-option>
                                            <mat-option [value]="150">
                                                5 Months
                                            </mat-option>
                                            <mat-option [value]="180">
                                                6 Month
                                            </mat-option>
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
                                            <mat-option [value]="60"
                                                >1 Hour</mat-option
                                            >
                                            <mat-option [value]="90"
                                                >1 Hour 30 Minutes</mat-option
                                            >
                                            <mat-option [value]="120"
                                                >2 Hours</mat-option
                                            >
                                            <mat-option [value]="180"
                                                >3 Hours</mat-option
                                            >
                                            <mat-option [value]="240"
                                                >4 Hours</mat-option
                                            >
                                            <mat-option [value]="300"
                                                >5 Hours</mat-option
                                            >
                                            <mat-option [value]="360"
                                                >6 Hours</mat-option
                                            >
                                            <mat-option [value]="420"
                                                >7 Hours</mat-option
                                            >
                                            <mat-option [value]="480"
                                                >8 Hours</mat-option
                                            >
                                            <mat-option [value]="540"
                                                >9 Hours</mat-option
                                            >
                                            <mat-option [value]="600"
                                                >10 Hours</mat-option
                                            >
                                            <mat-option [value]="660"
                                                >11 Hours</mat-option
                                            >
                                            <mat-option [value]="720"
                                                >12 Hours</mat-option
                                            >
                                            <mat-option [value]="780"
                                                >13 Hours</mat-option
                                            >
                                            <mat-option [value]="840"
                                                >14 Hours</mat-option
                                            >
                                            <mat-option [value]="900"
                                                >15 Hours</mat-option
                                            >
                                            <mat-option [value]="960"
                                                >16 Hours</mat-option
                                            >
                                            <mat-option [value]="1020"
                                                >17 Hours</mat-option
                                            >
                                            <mat-option [value]="1080"
                                                >18 Hours</mat-option
                                            >
                                            <mat-option [value]="1140"
                                                >19 Hours</mat-option
                                            >
                                            <mat-option [value]="1200"
                                                >20 Hours</mat-option
                                            >
                                        </mat-select>
                                        <mat-hint>
                                            Max duration for single day bookings
                                        </mat-hint>
                                    </mat-form-field>
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
                                        name="Disable reservations"
                                        formControlName="disable_bookings"
                                    ></settings-toggle>
                                    <settings-toggle
                                        name="Show booking requests"
                                        formControlName="show_requests"
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
                                            <mat-option [value]="1"
                                                >1 Day</mat-option
                                            >
                                            <mat-option [value]="2"
                                                >2 Days</mat-option
                                            >
                                            <mat-option [value]="3"
                                                >3 Days</mat-option
                                            >
                                            <mat-option [value]="4"
                                                >4 Days</mat-option
                                            >
                                            <mat-option [value]="5"
                                                >5 Days</mat-option
                                            >
                                            <mat-option [value]="6"
                                                >6 Days</mat-option
                                            >
                                            <mat-option [value]="7"
                                                >1 Week</mat-option
                                            >
                                            <mat-option [value]="8"
                                                >8 Days</mat-option
                                            >
                                            <mat-option [value]="9"
                                                >9 Days</mat-option
                                            >
                                            <mat-option [value]="10"
                                                >10 Days</mat-option
                                            >
                                            <mat-option [value]="11"
                                                >11 Days</mat-option
                                            >
                                            <mat-option [value]="12"
                                                >12 Days</mat-option
                                            >
                                            <mat-option [value]="13"
                                                >13 Days</mat-option
                                            >
                                            <mat-option [value]="14">
                                                2 Weeks
                                            </mat-option>
                                            <mat-option [value]="21">
                                                3 Weeks
                                            </mat-option>
                                            <mat-option [value]="30">
                                                1 Month
                                            </mat-option>
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
                                            <mat-option [value]="60"
                                                >1 Hour</mat-option
                                            >
                                            <mat-option [value]="90"
                                                >1 Hour 30 Minutes</mat-option
                                            >
                                            <mat-option [value]="120"
                                                >2 Hours</mat-option
                                            >
                                            <mat-option [value]="180"
                                                >3 Hours</mat-option
                                            >
                                            <mat-option [value]="240"
                                                >4 Hours</mat-option
                                            >
                                            <mat-option [value]="300"
                                                >5 Hours</mat-option
                                            >
                                            <mat-option [value]="360"
                                                >6 Hours</mat-option
                                            >
                                            <mat-option [value]="420"
                                                >7 Hours</mat-option
                                            >
                                            <mat-option [value]="480"
                                                >8 Hours</mat-option
                                            >
                                            <mat-option [value]="540"
                                                >9 Hours</mat-option
                                            >
                                            <mat-option [value]="600"
                                                >10 Hours</mat-option
                                            >
                                            <mat-option [value]="660"
                                                >11 Hours</mat-option
                                            >
                                            <mat-option [value]="720"
                                                >12 Hours</mat-option
                                            >
                                            <mat-option [value]="780"
                                                >13 Hours</mat-option
                                            >
                                            <mat-option [value]="840"
                                                >14 Hours</mat-option
                                            >
                                            <mat-option [value]="900"
                                                >15 Hours</mat-option
                                            >
                                            <mat-option [value]="960"
                                                >16 Hours</mat-option
                                            >
                                            <mat-option [value]="1020"
                                                >17 Hours</mat-option
                                            >
                                            <mat-option [value]="1080"
                                                >18 Hours</mat-option
                                            >
                                            <mat-option [value]="1140"
                                                >19 Hours</mat-option
                                            >
                                            <mat-option [value]="1200"
                                                >20 Hours</mat-option
                                            >
                                        </mat-select>
                                    </mat-form-field>
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
            all_day_default: new FormControl(false),
            allow_setup_breakdown: new FormControl(false),
            has_assets: new FormControl(false),
            hide_notes: new FormControl(false),
            hide_attendees: new FormControl(false),
            allow_externals: new FormControl(false),
            strict_capacity_check: new FormControl(false),
            allow_multiday: new FormControl(false),
            use_building_timezone: new FormControl(false),
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
        visitors: new FormGroup({
            has_parking: new FormControl(false),
            allow_pass_number: new FormControl(false),
            allow_printing_label: new FormControl(false),
            allow_international: new FormControl(false),
            show_calendar_links: new FormControl(false),
            hide_fields: new FormControl([]),
        }),
        bookings: new FormGroup({
            allow_all_day: new FormControl(true),
            has_assets: new FormControl(false),
            use_building_timezone: new FormControl(false),
            available_period: new FormControl(14),
            max_duration: new FormControl(480),
        }),
        parking: new FormGroup({
            allow_all_day: new FormControl(true),
            show_users: new FormControl(false),
            disable_bookings: new FormControl(false),
            show_requests: new FormControl(false),
            available_period: new FormControl(7),
            max_duration: new FormControl(480),
        }),
        lockers: new FormGroup({
            allow_all_day: new FormControl(true),
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
                new_settings[key] =
                    this.existing_settings[key] || form_value[key];
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
            throw e;
        });
        this.loading.set('');
        notifySuccess('Sucessfully saved concierge app settings');
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
