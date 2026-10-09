import { NgTemplateOutlet } from '@angular/common';
import {
    Component,
    computed,
    effect,
    inject,
    signal,
    untracked,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    Building,
    errorMessage,
    notifyError,
    OrganisationService,
    settingSignal,
    SettingsService,
    Space,
} from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
} from '@placeos/components';
import { EventFormService, SpaceMapComponent } from '@placeos/events';
import { RoomState, roomStateFromResponse, roomWindow } from './outlook-event';
import { OutlookEventService } from './outlook-event.service';
import { ResultView, ViewToggleComponent } from './view-toggle.component';

const CAPACITY_OPTIONS = [0, 2, 4, 6, 8, 10, 12, 20];

const ROOM_STATE_LABELS: Record<RoomState, string> = {
    selected: 'Added. Outlook requests the room when you send.',
    pending: 'Request pending',
    confirmed: 'Confirmed',
    declined: 'Declined. Choose another room.',
};

/**
 * Room search for the Outlook event. Uses the event interval from Outlook and
 * adds the chosen room to the event as an Exchange room resource.
 */
@Component({
    selector: 'room-search',
    template: `
        <div class="flex flex-col gap-3 p-3">
            @if (event_rooms().length) {
                <section class="space-y-2" aria-label="Rooms on this event">
                    <h3 class="text-sm font-medium">On this event</h3>
                    @for (item of event_rooms(); track item.email) {
                        <article
                            class="border-base-300 flex items-center gap-2 rounded-lg border p-3"
                        >
                            <div class="min-w-0 flex-1">
                                <div class="truncate font-medium">
                                    {{
                                        item.space?.display_name ||
                                            item.space?.name ||
                                            item.email
                                    }}
                                </div>
                                <div
                                    class="text-sm"
                                    [class.text-success]="
                                        item.state === 'confirmed'
                                    "
                                    [class.text-warning]="
                                        item.state === 'pending'
                                    "
                                    [class.text-error]="
                                        item.state === 'declined'
                                    "
                                >
                                    {{ state_labels[item.state] }}
                                </div>
                            </div>
                            <button
                                btn
                                matRipple
                                class="inverse h-9 min-h-0 text-sm"
                                [disabled]="!!busy()"
                                (click)="removeRoom(item.email)"
                            >
                                Remove
                            </button>
                        </article>
                    }
                </section>
            }
            @if (view() === 'list') {
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <icon matPrefix class="px-2">search</icon>
                    <input
                        matInput
                        placeholder="Search rooms"
                        aria-label="Search rooms"
                        [(ngModel)]="search"
                    />
                </mat-form-field>
            }
            @if (buildings().length > 1) {
                <label class="flex flex-col text-sm">
                    Building
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select
                            [value]="building()"
                            (selectionChange)="setBuilding($event.value)"
                        >
                            @for (bld of buildings(); track bld.id) {
                                <mat-option [value]="bld">
                                    {{ bld.display_name || bld.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </label>
            }
            <div class="flex gap-2">
                @if (view() === 'list') {
                    <label class="flex min-w-0 flex-1 flex-col text-sm">
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
                <label class="flex min-w-0 flex-1 flex-col text-sm">
                    Minimum capacity
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select [(value)]="capacity">
                            @for (count of capacity_options; track count) {
                                <mat-option [value]="count">
                                    {{ count ? count + ' people' : 'Any' }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </label>
            </div>
            <div class="flex items-center justify-between">
                <mat-checkbox [(ngModel)]="show_favourites">
                    Favourites only
                </mat-checkbox>
                @if (features().length) {
                    <button
                        matRipple
                        class="text-secondary flex items-center text-sm"
                        [attr.aria-expanded]="show_features()"
                        (click)="show_features.set(!show_features())"
                    >
                        Facilities ({{ selected_features().length }})
                        <icon>{{
                            show_features() ? 'expand_less' : 'expand_more'
                        }}</icon>
                    </button>
                }
            </div>
            @if (show_features()) {
                <div class="bg-base-200 flex flex-wrap gap-x-3 rounded-lg p-2">
                    @for (feature of features(); track feature) {
                        <mat-checkbox
                            [ngModel]="selected_features().includes(feature)"
                            (ngModelChange)="toggleFeature(feature)"
                        >
                            {{ feature }}
                        </mat-checkbox>
                    }
                </div>
            }
            @if (selected_features().length) {
                <div
                    class="flex flex-wrap gap-2"
                    aria-label="Selected facilities"
                >
                    @for (feature of selected_features(); track feature) {
                        <button
                            matRipple
                            class="bg-base-200 flex items-center gap-1 rounded-full py-1 pr-1 pl-3 text-sm"
                            [attr.aria-label]="'Remove filter ' + feature"
                            (click)="toggleFeature(feature)"
                        >
                            {{ feature }}
                            <icon>close</icon>
                        </button>
                    }
                </div>
            }
            <div class="flex items-center justify-between gap-2">
                <div>
                    <h3 class="font-medium">
                        @if (loading()) {
                            Checking availability...
                        } @else {
                            {{ results().length }} available
                            {{ results().length === 1 ? 'room' : 'rooms' }}
                        }
                    </h3>
                    @if (view() === 'list') {
                        <span class="text-xs opacity-60">
                            Smallest fit first
                        </span>
                    }
                </div>
                <view-toggle [(view)]="view" />
            </div>
            @if (window_error()) {
                <p class="text-error text-sm">{{ window_error() }}</p>
            }
            @if (view() === 'map') {
                <space-map
                    class="border-base-300 h-[26rem] overflow-hidden rounded-lg border"
                    [active]="selected_space()?.id"
                    [selected]="event_room_ids()"
                    [available]="map_spaces()"
                    (onSelect)="selected_space.set($event)"
                />
                @if (selected_space(); as space) {
                    <ng-container
                        [ngTemplateOutlet]="room_card"
                        [ngTemplateOutletContext]="{ $implicit: space }"
                    />
                } @else {
                    <p class="text-center text-sm opacity-60">
                        Select a room on the map.
                    </p>
                }
            } @else {
                @for (space of results(); track space.id) {
                    <ng-container
                        [ngTemplateOutlet]="room_card"
                        [ngTemplateOutletContext]="{ $implicit: space }"
                    />
                } @empty {
                    @if (!loading() && !window_error()) {
                        <p class="py-6 text-center text-sm opacity-60">
                            No rooms match these filters for this time.
                        </p>
                    }
                }
            }
        </div>
        <ng-template #room_card let-space>
            <article class="border-base-300 rounded-lg border p-3">
                <div class="flex items-start gap-2">
                    @if (show_images() && space.images?.length) {
                        <img
                            auth
                            [source]="space.images[0]"
                            alt=""
                            class="h-14 w-20 rounded object-cover"
                        />
                    }
                    <div class="min-w-0 flex-1">
                        <h4 class="truncate font-medium">
                            {{ space.display_name || space.name }}
                        </h4>
                        <p class="text-sm opacity-70">
                            {{ roomDetails(space) }}
                        </p>
                    </div>
                    <button
                        icon
                        matRipple
                        [attr.aria-label]="
                            (favourites().includes(space.id)
                                ? 'Remove from favourites '
                                : 'Add to favourites ') +
                            (space.display_name || space.name)
                        "
                        (click)="toggleFavourite(space)"
                    >
                        <icon
                            [class.text-error]="favourites().includes(space.id)"
                            [class.opacity-40]="
                                !favourites().includes(space.id)
                            "
                            >favorite</icon
                        >
                    </button>
                </div>
                @if (space.features?.length) {
                    <div class="mt-2 flex flex-wrap gap-1">
                        @for (feature of space.features; track feature) {
                            <span
                                class="bg-base-200 rounded px-2 py-0.5 text-xs"
                            >
                                {{ feature }}
                            </span>
                        }
                    </div>
                }
                <div class="mt-2 flex items-center justify-between">
                    <span class="text-success flex items-center gap-1 text-sm">
                        <icon>check</icon> Available
                    </span>
                    @if (isOnEvent(space)) {
                        <span class="text-sm opacity-60">On this event</span>
                    } @else {
                        <button
                            btn
                            matRipple
                            class="inverse h-9 min-h-0 text-sm"
                            [disabled]="!!busy()"
                            (click)="addRoom(space)"
                        >
                            {{
                                busy() === space.email
                                    ? 'Adding...'
                                    : 'Add to meeting'
                            }}
                        </button>
                    }
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
        MatInputModule,
        MatRippleModule,
        MatSelectModule,
        NgTemplateOutlet,
        IconComponent,
        AuthenticatedImageDirective,
        SpaceMapComponent,
        ViewToggleComponent,
    ],
})
export class RoomSearchComponent {
    private _events = inject(EventFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _outlook = inject(OutlookEventService);

    public readonly capacity_options = CAPACITY_OPTIONS;
    public readonly state_labels = ROOM_STATE_LABELS;

    private readonly _map = viewChild(SpaceMapComponent);

    public readonly view = signal<ResultView>('list');
    /** Room chosen on the map */
    public readonly selected_space = signal<Space | null>(null);
    public readonly search = signal('');
    public readonly level_id = signal('');
    public readonly capacity = signal(0);
    public readonly show_favourites = signal(false);
    public readonly show_features = signal(false);
    public readonly selected_features = signal<string[]>([]);
    /** Email of the room that is being added or removed */
    public readonly busy = signal('');

    public readonly buildings = this._org.building_list;
    public readonly building = this._org.active_building;
    public readonly levels = this._org.active_levels;
    public readonly features = this._events.features;
    public readonly show_images = settingSignal(
        'space_display.show_images',
        false,
    );
    private readonly _favourites = settingSignal<string[]>(
        'favourite_spaces',
        [],
        true,
    );
    public readonly favourites = computed(() => this._favourites() || []);

    private readonly _window = computed(() => {
        const event = this._outlook.event();
        return event ? roomWindow(event) : null;
    });
    public readonly window_error = computed(() => {
        const result = this._window();
        return result?.reason || '';
    });
    public readonly loading = computed(
        () => !!this._events.loading() || this._outlook.loading(),
    );

    /** Rooms already on the Outlook event, with their booking state */
    public readonly event_rooms = computed(() => {
        const responses = this._outlook.room_responses();
        const spaces = this._events.spaces();
        return (this._outlook.event()?.room_emails || []).map((email) => ({
            email,
            space: spaces.find((_) => _.email?.toLowerCase() === email),
            state: roomStateFromResponse(responses[email]),
        }));
    });

    /** IDs of the known rooms on the event, highlighted on the map */
    public readonly event_room_ids = computed(() =>
        this.event_rooms()
            .map((_) => _.space?.id)
            .filter((_) => !!_),
    );

    /**
     * Available rooms that match the capacity, favourite and facility
     * filters. The filters apply here, not in the event form service, so a
     * filter change does not start a new availability request. The map shows
     * this list and uses its own floor control.
     */
    public readonly map_spaces = computed(() => {
        const capacity = this.capacity();
        const favourites = this.show_favourites() ? this.favourites() : null;
        const features = this.selected_features();
        return this._events
            .available_spaces()
            .filter(
                (space) =>
                    (!capacity ||
                        space.capacity < 0 ||
                        space.capacity >= capacity) &&
                    (!favourites || favourites.includes(space.id)) &&
                    features.every((_) => space.features.includes(_)),
            );
    });

    /** Rooms for the list view: also filtered by floor and search, smallest first */
    public readonly results = computed(() => {
        const query = this.search().trim().toLowerCase();
        const on_event = this._outlook.event()?.room_emails || [];
        const level_id = this.level_id();
        return this.map_spaces()
            .filter(
                (space) =>
                    !on_event.includes(space.email?.toLowerCase()) &&
                    (!level_id || space.zones.includes(level_id)) &&
                    (!query ||
                        `${space.display_name} ${space.name}`
                            .toLowerCase()
                            .includes(query)),
            )
            .sort((a, b) => a.capacity - b.capacity);
    });

    constructor() {
        this._events.listAvailableSpaces();
        // Keep the search options on the Outlook event time. The event form
        // can reset the options when its own form changes, so compare and
        // correct instead of setting them once.
        effect(() => {
            const result = this._window();
            const options = this._events.options();
            if (!result?.window) return;
            const { date, duration } = result.window;
            const zones: string[] = [];
            if (
                options.date !== date ||
                options.duration !== duration ||
                options.all_day ||
                `${options.zones}` !== `${zones}`
            ) {
                this._events.setOptions({
                    date,
                    duration,
                    all_day: false,
                    zones,
                });
            }
        });
        // The pane filters rooms itself. Clear filters left on the shared
        // event form service by other views.
        this._events.setFilters({
            capacity: -1,
            show_fav: false,
            features: [],
        });
        // Open the map on the floor selected in the list view.
        effect(() => {
            const map = this._map();
            const level_id = untracked(this.level_id);
            if (!map || !level_id) return;
            const level = this._org.levelWithID([level_id]);
            if (level) untracked(() => map.level.set(level));
        });
    }

    /** Floor and capacity of a room, for example `Level 2 · 8 people` */
    public roomDetails(space: Space) {
        const level = space.level?.id
            ? space.level
            : this._org.levelWithID(space.zones);
        const people = `${space.capacity} ${space.capacity === 1 ? 'person' : 'people'}`;
        return [level?.display_name || level?.name, people]
            .filter((_) => !!_)
            .join(' · ');
    }

    public setBuilding(building: Building) {
        this.level_id.set('');
        this._org.building = building;
    }

    public toggleFeature(feature: string) {
        this.selected_features.update((list) =>
            list.includes(feature)
                ? list.filter((_) => _ !== feature)
                : [...list, feature],
        );
    }

    public toggleFavourite(space: Space) {
        const list = this.favourites();
        const next = list.includes(space.id)
            ? list.filter((_) => _ !== space.id)
            : [...list, space.id];
        this._favourites.set(next);
        this._settings.saveUserSetting('favourite_spaces', next);
    }

    public isOnEvent(space: Space) {
        return (this._outlook.event()?.room_emails || []).includes(
            space.email?.toLowerCase(),
        );
    }

    public async addRoom(space: Space) {
        await this._roomAction(space.email, () =>
            this._outlook.addRoom(space.email),
        );
        if (this.isOnEvent(space)) this.selected_space.set(null);
    }

    public async removeRoom(email: string) {
        await this._roomAction(email, () => this._outlook.removeRoom(email));
    }

    private async _roomAction(email: string, action: () => Promise<void>) {
        this.busy.set(email);
        try {
            await action();
        } catch (error) {
            notifyError(
                errorMessage(error) || 'Outlook could not update the room.',
            );
        } finally {
            this.busy.set('');
        }
    }
}
