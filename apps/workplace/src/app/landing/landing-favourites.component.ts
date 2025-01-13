import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
import { combineLatest } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

const EMPTY = [];

@Component({
    selector: 'landing-favourites',
    template: `
        <div
            class="flex items-center justify-between p-2 mx-2 bg-base-200 text-sm rounded"
        >
            <h2>
                {{
                    'APP.WORKPLACE.FAVOURITES_COUNT'
                        | translate: { count: spaces?.length || 0 }
                }}
            </h2>
        </div>
        <div
            class="flex-1 h-1/2 w-full space-y-2 overflow-auto pt-4 divide-y divide-base-200"
        >
            <ng-container
                *ngIf="
                    spaces?.length || (assets | async)?.length;
                    else empty_state
                "
            >
                <div
                    class="flex flex-col items-center mx-2 pt-2 space-y-2 relative"
                    item
                    *ngFor="let item of spaces"
                >
                    <div class="flex w-full items-center space-x-2 relative">
                        <div
                            class="w-16 h-16 overflow-hidden rounded relative flex items-center justify-center bg-base-300"
                        >
                            <img
                                auth
                                *ngIf="
                                    (item | space | async)?.images?.length;
                                    else space_placeholder
                                "
                                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover min-w-full min-h-full"
                                [source]="(item | space | async)?.images[0]"
                            />
                            <ng-template #space_placeholder>
                                <img
                                    class="m-auto"
                                    src="assets/icons/room-placeholder.svg"
                                />
                            </ng-template>
                        </div>
                        <div
                            class="h-16 flex-1 w-1/2 flex flex-col justify-center space-y-1"
                        >
                            <div class="truncate w-full pr-12">
                                {{
                                    (item | space | async)?.display_name ||
                                        (item | space | async)?.name
                                }}
                            </div>
                            <div
                                class="flex items-center text-xs opacity-60 space-x-1"
                            >
                                <app-icon class="text-blue-500">place</app-icon>
                                <div class="flex-1 w-1/2 truncate">
                                    {{
                                        level(item | space | async)
                                            ?.display_name
                                    }}
                                </div>
                            </div>
                            <div
                                class="flex items-center text-xs opacity-60 truncate space-x-2"
                            >
                                <app-icon class="text-blue-500">
                                    people
                                </app-icon>
                                <div>
                                    {{
                                        'APP.WORKPLACE.CAPACITY'
                                            | translate
                                                : {
                                                      count:
                                                          (item | space | async)
                                                              ?.capacity || 2,
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
                        class="w-full inverse"
                        [disabled]="isClosed(item)"
                        (click)="newSpaceMeeting(item)"
                    >
                        {{ 'COMMON.BOOK' | translate }}
                    </button>
                    <button
                        icon
                        name="favourite-more"
                        [matMenuTriggerFor]="menu"
                        class="absolute top-2 right-0 bg-base-200 !rounded !m-0"
                    >
                        <app-icon>more_horiz</app-icon>
                    </button>
                    <mat-menu #menu="matMenu" xPosition="before">
                        <!-- <button
                            mat-menu-item
                            class="flex items-center space-x-2"
                        >
                            <app-icon class="text-2xl">info</app-icon>
                            <div>{{ 'WPA.VIEW_DETAILS' | translate }}</div>
                        </button> -->
                        <button
                            name="landing-remove-favourite"
                            mat-menu-item
                            (click)="toggleFavourite('space', item)"
                        >
                            <div class="flex items-center space-x-2">
                                <app-icon class="text-2xl text-error"
                                    >delete</app-icon
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
                <div
                    class="flex flex-col items-center mx-2 pt-2 space-y-2 relative"
                    item
                    *ngFor="let item of assets | async"
                >
                    <div class="flex w-full items-center space-x-2 relative">
                        <div
                            class="w-16 h-16 overflow-hidden rounded relative flex items-center justify-center bg-base-300"
                        >
                            <img
                                auth
                                *ngIf="
                                    item?.images?.length;
                                    else asset_placeholder
                                "
                                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover min-w-full min-h-full"
                                [source]="item?.images[0]"
                            />
                            <ng-template #asset_placeholder>
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
                            </ng-template>
                        </div>
                        <div
                            class="h-16 flex-1 w-1/2 flex flex-col justify-center space-y-1"
                        >
                            <div class="truncate">
                                {{ item?.display_name || item?.name }}
                            </div>
                            <div
                                class="flex items-center text-xs opacity-60 space-x-1"
                            >
                                <app-icon class="text-blue-500">place</app-icon>
                                <div class="flex-1 w-1/2 truncate">
                                    {{ item?.zone?.display_name }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        btn
                        name="book-favourite"
                        matRipple
                        class="w-full inverse"
                        (click)="newBooking(item.type, item)"
                    >
                        {{ 'COMMON.BOOK' | translate }}
                    </button>
                    <button
                        icon
                        name="favourite-more"
                        [matMenuTriggerFor]="menu"
                        class="absolute top-22 right-0 bg-base-200 !rounded !m-0"
                    >
                        <app-icon>more_horiz</app-icon>
                    </button>
                    <mat-menu #menu="matMenu" xPosition="before">
                        <!-- <button
                            mat-menu-item
                            class="flex items-center space-x-2"
                        >
                            <div class="flex items-center space-x-2">
                                <app-icon class="text-2xl">info</app-icon>
                                <div>{{ 'WPA.VIEW_DETAILS' | translate }}</div>
                            </div>
                        </button> -->
                        <button
                            name="landing-remove-favourite"
                            mat-menu-item
                            (click)="toggleFavourite(item.type, item.id)"
                        >
                            <div class="flex items-center space-x-2">
                                <app-icon class="text-2xl text-error">
                                    delete
                                </app-icon>
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
            </ng-container>
        </div>
        <ng-template #empty_state>
            <div
                class="w-full h-full flex flex-col items-center justify-center space-y-2 p-8"
            >
                <img src="assets/icons/no-favourites.svg" />
                <p class="opacity-60 text-sm text-center">
                    {{ 'APP.WORKPLACE.FAVOURITES_EMPTY' | translate }}
                </p>
            </div>
        </ng-template>
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
    standalone: false
})
export class LandingFavouritesComponent extends AsyncHandler implements OnInit {
    private _room_alerts: Record<string, [string, string]>;
    public readonly assets = combineLatest([
        this._booking_form.loadResourceList('desks' as any),
        this._booking_form.loadResourceList('parking-spaces' as any),
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

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService,
        private _space_pipe: SpacePipe,
        private _event_form: EventFormService,
        private _booking_form: BookingFormService,
        private _router: Router,
    ) {
        super();
    }

    public async ngOnInit() {
        this._room_alerts = await showMetadata(
            this._org.organisation.id,
            'room_alerts',
        )
            .pipe(map((v) => v.details as any))
            .toPromise();
    }

    public toggleFavourite(
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
        }
        const new_state = !fav_list.includes(id);
        if (new_state) {
            this._settings.saveUserSetting(key, [...fav_list, id]);
        } else {
            this._settings.saveUserSetting(
                key,
                fav_list.filter((_) => _ !== id),
            );
        }
    }

    public async newSpaceMeeting(id: string) {
        const space = await this._space_pipe.transform(id);
        if (!space) return;
        this._event_form.newForm();
        this._event_form.form.patchValue({ resources: [space] });
        if (this._settings.get('app.new_features')) {
            this._router.navigate(['/book', 'meeting']);
        } else {
            this._router.navigate(['/book', 'spaces']);
        }
    }

    public async newBooking(type: BookingType, item: any) {
        if (!item) return;
        if (this._settings.get('app.new_features')) {
            this._router.navigate([
                '/book',
                type === 'desk'
                    ? 'new-desk'
                    : type === 'locker'
                      ? 'locker'
                      : 'new-parking',
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
            this._booking_form.newForm();
            this._booking_form.setOptions({ type });
            this._booking_form.form.patchValue({
                resources: [item],
                asset_id: item.id,
                booking_type: type,
            });
        }, 100);
    }
}
