import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlaceZone, showMetadata, updateMetadata } from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

import { DEFAULT_SETTINGS } from 'apps/workplace/src/environments/settings';
import { validateURL } from '@placeos/spaces';

@Component({
    selector: 'workplace-settings-form-modal',
    template: `
        <div class="w-screen h-screen bg-base-100 flex flex-col overflow-auto">
            <header
                class="sticky top-0 px-4 py-2 mx-auto my-2 max-w-[640px] w-full border-none z-10 bg-base-200 rounded"
            >
                <h2 class="text-xl font-medium">
                    Workplace Settings - {{ zone.display_name }}
                </h2>
                <button icon matRipple mat-dialog-close *ngIf="!loading">
                    <app-icon>close</app-icon>
                </button>
            </header>
            <main
                class="min-h-1/2 p-4 space-y-8 z-0 max-w-[640px] w-full mx-auto"
            >
                <form [formGroup]="form" class="flex flex-col space-y-8">
                    <section general class="bg-base-100 rounded space-y-2">
                        <div>
                            <label for="logo_light">Light Mode Logo</label>
                            <div class="flex items-center space-x-2 mb-4">
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full no-subscript"
                                >
                                    <input
                                        matInput
                                        name="logo_light"
                                        formControlName="logo_light"
                                    />
                                </mat-form-field>
                                <button
                                    icon
                                    matRipple
                                    class="rounded bg-secondary text-secondary-content h-12 w-12"
                                >
                                    <app-icon>cloud_upload</app-icon>
                                </button>
                            </div>
                        </div>
                        <div>
                            <label for="logo_dark">Dark Mode Logo</label>
                            <div class="flex items-center space-x-2 mb-4">
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full no-subscript"
                                >
                                    <input
                                        matInput
                                        name="logo_dark"
                                        formControlName="logo_dark"
                                    />
                                </mat-form-field>
                                <button
                                    icon
                                    matRipple
                                    class="rounded bg-secondary text-secondary-content h-12 w-12"
                                >
                                    <app-icon>cloud_upload</app-icon>
                                </button>
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
                                    <mat-option value="spaces">
                                        Rooms
                                    </mat-option>
                                    <mat-option value="desks">Desks</mat-option>
                                    <mat-option value="explore"
                                        >Explore</mat-option
                                    >
                                    <mat-option value="parking"
                                        >Parking</mat-option
                                    >
                                    <mat-option value="visitor-invite">
                                        Visitors
                                    </mat-option>
                                    <mat-option value="lockers"
                                        >Lockers</mat-option
                                    >
                                    <mat-option value="help"
                                        >Help Desk</mat-option
                                    >
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
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div>
                            <label for="external-support-url">
                                External Support URL
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
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
                                <input
                                    matInput
                                    name="support-email"
                                    formControlName="support_email"
                                    placeholder="support@acme.tech"
                                />
                                <mat-hint>
                                    Email to send tickets when created in the
                                    app
                                </mat-hint>
                            </mat-form-field>
                        </div>
                        <div>
                            <label for="default-route">Default Route</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="default-route"
                                    formControlName="default_route"
                                    placeholder="/landing"
                                />
                                <mat-hint>
                                    Main page of the application
                                </mat-hint>
                            </mat-form-field>
                        </div>
                        <div>
                            <label for="catering-provider"
                                >Catering Provider</label
                            >
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="catering-provider"
                                    formControlName="catering_provider"
                                    placeholder="Catering Provider"
                                />
                                <mat-hint>
                                    Name of the catering provider to force
                                    orders to use
                                </mat-hint>
                            </mat-form-field>
                        </div>
                        <div class="flex items-center flex-wrap -mx-2">
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form,
                                        field: 'use_24_hour_time',
                                        name: 'Use 24 hour time',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form,
                                        field: 'use_region',
                                        name: 'Use Region',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngIf="
                                    form.value.features.includes(
                                        'support-ticket'
                                    )
                                "
                            >
                                <ng-container
                                    *ngTemplateOutlet="
                                        check_btn;
                                        context: {
                                            form: form,
                                            field: 'allow_support_ticket_images',
                                            name: 'Allow images in support tickets',
                                        }
                                    "
                                ></ng-container>
                            </ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form,
                                        field: 'basic_user_search',
                                        name: 'Use local user search',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form,
                                        field: 'no_user_calendar',
                                        name: 'No User Calendar access',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form,
                                        field: 'colleagues_require_auth',
                                        name: 'Only authenticated colleagues',
                                        info: 'Will limit the available users to add as colleagues to only
 those who have authenticated with the application',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form,
                                        field: 'hide_landing_sidebar',
                                        name: 'Hide landing sidebar',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form,
                                        field: 'hide_landing_spaces',
                                        name: 'Hide landing spaces',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form,
                                        field: 'hide_landing_rooms',
                                        name: 'Hide landing rooms',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form,
                                        field: 'hide_colleagues',
                                        name: 'Hide colleagues',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form,
                                        field: 'show_quick_links',
                                        name: 'Show landing quick links',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form,
                                        field: 'allow_dark_mode',
                                        name: 'Allow dark mode',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form,
                                        field: 'global_search',
                                        name: 'Show global search',
                                    }
                                "
                            ></ng-container>
                        </div>
                    </section>
                    <section
                        events
                        class="relative border border-base-300 rounded px-4 pb-2 pt-4"
                        *ngIf="form.value.features.includes('spaces')"
                        formGroupName="events"
                    >
                        <h3
                            class="absolute top-0 left-4 -translate-y-1/2 rounded px-2 py-1 font-medium bg-base-100"
                        >
                            Room Bookings
                        </h3>
                        <div>
                            <label for="available-period">
                                Available Period
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="available-period"
                                    formControlName="allowed_future_days"
                                >
                                    <mat-option [value]="1">1 Day</mat-option>
                                    <mat-option [value]="2">2 Day</mat-option>
                                    <mat-option [value]="3">3 Day</mat-option>
                                    <mat-option [value]="4">4 Day</mat-option>
                                    <mat-option [value]="5">5 Day</mat-option>
                                    <mat-option [value]="6">6 Day</mat-option>
                                    <mat-option [value]="7">1 Week</mat-option>
                                    <mat-option [value]="8">8 Day</mat-option>
                                    <mat-option [value]="9">9 Day</mat-option>
                                    <mat-option [value]="10">10 Day</mat-option>
                                    <mat-option [value]="11">11 Day</mat-option>
                                    <mat-option [value]="12">12 Day</mat-option>
                                    <mat-option [value]="13">13 Day</mat-option>
                                    <mat-option [value]="14">
                                        2 Weeks
                                    </mat-option>
                                    <mat-option [value]="21">
                                        3 Weeks
                                    </mat-option>
                                    <mat-option [value]="30">
                                        1 Month
                                    </mat-option>
                                    <mat-option [value]="45">
                                        6 Weeks
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
                                    Number of days ahead the user is able to
                                    book
                                </mat-hint>
                            </mat-form-field>
                        </div>
                        <div>
                            <label for="force-host">Force Host</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="force-host"
                                    formControlName="force_host"
                                    placeholder="global.host@acme.tech"
                                />
                                <mat-hint>
                                    Force host of room bookings to be this user
                                </mat-hint>
                                <mat-error>Invalid email address</mat-error>
                            </mat-form-field>
                        </div>
                        <div>
                            <label for="max-duration"> Max Duration </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="max-duration"
                                    formControlName="max_duration"
                                >
                                    <mat-option [value]="60">1 Hour</mat-option>
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
                        <div class="flex items-center space-x-4">
                            <div>
                                <label for="setup">
                                    Default Setup Duration
                                </label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        name="setup"
                                        formControlName="setup"
                                        placeholder="No default setup"
                                    >
                                        <mat-option [value]="5">
                                            5 Minutes
                                        </mat-option>
                                        <mat-option [value]="10">
                                            10 Minutes
                                        </mat-option>
                                        <mat-option [value]="15">
                                            15 Minutes
                                        </mat-option>
                                        <mat-option [value]="30">
                                            30 Minutes
                                        </mat-option>
                                        <mat-option [value]="45">
                                            45 Minutes
                                        </mat-option>
                                        <mat-option [value]="60">
                                            1 Hour
                                        </mat-option>
                                        <mat-option [value]="90">
                                            1 Hour 30 Minutes
                                        </mat-option>
                                        <mat-option [value]="120">
                                            2 Hours
                                        </mat-option>
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
                                    <mat-select
                                        name="breakdown"
                                        formControlName="breakdown"
                                        placeholder="No default breakdown"
                                    >
                                        <mat-option [value]="5">
                                            5 Minutes
                                        </mat-option>
                                        <mat-option [value]="10">
                                            10 Minutes
                                        </mat-option>
                                        <mat-option [value]="15">
                                            15 Minutes
                                        </mat-option>
                                        <mat-option [value]="30">
                                            30 Minutes
                                        </mat-option>
                                        <mat-option [value]="45">
                                            45 Minutes
                                        </mat-option>
                                        <mat-option [value]="60">
                                            1 Hour
                                        </mat-option>
                                        <mat-option [value]="90">
                                            1 Hour 30 Minutes
                                        </mat-option>
                                        <mat-option [value]="120">
                                            2 Hours
                                        </mat-option>
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        </div>
                        <div>
                            <label for="cache-duration"> Cache Period </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="cache-duration"
                                    formControlName="cache_duration_in_days"
                                >
                                    <mat-option [value]="-1">
                                        No cache
                                    </mat-option>
                                    <mat-option [value]="1">1 Day</mat-option>
                                    <mat-option [value]="2">2 Days</mat-option>
                                    <mat-option [value]="3">3 Days</mat-option>
                                    <mat-option [value]="4">4 Days</mat-option>
                                    <mat-option [value]="5">5 Days</mat-option>
                                    <mat-option [value]="6">6 Days</mat-option>
                                    <mat-option [value]="7">1 Week</mat-option>
                                    <mat-option [value]="8">8 Days</mat-option>
                                    <mat-option [value]="9">9 Days</mat-option>
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
                                    Number of days ahead to grab bookings from
                                    the room driver
                                </mat-hint>
                            </mat-form-field>
                        </div>
                        <div class="flex items-center flex-wrap -mx-2">
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('events'),
                                        field: 'allow_all_day',
                                        name: 'Allow all day bookings',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('events'),
                                        field: 'booking_unavailable',
                                        name: 'Disable booking requests',
                                        info: 'Prevent making backend requests for bookings and give users links to create the booking in their own calendars',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('events'),
                                        field: 'can_book_for_others',
                                        name: 'Allow booking for other users',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('events'),
                                        field: 'has_assets',
                                        name: 'Allow booking with assets',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('events'),
                                        field: 'hide_user_actions',
                                        name: 'Hide attendee actions',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('events'),
                                        field: 'multiple_spaces',
                                        name: 'Allow booking multiple spaces',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('events'),
                                        field: 'room_as_host',
                                        name: 'Force room as host',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('events'),
                                        field: 'allow_externals',
                                        name: 'Allow external attendees',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('events'),
                                        field: 'hide_notes',
                                        name: 'Disable notes',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('events'),
                                        field: 'hide_attendees',
                                        name: 'Disable attendees',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('events'),
                                        field: 'allow_recurrence',
                                        name: 'Allow Recurring Meeting',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('events'),
                                        field: 'all_day_default',
                                        name: 'Default to all day',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('events'),
                                        field: 'allow_multiday',
                                        name: 'Allow multi-day bookings',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('events'),
                                        field: 'use_bookings',
                                        name: 'Use PlaceOS bookings',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('events'),
                                        field: 'use_building_timezone',
                                        name: 'Display times with building timezone',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('events'),
                                        field: 'allow_daily_allday_recurrence',
                                        name: 'Allow daily all-day recurrence',
                                    }
                                "
                            ></ng-container>
                        </div>
                    </section>
                    <section
                        desks
                        class="relative border border-base-300 rounded px-4 pb-2 pt-4"
                        *ngIf="form.value.features.includes('desks')"
                        formGroupName="desks"
                    >
                        <h3
                            class="absolute top-0 left-4 -translate-y-1/2 rounded px-2 py-1 font-medium bg-base-100"
                        >
                            Desk Bookings
                        </h3>
                        <div>
                            <label for="available-period">
                                Available Period
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="available-period"
                                    formControlName="available_period"
                                >
                                    <mat-option [value]="1">1 Day</mat-option>
                                    <mat-option [value]="2">2 Days</mat-option>
                                    <mat-option [value]="3">3 Days</mat-option>
                                    <mat-option [value]="4">4 Days</mat-option>
                                    <mat-option [value]="5">5 Days</mat-option>
                                    <mat-option [value]="6">6 Days</mat-option>
                                    <mat-option [value]="7">1 Week</mat-option>
                                    <mat-option [value]="8">8 Days</mat-option>
                                    <mat-option [value]="9">9 Days</mat-option>
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
                                    Number of days ahead the user is able to
                                    book
                                </mat-hint>
                            </mat-form-field>
                        </div>
                        <div class="flex items-center flex-wrap -mx-2">
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('desks'),
                                        field: 'allow_all_day',
                                        name: 'Allow all day bookings',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('desks'),
                                        field: 'allow_groups',
                                        name: 'Allow group bookings',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('desks'),
                                        field: 'allow_time_changes',
                                        name: 'Allow user selecting booking time',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('desks'),
                                        field: 'auto_allocation',
                                        name: 'Auto-allocate desks',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('desks'),
                                        field: 'can_book_for_others',
                                        name: 'Allow booking for other users',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('desks'),
                                        field: 'can_book_lockers',
                                        name: 'Allow booking with lockers',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('desks'),
                                        field: 'has_assets',
                                        name: 'Allow booking with assets',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('desks'),
                                        field: 'hide_reason',
                                        name: 'Disable reason field for desk booking',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('desks'),
                                        field: 'needs_reason',
                                        name: 'Require a reason for desk booking',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('desks'),
                                        field: 'allow_recurrence',
                                        name: 'Allow Recurring Desk bookings',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('desks'),
                                        field: 'default_select_as_map',
                                        name: 'Default to desk select modal to map view',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('desks'),
                                        field: 'auto_checkin',
                                        name: 'Auto-checkin map bookings',
                                    }
                                "
                            ></ng-container>
                        </div>
                    </section>
                    <section
                        bookings
                        class="relative border border-base-300 rounded px-4 pb-2 pt-4"
                        *ngIf="
                            form.value.features.includes('desks') ||
                            form.value.features.includes('parking') ||
                            form.value.features.includes('lockers') ||
                            form.value.features.includes('visitor-invite')
                        "
                        formGroupName="bookings"
                    >
                        <h3
                            class="absolute top-0 left-4 -translate-y-1/2 rounded px-2 py-1 font-medium bg-base-100"
                        >
                            PlaceOS Bookings
                        </h3>
                        <div class="flex items-center flex-wrap -mx-2">
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('bookings'),
                                        field: 'allow_all_day',
                                        name: 'Allow all day bookings',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('bookings'),
                                        field: 'use_building_timezone',
                                        name: 'Display times with building timezone',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('bookings'),
                                        field: 'can_book_for_others',
                                        name: 'Allow booking for other users',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('bookings'),
                                        field: 'multiple_visitors',
                                        name: 'Allow booking multiple visitors',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('bookings'),
                                        field: 'all_day_default',
                                        name: 'Default to all day',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('bookings'),
                                        field: 'no_approval',
                                        name: 'Auto-approve bookings',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('bookings'),
                                        field: 'allow_assets',
                                        name: 'Allow booking with assets',
                                    }
                                "
                            ></ng-container>
                        </div>
                    </section>
                    <section
                        parking
                        class="relative border border-base-300 rounded px-4 pb-2 pt-4"
                        *ngIf="form.value.features.includes('parking')"
                        formGroupName="parking"
                    >
                        <h3
                            class="absolute top-0 left-4 -translate-y-1/2 rounded px-2 py-1 font-medium bg-base-100"
                        >
                            Parking Bookings
                        </h3>
                        <div>
                            <label for="available-period">
                                Available Period
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="available-period"
                                    formControlName="available_period"
                                >
                                    <mat-option [value]="1">1 Day</mat-option>
                                    <mat-option [value]="2">2 Days</mat-option>
                                    <mat-option [value]="3">3 Days</mat-option>
                                    <mat-option [value]="4">4 Days</mat-option>
                                    <mat-option [value]="5">5 Days</mat-option>
                                    <mat-option [value]="6">6 Days</mat-option>
                                    <mat-option [value]="7">1 Week</mat-option>
                                    <mat-option [value]="8">8 Days</mat-option>
                                    <mat-option [value]="9">9 Days</mat-option>
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
                                    Number of days ahead the user is able to
                                    book
                                </mat-hint>
                            </mat-form-field>
                        </div>
                        <div class="flex items-center flex-wrap -mx-2">
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('parking'),
                                        field: 'allow_time_changes',
                                        name: 'Allow user selecting booking time',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('parking'),
                                        field: 'auto_allocation',
                                        name: 'Auto-allocate parking spaces',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('parking'),
                                        field: 'can_book_for_others',
                                        name: 'Allow booking for other users',
                                    }
                                "
                            ></ng-container>
                            <ng-container
                                *ngTemplateOutlet="
                                    check_btn;
                                    context: {
                                        form: form.get('parking'),
                                        field: 'allow_recurrence',
                                        name: 'Allow recurring parking bookings',
                                    }
                                "
                            ></ng-container>
                        </div>
                    </section>
                </form>
            </main>
            <footer
                class="sticky bottom-0 px-4 py-2 mx-auto my-2 max-w-[640px] w-full border-none z-10 bg-base-200 rounded flex items-center justify-end"
            >
                <button btn matRipple class="w-32" (click)="save()">
                    Save
                </button>
            </footer>
        </div>
        <ng-template
            #check_btn
            let-form="form"
            let-field="field"
            let-name="name"
            let-info="info"
        >
            <button
                matRipple
                [formGroup]="form"
                class="flex items-center space-x-2 m-2 p-2 border border-base-300 w-[calc(50%-1rem)] rounded"
                (click)="form.get(field).setValue(!form.get(field).value)"
            >
                <div class="ml-2 flex-1 text-left flex items-center space-x-2">
                    <div>{{ name }}</div>
                    <app-icon *ngIf="info" [matTooltip]="info">info</app-icon>
                </div>
                <mat-checkbox
                    [formControlName]="field"
                    class="pointer-events-none"
                ></mat-checkbox>
            </button>
        </ng-template>
    `,
    styles: [
        `
            section {
                background-color: hsla(217, 91%, 60%, 0.04);
            }
        `,
    ],
})
export class WorkplaceSettingsFormModalComponent {
    public loading = '';
    public existing_settings: Record<string, any> = {};
    public readonly zone = this._data.zone;
    public readonly settings_key =
        this._settings.get('app.workplace_metadata_key') || 'workplace_app';

