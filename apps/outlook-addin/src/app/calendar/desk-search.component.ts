import { NgTemplateOutlet } from '@angular/common';
import {
    Component,
    computed,
    effect,
    inject,
    signal,
    untracked,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
    BookingAsset,
    BookingFormService,
    DeskMapComponent,
} from '@placeos/bookings';
import { OrganisationService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { DeskLinkService } from './desk-link.service';
import { deskWindow, formatEventPeriod } from './outlook-event';
import { OutlookEventService } from './outlook-event.service';
import { ResultView, ViewToggleComponent } from './view-toggle.component';

/** Format an hour of the day, for example `8` as `08:00`. */
function hourLabel(hour: number) {
    const whole = Math.floor(hour);
    const minutes = Math.round((hour - whole) * 60);
    return `${`${whole}`.padStart(2, '0')}:${`${minutes}`.padStart(2, '0')}`;
}

/**
 * Desk search for the Outlook event. Uses the event interval, or the whole
 * day when Outlook reports "All day", and links the reserved desk to the
 * event.
 */
@Component({
    selector: 'desk-search',
    template: `
        <div class="flex flex-col gap-3 p-3">
            @if (link.booking(); as booking) {
                <section
                    class="border-base-300 space-y-2 rounded-lg border p-3"
                    aria-label="Desk on this event"
                >
                    <div class="flex items-start gap-2">
                        <div class="min-w-0 flex-1">
                            <div class="text-xs opacity-60">On this event</div>
                            <h3 class="truncate font-medium">
                                {{ booking.asset_name || booking.asset_id }}
                            </h3>
                            <div
                                class="text-sm"
                                [class.text-success]="booking.approved"
                                [class.text-warning]="!booking.approved"
                            >
                                {{
                                    booking.approved
                                        ? 'Reserved'
                                        : 'Reserved. Approval pending.'
                                }}
                            </div>
                        </div>
                        <button
                            btn
                            matRipple
                            class="inverse h-9 min-h-0 text-sm"
                            [disabled]="saving()"
                            (click)="link.remove()"
                        >
                            Remove
                        </button>
                    </div>
                    @if (link.out_of_sync()) {
                        <div
                            class="bg-warning-light flex items-center gap-2 rounded p-2 text-sm"
                        >
                            <icon class="text-warning">warning</icon>
                            <span class="flex-1">
                                The event time changed. The desk is still booked
                                for the old time.
                            </span>
                            <button
                                btn
                                matRipple
                                class="h-8 min-h-0 text-sm"
                                [disabled]="saving()"
                                (click)="link.update()"
                            >
                                Update
                            </button>
                        </div>
                    }
                </section>
            }
            @if (link.error()) {
                <div
                    role="alert"
                    class="text-error flex items-start gap-2 text-sm"
                >
                    <icon>error</icon>
                    <span class="flex-1">{{ link.error() }}</span>
                    <button
                        icon
                        matRipple
                        aria-label="Close message"
                        (click)="link.clearError()"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
            @if (window_error()) {
                <p class="bg-base-200 rounded p-3 text-sm">
                    {{ window_error() }}
                </p>
            } @else {
                @if (all_day_unknown()) {
                    <p class="bg-base-200 rounded p-2 text-xs">
                        This Outlook client does not report the All day setting.
                        PlaceOS uses the event times shown above.
                    </p>
                }
                @if (all_day_policy(); as policy) {
                    <p class="bg-base-200 rounded p-2 text-xs">
                        All-day desk bookings at this site are from
                        {{ policy }}.
                    </p>
                }
                @if (view() === 'list') {
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
                @if (features().length) {
                    <div
                        class="flex flex-wrap gap-x-3"
                        aria-label="Desk features"
                    >
                        @for (feature of features(); track feature) {
                            <mat-checkbox
                                [ngModel]="
                                    selected_features().includes(feature)
                                "
                                (ngModelChange)="toggleFeature(feature)"
                            >
                                {{ feature }}
                            </mat-checkbox>
                        }
                    </div>
                }
                <div class="flex items-center justify-between gap-2">
                    <h3 class="font-medium">
                        @if (loading()) {
                            Checking availability...
                        } @else {
                            {{ desks().length }} available
                            {{ desks().length === 1 ? 'desk' : 'desks' }}
                        }
                    </h3>
                    <view-toggle [(view)]="view" />
                </div>
                @if (view() === 'map') {
                    <desk-map
                        class="border-base-300 h-[26rem] overflow-hidden rounded-lg border"
                        [active]="
                            map_selection()?.id || link.booking()?.asset_id
                        "
                        [available]="map_desks()"
                        (onSelect)="selected_desk.set($event)"
                    />
                    @if (map_selection(); as desk) {
                        <ng-container
                            [ngTemplateOutlet]="desk_card"
                            [ngTemplateOutletContext]="{ $implicit: desk }"
                        />
                    } @else {
                        <p class="text-center text-sm opacity-60">
                            Select a desk on the map.
                        </p>
                    }
                } @else {
                    @for (desk of desks(); track desk.id) {
                        <ng-container
                            [ngTemplateOutlet]="desk_card"
                            [ngTemplateOutletContext]="{ $implicit: desk }"
                        />
                    } @empty {
                        @if (!loading()) {
                            <p class="py-6 text-center text-sm opacity-60">
                                No desks match these filters for this time.
                            </p>
                        }
                    }
                }
                @if (!link.booking()) {
                    <p class="text-xs opacity-60">
                        Adding a desk reserves it now and saves this event to
                        your calendar. Outlook does not send invitations for a
                        new event until you select Send.
                    </p>
                }
            }
        </div>
        <ng-template #desk_card let-desk>
            <article class="border-base-300 rounded-lg border p-3">
                <h4 class="truncate font-medium">
                    {{ desk.display_name || desk.name || desk.id }}
                </h4>
                <p class="text-sm opacity-70">
                    {{
                        desk.zone?.display_name ||
                            desk.zone?.name ||
                            desk.level?.display_name ||
                            desk.level?.name
                    }}
                    @if (desk.features?.length) {
                        · {{ desk.features.join(' · ') }}
                    }
                </p>
                <div class="mt-2 flex items-center justify-between">
                    <span class="text-success flex items-center gap-1 text-sm">
                        <icon>check</icon> Available {{ period() }}
                    </span>
                    <button
                        btn
                        matRipple
                        class="inverse h-9 min-h-0 text-sm"
                        [disabled]="saving() || !!link.booking()"
                        (click)="addDesk(desk)"
                    >
                        {{
                            saving() && adding() === desk.id
                                ? 'Reserving...'
                                : 'Add to event'
                        }}
                    </button>
                </div>
            </article>
        </ng-template>
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
        MatCheckboxModule,
        MatFormFieldModule,
        MatRippleModule,
        MatSelectModule,
        NgTemplateOutlet,
        IconComponent,
        DeskMapComponent,
        ViewToggleComponent,
    ],
})
export class DeskSearchComponent {
    private _form = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _outlook = inject(OutlookEventService);
    public readonly link = inject(DeskLinkService);

    public readonly view = signal<ResultView>('list');
    /** Desk chosen on the map */
    public readonly selected_desk = signal<BookingAsset | null>(null);
    public readonly level_id = signal('');
    public readonly selected_features = signal<string[]>([]);
    /** ID of the desk that is being reserved */
    public readonly adding = signal('');

    public readonly levels = this._org.active_levels;
    public readonly features = this._form.features;
    /**
     * Available desks that match the feature filters. The filters apply here,
     * not in the booking form service, so a filter change does not start a
     * new availability request. The map shows this list and uses its own
     * floor control.
     */
    public readonly map_desks = computed(() => {
        const features = this.selected_features();
        return this._form
            .available_resources()
            .filter((desk) =>
                features.every((_) => desk.features?.includes(_)),
            );
    });

    /**
     * Desk chosen on the map, while it is still in the available list. A
     * change to the event time or the filters can remove it.
     */
    public readonly map_selection = computed(() => {
        const id = this.selected_desk()?.id;
        return id ? this.map_desks().find((_) => _.id === id) || null : null;
    });

    /** Desks for the list view: also filtered by floor */
    public readonly desks = computed(() => {
        const level_id = this.level_id();
        return this.map_desks().filter(
            (desk) =>
                !level_id ||
                desk.zone?.id === level_id ||
                desk.zone?.parent_id === level_id,
        );
    });
    public readonly saving = computed(() => this.link.state() === 'saving');
    public readonly loading = computed(
        () => !!this._form.loading() || this._outlook.loading(),
    );

    private readonly _window = computed(() => {
        const event = this._outlook.event();
        return event ? deskWindow(event) : null;
    });
    public readonly window_error = computed(() => {
        const result = this._window();
        return result?.reason || '';
    });
    public readonly all_day_unknown = computed(
        () => this._outlook.event()?.all_day === null,
    );
    /** Site all-day period, shown so the policy outcome is explicit */
    public readonly all_day_policy = computed(() => {
        if (!this._outlook.event()?.all_day) return '';
        const period = this._form.setting('all_day_period') as {
            start?: number;
            end?: number;
        } | null;
        return period && period.start != null && period.end != null
            ? `${hourLabel(period.start)} to ${hourLabel(period.end)}`
            : '';
    });
    public readonly period = computed(() => {
        const event = this._outlook.event();
        if (!event) return '';
        return event.all_day
            ? 'all day'
            : formatEventPeriod(event).split(' · ').pop();
    });

    constructor() {
        this._form.newForm('desk');
        // Load the linked desk again when a pinned pane moves to a different
        // Outlook item.
        effect(() => {
            this._outlook.item_version();
            untracked(() => this.link.load());
        });
        // Apply the event time to the desk search. Runs again after a save
        // because saving replaces the booking form.
        effect(() => {
            const result = this._window();
            this.link.state();
            if (!result?.window) return;
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
        this._form.setOptions({ type: 'desk', features: [] });
        // The desk map narrows the service to its floor. A different floor in
        // the list view needs the whole building again.
        effect(() => {
            const level_id = this.level_id();
            untracked(() => {
                const { zone_id } = this._form.options();
                if (zone_id && zone_id !== level_id) {
                    this._form.setOptions({ zone_id: undefined });
                }
            });
        });
    }

    /** Follow the floor the user picks on the desk map */
    private readonly _sync_level = effect(() => {
        const zone_id = this._form.options().zone_id || '';
        untracked(() => {
            if (zone_id && zone_id !== this.level_id()) {
                this.level_id.set(zone_id);
            }
        });
    });

    public toggleFeature(feature: string) {
        this.selected_features.update((list) =>
            list.includes(feature)
                ? list.filter((_) => _ !== feature)
                : [...list, feature],
        );
    }

    public async addDesk(desk: BookingAsset) {
        this.adding.set(desk.id);
        await this.link.add(desk);
        this.adding.set('');
        if (this.link.booking()) this.selected_desk.set(null);
    }
}
