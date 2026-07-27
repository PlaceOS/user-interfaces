import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { BookingFormService, FAV_PARKING_KEY } from '@placeos/bookings';
import {
    AsyncHandler,
    BookingType,
    OrganisationService,
    SettingsService,
    Space,
} from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { showMetadata } from '@placeos/ts-client';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { FAV_DESK_KEY, FAV_LOCKER_KEY } from '@placeos/bookings';
import {
    AuthenticatedImageDirective,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { SpacePipe } from '@placeos/events';

const EMPTY = [];

@Component({
    selector: 'landing-favourites',
    template: `
        <div
            class="bg-base-200 mx-2 flex items-center justify-between rounded-sm p-2 text-sm"
        >
            <h2>
                {{
                    'APP.WORKPLACE.FAVOURITES_COUNT'
                        | translate
                            : {
                                  count: spaces().length + assets().length,
                              }
                }}
            </h2>
        </div>
        <div
            class="divide-base-200 h-1/2 w-full flex-1 space-y-2 divide-y overflow-auto pt-4"
        >
            @if (spaces().length || assets().length) {
                @for (space of spaces(); track space.id || $index) {
                    @if (space?.id) {
                        <div
                            class="relative mx-2 flex flex-col items-center space-y-2 pt-2"
                            item
                        >
                            <div
                                class="relative flex w-full items-center space-x-2"
                            >
                                <div
                                    class="bg-base-300 relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-sm"
                                >
                                    @if (space.images.length) {
                                        <img
                                            auth
                                            class="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                                            [source]="space.images[0]"
                                        />
                                    } @else {
                                        <img
                                            class="m-auto"
                                            src="assets/icons/room-placeholder.svg"
                                        />
                                    }
                                </div>
                                <div
                                    class="flex h-16 w-1/2 flex-1 flex-col justify-center space-y-1"
                                >
                                    <div class="w-full truncate pr-12">
                                        {{ space.display_name || space.name }}
                                    </div>
                                    <div
                                        class="flex items-center space-x-1 text-xs opacity-60"
                                    >
                                        <icon class="text-blue-500">place</icon>
                                        <div class="w-1/2 flex-1 truncate">
                                            {{ level(space)?.display_name }}
                                        </div>
                                    </div>
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
                                                              count:
                                                                  space.capacity ||
                                                                  2,
                                                          }
                                            }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                btn
                                name="book-favourite"
                                matRipple
                                class="inverse w-full"
                                [disabled]="isClosed(space.id)"
                                (click)="newSpaceMeeting(space.id)"
                            >
                                {{ 'COMMON.BOOK' | translate }}
                            </button>
                            <button
                                icon
                                name="favourite-more"
                                [matMenuTriggerFor]="menu"
                                class="bg-base-200 absolute top-2 right-0 m-0! rounded-sm!"
                            >
                                <icon>more_horiz</icon>
                            </button>
                            <mat-menu #menu="matMenu" xPosition="before">
                                <!-- <button
                    mat-menu-item
                    class="flex items-center space-x-2"
                    >
                    <icon class="text-2xl">info</icon>
                    <div>{{ 'COMMON.VIEW_DETAILS' | translate }}</div>
                  </button> -->
                                <button
                                    name="landing-remove-favourite"
                                    mat-menu-item
                                    (click)="removeFavourite('space', space.id)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-error text-2xl"
                                            >delete</icon
                                        >
                                        <div>
                                            {{
                                                'APP.WORKPLACE.FAVOURITES_REMOVE'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            </mat-menu>
                        </div>
                    }
                }
                @for (item of assets(); track item) {
                    <div
                        class="relative mx-2 flex flex-col items-center space-y-2 pt-2"
                        item
                    >
                        <div
                            class="relative flex w-full items-center space-x-2"
                        >
                            <div
                                class="bg-base-300 relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-sm"
                            >
                                @if (item?.images?.length) {
                                    <img
                                        auth
                                        class="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                                        [source]="item?.images[0]"
                                    />
                                } @else {
                                    <img
                                        class="m-auto"
                                        [src]="
                                            'assets/icons/' +
                                            (item.type === 'desk'
                                                ? 'desk'
                                                : 'car') +
                                            '-placeholder.svg'
                                        "
                                    />
                                }
                            </div>
                            <div
                                class="flex h-16 w-1/2 flex-1 flex-col justify-center space-y-1"
                            >
                                <div class="truncate">
                                    {{
                                        item?.display_name ||
                                            item?.name ||
                                            item?.id
                                    }}
                                </div>
                                <div
                                    class="flex items-center space-x-1 text-xs opacity-60"
                                >
                                    <icon class="text-blue-500">place</icon>
                                    <div class="w-1/2 flex-1 truncate">
                                        {{ item?.zone?.display_name }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            btn
                            name="book-favourite"
                            matRipple
                            class="inverse w-full"
                            (click)="newBooking(item.type, item)"
                        >
                            {{ 'COMMON.BOOK' | translate }}
                        </button>
                        <button
                            icon
                            default
                            name="favourite-more"
                            [matMenuTriggerFor]="menu"
                            class="absolute top-2 right-0"
                        >
                            <icon>more_horiz</icon>
                        </button>
                        <mat-menu #menu="matMenu" xPosition="before">
                            <!-- <button
                  mat-menu-item
                  class="flex items-center space-x-2"
                  >
                  <div class="flex items-center space-x-2">
                    <icon class="text-2xl">info</icon>
                    <div>{{ 'COMMON.VIEW_DETAILS' | translate }}</div>
                  </div>
                </button> -->
                            <button
                                name="landing-remove-favourite"
                                mat-menu-item
                                (click)="removeFavourite(item.type, item.id)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-error text-2xl">
                                        delete
                                    </icon>
                                    <div class="pr-4">
                                        {{
                                            'APP.WORKPLACE.FAVOURITES_REMOVE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        </mat-menu>
                    </div>
                }
            } @else {
                <div
                    class="flex h-full w-full flex-col items-center justify-center space-y-2 p-8"
                >
                    <img src="assets/icons/no-favourites.svg" />
                    <p class="text-center text-sm opacity-60">
                        {{ 'APP.WORKPLACE.FAVOURITES_EMPTY' | translate }}
                    </p>
                </div>
            }
        </div>
    `,
    styles: [
        `
            [user]:hover button {
                opacity: 1;
            }

            :host {
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
            }
        `,
    ],
    providers: [SpacePipe],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatMenuModule,
        AuthenticatedImageDirective,
    ],
})
export class LandingFavouritesComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _space_pipe = inject(SpacePipe);
    private _event_form = inject(EventFormService);
    private _booking_form = inject(BookingFormService);
    private _router = inject(Router);

    private _room_alerts: Record<string, [string, string]>;
    public readonly spaces = signal<Space[]>([]);
    public readonly assets = signal([]);

    public get space_ids() {
        return this._settings.get<string[]>('favourite_spaces') || EMPTY;
    }

    public get desks() {
        return this._settings.get<string[]>(FAV_DESK_KEY) || EMPTY;
    }

    public get parking_spaces() {
        return this._settings.get<string[]>(FAV_PARKING_KEY) || EMPTY;
    }

    public get locker_banks() {
        return this._settings.get<string[]>(FAV_LOCKER_KEY) || EMPTY;
    }

    public level(space: Space) {
        return this._org.levelWithID(space?.zones || []);
    }

    public isClosed(id: string) {
        if (!this._room_alerts) return false;
        return this._room_alerts[id]
            ? this._room_alerts[id][0] === 'closed'
            : false;
    }

    public async ngOnInit() {
        const metadata = await showMetadata(
            this._org.organisation.id,
            'room_alerts',
        );
        this._room_alerts = metadata.details as any;
        await this.loadSpaces();
        await this.loadAssets();
    }

    public async loadSpaces() {
        const spaces = await Promise.all(
            this.space_ids.map((id) => this._space_pipe.transform(id)),
        );
        this.spaces.set(spaces.filter((space) => !!space?.id));
    }

    public async loadAssets() {
        const [desks, parking] = await Promise.all([
            this._booking_form.loadResourceList('desks' as any),
            this._booking_form.loadParkingResources(),
        ]);
        this.assets.set([
            ...desks
                .filter(({ id }) => this.desks.includes(id))
                .map((_) => ({ ..._, type: 'desk' as const })),
            ...parking
                .filter(({ id }) => this.parking_spaces.includes(id))
                .map((_) => ({ ..._, type: 'parking' as const })),
        ]);
    }

    public removeFavourite(
        type: 'space' | 'desk' | 'parking' | 'locker',
        id: string,
    ) {
        let fav_list = this.space_ids;
        let key = 'favourite_spaces';
        switch (type) {
            case 'desk':
                fav_list = this.desks;
                key = FAV_DESK_KEY;
                break;
            case 'parking':
                fav_list = this.parking_spaces;
                key = FAV_PARKING_KEY;
                break;
            case 'locker':
                fav_list = this.locker_banks;
                key = FAV_LOCKER_KEY;
                break;
        }
        this._settings.saveUserSetting(
            key,
            fav_list.filter((_) => _ !== id),
        );
        this.loadSpaces();
        this.loadAssets();
    }

    public async newSpaceMeeting(id: string) {
        const space = await this._space_pipe.transform(id);
        if (!space) return;
        this._event_form.newForm();
        if (this._settings.get('app.new_features')) {
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
    }

    public async newBooking(type: BookingType, item: any) {
        if (!item) return;
        const booking_path =
            type === 'desk'
                ? this._settings.get('app.new_features')
                    ? 'desk'
                    : 'desks'
                : type === 'locker'
                  ? 'locker'
                  : 'parking';
        const query_params = type === 'desk' ? { asset_id: item.id } : {};
        this._router.navigate(['/book', booking_path], {
            queryParams: query_params,
        });
        if (type === 'desk') {
            return;
        }
        setTimeout(() => {
            this._booking_form.newForm(type);
            this._booking_form.setOptions({ type });
            this._booking_form.model.update((m) => ({
                ...m,
                resources: [item],
                asset_id: item.id,
                booking_type: type,
            }));
        }, 100);
    }
}
