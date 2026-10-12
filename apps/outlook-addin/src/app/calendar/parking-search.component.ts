import {
    Component,
    computed,
    effect,
    inject,
    linkedSignal,
    signal,
    untracked,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    BookingAsset,
    BookingFormService,
    ParkingService,
} from '@placeos/bookings';
import {
    OrganisationService,
    SettingsService,
    settingSignal,
} from '@placeos/common';
import { IconComponent } from '@placeos/components';
import {
    BookingLinkFields,
    parkingRequestAsset,
    ParkingLinkService,
} from './booking-link.service';
import { LinkedBookingComponent } from './linked-booking.component';
import { bookingWindow, formatEventPeriod } from './outlook-event';
import { OutlookEventService } from './outlook-event.service';

/** `space` books a parking space. `request` asks the parking team for one. */
export type ParkingMode = 'space' | 'request';

/**
 * Parking modes that the `app.features` setting turns on: `parking` for
 * parking spaces and `parking-requests` for parking requests.
 */
export function parkingModes(features: string[] = []): ParkingMode[] {
    return [
        ...(features.includes('parking') ? (['space'] as const) : []),
        ...(features.includes('parking-requests') ? (['request'] as const) : []),
    ];
}

const MODE_NAMES: Record<ParkingMode, string> = {
    space: 'Choose a space',
    request: 'Request parking',
};

/**
 * Parking for the Outlook event. Books a parking space, or sends a parking
 * request, for the event interval and links the booking to the event.
 */
@Component({
    selector: 'parking-search',
    template: `
        <div class="flex flex-col gap-3 p-3">
            <linked-booking [link]="link" />
            @if (deny_access()) {
                <p class="bg-base-200 rounded p-3 text-sm">
                    Your user account is not allowed to book parking in this
                    building.
                </p>
            } @else if (is_home_location()) {
                <p class="bg-base-200 rounded p-3 text-sm">
                    Parking is not available at your home location.
                </p>
            } @else if (assigned_space(); as space) {
                <p class="bg-base-200 rounded p-3 text-sm">
                    Parking space {{ space.name }} is assigned to you. You do
                    not need to book parking.
                </p>
            } @else if (window_error()) {
                <p class="bg-base-200 rounded p-3 text-sm">
                    {{ window_error() }}
                </p>
            } @else if (!link.booking()) {
                @if (modes().length > 1) {
                    <div
                        role="radiogroup"
                        aria-label="Parking type"
                        class="border-base-300 flex rounded-lg border p-0.5"
                    >
                        @for (item of modes(); track item) {
                            <button
                                role="radio"
                                matRipple
                                class="flex-1 rounded-md px-2 py-1 text-sm"
                                [class.bg-secondary]="mode() === item"
                                [class.text-secondary-content]="
                                    mode() === item
                                "
                                [attr.aria-checked]="mode() === item"
                                (click)="mode.set(item)"
                            >
                                {{ mode_names[item] }}
                            </button>
                        }
                    </div>
                }
                @if (all_day_unknown()) {
                    <p class="bg-base-200 rounded p-2 text-xs">
                        This Outlook client does not report the All day setting.
                        PlaceOS uses the event times shown above.
                    </p>
                }
                <label class="flex flex-col text-sm">
                    <div>
                        Plate number
                        @if (require_plate_number()) {
                            <span class="text-error">*</span>
                        }
                    </div>
                    <mat-form-field appearance="outline" class="no-subscript">
                        <input
                            matInput
                            name="plate-number"
                            placeholder="For example ABC123"
                            [required]="!!require_plate_number()"
                            [(ngModel)]="plate_number"
                        />
                    </mat-form-field>
                </label>
                @if (mode() === 'request') {
                    <section
                        class="border-base-300 space-y-2 rounded-lg border p-3"
                        aria-label="Parking request"
                    >
                        <p class="text-sm">
                            The parking team assigns a space to you for
                            {{ period() }}.
                        </p>
                        <button
                            btn
                            matRipple
                            class="w-full"
                            [disabled]="saving() || !plate_valid()"
                            (click)="requestParking()"
                        >
                            {{
                                saving() ? 'Sending request...' : 'Request parking'
                            }}
                        </button>
                    </section>
                } @else {
                    @if (levels().length > 1) {
                        <label class="flex flex-col text-sm">
                            Floor
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select [(value)]="level_id">
                                    <mat-option value="">Any floor</mat-option>
                                    @for (lvl of levels(); track lvl.id) {
                                        <mat-option [value]="lvl.id">
                                            {{ lvl.display_name || lvl.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </label>
                    }
                    <h3 class="font-medium">
                        @if (loading()) {
                            Checking availability...
                        } @else {
                            {{ spaces().length }} available
                            {{ spaces().length === 1 ? 'space' : 'spaces' }}
                        }
                    </h3>
                    @for (space of spaces(); track space.id) {
                        <article class="border-base-300 rounded-lg border p-3">
                            <h4 class="truncate font-medium">
                                {{ space.display_name || space.name || space.id }}
                            </h4>
                            <p class="text-sm opacity-70">
                                {{ space.zone?.display_name || space.zone?.name }}
                            </p>
                            <div class="mt-2 flex items-center justify-between">
                                <span
                                    class="text-success flex items-center gap-1 text-sm"
                                >
                                    <icon>check</icon> Available {{ period() }}
                                </span>
                                <button
                                    btn
                                    matRipple
                                    class="inverse h-9 min-h-0 text-sm"
                                    [disabled]="saving() || !plate_valid()"
                                    (click)="addSpace(space)"
                                >
                                    {{
                                        saving() && adding() === space.id
                                            ? 'Reserving...'
                                            : 'Add to event'
                                    }}
                                </button>
                            </div>
                        </article>
                    } @empty {
                        @if (!loading()) {
                            <p class="py-6 text-center text-sm opacity-60">
                                No parking spaces are available for this time.
                            </p>
                        }
                    }
                }
                <p class="text-xs opacity-60">
                    Adding parking books it now and saves this event to your
                    calendar. Outlook does not send invitations for a new event
                    until you select Send.
                </p>
            }
        </div>
    `,
    styles: [
        `
            .no-subscript ::ng-deep .mat-mdc-form-field-subscript-wrapper {
                display: none;
            }
        `,
    ],
    imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatSelectModule,
        IconComponent,
        LinkedBookingComponent,
    ],
})
export class ParkingSearchComponent {
    private _form = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _parking = inject(ParkingService);
    private _outlook = inject(OutlookEventService);
    public readonly link = inject(ParkingLinkService);

