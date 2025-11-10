import { AsyncPipe } from '@angular/common';
import { Component, inject, model, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    SETTING_KEYS,
    settingSignal,
    SettingsService,
    Space,
} from '@placeos/common';
import { IconComponent, LevelPipe, TranslatePipe } from '@placeos/components';
import { EventFormService } from '@placeos/events';

@Component({
    selector: 'meeting-flow-space-list',
    template: `
        @let loadn = loading | async;
        @let spaces = available_spaces | async;
        @let alerts = room_alerts | async;

        @if (!loadn) {
            @if (spaces?.length) {
                <ul class="list-style-none space-y-2">
                    @for (space of spaces; track space.id) {
                        <li
                            space
                            [class.!border-success]="
                                selected_spaces().includes(space.id)
                            "
                            class="relative w-full rounded-lg border border-base-200 bg-base-100 shadow hover:border-info"
                            [class.!bg-error-light]="
                                room_alerts[space.id]
                                    ? room_alerts[space.id][0] === 'closed'
                                    : false
                            "
                        >
                            <div matRipple class="p-2">
                                <button
                                    name="select-space"
                                    class="flex h-full w-full items-center rounded"
                                    (click)="space_selected.emit(space)"
                                    [class.pointer-events-none]="
                                        room_alerts[space.id]
                                            ? room_alerts[space.id][0] ===
                                              'closed'
                                            : false
                                    "
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
                                        @if (room_alerts[space.id]) {
                                            <div
                                                class="pointer-events-auto absolute bottom-1 left-1 flex h-6 w-6 items-center justify-center rounded-full"
                                                [matTooltip]="
                                                    alerts[space.id][1]
                                                "
                                                [class.bg-error]="
                                                    alerts[space.id][0] ===
                                                    'closed'
                                                "
                                                [class.bg-info]="
                                                    alerts[space.id][0] ===
                                                    'info'
                                                "
                                                [class.bg-warning]="
                                                    alerts[space.id][0] ===
                                                    'warn'
                                                "
                                                [class.text-error-content]="
                                                    alerts[space.id][0] ===
                                                    'closed'
                                                "
                                                [class.text-info-content]="
                                                    alerts[space.id][0] ===
                                                    'info'
                                                "
                                                [class.text-warning-content]="
                                                    alerts[space.id][0] ===
                                                    'warn'
                                                "
                                                (click)="
                                                    $event.stopPropagation()
                                                "
                                            >
                                                <icon>{{
                                                    alerts[space.id][0] ===
                                                    'warn'
                                                        ? 'warning'
                                                        : alerts[
                                                                space.id
                                                            ][0] === 'info'
                                                          ? 'info'
                                                          : 'close'
                                                }}</icon>
                                            </div>
                                        }
                                    </div>
                                    <div class="max-w-48 space-y-2">
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
                                        <div
                                            class="flex items-center space-x-2 text-sm"
                                        >
                                            <icon class="text-info">place</icon>
                                            <p class="truncate">
                                                {{
                                                    space.location ||
                                                        (space.zones | level)
                                                            ?.display_name ||
                                                        (space.zones | level)
                                                            ?.name
                                                }}
                                            </p>
                                        </div>
                                        <div
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
                                                                  count:
                                                                      space.capacity <
                                                                      1
                                                                          ? 2
                                                                          : space.capacity,
                                                              }
                                                }}
                                            </p>
                                        </div>
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
    styles: [``],
    imports: [
        AsyncPipe,
        TranslatePipe,
        MatProgressSpinnerModule,
        LevelPipe,
        IconComponent,
        MatRippleModule,
    ],
})
export class MeetingFlowSpaceListComponent {
    private _event_form = inject(EventFormService);
    private _settings = inject(SettingsService);

    public readonly selected_spaces = model<string[]>([]);
    public readonly space_selected = output<Space>();

    public readonly loading = this._event_form.loading$;
    public readonly available_spaces = this._event_form.available_spaces;
    public readonly room_alerts = this._event_form.room_alerts;

    public readonly favourites = settingSignal<string[]>(
        SETTING_KEYS.FAVORITE_ROOMS,
        [],
        true,
    );

    public toggleFavourite(space: Space) {
        const existing = this.favourites();
        console.log('Toggle Favourites:', space, existing);
        if (existing.find((id) => space.id === id)) {
            this._settings.saveUserSetting(
                SETTING_KEYS.FAVORITE_ROOMS,
                existing.filter((id) => id !== space.id),
            );
        } else {
            this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_ROOMS, [
                ...existing,
                space.id,
            ]);
        }
    }
}
