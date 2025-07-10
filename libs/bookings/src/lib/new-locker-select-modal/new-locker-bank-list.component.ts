import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { LevelPipe } from 'libs/components/src/lib/level.pipe';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookingAsset, BookingFormService } from '../booking-form.service';
import { loadLockerBanks, loadLockers } from '../booking.utilities';
import { Locker, LockerBank } from '../locker.class';

@Component({
    selector: 'new-locker-bank-list',
    styles: [``],
    template: `
        <h3 class="font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="mb-4 text-sm opacity-60">
            {{
                'COMMON.RESULTS_COUNT'
                    | translate: { count: (locker_banks | async)?.length || 0 }
            }}
        </p>
        @if (!(loading | async)?.length) {
            @if ((locker_banks | async)?.length) {
                <ul class="list-style-none space-y-2 overflow-hidden">
                    @for (
                        locker_bank of locker_banks | async;
                        track locker_bank
                    ) {
                        <li
                            locker_bank
                            class="relative w-full overflow-hidden rounded-lg border border-base-200 bg-base-100 shadow"
                            [class.!border-blue-400]="
                                active() === locker_bank.id
                            "
                        >
                            <button
                                name="select-locker_bank"
                                matRipple
                                class="flex h-full w-full p-2"
                                (click)="selectLockerBank(locker_bank)"
                            >
                                <div
                                    class="relative mr-4 flex h-20 w-20 items-center justify-center rounded-xl bg-base-200"
                                >
                                    @if (selected().includes(locker_bank.id)) {
                                        <div
                                            class="absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-neutral bg-base-200 text-white"
                                        >
                                            <icon>done</icon>
                                        </div>
                                    }
                                    @if (locker_bank.images?.length) {
                                        <img
                                            auth
                                            class="h-full object-cover"
                                            [source]="locker_bank.images[0]"
                                        />
                                    } @else {
                                        <img
                                            class="m-auto"
                                            src="assets/icons/locker-placeholder.svg"
                                        />
                                    }
                                </div>
                                <div class="flex-1pt-2 text-left">
                                    <h3 class="mb-2 font-medium">
                                        {{
                                            locker_bank.name ||
                                                locker_bank.id ||
                                                'Locker_bank'
                                        }}
                                    </h3>
                                    <div
                                        class="mb-1 flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-blue-500">place</icon>
                                        <p class="text-xs">
                                            {{
                                                (locker_bank.zones | level)
                                                    ? (
                                                          locker_bank.zones
                                                          | level
                                                      )?.display_name ||
                                                      (
                                                          locker_bank.zones
                                                          | level
                                                      )?.name
                                                    : ''
                                            }}
                                        </p>
                                    </div>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-blue-500"
                                            >people</icon
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
                                                                  locker_bank
                                                                      .lockers
                                                                      .length ||
                                                                  1,
                                                          }
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </button>
                            <!-- <button
                icon
                matRipple
                name="toggle-locker_bank-favourite"
                class="absolute top-1 right-1"
                [class.text-info]="isFavourite(locker_bank.id)"
                (click)="toggleFav.emit(locker_bank)"
                >
                <icon
                        [className]="
                        isFavourite(locker_bank.id)
                                ? 'material-symbols-rounded'
                                : 'material-symbols-outlined'
                        ">favorite</icon>
              </button> -->
                            @if (locker_bank.tags?.length) {
                                <div
                                    class="absolute bottom-2 right-2 rounded bg-base-200 px-2 py-1 font-mono text-xs"
                                >
                                    {{ locker_bank.tags[0] }}
                                </div>
                            }
                        </li>
                    }
                </ul>
            } @else {
                <div
                    empty
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <p class="text-center opacity-30">
                        {{ 'BOOKINGS.LOCKER_LIST_EMPTY' | translate }}
                    </p>
                </div>
            }
        } @else {
            <div
                loading
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">
                    {{ 'BOOKINGS.LOCKER_LIST_LOADING' | translate }}
                </p>
            </div>
        }
    `,
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatProgressSpinnerModule,
        AuthenticatedImageDirective,
        LevelPipe,
    ],
})
export class NewLockerBankListComponent {
    private _state = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly active = input('');
    public readonly selected = input('');
    public readonly favorites = input<string[]>([]);
    public readonly onSelect = output<BookingAsset>();
    public readonly toggleFav = output<BookingAsset>();

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
                .map((bank) => {
                    const locker_list = bank.lockers.map((_) => ({
                        ..._,
                        available:
                            !!resources.find((lkr) => lkr.id === _.id) &&
                            (!show_accessible || _.accessible),
                        map_id: bank.map_id || bank.id,
                        zone: bank.zone,
                        zones: bank.zones,
                    }));
                    return {
                        ...bank,
                        available: locker_list.reduce(
                            (c, l) => c + (l.available ? 1 : 0),
                            0,
                        ),
                        lockers: locker_list,
                    };
                });
        }),
    );
    public readonly loading = this._state.loading;

    public isFavourite(locker_bank_id: string) {
        return this.favorites().includes(locker_bank_id);
    }

    public selectLockerBank(locker_bank: BookingAsset) {
        this.onSelect.emit(locker_bank);
    }
}
