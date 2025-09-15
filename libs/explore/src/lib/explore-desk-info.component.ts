import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, inject, signal } from '@angular/core';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';

import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

export interface DeskInfoData {
    id: string;
    map_id: string;
    user: string;
    name: string;
    start?: number;
    end?: number;
    department?: string;
    status: 'free' | 'busy' | 'pending' | 'reserved' | 'unknown' | '';
}

@Component({
    selector: 'explore-desk-info',
    template: `
        <div
            customTooltip
            [content]="desk_tooltip"
            [backdrop]="false"
            [xPosition]="'center'"
            [yPosition]="'center'"
            [hover]="true"
            [delay]="3000"
            class="pointer-events-auto relative z-20 h-full w-full"
            [attr.id]="id"
            [attr.map_id]="map_id"
        ></div>
        <ng-template #desk_tooltip>
            <div
                name="space-info"
                [id]="map_id"
                [class]="
                    'pointer-events-none absolute left-0 top-0 w-64 bg-base-100 p-1 shadow ' +
                    x_pos +
                    ' ' +
                    y_pos
                "
            >
                <div class="rounded-md border border-base-200 p-1">
                    <div class="triangle absolute"></div>
                    <div class="flex w-full items-center space-x-4">
                        <div class="flex flex-1 flex-col px-2 py-1">
                            <h4 map-id class="m-0 truncate font-medium">
                                {{ name || map_id || id }}
                            </h4>
                            @if (user) {
                                <p user class="text-xs">
                                    {{ user }}
                                </p>
                            }
                            @if (user && department) {
                                <p user class="text-xs">
                                    {{ department }}
                                </p>
                            }
                            @if (start) {
                                <p start class="text-xs">
                                    {{ start | date: 'shortTime' }} &ndash;
                                    {{ end | date: 'shortTime' }}
                                </p>
                            }
                        </div>
                        @if (status()) {
                            <div class="relative flex flex-wrap text-sm">
                                <div
                                    status
                                    [class]="
                                        'text-light rounded border border-base-100 p-1 px-2 capitalize shadow ' +
                                        status()
                                    "
                                >
                                    {{
                                        (status() === 'not-bookable'
                                            ? 'COMMON.STATUS_NOT_BOOKABLE'
                                            : 'COMMON.STATUS_' +
                                              (status() | uppercase)
                                        ) | translate
                                    }}
                                </div>
                                @if (status !== 'not-bookable') {
                                    <div available-until>
                                        {{ available_until }}
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            .top.left {
                border-radius: 0 0.5rem 0.5rem 0.5rem;
            }

            .top.right {
                border-radius: 0.5rem 0 0.5rem 0.5rem;
            }

            .bottom.left {
                border-radius: 0.5rem 0.5rem 0.5rem 0;
            }

            .bottom.right {
                border-radius: 0.5rem 0.5rem 0 0.5rem;
            }

            .triangle {
                width: 0px;
                height: 0px;
                border-style: solid;
                transform: rotate(0deg);
            }

            .top.left {
                .triangle {
                    top: 0.25rem;
                    left: 0.25rem;
                    border-width: 0.5rem 0.5rem 0 0;
                    border-color: currentColor transparent transparent
                        transparent;
                }
            }

            .top.right {
                .triangle {
                    top: 0.25rem;
                    right: 0.25rem;
                    border-width: 0.5rem 0 0 0.5rem;
                    border-color: currentColor transparent transparent
                        transparent;
                }
            }

            .bottom.left {
                .triangle {
                    bottom: 0.25rem;
                    left: 0.25rem;
                    border-width: 0 0.5rem 0.5rem 0;
                    border-color: transparent transparent currentColor
                        transparent;
                }
            }

            .bottom.right {
                .triangle {
                    bottom: 0.25rem;
                    right: 0.25rem;
                    border-width: 0 0 0.5rem 0.5rem;
                    border-color: transparent transparent currentColor
                        transparent;
                }
            }

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
    imports: [CommonModule, CustomTooltipComponent, TranslatePipe],
})
export class ExploreDeskInfoComponent implements OnInit {
    private _details = inject<DeskInfoData>(MAP_FEATURE_DATA);
    private _element = inject<ElementRef<HTMLElement>>(ElementRef);

    /** Space to display details for */
    public status = signal('');
    public readonly id = this._details.id;
    public readonly map_id = this._details.map_id;
    public readonly name = this._details.name;
    public readonly user = this._details.user;
    public readonly start = this._details.start;
    public readonly end = this._details.end;
    public readonly department = this._details.department;

    public y_pos: 'top' | 'bottom';

    public x_pos: 'left' | 'right';

    public ngOnInit(tries = 0) {
        if (tries > 10) return;
        setTimeout(() => {
            const parent =
                this._element.nativeElement.parentElement?.parentElement;
            if (!parent) return this.ngOnInit(++tries);
            const position = {
                y: parseInt(parent.style.top, 10) / 100,
                x: parseInt(parent.style.left, 10) / 100,
            };
            this.y_pos = position.y >= 0.5 ? 'bottom' : 'top';
            this.x_pos = position.x >= 0.5 ? 'right' : 'left';
        }, 200);
        if (typeof this._details.status === 'string') {
            this.status.set((this._details.status || '').trim());
        } else if (this._details.status != null) {
            this.status = this._details.status;
        }
    }

    public get available_until() {
        return '';
    }
}
