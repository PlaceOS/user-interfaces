import { CommonModule } from '@angular/common';
import { Component, computed, inject, resource } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import {
    OrganisationService,
    SETTING_KEYS,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
    LevelPipe,
    TranslatePipe,
} from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { ExploreSpacesService } from '@placeos/explore';

export interface FavoriteEntry {
    id: string;
    name: string;
    type: 'room' | 'desk' | 'locker' | 'parking';
    zones: string[];
    images?: string[];
    capacity?: number;
}

@Component({
    selector: 'landing-favourites-new',
    template: `
        <div
            class="flex flex-col rounded-lg border border-base-300 bg-base-100 p-4"
        >
            <div class="mb-2">
                <h3 class="text-lg font-medium">
                    {{ 'COMMON.FAVOURITES' | translate }}
                </h3>
                <div class="text-sm">
                    {{
                        'APP.WORKPLACE.FAVOURITES_COUNT'
                            | translate
                                : { count: favourites().length }
                                : favourites().length
                    }}
                </div>
            </div>
            @if (favourites().length) {
                <div
                    class="grid min-h-64 w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
                >
                    @for (item of favourites(); track item.id) {
                        <div
                            class="relative flex h-[8.5rem] flex-col space-y-2 rounded border border-base-300 bg-base-100 p-2"
                        >
                            <div class="flex space-x-2">
                                <div
                                    class="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded bg-base-300"
                                >
                                    @if (item.images?.length) {
                                        <img
                                            auth
                                            class="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                                            [source]="item.images[0]"
                                        />
                                    } @else {
                                        <img
                                            class="m-auto"
                                            [src]="
                                                'assets/icons/' +
                                                item.type +
                                                '-placeholder.svg'
                                            "
                                        />
                                    }
                                </div>
                                <div
                                    class="flex flex-1 flex-col justify-center space-y-1 leading-tight"
                                >
                                    <div class="w-full truncate pr-8">
                                        {{ item.name }}
                                    </div>
                                    <div
                                        class="flex items-center space-x-1 text-xs opacity-60"
                                    >
                                        <icon class="text-blue-500">place</icon>
                                        <div class="flex-1 truncate">
                                            @let lvl = item.zones | level;
                                            {{ lvl?.display_name || lvl?.name }}
                                        </div>
                                    </div>
                                    @if (item.capacity) {
                                        <div
                                            class="flex items-center space-x-1 truncate text-xs opacity-60"
                                        >
                                            <icon class="text-blue-500">
                                                people
                                            </icon>
                                            <div>
                                                {{
                                                    'APP.WORKPLACE.CAPACITY'
                                                        | translate
                                                            : {
                                                                  count: item.capacity,
                                                              }
                                                }}
                                            </div>
                                        </div>
                                    }
                                </div>
                                <button
                                    icon
                                    matRipple
                                    name="remove-favourite"
                                    class="absolute right-1 top-1"
                                    [matTooltip]="
                                        'APP.WORKPLACE.FAVOURITES_REMOVE'
                                            | translate
                                    "
                                    (click)="removeFavourite(item)"
                                >
                                    <icon class="text-error">delete</icon>
                                </button>
                            </div>
                            <button
                                btn
                                matRipple
                                name="book-favourite"
                                class="inverse w-full"
                                (click)="bookResource(item)"
                            >
                                {{ 'COMMON.BOOK' | translate }}
                            </button>
                        </div>
                    }
                </div>
            } @else {
                <div
                    class="flex min-h-64 w-full flex-1 flex-col items-center justify-center space-y-2 rounded-xl bg-base-200 p-8"
                >
                    <img src="assets/icons/no-favourites.svg" />
                    <p class="text-center text-sm opacity-60">
                        {{ 'APP.WORKPLACE.FAVOURITES_EMPTY' | translate }}
                    </p>
                </div>
            }
        </div>
    `,
    providers: [ExploreSpacesService],
    imports: [
        CommonModule,
        IconComponent,
        TranslatePipe,
        LevelPipe,
        MatRippleModule,
        MatTooltipModule,
        AuthenticatedImageDirective,
    ],
})
export class LandingFavouritesNewComponent {
    private _explore = inject(ExploreSpacesService);
    private _event_form = inject(EventFormService);
    private _booking_form = inject(BookingFormService);
    private _router = inject(Router);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    // Favorite IDs
    public readonly fav_space_ids = settingSignal<string[]>(
        SETTING_KEYS.FAVORITE_ROOMS,
        [],
        true,
    );
    public readonly fav_parking_ids = settingSignal<string[]>(
        SETTING_KEYS.FAVORITE_PARKING_SPACES,
        [],
        true,
    );
    public readonly fav_desk_ids = settingSignal<string[]>(
        SETTING_KEYS.FAVORITE_DESKS,
        [],
        true,
    );
    public readonly fav_locker_ids = settingSignal<string[]>(
        SETTING_KEYS.FAVORITE_LOCKERS,
        [],
        true,
    );

