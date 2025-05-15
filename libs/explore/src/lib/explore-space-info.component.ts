import { CommonModule } from '@angular/common';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import {
    CustomTooltipComponent,
    MAP_FEATURE_DATA,
    TranslatePipe,
} from '@placeos/components';
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
            class="pointer-events-auto relative hidden h-full w-full cursor-pointer sm:block"
        ></div>
        <ng-template #space_tooltip>
            <div
                name="space-info"
                [id]="space?.id"
                class="pointer-events-none absolute left-0 top-0 transform overflow-hidden rounded bg-base-100 shadow"
                [class.-translate-x-full]="x_pos === 'end'"
                [class.-translate-y-full]="y_pos === 'bottom'"
            >
                <div class="arrow"></div>
                <div class="relative">
                    <div
                        class="relative flex w-full items-center justify-center overflow-hidden bg-opacity-20"
                        [class.bg-neutral]="space.images[0]"
                        [class.h-32]="space.images[0]"
                        [class.h-8]="!space.images[0]"
                    >
                        <img
                            auth
                            *ngIf="space.images[0]"
                            [source]="space.images[0]"
                            class="min-h-full min-w-full object-cover"
                        />
                        <div
                            class="absolute inset-0 bg-neutral opacity-30"
                            *ngIf="space.images[0]"
                        ></div>
                    </div>
                    <div class="absolute left-2 top-2 flex flex-wrap text-sm">
                        <div
                            status
                            [class]="
                                'text-light rounded border border-white p-1 px-2 capitalize shadow ' +
                                status
                            "
                        >
                            {{
                                (status === 'not-bookable'
                                    ? 'COMMON.STATUS_NOT_BOOKABLE'
                                    : 'COMMON.STATUS_' + (status | uppercase)
                                ) | translate
                            }}
                        </div>
                        <div available-until *ngIf="status !== 'not-bookable'">
                            {{ available_until }}
                        </div>
                    </div>
                    <div class="flex flex-col px-2 py-4">
                        <h4 class="mb-2 px-2 text-xl font-medium">
                            {{ space.display_name || space.name }}
                        </h4>
                        <div
                            capacity
                            class="mb-2 px-2 text-base"
                            *ngIf="space.capacity >= 0"
                        >
                            <span>{{ 'COMMON.CAPACITY' | translate }}: </span
                            >{{ space.capacity }}
                            {{ space.capacity === 1 ? 'person' : 'people' }}
                        </div>
                        <ul
                            class="flex flex-wrap"
                            *ngIf="space.features?.length > 0 && show_features"
                        >
                            <li
                                class="m-1 rounded-2xl bg-base-200 px-2 py-1 text-xs font-medium"
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

    imports: [CommonModule, CustomTooltipComponent, TranslatePipe],
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
        private _element: ElementRef<HTMLElement>,
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
