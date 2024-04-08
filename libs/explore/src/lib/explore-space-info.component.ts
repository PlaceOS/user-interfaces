import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { MAP_FEATURE_DATA } from '@placeos/components';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { CalendarEvent } from 'libs/events/src/lib/event.class';
import { Space } from 'libs/spaces/src/lib/space.class';

export interface SpaceInfoData {
    space: Space;
    events: CalendarEvent[];
    status:
        | 'free'
        | 'busy'
        | 'pending'
        | 'reserved'
        | 'not-bookable'
        | 'unknown'
        | '';
}

@Component({
    selector: 'explore-space-info',
    template: `
        <div
            #tooltip
            customTooltip
            [content]="space_tooltip"
            [backdrop]="false"
            [xPosition]="'center'"
            [yPosition]="'center'"
            [hover]="true"
            [delay]="3000"
            [attr.id]="space?.map_id || space?.id"
            (mouseenter)="updateOffset()"
            class="h-full w-full pointer-events-auto relative hidden sm:block cursor-pointer"
        ></div>
        <ng-template #space_tooltip>
            <div
                name="space-info"
                [id]="space?.id"
                class="
                    absolute rounded bg-base-100 top-0 left-0 transform shadow pointer-events-none overflow-hidden
                "
                [class.-translate-x-full]="x_pos === 'end'"
                [class.-translate-y-full]="y_pos === 'bottom'"
            >
                <div class="arrow"></div>
                <div class="relative">
                    <div
                        class="w-full overflow-hidden flex items-center justify-center relative bg-opacity-20"
                        [class.bg-neutral]="space.images[0]"
                        [class.h-32]="space.images[0]"
                        [class.h-8]="!space.images[0]"
                    >
                        <img
                            auth
                            *ngIf="space.images[0]"
                            [source]="space.images[0]"
                            class="object-cover min-h-full min-w-full"
                        />
                        <div
                            class="absolute inset-0 bg-neutral"
                            *ngIf="space.images[0]"
                        ></div>
                    </div>
                    <div class="absolute top-2 left-2 flex flex-wrap text-sm ">
                        <div
                            status
                            [class]="
                                'capitalize rounded p-1 px-2 text-light border border-white shadow ' +
                                status
                            "
                        >
                            { status, select, free { Free } busy { Busy }
                            pending { Pending } reserved { Reserved } other {
                            Not Bookable } }
                        </div>
                        <div available-until *ngIf="status !== 'not-bookable'">
                            {{ available_until }}
                        </div>
                    </div>
                    <div class="flex flex-col py-4 px-2">
                        <h4 class="font-medium text-xl mb-2 px-2">
                            {{ space.display_name || space.name }}
                        </h4>
                        <div
                            capacity
                            class="text-base px-2 mb-2"
                            *ngIf="space.capacity >= 0"
                        >
                            <span i18n>Capacity: </span>{{ space.capacity }}
                            {{ space.capacity === 1 ? 'person' : 'people' }}
                        </div>
                        <ul
                            class="flex flex-wrap"
                            *ngIf="space.features?.length > 0 && show_features"
                        >
                            <li
                                class="text-xs px-2 py-1 m-1 rounded-2xl bg-base-200 font-medium"
                                *ngFor="let feature of space.features"
                            >
                                {{ feature }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            [name='space-info'] {
                width: 16rem;
            }

            [status] {
                background-color: #43a047;
                font-weight: 500;
            }

            [status].busy {
                background-color: #e53935;
            }

            [status].pending {
                background-color: #ffb300;
            }

            [status].not-bookable {
                background-color: #757575;
            }
        `,
    ],
})
export class ExploreSpaceInfoComponent implements OnInit {
    /** Space to display details for */
    public readonly space = this._details.space;
    /** List of upcoming events for space */
    public readonly events = this._details.events;
    /** Current status of the space */
    public readonly status = this._details.status;

    public y_pos: 'top' | 'bottom';

    public x_pos: 'start' | 'end';

    public get show_features() {
        return !this._settings.get('app.spaces.hide_features');
    }

    constructor(
        @Inject(MAP_FEATURE_DATA) private _details: SpaceInfoData,
        private _settings: SettingsService,
        private _element: ElementRef<HTMLElement>
    ) {}

    public ngOnInit() {
        setTimeout(() => this.updateOffset(), 200);
    }

    public updateOffset() {
        const pos = this._element.nativeElement.getBoundingClientRect();
        this.x_pos = pos.x < document.body.clientWidth / 2 ? 'start' : 'end';
        this.y_pos = pos.y < document.body.clientHeight / 2 ? 'top' : 'bottom';
    }

    public get available_until() {
        return '';
    }
}