    public readonly mode_names = MODE_NAMES;
    public readonly modes = computed(() =>
        parkingModes(this._settings.get('app.features')),
    );
    /** Selected mode. Keeps the user's choice when the settings change. */
    public readonly mode = linkedSignal<ParkingMode[], ParkingMode>({
        source: this.modes,
        computation: (modes, previous) =>
            previous && modes.includes(previous.value)
                ? previous.value
                : modes[0] || 'space',
    });
    public readonly level_id = signal('');
    /** ID of the space that is being reserved */
    public readonly adding = signal('');
    /**
     * Plate number. Starts with the saved plate number of the user, and keeps
     * what the user typed.
     */
    public readonly plate_number = linkedSignal<string, string>({
        source: () =>
            this._settings.get('plate_number') ||
            this._parking.user_details()?.plate_number ||
            '',
        computation: (saved, previous) => previous?.value || saved,
    });
    public readonly require_plate_number = settingSignal<boolean>(
        'parking.require_plate_number',
        false,
    );
    public readonly plate_valid = computed(
        () => !this.require_plate_number() || !!this.plate_number().trim(),
    );

    public readonly deny_access = this._parking.deny_parking_access;
    public readonly is_home_location = this._parking.is_home_location;
    /**
     * Space assigned to the user, when the booking rules then block more
     * parking for the user.
     */
    public readonly assigned_space = computed(() =>
        this._form.assignedResourceBooking('parking') === 'allow'
            ? null
            : this._parking.assigned_space(),
    );
    public readonly levels = this._parking.levels;
    /** Available parking spaces on the selected floor */
    public readonly spaces = computed(() => {
        const level_id = this.level_id();
        return this._form
            .available_resources()
            .filter((space) => !level_id || space.zone?.id === level_id);
    });
    public readonly saving = computed(() => this.link.state() === 'saving');
    public readonly loading = computed(
        () => !!this._form.loading() || this._outlook.loading(),
    );

    private readonly _window = computed(() => {
        const event = this._outlook.event();
        return event ? bookingWindow(event, this.link.resource) : null;
    });
    public readonly window_error = computed(
        () => this._window()?.reason || '',
    );
    public readonly all_day_unknown = computed(
        () => this._outlook.event()?.all_day === null,
    );
    public readonly period = computed(() => {
        const event = this._outlook.event();
        if (!event) return '';
        return event.all_day
            ? 'all day'
            : formatEventPeriod(event).split(' · ').pop();
    });

    constructor() {
        this._form.newForm('parking');
        this._form.setOptions({
            type: 'parking',
            features: [],
            zone_id: undefined,
        });
        // Load the linked booking again when a pinned pane moves to a
        // different Outlook item.
        effect(() => {
            this._outlook.item_version();
            untracked(() => this.link.load());
        });
        // Apply the event time to the space search. Runs again after a save
        // because saving replaces the booking form. A parking request needs
        // no availability.
        effect(() => {
            const result = this._window();
            const mode = this.mode();
            this.link.state();
            if (!result?.window || mode !== 'space') return;
            const { date, duration, all_day } = result.window;
            untracked(() => {
                this._form.model.update((m) => ({
                    ...m,
                    date,
                    duration,
                    all_day,
                }));
                this._form.listAvailableResources();
            });
        });
    }

    public async addSpace(space: BookingAsset) {
        this.adding.set(space.id);
        await this.link.add(space, this._fields());
        this.adding.set('');
    }

    public async requestParking() {
        const building = this._org.building;
        await this.link.add(parkingRequestAsset(), {
            ...this._fields(),
            description: 'Parking request',
            location: building?.display_name || building?.name || '',
        });
    }

    private _fields(): BookingLinkFields {
        return { plate_number: this.plate_number().trim() };
    }
}
