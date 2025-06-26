import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

import {
    BookingFormService,
    BookingType,
    FAV_PARKING_KEY,
} from '@placeos/bookings';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { Space } from '@placeos/spaces';
import { showMetadata } from '@placeos/ts-client';

import { FAV_DESK_KEY } from 'libs/bookings/src/lib/desk-select-modal/desk-select-modal.component';
import { FAV_LOCKER_KEY } from 'libs/bookings/src/lib/locker-select-modal/locker-select-modal.component';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';

const EMPTY = [];

@Component({
    selector: 'landing-favourites',
    template: `
        <div
            class="mx-2 flex items-center justify-between rounded bg-base-200 p-2 text-sm"
        >
            <h2>
                {{
                    'APP.WORKPLACE.FAVOURITES_COUNT'
                        | translate
                            : {
                                  count:
                                      (spaces?.length || 0) +
                                      (assets | async)?.length,
                              }
                }}
            </h2>
        </div>
        <div
            class="h-1/2 w-full flex-1 space-y-2 divide-y divide-base-200 overflow-auto pt-4"
        >
            @if (spaces?.length || (assets | async)?.length) {
                @for (item of spaces; track item) {
                    @let space = item | space | async;
                    @if (space?.id) {
                        <div
                            class="relative mx-2 flex flex-col items-center space-y-2 pt-2"
                            item
                        >
                            <div
                                class="relative flex w-full items-center space-x-2"
                            >
                                <div
                                    class="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded bg-base-300"
                                >
                                    @if (space.images.length) {
                                        <img
                                            auth
                                            class="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
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
                                [disabled]="isClosed(item)"
                                (click)="newSpaceMeeting(item)"
                            >
                                {{ 'COMMON.BOOK' | translate }}
                            </button>
                            <button
                                icon
                                name="favourite-more"
                                [matMenuTriggerFor]="menu"
                                class="absolute right-0 top-2 !m-0 !rounded bg-base-200"
                            >
                                <icon>more_horiz</icon>
                            </button>
                            <mat-menu #menu="matMenu" xPosition="before">
                                <!-- <button
                    mat-menu-item
                    class="flex items-center space-x-2"
                    >
                    <icon class="text-2xl">info</icon>
                    <div>{{ 'APP.WORKPLACE.VIEW_DETAILS' | translate }}</div>
                  </button> -->
                                <button
                                    name="landing-remove-favourite"
                                    mat-menu-item
                                    (click)="removeFavourite('space', item)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl text-error"
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
                @for (item of assets | async; track item) {
                    <div
                        class="relative mx-2 flex flex-col items-center space-y-2 pt-2"
                        item
                    >
                        <div
                            class="relative flex w-full items-center space-x-2"
                        >
                            <div
                                class="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded bg-base-300"
                            >
                                @if (item?.images?.length) {
                                    <img
                                        auth
                                        class="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
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
                            name="favourite-more"
                            [matMenuTriggerFor]="menu"
                            class="top-22 absolute right-0 !m-0 !rounded bg-base-200"
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
                    <div>{{ 'APP.WORKPLACE.VIEW_DETAILS' | translate }}</div>
                  </div>
                </button> -->
                            <button
                                name="landing-remove-favourite"
                                mat-menu-item
                                (click)="removeFavourite(item.type, item.id)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl text-error">
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
    standalone: false,
})
export class LandingFavouritesComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _space_pipe = inject(SpacePipe);
    private _event_form = inject(EventFormService);
    private _booking_form = inject(BookingFormService);
    private _router = inject(Router);

    private _change = new BehaviorSubject(0);
    private _room_alerts: Record<string, [string, string]>;
    public readonly assets = combineLatest([
        this._booking_form.loadResourceList('desks' as any),
        this._booking_form.loadResourceList('parking-spaces' as any),
        this._change,
    ]).pipe(
        map(([desks, parking]) => {
            return [
                ...desks
                    .filter(({ id }) => this.desks.includes(id))
                    .map((_) => ({ ..._, type: 'desk' })),
                ...parking
                    .filter(({ id }) => this.parking_spaces.includes(id))
                    .map((_) => ({ ..._, type: 'parking' })),
            ];
        }),
        tap((_) => console.log(_)),
        shareReplay(1),
    );

    public get spaces() {
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
        this._room_alerts = await showMetadata(
            this._org.organisation.id,
            'room_alerts',
        )
            .pipe(map((v) => v.details as any))
            .toPromise();
    }

    public removeFavourite(
        type: 'space' | 'desk' | 'parking' | 'locker',
        id: string,
    ) {
        let fav_list = this.spaces;
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
        this._change.next(Date.now());
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
            this._event_form.form.patchValue({ resources: [space] });
        }, 300);
    }

    public async newBooking(type: BookingType, item: any) {
        if (!item) return;
        if (this._settings.get('app.new_features')) {
            this._router.navigate([
                '/book',
                type === 'desk'
                    ? 'desk'
                    : type === 'locker'
                      ? 'locker'
                      : 'parking',
            ]);
        } else {
            this._router.navigate([
                '/book',
                type === 'desk'
                    ? 'desks'
                    : type === 'locker'
                      ? 'locker'
                      : 'parking',
            ]);
        }
        setTimeout(() => {
            this._booking_form.newForm(type);
            this._booking_form.setOptions({ type });
            this._booking_form.form.patchValue({
                resources: [item],
                asset_id: item.id,
                booking_type: type,
            });
        }, 100);
    }
}
