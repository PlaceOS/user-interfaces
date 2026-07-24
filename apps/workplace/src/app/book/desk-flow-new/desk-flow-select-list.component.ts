import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    effect,
    inject,
    input,
    model,
    output,
    signal,
} from '@angular/core';
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
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';

@Component({
    selector: 'desk-flow-select-list',
    template: `
        @if (!loading()) {
            @if (available_items()?.length) {
                <div class="mb-2 text-sm font-medium">
                    {{
                        'COMMON.RESULTS_COUNT'
                            | translate
                                : { count: available_items().length }
                                : available_items().length
                    }}
                </div>
                <ul class="list-style-none flex-1 space-y-2">
                    @for (
                        item of available_items()
                            | slice
                                : page() * page_size()
                                : page() * page_size() + page_size();
                        track item.id
                    ) {
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
                                    <div class="max-w-[calc(100%-6rem)] space-y-2">
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
                @if (available_items().length > page_size()) {
                    <div
                        class="mt-2 flex w-full items-center space-x-2 rounded-xl border border-base-300 bg-base-100 p-1"
                    >
                        <div
                            class="!ml-2 rounded-md bg-base-200 px-2 py-1 font-mono text-xs"
                        >
                            @let range = active_range();
                            {{ range[0] }} - {{ range[1] }}
                        </div>
                        <div class="flex-1"></div>
                        <div class="p-2">
                            Page {{ page() + 1 }} of {{ max_pages() }}
                        </div>
                        <button
                            icon
                            matRipple
                            [disabled]="page() <= 0"
                            (click)="page.set(page() - 1)"
                            class="rounded-xl border border-base-300"
                        >
                            <icon>keyboard_arrow_left</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            [disabled]="page() + 1 >= max_pages()"
                            (click)="page.set(page() + 1)"
                            class="rounded-xl border border-base-300"
                        >
                            <icon>keyboard_arrow_right</icon>
                        </button>
                    </div>
                }
            } @else {
                <div
                    empty
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <p class="text-center opacity-30">
                        {{ 'BOOKINGS.DESK_LIST_EMPTY' | translate }}
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
                    {{ 'BOOKINGS.DESK_LIST_LOADING' | translate }}
                    <!-- <br />
  {{ loading | async | json }} -->
                </p>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                min-height: 100%;
            }
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        MatProgressSpinnerModule,
        IconComponent,
        MatRippleModule,
        AuthenticatedImageDirective,
    ],
})
export class DeskFlowSelectListComponent {
    private _booking_form = inject(BookingFormService);
    private _settings = inject(SettingsService);

    public readonly selected_items = model<string[]>([]);
    public readonly promote_selected = input(false);
    public readonly item_selected = output<Space>();

    public readonly loading = this._booking_form.loading;

    private readonly _available_items = this._booking_form.available_resources;

    private readonly form_value = this._booking_form.model;

    private readonly _promote_on_list_change = signal(false);

    // Keep the active desk visible and first even while availability results are
    // loading or changing underneath the current selection.
    public readonly available_items = computed(() => {
        const available = this._available_items();
        const form = this.form_value();
        const resources = form.resources || [];

        if (
            resources.length > 0 &&
            (this.promote_selected() || this._promote_on_list_change())
        ) {
            const selected_ids = resources.map((r) => r.id);
            const selected_resources = resources.map(
                (resource) =>
                    available.find((item) => item.id === resource.id) || resource,
            );
            const remaining_resources = available.filter(
                (item) => !selected_ids.includes(item.id),
            );

            return [...selected_resources, ...remaining_resources];
        }

        if (resources.length > 0) {
            const existing_ids = available.map((r) => r.id);
            const missing_resources = resources.filter(
                (r) => !existing_ids.includes(r.id),
            );

            if (missing_resources.length > 0) {
                return [...missing_resources, ...available];
            }
        }

        return available;
    });
    public readonly page = signal(0);
    public readonly page_size = signal(10);
    public readonly max_pages = computed(() =>
        Math.ceil(this.available_items().length / this.page_size()),
    );
    public readonly active_range = computed(() => [
        this.page() * this.page_size() + 1,
        Math.min(
            this.page() * this.page_size() + this.page_size(),
            this.available_items()?.length,
        ),
    ]);

    private _last_auto_page_key = '';
    private _last_available_key = '';
    private _last_selected_key = '';

    constructor() {
        effect(() => {
            const available_key = this._available_items()
                .map((item) => item.id)
                .join('|');
            const selected_key = this.selected_items().join('|');
            const selected_changed = selected_key !== this._last_selected_key;
            const available_changed = available_key !== this._last_available_key;

            if (!selected_key || selected_changed) {
                this._promote_on_list_change.set(false);
            } else if (available_changed && this._last_available_key) {
                this._promote_on_list_change.set(true);
            }

            this._last_available_key = available_key;
            this._last_selected_key = selected_key;
        });

        effect(() => {
            const selected_id = this.selected_items()?.[0];
            if (!selected_id) return;
            const merged_items = this.available_items();
            const selected_index = merged_items.findIndex(
                (item) => item.id === selected_id,
            );
            if (selected_index < 0) return;
            const target_page = Math.floor(selected_index / this.page_size());
            const page_key = `${selected_id}:${selected_index}:${this.page_size()}`;
            if (page_key === this._last_auto_page_key) return;
            this._last_auto_page_key = page_key;
            this.page.set(target_page);
        });
    }

    public readonly favourites = settingSignal<string[]>(
        SETTING_KEYS.FAVORITE_DESKS,
        [],
        true,
    );

    public toggleFavourite(item: Space) {
        const existing = this.favourites();
        console.log('Toggle Favourites:', item, existing);
        const updated = existing.find((id) => item.id === id)
            ? existing.filter((id) => id !== item.id)
            : [...existing, item.id];

        // Optimistically update UI
        this.favourites.set(updated);

        // Save to settings in background
        this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_DESKS, updated);
    }
}
