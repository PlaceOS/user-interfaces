import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { SettingsService } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import {
    BookingAsset,
    BookingFlowOptions,
    BookingFormService,
} from '../booking-form.service';
import { LockerGridComponent } from '../locker-grid.component';
import { LockerBank } from '../locker.class';
import { LockerBankListComponent } from './locker-bank-list.component';
import { LockerFiltersDisplayComponent } from './locker-filters-display.component';
import { LockerFiltersComponent } from './locker-filters.component';

export const FAV_LOCKER_KEY = 'favourite_lockers';

@Component({
    selector: 'locker-select-modal',
    styles: [],
    template: `
        <div
            class="bg-base-100 flex h-screen w-screen flex-col sm:relative sm:h-auto sm:w-auto"
        >
            <header class="flex w-full items-center space-x-4">
                <button icon mat-dialog-close class="bg-base-200">
                    <icon>close</icon>
                </button>
                <h3>{{ 'BOOKINGS.LOCKER_FIND' | translate }}</h3>
                <!-- <div class="hidden flex-1 items-center justify-end sm:flex">
            <button
              btn
              matRipple
              name="view-locker-map"
              class="rounded-l rounded-r-none"
              [class.inverse]="view !== 'map'"
              (click)="view = 'map'"
              >
              {{ 'COMMON.MAP' | translate }}
            </button>
            <button
              btn
              matRipple
              name="view-locker-list"
              class="rounded-l-none rounded-r"
              [class.inverse]="view !== 'list'"
              (click)="view = 'list'"
              >
              {{ 'COMMON.LIST' | translate }}
            </button>
          </div> -->
            </header>
            <main
                class="divide-base-200 flex h-[65vh] min-h-[65vh] w-full flex-1 items-center divide-x overflow-hidden sm:max-h-[65vh] sm:max-w-[95vw]"
            >
                <locker-filters
                    class="hidden h-full max-w-[20rem] sm:flex sm:h-[65vh] sm:max-h-full"
                    [hide_levels]="view() !== 'list'"
                ></locker-filters>
                <div
                    class="flex h-full w-1/2 flex-1 flex-col items-center sm:h-[65vh]"
                >
                    <locker-filters-display
                        class="border-base-200 w-full border-b"
                        [(view)]="view"
                    ></locker-filters-display>
                    @if (!bank()) {
                        @if (view() === 'list') {
                            <locker-bank-list
                                [active]="displayed()?.id || ''"
                                [selected]="selected_ids()"
                                [favorites]="favorites()"
                                (toggleFav)="toggleFavourite($event)"
                                (onSelect)="bank.set($any($event))"
                                class="bg-base-200 h-1/2 flex-1"
                            ></locker-bank-list>
                        }
                    } @else {
                        <div
                            class="bg-base-200 flex h-full w-full flex-col overflow-auto"
                        >
                            <div
                                class="sticky left-0 w-full px-2 py-2 font-medium"
                            >
                                {{ bank()?.name }}
                            </div>
                            <locker-grid
                                class="h-1/2 w-full flex-1"
                                [bank]="bank()"
                                [selected]="displayed()?.id || ''"
                                (clicked)="displayed.set($event)"
                            >
                            </locker-grid>
                        </div>
                    }
                </div>
            </main>
            <footer
                class="border-base-200 flex w-full flex-col-reverse items-center justify-end border-t px-2 pt-2 pb-22 sm:hidden"
            >
                @if (displayed()) {
                    <button
                        btn
                        matRipple
                        name="locker-return"
                        class="inverse w-full sm:hidden"
                        (click)="displayed.set(null)"
                    >
                        {{ 'COMMON.BACK' | translate }}
                    </button>
                }
                <button
                    btn
                    matRipple
                    name="save-lockers"
                    [mat-dialog-close]="selected()"
                    [class.mb-2]="displayed()"
                    class="w-full sm:mb-0 sm:w-32"
                >
                    {{ 'COMMON.VIEW_LIST' | translate }}
                </button>
            </footer>
            <footer
                class="border-base-200 hidden w-full items-center justify-between border-t p-2 sm:flex"
            >
                <button
                    btn
                    matRipple
                    name="locker-return"
                    [mat-dialog-close]="selected()"
                    class="clear text-secondary"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">done</icon>
                        <div class="mr-1 underline">
                            {{ 'COMMON.CONFIRM_SELECTION' | translate }}
                        </div>
                    </div>
                </button>
                <p class="text-center text-sm opacity-60">
                    {{
                        'BOOKINGS.LOCKER_ADDED_COUNT'
                            | translate: { count: selected().length }
                    }}
                </p>
                <div class="flex items-center">
                    @if (bank()) {
                        <button
                            btn
                            matRipple
                            name="clear-bank"
                            class="inverse mr-2 w-32"
                            (click)="bank.set(null); displayed.set(null)"
                        >
                            {{ 'COMMON.RETURN' | translate }}
                        </button>
                    }
                    <button
                        btn
                        matRipple
                        name="toggle-locker"
                        [disabled]="!displayed()"
                        [class.inverse]="isSelected(displayed()?.id)"
                        (click)="
                            setSelected(
                                displayed(),
                                !isSelected(displayed()?.id)
                            )
                        "
                    >
                        <div class="flex items-center">
                            <icon class="text-xl">{{
                                isSelected(displayed()?.id) ? 'remove' : 'add'
                            }}</icon>
                            <div class="mr-1">
                                {{
                                    (isSelected(displayed()?.id)
                                        ? 'COMMON.REMOVE_FROM'
                                        : 'COMMON.ADD_TO'
                                    ) | translate
                                }}
                            </div>
                        </div>
                    </button>
                </div>
            </footer>
        </div>
    `,
    imports: [
        LockerGridComponent,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatDialogModule,
        LockerBankListComponent,
        LockerFiltersComponent,
        LockerFiltersDisplayComponent,
    ],
})
export class LockerSelectModalComponent {
    private _dialog_ref =
        inject<MatDialogRef<LockerSelectModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);
    private _event_form = inject(BookingFormService);
    private _data = inject<{
        items: BookingAsset[];
        options: Partial<BookingFlowOptions>;
    }>(MAT_DIALOG_DATA);

    private readonly _options = toSignal(this._event_form.options, {
        initialValue: null,
    });

    public readonly displayed = signal<BookingAsset | null>(null);
    public readonly selected = signal<BookingAsset[]>([]);
    public readonly view = signal<'map' | 'list'>('list');
    public readonly bank = signal<LockerBank | null>(null);
    public readonly selected_ids = computed(() =>
        this.selected()
            .map((_) => _.id)
            .join(','),
    );
    public readonly favorites = signal<string[]>(
        this._settings.get<string[]>(FAV_LOCKER_KEY) || [],
    );

    constructor() {
        const _data = this._data;

        this.selected.set([...(_data.items || [])]);
        this._event_form.setOptions(_data.options);
        effect(() => {
            this._options();
            this.displayed.set(null);
            this.bank.set(null);
        });
    }

    public isSelected(id?: string | null) {
        return !!id && this.selected().some((item) => item.id === id);
    }

    public setSelected(item: BookingAsset | null, state: boolean) {
        if (!item) return;
        const list = this.selected().filter((_) => _.id !== item.id);
        if (state) list.push(item);
        this.selected.set(list);
        if (!this._data.options.group && state) this._dialog_ref.close([item]);
    }

    public toggleFavourite(item: BookingAsset | null) {
        if (!item?.id) return;
        const fav_list = this.favorites();
        const new_state = !fav_list.includes(item.id);
        const next_favs = new_state
            ? [...fav_list, item.id]
            : fav_list.filter((_) => _ !== item.id);
        this.favorites.set(next_favs);
        this._settings.saveUserSetting(FAV_LOCKER_KEY, next_favs);
    }
}
