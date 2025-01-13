import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventFormService } from 'libs/events/src/lib/event-form.service';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';

import { Space } from '../space.class';

@Component({
    selector: `space-list`,
    template: `
        <h3 class="font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="text-sm opacity-60 mb-4">
            {{ (available_spaces | async)?.length || 0 }} result(s) found
        </p>
        <ng-container *ngIf="!(loading | async); else load_state">
            <ul
                class="list-style-none space-y-2"
                *ngIf="(available_spaces | async)?.length; else empty_state"
            >
                <li
                    space
                    *ngFor="let space of available_spaces | async"
                    [class.!border-info]="active === space.id"
                    class="relative p-2 rounded-lg w-full shadow border bg-base-100 border-base-200"
                    [class.!bg-error-light]="
                        (room_alerts | async)[space.id]
                            ? (room_alerts | async)[space.id][0] === 'closed'
                            : false
                    "
                >
                    <button
                        matRipple
                        name="select-space"
                        class="w-full h-full flex items-center rounded"
                        (click)="selectSpace(space)"
                        [class.pointer-events-none]="
                            (room_alerts | async)[space.id]
                                ? (room_alerts | async)[space.id][0] ===
                                  'closed'
                                : false
                        "
                    >
                        <div
                            class="relative min-w-[5rem] w-20 h-20 rounded-xl bg-base-200 mr-4 overflow-hidden flex items-center justify-center"
                        >
                            <div
                                class="absolute top-1 left-1 border border-neutral bg-base-200 rounded-full h-6 w-6 flex items-center justify-center text-white"
                                *ngIf="selected.includes(space.id)"
                            >
                                <app-icon>done</app-icon>
                            </div>
                            <img
                                auth
                                *ngIf="
                                    space.images?.length;
                                    else space_placeholder
                                "
                                class="object-cover h-full"
                                [source]="space.images[0]"
                            />
                            <ng-template #space_placeholder>
                                <img
                                    class="m-auto"
                                    src="assets/icons/room-placeholder.svg"
                                />
                            </ng-template>
                            <div
                                class="absolute bottom-1 left-1 rounded-full h-6 w-6 rotate-12 pointer-events-auto flex items-center justify-center"
                                *ngIf="(room_alerts | async)[space.id]"
                                [matTooltip]="
                                    (room_alerts | async)[space.id][1]
                                "
                                [class.bg-error]="
                                    (room_alerts | async)[space.id][0] ===
                                    'closed'
                                "
                                [class.bg-info]="
                                    (room_alerts | async)[space.id][0] ===
                                    'info'
                                "
                                [class.bg-warning]="
                                    (room_alerts | async)[space.id][0] ===
                                    'warn'
                                "
                                [class.text-error-content]="
                                    (room_alerts | async)[space.id][0] ===
                                    'closed'
                                "
                                [class.text-info-content]="
                                    (room_alerts | async)[space.id][0] ===
                                    'info'
                                "
                                [class.text-warning-content]="
                                    (room_alerts | async)[space.id][0] ===
                                    'warn'
                                "
                                (click)="$event.stopPropagation()"
                            >
                                <app-icon>{{
                                    (room_alerts | async)[space.id][0] ===
                                    'warn'
                                        ? 'warning'
                                        : (room_alerts | async)[space.id][0] ===
                                            'info'
                                          ? 'info'
                                          : 'close'
                                }}</app-icon>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <div class="font-medium truncate mr-10">
                                {{
                                    space.display_name ||
                                        space.name ||
                                        'Meeting Space'
                                }}
                            </div>
                            <div class="flex items-center text-sm space-x-2">
                                <app-icon class="text-info">place</app-icon>
                                <p class="truncate">
                                    {{
                                        space.location ||
                                            level(space.zones)?.display_name ||
                                            level(space.zones)?.name
                                    }}
                                </p>
                            </div>
                            <div class="flex items-center text-sm space-x-2">
                                <app-icon class="text-info">people</app-icon>
                                <p>
                                    {{
                                        'CALENDAR_EVENT.CAPACITY_COUNT'
                                            | translate
                                                : {
                                                      count:
                                                          space.capacity < 1
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
                        class="absolute top-1 right-1"
                        [class.text-info]="isFavourite(space.id)"
                        (click)="toggleFav.emit(space)"
                    >
                        <app-icon>{{
                            isFavourite(space.id)
                                ? 'favorite'
                                : 'favorite_border'
                        }}</app-icon>
                    </button>
                </li>
            </ul>
        </ng-container>
        <ng-template #empty_state>
            <div
                empty
                class="p-16 flex flex-col items-center justify-center space-y-2"
            >
                <p class="opacity-30 text-center">
                    {{ 'CALENDAR_EVENT.SPACE_SELECT_EMPTY' | translate }}
                </p>
            </div>
        </ng-template>
        <ng-template #load_state>
            <div
                loading
                class="p-16 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">
                    {{ 'CALENDAR_EVENT.SPACE_SELECT_LOADING' | translate }}
                </p>
            </div>
        </ng-template>
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
    standalone: false
})
export class SpaceListComponent {
    @Input() public active: string = '';
    @Input() public selected: string = '';
    @Input() public favorites: string[] = [];
    @Output() public onSelect = new EventEmitter<Space>();
    @Output() public toggleFav = new EventEmitter<Space>();
    public readonly loading = this._event_form.loading;

    public readonly available_spaces = this._event_form.available_spaces;
    public readonly room_alerts = this._event_form.room_alerts;

    constructor(
        private _event_form: EventFormService,
        private _org: OrganisationService,
    ) {}

    public level(zones: string[]) {
        return this._org.levelWithID(zones);
    }

    public ngOnInit() {
        this._event_form.setView('find');
    }

    public isFavourite(space_id: string) {
        return this.favorites.includes(space_id);
    }

    public selectSpace(space: Space) {
        this.onSelect.emit(space);
    }
}
