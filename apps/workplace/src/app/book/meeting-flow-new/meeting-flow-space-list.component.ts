import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    inject,
    model,
    output,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import {
    SETTING_KEYS,
    settingSignal,
    SettingsService,
    Space,
    toggleListItem,
} from '@placeos/common';
import { IconComponent, LevelPipe, TranslatePipe } from '@placeos/components';
import { EventFormService } from '@placeos/events';

@Component({
    selector: 'meeting-flow-space-list',
    template: `
        @if (!loading()) {
            @if (load_failed()) {
                <div
                    load-error
                    role="alert"
                    class="flex flex-col items-center justify-center space-y-4 p-16"
                >
                    <p class="text-center">
                        {{ 'COMMON.LOAD_ERROR' | translate }}
                    </p>
                    <button btn matRipple class="inverse" (click)="retry()">
                        {{ 'COMMON.RETRY' | translate }}
                    </button>
                </div>
            } @else if (available_spaces()?.length) {
                <ul class="list-style-none space-y-2">
                    @for (
                        space of available_spaces()
                            | slice
                                : active_page() * page_size()
                                : active_page() * page_size() + page_size();
                        track space.id
                    ) {
                        @let closed =
                            room_alerts()[space.id]?.[0] === 'closed';
                        <li
                            space
                            [class.!border-success]="
                                selected_spaces().includes(space.id)
                            "
                            class="relative w-full rounded-lg border border-base-200 bg-base-100 shadow hover:border-info"
                            [class.!bg-error-light]="closed"
                        >
                            <div
                                matRipple
                                class="p-2"
                                [matRippleDisabled]="closed"
                            >
                                <button
                                    name="select-space"
                                    class="flex h-full w-full items-center rounded"
                                    [disabled]="closed"
                                    (click)="space_selected.emit(space)"
                                >
                                    <div
                                        class="relative mr-4 flex h-20 w-20 min-w-[5rem] items-center justify-center overflow-hidden rounded-xl bg-base-200"
                                    >
                                        @if (
                                            selected_spaces().includes(space.id)
                                        ) {
                                            <icon
                                                class="absolute left-1 top-1 rounded-full bg-base-200"
                                                >task_alt</icon
                                            >
                                        }
                                        @if (space.images?.length) {
                                            <img
                                                auth
                                                class="h-full object-cover"
                                                [source]="space.images[0]"
                                            />
                                        } @else {
                                            <img
                                                class="m-auto"
                                                src="assets/icons/room-placeholder.svg"
                                            />
                                        }
                                        @if (room_alerts()[space.id]) {
                                            <div
                                                class="pointer-events-auto absolute bottom-1 left-1 flex h-6 w-6 items-center justify-center rounded-full"
                                                [matTooltip]="
                                                    room_alerts()[space.id][1]
                                                "
                                                [class.bg-error]="
                                                    room_alerts()[space.id][0] ===
                                                    'closed'
                                                "
                                                [class.bg-info]="
                                                    room_alerts()[space.id][0] ===
                                                    'info'
                                                "
                                                [class.bg-warning]="
                                                    room_alerts()[space.id][0] ===
                                                    'warn'
                                                "
                                                [class.text-error-content]="
                                                    room_alerts()[space.id][0] ===
                                                    'closed'
                                                "
                                                [class.text-info-content]="
                                                    room_alerts()[space.id][0] ===
                                                    'info'
                                                "
                                                [class.text-warning-content]="
                                                    room_alerts()[space.id][0] ===
                                                    'warn'
                                                "
                                                (click)="
                                                    $event.stopPropagation()
                                                "
                                            >
                                                <icon>{{
                                                    room_alerts()[space.id][0] ===
                                                    'warn'
                                                        ? 'warning'
                                                        : room_alerts()[
                                                                space.id
                                                            ][0] === 'info'
                                                          ? 'info'
                                                          : 'close'
                                                }}</icon>
                                            </div>
                                        }
                                    </div>
                                    <div class="max-w-[calc(100%-6rem)] space-y-2">
                                        <div
                                            class="mr-10 truncate text-left font-medium"
                                        >
                                            {{
                                                space.display_name ||
                                                    space.name ||
                                                    ('CALENDAR_EVENT.MEETING_SPACE_DEFAULT'
                                                        | translate)
                                            }}
                                        </div>
                                        @if (closed) {
                                            <div
                                                closed
                                                class="w-fit rounded bg-error px-2 py-0.5 text-xs font-medium text-error-content"
                                            >
                                                {{
                                                    'CALENDAR_EVENT.ROOM_CLOSED'
                                                        | translate
                                                }}
                                            </div>
                                        }
                                        <div
                                            class="flex items-center space-x-2 text-sm"
                                        >
                                            <icon class="text-info">place</icon>
                                            <p class="truncate">
                                                {{
                                                    (space.zones | level)
                                                        ?.display_name ||
                                                        (space.zones | level)
                                                            ?.name
                                                }}
                                            </p>
                                        </div>
                                        @if (space.capacity > 0) {
                                            <div
                                                capacity
                                                class="flex items-center space-x-2 text-sm"
                                            >
                                                <icon class="text-info"
                                                    >people</icon
                                                >
                                                <p>
                                                    {{
                                                        'CALENDAR_EVENT.CAPACITY_COUNT'
                                                            | translate
                                                                : {
                                                                      count: space.capacity,
                                                                  }
                                                    }}
                                                </p>
                                            </div>
                                        }
                                    </div>
                                </button>
                            </div>
                            <button
                                icon
                                matRipple
                                name="toggle-space-favourite"
                                class="absolute right-1 top-1"
                                [class.text-info]="
                                    favourites().includes(space.id)
                                "
                                [attr.aria-label]="
                                    'CALENDAR_EVENT.SPACE_FAVOURITE'
                                        | translate
                                            : {
                                                  name:
                                                      space.display_name ||
                                                      space.name,
                                              }
                                "
                                [attr.aria-pressed]="
                                    favourites().includes(space.id)
                                "
                                (click)="toggleFavourite(space)"
                            >
                                <icon
                                    [className]="
                                        favourites().includes(space.id)
                                            ? 'material-symbols-rounded'
                                            : 'material-symbols-outlined'
                                    "
                                    >favorite</icon
                                >
                            </button>
                            @if (space.approval) {
                                <div
                                    class="absolute bottom-1 right-1 w-14 rounded bg-warning px-2 py-1 text-center text-[0.625rem] font-medium leading-tight text-warning-content"
                                >
                                    {{ 'COMMON.APPROVAL_REQUIRED' | translate }}
                                </div>
                            }
                        </li>
                    }
                </ul>
                @if (available_spaces().length > page_size()) {
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
                            {{
                                'CALENDAR_EVENT.SPACE_LIST_PAGE'
                                    | translate
                                        : {
                                              page: active_page() + 1,
                                              total: max_pages(),
                                          }
                            }}
                        </div>
                        <button
                            icon
                            matRipple
                            [disabled]="active_page() <= 0"
                            [attr.aria-label]="'COMMON.PREVIOUS' | translate"
                            (click)="page.set(active_page() - 1)"
                            class="rounded-xl border border-base-300"
                        >
                            <icon>keyboard_arrow_left</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            [disabled]="active_page() + 1 >= max_pages()"
                            [attr.aria-label]="'COMMON.NEXT' | translate"
                            (click)="page.set(active_page() + 1)"
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
                        {{ 'CALENDAR_EVENT.SPACE_SELECT_EMPTY' | translate }}
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
                    {{ 'CALENDAR_EVENT.SPACE_SELECT_LOADING' | translate }}
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
        LevelPipe,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        AuthenticatedImageDirective,
    ],
})
export class MeetingFlowSpaceListComponent {
    private _event_form = inject(EventFormService);
    private _settings = inject(SettingsService);

    public readonly selected_spaces = model<string[]>([]);
    public readonly space_selected = output<Space>();

    public readonly loading = this._event_form.loading;
    public readonly available_spaces = this._event_form.available_spaces;
    public readonly room_alerts = this._event_form.room_alerts;
    public readonly load_failed = this._event_form.spaces_load_failed;
    public readonly retry = () => this._event_form.reloadSpaces();

    public readonly page = signal(0);
    public readonly page_size = signal(10);
    public readonly max_pages = computed(() =>
        Math.ceil(this.available_spaces().length / this.page_size()),
    );
    /** Selected page, limited to the last page of the current room list */
    public readonly active_page = computed(() =>
        Math.max(0, Math.min(this.page(), this.max_pages() - 1)),
    );
    public readonly active_range = computed(() => [
        this.active_page() * this.page_size() + 1,
        Math.min(
            this.active_page() * this.page_size() + this.page_size(),
            this.available_spaces()?.length,
        ),
    ]);

    public readonly favourites = settingSignal<string[]>(
        SETTING_KEYS.FAVORITE_ROOMS,
        [],
        true,
    );

    public toggleFavourite(space: Space) {
        const updated = toggleListItem(this.favourites(), space.id);

        // Optimistically update UI
        this.favourites.set(updated);

        // Save to settings in background
        this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_ROOMS, updated);
    }
}