    // Full resource lists
    public readonly all_spaces = this._event_form.spaces;
    private readonly _desks_resource = resource({
        params: () => this._org.active_building()?.id || undefined,
        loader: () => this._booking_form.loadResourceList('desks'),
    });
    public readonly all_desks = computed(
        () => this._desks_resource.value() ?? ([] as any[]),
    );
    private readonly _parking_resource = resource({
        params: () => this._org.active_building()?.id || undefined,
        loader: () => this._booking_form.loadResourceList('parking-spaces'),
    });
    public readonly all_parking = computed(
        () => this._parking_resource.value() ?? ([] as any[]),
    );
    private readonly _lockers_resource = resource({
        params: () => this._org.active_building()?.id || undefined,
        loader: () => this._booking_form.loadResourceList('lockers'),
    });
    public readonly all_lockers = computed(
        () => this._lockers_resource.value() ?? ([] as any[]),
    );

    public readonly favourites = computed(() => {
        let list: FavoriteEntry[] = [];

        // Filter spaces by favorite IDs
        const fav_space_ids = this.fav_space_ids();
        const spaces = this.all_spaces().filter((s) =>
            fav_space_ids.includes(s.id),
        );
        list = list.concat(
            spaces.map((s) => ({
                type: 'room' as const,
                id: s.id,
                name: s.display_name || s.name,
                zones: s.zones || [],
                images: (s as any).images,
                capacity: s.capacity,
            })),
        );

        // Filter parking by favorite IDs
        const fav_parking_ids = this.fav_parking_ids();
        const parking = this.all_parking().filter((p) =>
            fav_parking_ids.includes(p.id),
        );
        list = list.concat(
            parking.map((p) => ({
                type: 'parking' as const,
                id: p.id,
                name: p.name,
                zones: (p as any).zones || [],
            })),
        );

        // Filter desks by favorite IDs
        const fav_desk_ids = this.fav_desk_ids();
        const desks = this.all_desks().filter((d) =>
            fav_desk_ids.includes(d.id),
        );
        list = list.concat(
            desks.map((d) => ({
                type: 'desk' as const,
                id: d.id,
                name: d.name,
                zones: [d.zone?.id],
            })),
        );

        // Filter lockers by favorite IDs
        const fav_locker_ids = this.fav_locker_ids();
        const lockers = this.all_lockers().filter((l) =>
            fav_locker_ids.includes(l.id),
        );
        list = list.concat(
            lockers.map((l) => ({
                type: 'locker' as const,
                id: l.id,
                name: l.name,
                zones: l.zones,
            })),
        );

        return list;
    });

    public removeFavourite(item: FavoriteEntry) {
        let fav_list: string[] = [];
        let key = '';
        const updated_list = (list: string[]) =>
            list.filter((id) => id !== item.id);

        switch (item.type) {
            case 'room':
                fav_list = this.fav_space_ids();
                key = SETTING_KEYS.FAVORITE_ROOMS;
                // Optimistically update UI
                this.fav_space_ids.set(updated_list(fav_list));
                break;
            case 'desk':
                fav_list = this.fav_desk_ids();
                key = SETTING_KEYS.FAVORITE_DESKS;
                // Optimistically update UI
                this.fav_desk_ids.set(updated_list(fav_list));
                break;
            case 'parking':
                fav_list = this.fav_parking_ids();
                key = SETTING_KEYS.FAVORITE_PARKING_SPACES;
                // Optimistically update UI
                this.fav_parking_ids.set(updated_list(fav_list));
                break;
            case 'locker':
                fav_list = this.fav_locker_ids();
                key = SETTING_KEYS.FAVORITE_LOCKERS;
                // Optimistically update UI
                this.fav_locker_ids.set(updated_list(fav_list));
                break;
        }

        // Save to settings in background
        this._settings.saveUserSetting(key, updated_list(fav_list));
    }

    public bookResource(item: FavoriteEntry) {
        const use_new_features = this._settings.get('app.new_features');

        switch (item.type) {
            case 'room':
                // Find the full space object
                const space = this.all_spaces().find((s) => s.id === item.id);
                if (!space) return;

                this._event_form.newForm();
                if (use_new_features) {
                    this._router.navigate(['/book', 'meeting']);
                } else {
                    this._router.navigate(['/book', 'spaces']);
                }
                setTimeout(() => {
                    this._event_form.model.update((m) => ({
                        ...m,
                        resources: [space],
                    }));
                }, 300);
                break;

            case 'desk':
                this._router.navigate(
                    ['/book', use_new_features ? 'desk' : 'desks'],
                    { queryParams: { asset_id: item.id } },
                );
                break;

            case 'parking':
                const parking = this.all_parking().find(
                    (p) => p.id === item.id,
                );
                if (!parking) return;

                // Initialize form with parking before navigating
                this._booking_form.newForm('parking');
                this._booking_form.setOptions({ type: 'parking' });
                this._booking_form.model.update((m) => ({
                    ...m,
                    resources: [parking],
                    asset_id: parking.id,
                    booking_type: 'parking',
                }));

                // Navigate after setting the resource
                this._router.navigate(['/book', 'parking']);
                break;

            case 'locker':
                const locker = this.all_lockers().find((l) => l.id === item.id);
                if (!locker) return;

                // Initialize form with locker before navigating
                this._booking_form.newForm('locker');
                this._booking_form.setOptions({ type: 'locker' });
                this._booking_form.model.update((m) => ({
                    ...m,
                    resources: [locker],
                    asset_id: locker.id,
                    booking_type: 'locker',
                }));

                // Navigate after setting the resource
                this._router.navigate(['/book', 'locker']);
                break;
        }
    }
}
