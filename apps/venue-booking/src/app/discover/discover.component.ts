import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { IconComponent, SettingsToggleComponent } from '@placeos/components';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';
import { FooterComponent } from '../shared/footer.component';
import { TopbarComponent } from '../shared/topbar.component';

interface VenueType {
    id: string;
    name: string;
    icon: string;
}

@Component({
    selector: 'discover-root',
    template: `
        <app-topbar class="border-base-200 sticky top-0 z-20 border-b" />
        <main class="bg-base-200 relative z-0 flex flex-1 flex-col gap-6 p-4">
            <!-- Page Header -->
            <section class="mx-auto w-5xl max-w-full">
                <h1 class="text-secondary text-3xl font-medium">Find Venue</h1>
                <p class="text-base-content/70 mt-2">
                    Search for available venues and book your event
                </p>
            </section>

            <!-- Search Criteria Card -->
            <section
                class="bg-base-100 border-base-300 mx-auto w-5xl max-w-full rounded-lg border p-6 shadow-sm"
            >
                <h2 class="text-secondary mb-6 text-xl font-medium">
                    Search Criteria
                </h2>

                <!-- Flexible with dates -->
                <div
                    class="border-secondary/30 bg-base-200/50 mb-6 flex items-center gap-3 border-l-4 p-4"
                >
                    <mat-checkbox
                        [(ngModel)]="flexible_dates"
                        color="primary"
                    />
                    <span class="text-secondary font-medium"
                        >Flexible with dates</span
                    >
                    <span class="text-base-content/70"
                        >- Show venues available within a date range</span
                    >
                </div>

                <!-- Date, Time, Duration, Capacity Row -->
                <div
                    class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                >
                    <!-- Date Field -->
                    <div class="flex flex-col gap-1">
                        <label class="text-sm font-medium"
                            >Date <span class="text-error">*</span></label
                        >
                        <date-field
                            class="no-subscript"
                            [(ngModel)]="search_date"
                        />
                    </div>

                    <!-- Start Time Field -->
                    <div class="flex flex-col gap-1">
                        <label class="text-sm font-medium">Start Time</label>
                        <time-field
                            [(ngModel)]="start_time"
                            [no_error]="true"
                        />
                    </div>

                    <!-- Duration Field -->
                    <div class="flex flex-col gap-1">
                        <label class="text-sm font-medium"
                            >Duration (hours)</label
                        >
                        <duration-field
                            [(ngModel)]="duration"
                            [min]="60"
                            [max]="480"
                            [step]="60"
                        />
                    </div>

                    <!-- Capacity Field -->
                    <div class="flex flex-col gap-1">
                        <label class="text-sm font-medium"
                            >Capacity (minimum)</label
                        >
                        <mat-form-field appearance="outline">
                            <mat-select
                                [(ngModel)]="capacity"
                                placeholder="Number of attendees"
                            >
                                @for (
                                    opt of capacity_options;
                                    track opt.value
                                ) {
                                    <mat-option [value]="opt.value">{{
                                        opt.label
                                    }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>

                <!-- Venue Type Section -->
                <div class="mb-6">
                    <h3 class="mb-4 text-sm font-semibold">Venue Type</h3>
                    <div class="flex flex-wrap gap-4">
                        @for (type of venue_types; track type.id) {
                            <button
                                matRipple
                                class="border-base-300 relative flex h-28 w-32 flex-col items-center justify-center gap-2 rounded-lg border p-4 transition-all"
                                [class.border-secondary]="
                                    selected_type() === type.id
                                "
                                [class.border-2]="selected_type() === type.id"
                                (click)="selectType(type.id)"
                            >
                                @if (selected_type() === type.id) {
                                    <div
                                        class="bg-secondary text-secondary-content absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full"
                                    >
                                        <icon class="text-xl">check</icon>
                                    </div>
                                }
                                <icon class="text-secondary text-4xl">{{
                                    type.icon
                                }}</icon>
                                <span
                                    class="text-sm font-medium"
                                    [class.text-secondary]="
                                        selected_type() === type.id
                                    "
                                    >{{ type.name }}</span
                                >
                            </button>
                        }
                    </div>
                </div>

                <!-- Feature Toggles -->
                <div class="mb-8 flex flex-wrap items-center gap-4">
                    <settings-toggle
                        [(ngModel)]="av_equipment"
                        name="AV Equipment Available"
                    />
                    <settings-toggle
                        [(ngModel)]="catering_allowed"
                        name="Catering Allowed"
                    />
                    <settings-toggle
                        [(ngModel)]="wheelchair_accessible"
                        name="Wheelchair Accessible"
                    />
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-wrap justify-center gap-4">
                    <button
                        btn
                        matRipple
                        class="flex w-48 items-center justify-center gap-2"
                        (click)="searchVenues()"
                    >
                        <icon class="text-lg">search</icon>
                        <div class="pr-2">Search Venues</div>
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse w-48"
                        (click)="clearFilters()"
                    >
                        Clear Filters
                    </button>
                </div>
            </section>
        </main>
        <app-footer />
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                overflow: auto;
            }
        `,
    ],
    imports: [
        TopbarComponent,
        FooterComponent,
        IconComponent,
        FormsModule,
        MatCheckboxModule,
        MatRippleModule,
        MatSelectModule,
        SettingsToggleComponent,
        DateFieldComponent,
        TimeFieldComponent,
        DurationFieldComponent,
    ],
})
export class DiscoverComponent {
    public flexible_dates = false;
    public search_date = Date.now();
    public start_time = Date.now();
    public duration = 120; // 2 hours in minutes
    public capacity: number = null;
    public readonly selected_type = signal('all');
    public av_equipment = false;
    public catering_allowed = false;
    public wheelchair_accessible = false;

    public readonly venue_types: VenueType[] = [
        { id: 'all', name: 'All Types', icon: 'apps' },
        { id: 'auditorium', name: 'Auditorium', icon: 'movie' },
        { id: 'classroom', name: 'Classroom', icon: 'school' },
        { id: 'outdoor', name: 'Outdoor', icon: 'park' },
        { id: 'event_hall', name: 'Event Hall', icon: 'account_balance' },
        { id: 'conference', name: 'Conference', icon: 'meeting_room' },
        { id: 'athletic', name: 'Athletic', icon: 'fitness_center' },
    ];

    public readonly capacity_options = [
        { value: 10, label: '10+' },
        { value: 25, label: '25+' },
        { value: 50, label: '50+' },
        { value: 100, label: '100+' },
        { value: 250, label: '250+' },
        { value: 500, label: '500+' },
    ];

    public selectType(type_id: string): void {
        this.selected_type.set(type_id);
    }

    public searchVenues(): void {
        console.log('Searching venues with:', {
            flexible_dates: this.flexible_dates,
            date: this.search_date,
            time: this.start_time,
            duration: this.duration,
            capacity: this.capacity,
            type: this.selected_type(),
            av_equipment: this.av_equipment,
            catering_allowed: this.catering_allowed,
            wheelchair_accessible: this.wheelchair_accessible,
        });
    }

    public clearFilters(): void {
        this.flexible_dates = false;
        this.search_date = Date.now();
        this.start_time = Date.now();
        this.duration = 120;
        this.capacity = null;
        this.selected_type.set('all');
        this.av_equipment = false;
        this.catering_allowed = false;
        this.wheelchair_accessible = false;
    }
}
