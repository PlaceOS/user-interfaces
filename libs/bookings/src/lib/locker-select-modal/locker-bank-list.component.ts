import { Component, EventEmitter, Input, Output } from '@angular/core';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import { BookingFormService, BookingAsset } from '../booking-form.service';
import { Locker, LockerBank } from '../locker.class';
import { OrganisationService } from '@placeos/organisation';
import { flatten, SettingsService } from '@placeos/common';
import { PlaceMetadata, showMetadata } from '@placeos/ts-client';
import { loadLockerBanks, loadLockers } from '../booking.utilities';

@Component({
    selector: 'locker-bank-list',
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
                padding: 0.5rem;
                background: rgba(0, 0, 0, 0.05);
                overflow-y: auto;
            }
        `,
    ],
    template: `
        <h3 class="font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="text-sm opacity-60 mb-4">
            {{
                'COMMON.RESULTS_COUNT'
                    | translate: { count: (locker_banks | async)?.length || 0 }
            }}
        </p>
        <ng-container *ngIf="!(loading | async)?.length; else load_state">
            <ul
                class="list-style-none space-y-2 min-w-[50vh]"
                *ngIf="(locker_banks | async)?.length; else empty_state"
            >
                <li
                    locker_bank
                    *ngFor="let locker_bank of locker_banks | async"
                    class="relative rounded-lg w-full shadow border bg-base-100 border-base-200 overflow-hidden"
                    [class.!border-blue-400]="active === locker_bank.id"
                >
                    <button
                        name="select-locker_bank"
                        matRipple
                        class="w-full h-full flex p-2"
                        (click)="selectLockerBank(locker_bank)"
                    >
                        <div
                            class="relative w-20 h-20 rounded-xl bg-base-200 mr-4 flex items-center justify-center"
                        >
                            <div
                                class="absolute top-1 left-1 border border-neutral bg-base-200 rounded-full h-6 w-6 flex items-center justify-center text-white"
                                *ngIf="selected.includes(locker_bank.id)"
                            >
                                <app-icon>done</app-icon>
                            </div>
                            <img
                                auth
                                *ngIf="
                                    locker_bank.images?.length;
                                    else placeholder
                                "
                                class="object-cover h-full"
                                [source]="locker_bank.images[0]"
                            />
                            <ng-template #placeholder>
                                <img
                                    class="m-auto"
                                    src="assets/icons/locker-placeholder.svg"
                                />
                            </ng-template>
                        </div>
                        <div class="space-y-2 pt-2 flex-1 text-left">
                            <span class="font-medium">
                                {{
                                    locker_bank.name ||
                                        locker_bank.id ||
                                        'Locker_bank'
                                }}
                            </span>
                            <div class="flex items-center text-sm space-x-2">
                                <app-icon class="text-blue-500">place</app-icon>
                                <p class="text-xs">
                                    {{
                                        (locker_bank.zones | level)
                                            ? (locker_bank.zones | level)
                                                  ?.display_name ||
                                              (locker_bank.zones | level)?.name
                                            : ''
                                    }}
                                </p>
                            </div>
                            <div class="flex items-center text-sm space-x-2">
                                <app-icon class="text-blue-500"
                                    >people</app-icon
                                >
                                <p class="text-xs">
                                    {{
                                        'COMMON.AVAILABLE_COUNT'
                                            | translate
                                                : {
                                                      count:
                                                          locker_bank.available ||
                                                          0,
                                                      total:
                                                          locker_bank.lockers
                                                              .length || 1,
                                                  }
                                    }}
                                </p>
                            </div>
                        </div>
                    </button>
                    <button
                        icon
                        matRipple
                        name="toggle-locker_bank-favourite"
                        class="absolute top-1 right-1"
                        [class.text-blue-400]="isFavourite(locker_bank.id)"
                        (click)="toggleFav.emit(locker_bank)"
                    >
                        <app-icon>{{
                            isFavourite(locker_bank.id)
                                ? 'favorite'
                                : 'favorite_border'
                        }}</app-icon>
                    </button>
                    <div
                        class="absolute bottom-2 right-2 bg-base-200 rounded text-xs px-2 py-1 font-mono"
                        *ngIf="locker_bank.tags?.length"
                    >
                        {{ locker_bank.tags[0] }}
                    </div>
                </li>
            </ul>
        </ng-container>
        <ng-template #load_state>
            <div
                loading
                class="p-16 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">
                    {{ 'BOOKINGS.LOCKER_LIST_LOADING' | translate }}
                </p>
            </div>
        </ng-template>
        <ng-template #empty_state>
            <div
                empty
                class="p-16 flex flex-col items-center justify-center space-y-2"
            >
                <p class="opacity-30 text-center">
                    {{ 'BOOKINGS.LOCKER_LIST_EMPTY' | translate }}
                </p>
            </div>
        </ng-template>
    `,
})
export class LockerBankListComponent {
    @Input() public active = '';
    @Input() public selected = '';
    @Input() public favorites: string[] = [];
    @Output() public onSelect = new EventEmitter<BookingAsset>();
    @Output() public toggleFav = new EventEmitter<BookingAsset>();

    public readonly lockers_banks$: Observable<LockerBank[]> = loadLockerBanks(
        this._org,
        combineLatest([this._org.active_building, this._org.active_region]),
        () => this._settings.get('app.use_region'),
    );

    public readonly lockers$: Observable<Locker[]> = loadLockers(
        this._org,
        combineLatest([this._org.active_building, this._org.active_region]),
        this.lockers_banks$,
        () => this._settings.get('app.use_region'),
    );

    public readonly locker_banks = combineLatest([
        this._state.options,
        this._state.available_resources,
        this.lockers_banks$,
        this.lockers$,
    ]).pipe(
        map(([{ show_fav, show_accessible }, resources, banks]) => {
            return banks
                .filter(
                    (i) =>
                        (!show_fav || this.isFavourite(i.id)) &&
                        (!show_accessible ||
                            i.lockers.find((_) => _.accessible)) &&
                        resources.find((_: any) => _.bank_id === i.id),
                )
                .map((bank) => ({
                    ...bank,
                    available: resources.filter(
                        (_: any) => _.bank_id === bank.id,
                    ).length,
                    lockers: bank.lockers.map((_) => ({
                        ..._,
                        map_id: bank.map_id || bank.id,
                        zone: bank.zone,
                    })),
                }));
        }),
    );
    public readonly loading = this._state.loading;

    constructor(
        private _state: BookingFormService,
        private _org: OrganisationService,
        private _settings: SettingsService,
    ) {}

    public isFavourite(locker_bank_id: string) {
        return this.favorites.includes(locker_bank_id);
    }

    public selectLockerBank(locker_bank: BookingAsset) {
        this.onSelect.emit(locker_bank);
    }
}
