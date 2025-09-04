import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
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
                class="pointer-events-none absolute left-0 top-0 w-64 transform overflow-hidden rounded bg-base-100 shadow"
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
                        @if (space.images[0]) {
                            <img
                                auth
                                [source]="space.images[0]"
                                class="min-h-full min-w-full object-cover"
                            />
                        } @else {
                            <div
                                class="absolute inset-0 bg-neutral opacity-30"
                            ></div>
                        }
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
                        @if (status !== 'not-bookable') {
                            <div available-until>
                                {{ available_until }}
                            </div>
                        }
                    </div>
                    <div class="flex flex-col px-2 py-4">
                        <h4 class="mb-2 px-2 text-xl font-medium">
                            {{ space.display_name || space.name }}
                        </h4>
                        @if (space.capacity >= 0) {
                            <div capacity class="mb-2 px-2 text-base">
                                <span
                                    >{{ 'COMMON.CAPACITY' | translate }}: </span
                                >{{ space.capacity }}
                                {{ space.capacity === 1 ? 'person' : 'people' }}
                            </div>
                        }
                        @if (space.features?.length > 0 && show_features) {
                            <ul class="flex flex-wrap">
                                @for (
                                    feature of space.features;
                                    track feature
                                ) {
                                    <li
                                        class="m-1 rounded-2xl bg-base-200 px-2 py-1 text-xs font-medium"
                                    >
                                        {{ feature }}
                                    </li>
                                }
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            [status] {
                background-color: var(--su);
                color: var(--suc);
            }

            [status].busy {
                background-color: var(--er);
                color: var(--erc);
            }

            [status].pending {
                background-color: var(--wa);
                color: var(--wac);
            }

            [status].not-bookable {
                background-color: var(--b3);
            }
        `,
    ],

    imports: [
        CommonModule,
        CustomTooltipComponent,
        TranslatePipe,
        AuthenticatedImageDirective,
    ],
})
export class ExploreSpaceInfoComponent implements OnInit {
    private _details = inject<SpaceInfoData>(MAP_FEATURE_DATA);
    private _settings = inject(SettingsService);
    private _element = inject<ElementRef<HTMLElement>>(ElementRef);

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
