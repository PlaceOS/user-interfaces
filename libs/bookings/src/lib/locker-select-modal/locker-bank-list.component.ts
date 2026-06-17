import {
    Component,
    computed,
    inject,
    input,
    output,
    resource,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OrganisationService, SettingsService } from '@placeos/common';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { LevelPipe } from 'libs/components/src/lib/level.pipe';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { BookingAsset, BookingFormService } from '../booking-form.service';
import {
    loadLockerBanksForScope,
    loadLockersForScope,
} from '../booking.utilities';

@Component({
    selector: 'locker-bank-list',
    styles: [``],
    template: `
        <h3 class="font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="mb-4 text-sm opacity-60">
            {{
                'COMMON.RESULTS_COUNT'
                    | translate: { count: locker_banks()?.length || 0 }
            }}
        </p>
        @if (!loading()?.length) {
            @if (locker_banks()?.length) {
                <ul class="list-style-none space-y-2 overflow-hidden">
                    @for (locker_bank of locker_banks(); track locker_bank) {
                        <li
                            locker_bank
                            class="border-base-200 bg-base-100 relative w-full overflow-hidden rounded-lg border shadow-sm"
                            [class.!border-blue-400]="
                                active() === locker_bank.id
                            "
                        >
                            <button
                                name="select-locker_bank"
                                matRipple
                                class="flex h-full w-full p-2"
                                (click)="selectLockerBank($any(locker_bank))"
                            >
                                <div
                                    class="bg-base-200 relative mr-4 flex h-20 w-20 items-center justify-center rounded-xl"
                                >
                                    @if (selected().includes(locker_bank.id)) {
                                        <div
                                            class="border-neutral bg-base-200 absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border text-white"
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
                                    class="bg-base-200 absolute right-2 bottom-2 rounded-sm px-2 py-1 font-mono text-xs"
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
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatProgressSpinnerModule,
        AuthenticatedImageDirective,
        LevelPipe,
    ],
})
export class LockerBankListComponent {
    private _state = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly active = input('');
    public readonly selected = input('');
    public readonly favorites = input<string[]>([]);
    public readonly onSelect = output<BookingAsset>();
    public readonly toggleFav = output<BookingAsset>();
    private readonly _use_region = this._settings.signal('use_region', false);

    private readonly _scope_id = computed(() => {
        const region = this._org.active_region();
        const bld = this._org.active_building();
        if (this._use_region()) return region?.id || this._org.region?.id;
        return bld?.id;
    });

    private readonly _locker_banks_resource = resource({
        params: () => {
            const scope_id = this._scope_id();
            return scope_id ? { scope_id } : undefined;
        },
        loader: ({ params: { scope_id } }) =>
            loadLockerBanksForScope(this._org, scope_id),
    });
    private readonly _banks = computed(
        () => this._locker_banks_resource.value() ?? [],
    );

    private readonly _lockers_resource = resource({
        params: () => {
            const scope_id = this._scope_id();
            const banks = this._banks();
            return scope_id && banks.length ? { scope_id, banks } : undefined;
        },
        loader: ({ params: { scope_id, banks } }) =>
            loadLockersForScope(this._org, scope_id, banks),
    });
    private readonly _lockers = computed(
        () => this._lockers_resource.value() ?? [],
    );

    public readonly locker_banks = computed(() => {
        const { show_fav, show_accessible } = this._state.options();
        const resources = this._state.available_resources();
        const banks = this._banks();
        // Depend on lockers so banks have their `lockers` populated
        this._lockers();
        return banks
            .filter(
                (i) =>
                    (!show_fav || this.isFavourite(i.id)) &&
                    (!show_accessible || i.lockers.find((_) => _.accessible)) &&
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
    });
    public readonly loading = this._state.loading;

    public isFavourite(locker_bank_id: string) {
        return this.favorites().includes(locker_bank_id);
    }

    public selectLockerBank(locker_bank: BookingAsset) {
        this.onSelect.emit(locker_bank);
    }
}
