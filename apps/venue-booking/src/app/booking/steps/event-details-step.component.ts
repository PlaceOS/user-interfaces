import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@placeos/components';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';
import { BookingService } from '../booking.service';

@Component({
    selector: 'event-details-step',
    template: `
        <div class="flex flex-col gap-6">
            <h2 class="text-xl font-bold">Event Details</h2>

            <!-- Event Title -->
            <div class="flex flex-col gap-1">
                <label class="text-sm font-medium">
                    Event Title
                    <span class="text-error">*</span>
                </label>
                <input
                    type="text"
                    class="border-neutral h-12 w-full rounded-sm border px-4"
                    placeholder="Enter event title"
                    [ngModel]="booking.event_title()"
                    (ngModelChange)="booking.event_title.set($event)"
                />
            </div>

            <!-- Date & Duration Row -->
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div class="flex flex-col gap-1">
                    <label class="text-sm font-medium">
                        Event Date & Time
                        <span class="text-error">*</span>
                    </label>
                    <div class="flex gap-2">
                        <date-field
                            class="no-subscript flex-1"
                            [ngModel]="booking.event_date()"
                            (ngModelChange)="booking.event_date.set($event)"
                        />
                        <time-field
                            class="flex-1"
                            [ngModel]="booking.event_time()"
                            (ngModelChange)="booking.event_time.set($event)"
                            [no_error]="true"
                        />
                    </div>
                </div>
                <div class="flex flex-col gap-1">
                    <label class="text-sm font-medium">
                        Duration
                        <span class="text-error">*</span>
                    </label>
                    <duration-field
                        [ngModel]="booking.duration()"
                        (ngModelChange)="booking.duration.set($event)"
                        [min]="60"
                        [max]="720"
                        [step]="60"
                    />
                </div>
            </div>

            <!-- Venue Selection -->
            <div class="flex flex-col gap-2">
                <label class="text-sm font-medium">
                    Venue Selection
                    <span class="text-error">*</span>
                </label>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <!-- I know which venue I want -->
                    <button
                        matRipple
                        class="border-base-300 relative flex items-start gap-4 rounded-lg border p-4 text-left transition-all"
                        [class.border-secondary]="
                            booking.venue_selection_mode() === 'known'
                        "
                        [class.border-2]="
                            booking.venue_selection_mode() === 'known'
                        "
                        (click)="booking.venue_selection_mode.set('known')"
                    >
                        @if (booking.venue_selection_mode() === 'known') {
                            <div
                                class="bg-secondary text-secondary-content absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                <icon class="text-lg">check</icon>
                            </div>
                        }
                        <icon class="text-secondary text-3xl">location_on</icon>
                        <div class="flex flex-col gap-1">
                            <span
                                class="font-medium"
                                [class.text-secondary]="
                                    booking.venue_selection_mode() === 'known'
                                "
                            >
                                I know which venue I want
                            </span>
                            <span class="text-base-content/70 text-sm">
                                Select a specific venue from our list
                            </span>
                        </div>
                    </button>

                    <!-- Help me find a venue -->
                    <button
                        matRipple
                        class="border-base-300 relative flex items-start gap-4 rounded-lg border p-4 text-left transition-all"
                        [class.border-secondary]="
                            booking.venue_selection_mode() === 'help'
                        "
                        [class.border-2]="
                            booking.venue_selection_mode() === 'help'
                        "
                        (click)="booking.venue_selection_mode.set('help')"
                    >
                        @if (booking.venue_selection_mode() === 'help') {
                            <div
                                class="bg-secondary text-secondary-content absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                <icon class="text-lg">check</icon>
                            </div>
                        }
                        <icon class="text-secondary text-3xl">support_agent</icon>
                        <div class="flex flex-col gap-1">
                            <span
                                class="font-medium"
                                [class.text-secondary]="
                                    booking.venue_selection_mode() === 'help'
                                "
                            >
                                Help me find a venue
                            </span>
                            <span class="text-base-content/70 text-sm">
                                Events team will suggest venues based on your
                                requirements
                            </span>
                        </div>
                    </button>
                </div>
            </div>

            <!-- Conditional: Known Venue Selection -->
            @if (booking.venue_selection_mode() === 'known') {
                <div class="flex flex-col gap-1">
                    <label class="text-sm font-medium">
                        Venue <span class="text-error">*</span>
                    </label>
                    <input
                        type="text"
                        class="border-neutral h-12 w-full rounded-sm border px-4"
                        placeholder="Enter venue name"
                        [ngModel]="booking.venue_name()"
                        (ngModelChange)="booking.venue_name.set($event)"
                    />
                    <p class="text-base-content/70 text-sm">
                        <icon class="text-secondary mr-1 inline-block text-base"
                            >lightbulb</icon
                        >
                        Tip: Use
                        <a
                            [routerLink]="['/discover']"
                            class="text-secondary underline"
                            >Find Venue</a
                        >
                        to search available venues
                    </p>
                </div>
            }

            <!-- Conditional: Help me find venue -->
            @if (booking.venue_selection_mode() === 'help') {
                <!-- Info Banner -->
                <div
                    class="border-info bg-info/10 flex items-start gap-3 rounded-lg border-l-4 p-4"
                >
                    <icon class="text-info text-xl">info</icon>
                    <div>
                        <span class="text-info font-medium"
                            >Venue Assistance Selected</span
                        >
                        <p class="text-base-content/80 text-sm">
                            Please provide your event requirements and our events
                            team will suggest suitable venues for you.
                        </p>
                    </div>
                </div>

                <!-- Expected Capacity -->
                <div class="flex flex-col gap-1">
                    <label class="text-sm font-medium">
                        Expected Capacity
                        <span class="text-error">*</span>
                    </label>
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select
                            [ngModel]="booking.expected_capacity()"
                            (ngModelChange)="booking.expected_capacity.set($event)"
                            placeholder="Number of attendees"
                        >
                            @for (opt of booking.capacity_options; track opt.value) {
                                <mat-option [value]="opt.value">{{
                                    opt.label
                                }}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>

                <!-- Venue Preferences -->
                <div class="flex flex-col gap-1">
                    <label class="text-sm font-medium">Venue Preferences</label>
                    <textarea
                        class="border-neutral min-h-24 w-full rounded-sm border p-4"
                        placeholder="Describe your venue needs (e.g., indoor/outdoor, location preference, accessibility requirements)"
                        [ngModel]="booking.venue_preferences()"
                        (ngModelChange)="booking.venue_preferences.set($event)"
                    ></textarea>
                </div>
            }

            <!-- Event Description -->
            <div class="flex flex-col gap-1">
                <label class="text-sm font-medium">Event Description</label>
                <textarea
                    class="border-neutral min-h-24 w-full rounded-sm border p-4"
                    placeholder="Describe your event"
                    [ngModel]="booking.event_description()"
                    (ngModelChange)="booking.event_description.set($event)"
                ></textarea>
            </div>
        </div>
    `,
    imports: [
        CommonModule,
        FormsModule,
        RouterLink,
        IconComponent,
        MatRippleModule,
        MatSelectModule,
        DateFieldComponent,
        TimeFieldComponent,
        DurationFieldComponent,
    ],
})
export class EventDetailsStepComponent {
    public readonly booking = inject(BookingService);
}