    public readonly form = new FormGroup({
        logo_light: new FormControl(''),
        logo_dark: new FormControl(''),
        features: new FormControl([]),
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
        allow_dark_mode: new FormControl(true),
        global_search: new FormControl(true),
        external_support_url: new FormControl('', [validateURL]),
        support_email: new FormControl('', [Validators.email]),
        catering_provider: new FormControl(''),
        events: new FormGroup({
            allow_all_day: new FormControl(false),
            booking_unavailable: new FormControl(false),
            can_book_for_others: new FormControl(false),
            has_assets: new FormControl(false),
            hide_user_actions: new FormControl(false),
            multiple_spaces: new FormControl(false),
            room_as_host: new FormControl(false),
            allow_externals: new FormControl(false),
            hide_notes: new FormControl(false),
            hide_attendees: new FormControl(false),
            allow_recurrence: new FormControl(false),
            all_day_default: new FormControl(false),
            allow_multiday: new FormControl(false),
            use_bookings: new FormControl(false),
            use_building_timezone: new FormControl(false),
            allow_daily_allday_recurrence: new FormControl(false),
            allowed_future_days: new FormControl(45),
            setup: new FormControl(0),
            breakdown: new FormControl(0),
            max_duration: new FormControl(360),
            cache_duration_in_days: new FormControl(14),
        }),
        desks: new FormGroup({
            allow_all_day: new FormControl(false),
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
            auto_checkin: new FormControl(false),
            available_period: new FormControl(14),
        }),
        parking: new FormGroup({
            allow_all_day: new FormControl(false),
            allow_time_changes: new FormControl(false),
            auto_allocation: new FormControl(false),
            can_book_for_others: new FormControl(false),
            allow_recurrence: new FormControl(false),
            default_select_as_map: new FormControl(false),
            auto_checkin: new FormControl(false),
            available_period: new FormControl(14),
        }),
        bookings: new FormGroup({
            use_building_timezone: new FormControl(false),
            allow_assets: new FormControl(false),
            no_approval: new FormControl(false),
            can_book_for_others: new FormControl(false),
            multiple_visitors: new FormControl(false),
            all_day_default: new FormControl(false),
        }),
    });

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { zone: PlaceZone },
        private _dialog_ref: MatDialogRef<WorkplaceSettingsFormModalComponent>,
        private _settings: SettingsService,
        private _org: OrganisationService,
    ) {}

    public async ngOnInit() {
        const zone = this._data.zone;
        this.loading = 'Loading existing settings...';
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
        console.log(
            'Metadata:',
            DEFAULT_SETTINGS.app,
            org_metadata,
            parent_metadata,
            metadata,
        );
        this.form.patchValue(org_metadata || {});
        this.form.patchValue(parent_metadata || {});
        this.form.patchValue(metadata || {});
        this.loading = '';
    }

    public async save() {
        this.loading = 'Saving settings...';
        const zone = this._data.zone;
        const new_settings = { ...this.existing_settings, ...this.form.value };
        for (const key in new_settings) {
            if (
                !this._isValid(new_settings[key], this.existing_settings[key])
            ) {
                delete new_settings[key];
            } else if (typeof new_settings[key] === 'object') {
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
        await updateMetadata(zone.id, {
            name: `${this.settings_key}`,
            details: new_settings,
            description: 'Workplace Application Settings',
        })
            .toPromise()
            .catch((e) => {
                console.error(e);
                this.loading = '';
                throw e;
            });
        this.loading = '';
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
        return showMetadata(id, this.settings_key)
            .pipe(map((m) => m.details as Record<string, any>))
            .toPromise();
    }
}
