import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, model, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BookingFormService } from '@placeos/bookings';
import {
    SETTING_KEYS,
    settingSignal,
    SettingsService,
    Space,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';

const FAV_DESK_KEY = 'favourite_desks';

@Component({
    selector: 'desk-flow-select-list',
    template: `
        @let loadn = loading | async;
        @let desks = available_items | async;

        @if (!loadn) {
            @if (desks?.length) {
                <div class="mb-2 text-sm font-medium">
                    {{
                        'COMMON.RESULTS_COUNT'
                            | translate: { count: desks.length } : desks.length
                    }}
                </div>
                <ul class="list-style-none space-y-2">
                    @for (item of desks; track item.id) {
                        <li
                            item
                            [class.!border-success]="
                                selected_items().includes(item.id)
                            "
                            class="relative w-full rounded-lg border border-base-200 bg-base-100 shadow hover:border-info"
                        >
                            <div matRipple class="p-2">
                                <button
                                    name="select-item"
                                    class="flex h-full w-full items-center rounded"
                                    (click)="item_selected.emit(item)"
                                >
                                    <div
                                        class="relative mr-4 flex h-16 w-16 min-w-[4rem] items-center justify-center overflow-hidden rounded-xl bg-base-200"
                                    >
                                        @if (
                                            selected_items().includes(item.id)
                                        ) {
                                            <icon
                                                class="absolute left-1 top-1 rounded-full bg-base-200"
                                                >task_alt</icon
                                            >
                                        }
                                        @if (item.images?.length) {
                                            <img
                                                auth
                                                class="h-full object-cover"
                                                [source]="item.images[0]"
                                            />
                                        } @else {
                                            <img
                                                class="m-auto"
                                                src="assets/icons/desk-placeholder.svg"
                                            />
                                        }
                                    </div>
                                    <div class="max-w-48 space-y-2">
                                        <div
                                            class="mr-10 truncate text-left font-medium"
                                        >
                                            {{
                                                item.display_name ||
                                                    item.name ||
                                                    item.id
                                            }}
                                        </div>
                                        <div
                                            class="item-x-2 flex items-center text-sm"
                                        >
                                            <icon
                                                class="-ml-1 text-lg text-info"
                                                >place</icon
                                            >
                                            <p class="truncate">
                                                {{
                                                    item.location ||
                                                        item.zone
                                                            ?.display_name ||
                                                        item.zone?.name
                                                }}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <button
                                icon
                                matRipple
                                name="toggle-item-favourite"
                                class="absolute right-1 top-1"
                                [class.text-info]="
                                    favourites().includes(item.id)
                                "
                                (click)="toggleFavourite(item)"
                            >
                                <icon
                                    [className]="
                                        favourites().includes(item.id)
                                            ? 'material-symbols-rounded'
                                            : 'material-symbols-outlined'
                                    "
                                    >favorite</icon
                                >
                            </button>
                            @if (item.approval) {
                                <div
                                    class="absolute bottom-1 right-1 w-14 rounded bg-warning px-2 py-1 text-center text-[0.625rem] font-medium leading-tight text-warning-content"
                                >
                                    {{ 'COMMON.APPROVAL_REQUIRED' | translate }}
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
                        {{ 'BOOKINGS.DESK_SELECT_EMPTY' | translate }}
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
                    {{ 'BOOKINGS.DESK_SELECT_LOADING' | translate }}
                    <!-- <br />
  {{ loading | async | json }} -->
                </p>
            </div>
        }
    `,
    styles: [``],
    imports: [
        CommonModule,
        AsyncPipe,
        TranslatePipe,
        MatProgressSpinnerModule,
        IconComponent,
        MatRippleModule,
    ],
})
export class DeskFlowSelectListComponent {
    private _booking_form = inject(BookingFormService);
    private _settings = inject(SettingsService);

    public readonly selected_items = model<string[]>([]);
    public readonly item_selected = output<Space>();

    public readonly loading = this._booking_form.loading;
    public readonly available_items = this._booking_form.available_resources;

    public readonly favourites = settingSignal<string[]>(
        SETTING_KEYS.FAVORITE_DESKS,
        [],
        true,
    );

    public toggleFavourite(item: Space) {
        const existing = this.favourites();
        console.log('Toggle Favourites:', item, existing);
        if (existing.find((id) => item.id === id)) {
            this._settings.saveUserSetting(
                FAV_DESK_KEY,
                existing.filter((id) => id !== item.id),
            );
        } else {
            this._settings.saveUserSetting(FAV_DESK_KEY, [
                ...existing,
                item.id,
            ]);
        }
    }
}
