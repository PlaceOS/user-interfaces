import { Component, inject, input, output } from '@angular/core';
import { EventFormService } from 'libs/events/src/lib/new-event-form.service';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { Space } from '../space.class';

@Component({
    selector: `space-list`,
    template: `
        <h3 class="font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="mb-4 text-sm opacity-60">
            {{ (available_spaces | async)?.length || 0 }} result(s) found
        </p>
        @if (!(loading | async)) {
            @if ((available_spaces | async)?.length) {
                <ul class="list-style-none space-y-2">
                    @for (space of available_spaces | async; track space) {
                        <li
                            space
                            [class.!border-info]="active() === space.id"
                            class="relative w-full rounded-lg border border-base-200 bg-base-100 p-2 shadow"
                            [class.!bg-error-light]="
                                (room_alerts | async)[space.id]
                                    ? (room_alerts | async)[space.id][0] ===
                                      'closed'
                                    : false
                            "
                        >
                            <button
                                matRipple
                                name="select-space"
                                class="flex h-full w-full items-center rounded"
                                (click)="selectSpace(space)"
                                [class.pointer-events-none]="
                                    (room_alerts | async)[space.id]
                                        ? (room_alerts | async)[space.id][0] ===
                                          'closed'
                                        : false
                                "
                            >
                                <div
                                    class="relative mr-4 flex h-20 w-20 min-w-[5rem] items-center justify-center overflow-hidden rounded-xl bg-base-200"
                                >
                                    @if (selected().includes(space.id)) {
                                        <div
                                            class="absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-neutral bg-base-200 text-white"
                                        >
                                            <icon>done</icon>
                                        </div>
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
                                    @if ((room_alerts | async)[space.id]) {
                                        <div
                                            class="pointer-events-auto absolute bottom-1 left-1 flex h-6 w-6 items-center justify-center rounded-full"
                                            [matTooltip]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][1]
                                            "
                                            [class.bg-error]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'closed'
                                            "
                                            [class.bg-info]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'info'
                                            "
                                            [class.bg-warning]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'warn'
                                            "
                                            [class.text-error-content]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'closed'
                                            "
                                            [class.text-info-content]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'info'
                                            "
                                            [class.text-warning-content]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'warn'
                                            "
                                            (click)="$event.stopPropagation()"
                                        >
                                            <icon>{{
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'warn'
                                                    ? 'warning'
                                                    : (room_alerts | async)[
                                                            space.id
                                                        ][0] === 'info'
                                                      ? 'info'
                                                      : 'close'
                                            }}</icon>
                                        </div>
                                    }
                                </div>
                                <div class="space-y-2">
                                    <div
                                        class="mr-10 truncate text-left font-medium"
                                    >
                                        {{
                                            space.display_name ||
                                                space.name ||
                                                'Meeting Space'
                                        }}
                                    </div>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-info">place</icon>
                                        <p class="truncate">
                                            {{
                                                space.location ||
                                                    level(space.zones)
                                                        ?.display_name ||
                                                    level(space.zones)?.name
                                            }}
                                        </p>
                                    </div>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-info">people</icon>
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
                            <button
                                icon
                                matRipple
                                name="toggle-space-favourite"
                                class="absolute right-1 top-1"
                                [class.text-info]="isFavourite(space.id)"
                                (click)="toggleFav.emit(space)"
                            >
                                <icon>{{
                                    isFavourite(space.id)
                                        ? 'favorite'
                                        : 'favorite_border'
                                }}</icon>
                            </button>
                            @if (space.approval) {
                                <div
                                    class="absolute bottom-1 right-1 rounded bg-warning px-2 py-1 text-[0.625rem] font-medium text-warning-content"
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
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
                padding: 0.5rem;
                overflow: auto;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatRippleModule,
        TranslatePipe,
        IconComponent,
        MatProgressSpinnerModule,
        AuthenticatedImageDirective,
    ],
})
export class SpaceListComponent {
    private _event_form = inject(EventFormService);
    private _org = inject(OrganisationService);

    public readonly active = input('');
    public readonly selected = input('');
    public readonly favorites = input<string[]>([]);
    public readonly onSelect = output<Space>();
    public readonly toggleFav = output<Space>();
    public readonly loading = this._event_form.loading$;

    public readonly available_spaces = this._event_form.available_spaces;
    public readonly room_alerts = this._event_form.room_alerts;

    public level(zones: string[]) {
        return this._org.levelWithID(zones);
    }

    public ngOnInit() {
        this._event_form.setView('find');
    }

    public isFavourite(space_id: string) {
        return this.favorites().includes(space_id);
    }

    public selectSpace(space: Space) {
        this.onSelect.emit(space);
    }
}
