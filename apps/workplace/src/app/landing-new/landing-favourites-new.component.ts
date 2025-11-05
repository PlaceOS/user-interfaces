import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import {
    FAV_DESK_KEY,
    FAV_LOCKER_KEY,
    FAV_PARKING_KEY,
    LockerBank,
    ParkingSpace,
} from '@placeos/bookings';
import { Desk, settingSignal, Space } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { ExploreSpacesService } from '@placeos/explore';

export interface FavoriteEntry {
    id: string;
    name: string;
    type: 'space' | 'desk' | 'locker' | 'parking';
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
                <h3 class="text-lg font-medium">Favourites</h3>
                <div class="text-sm">{{ favourites().length }} favourites</div>
            </div>
            @if (favourites().length) {
                <div
                    class="grid min-h-64 w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
                >
                    @for (item of favourites(); track item.id) {
                        <div class="rounded border border-base-300 p-2">
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
                                class="flex h-16 w-1/2 flex-1 flex-col justify-center space-y-1"
                            >
                                <div class="w-full truncate pr-12">
                                    {{ item.name }}
                                </div>
                                <div
                                    class="flex items-center space-x-1 text-xs opacity-60"
                                >
                                    <icon class="text-blue-500">place</icon>
                                    <div class="w-1/2 flex-1 truncate">
                                        @let lvl = item | level;
                                        {{ lvl?.display_name || lvl?.name }}
                                    </div>
                                </div>
                                @if (item.capacity) {
                                    <div
                                        class="flex items-center space-x-2 truncate text-xs opacity-60"
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
    imports: [CommonModule, IconComponent, TranslatePipe],
})
export class LandingFavouritesNewComponent {
    private _explore = inject(ExploreSpacesService);

    public readonly spaces = settingSignal<Space[]>(
        'favourite_spaces',
        [],
        true,
    );
    public readonly parking = settingSignal<ParkingSpace[]>(
        FAV_PARKING_KEY,
        [],
        true,
    );
    public readonly desks = settingSignal<Desk[]>(FAV_DESK_KEY, [], true);
    public readonly lockers = settingSignal<LockerBank[]>(
        FAV_LOCKER_KEY,
        [],
        true,
    );

    public readonly favourites = computed(() => {
        let list: FavoriteEntry[] = [];
        list = list.concat(
            this.spaces().map((s) => ({
                type: 'space' as const,
                id: s.id,
                name: s.display_name || s.name,
                zones: s.zones || [],
                images: (s as any).images,
                capacity: s.capacity,
            })),
        );
        list = list.concat(
            this.parking().map((p) => ({
                type: 'parking' as const,
                id: p.id,
                name: p.name,
                zones: (p as any).zones || [],
            })),
        );
        list = list.concat(
            this.desks().map((d) => ({
                type: 'desk' as const,
                id: d.id,
                name: d.name,
                zones: [d.zone?.id],
            })),
        );
        list = list.concat(
            this.lockers().map((l) => ({
                type: 'locker' as const,
                id: l.id,
                name: l.name,
                zones: l.zones,
            })),
        );
        return list;
    });

    public book = (s: any) => this._explore.bookSpace(s, true);
}
