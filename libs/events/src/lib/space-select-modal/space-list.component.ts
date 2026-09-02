import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OrganisationService, Space } from '@placeos/common';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { EventFormService } from 'libs/events/src/lib/event-form.service';

@Component({
    selector: `space-list`,
    template: `
        @if (selected_spaces().length) {
            <h3 selected-spaces-heading class="px-2 font-bold">
                {{ 'RESOURCE.ROOMS' | translate }}
            </h3>
            <p selected-spaces-count class="mb-2 px-2 text-sm opacity-60">
                {{
                    'COMMON.SELECTED_COUNT'
                        | translate: { count: selected_spaces().length }
                }}
            </p>
            <ul selected-spaces class="list-style-none mb-4 space-y-2">
                @for (item of selected_spaces(); track item.space.id) {
                    <ng-container
                        [ngTemplateOutlet]="space_item"
                        [ngTemplateOutletContext]="{
                            $implicit: item.space,
                            location: item.location,
                        }"
                    ></ng-container>
                }
            </ul>
        }
        <h3 class="px-2 font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="mb-4 px-2 text-sm opacity-60">
            {{
                'COMMON.RESULTS_COUNT'
                    | translate
                        : { count: result_spaces().length }
                        : result_spaces().length
            }}
        </p>
        @if (!loading()) {
            @if (result_spaces().length) {
                <ul results class="list-style-none space-y-2">
                    @for (space of result_spaces(); track space.id) {
                        <ng-container
                            [ngTemplateOutlet]="space_item"
                            [ngTemplateOutletContext]="{
                                $implicit: space,
                                location: '',
                            }"
                        ></ng-container>
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
                </p>
            </div>
        }
        <ng-template #space_item let-space let-location="location">
            <li
                space
                [class.border-info!]="active() === space.id"
                class="border-base-200 bg-base-100 relative w-full rounded-lg border p-2 shadow-sm"
                [class.bg-error-light!]="
                    room_alerts()[space.id]
                        ? room_alerts()[space.id][0] === 'closed'
                        : false
                "
            >
                <button
                    matRipple
                    name="select-space"
                    class="flex h-full w-full items-center rounded-sm"
                    (click)="selectSpace(space)"
                    [class.pointer-events-none]="
                        room_alerts()[space.id]
                            ? room_alerts()[space.id][0] === 'closed'
                            : false
                    "
                >
                    <div
                        class="bg-base-200 relative mr-4 flex h-20 w-20 min-w-20 items-center justify-center overflow-hidden rounded-xl"
                    >
                        @if (selected().includes(space.id)) {
                            <div
                                class="border-neutral bg-base-200 absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border"
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
                        @if (room_alerts()[space.id]) {
                            <div
                                class="pointer-events-auto absolute bottom-1 left-1 flex h-6 w-6 items-center justify-center rounded-full"
                                [matTooltip]="room_alerts()[space.id][1]"
                                [class.bg-error]="
                                    room_alerts()[space.id][0] === 'closed'
                                "
                                [class.bg-info]="
                                    room_alerts()[space.id][0] === 'info'
                                "
                                [class.bg-warning]="
                                    room_alerts()[space.id][0] === 'warn'
                                "
                                [class.text-error-content]="
                                    room_alerts()[space.id][0] === 'closed'
                                "
                                [class.text-info-content]="
                                    room_alerts()[space.id][0] === 'info'
                                "
                                [class.text-warning-content]="
                                    room_alerts()[space.id][0] === 'warn'
                                "
                                (click)="$event.stopPropagation()"
                            >
                                <icon>{{
                                    room_alerts()[space.id][0] === 'warn'
                                        ? 'warning'
                                        : room_alerts()[space.id][0] === 'info'
                                          ? 'info'
                                          : 'close'
                                }}</icon>
                            </div>
                        }
                    </div>
                    <div class="w-full space-y-2">
                        <div class="mr-10 truncate text-left font-medium">
                            {{
                                space.display_name ||
                                    space.name ||
                                    'Meeting Space'
                            }}
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-info">place</icon>
                            <p class="truncate">
                                {{
                                    location ||
                                        $any(space).location ||
                                        level(space.zones)?.display_name ||
                                        level(space.zones)?.name
                                }}
                            </p>
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-info">people</icon>
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
                    <icon
                        [className]="
                            isFavourite(space.id)
                                ? 'material-symbols-rounded'
                                : 'material-symbols-outlined'
                        "
                        >favorite</icon
                    >
                </button>
                @if (space.approval) {
                    <div
                        class="bg-warning text-warning-content absolute right-1 bottom-1 w-14 rounded-sm px-2 py-1 text-center text-[0.625rem] leading-tight font-medium"
                    >
                        {{ 'COMMON.APPROVAL_REQUIRED' | translate }}
                    </div>
                }
            </li>
        </ng-template>
    `,
    styles: [``],
    imports: [
        MatRippleModule,
        TranslatePipe,
        IconComponent,
        MatProgressSpinnerModule,
        AuthenticatedImageDirective,
        MatTooltipModule,
        NgTemplateOutlet,
    ],
})
export class SpaceListComponent {
    private _event_form = inject(EventFormService);
    private _org = inject(OrganisationService);

    public readonly active = input('');
    public readonly selected = input<string[]>([]);
    public readonly selected_spaces = input<
        Array<{ space: Space; location: string }>
    >([]);
    public readonly favorites = input<string[]>([]);
    public readonly onSelect = output<Space>();
    public readonly toggleFav = output<Space>();
    public readonly loading = this._event_form.loading;

    public readonly available_spaces = this._event_form.available_spaces;
    public readonly room_alerts = this._event_form.room_alerts;
    public readonly result_spaces = computed(() => {
        const selected_ids = new Set(
            this.selected_spaces().map((item) => item.space.id),
        );
        return (this.available_spaces() || []).filter(
            (space) => !selected_ids.has(space.id),
        );
    });

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
