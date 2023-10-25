import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { SettingsService } from '@placeos/common';

import { MAP_FEATURE_DATA } from 'libs/components/src/lib/interactive-map.component';

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
            class="h-full w-full pointer-events-auto relative z-20"
            [attr.id]="id"
            [attr.map_id]="map_id"
        ></div>
        <ng-template #desk_tooltip>
            <div
                name="space-info"
                [id]="map_id"
                [class]="
                    'absolute rounded bg-base-100 p-4 top-0 left-0 shadow pointer-events-none ' +
                    x_pos +
                    ' ' +
                    y_pos
                "
            >
                <div class="arrow"></div>
                <div class="details">
                    <h4 map-id class="m-0 font-medium">
                        {{ name || map_id || id }}
                    </h4>
                    <p user class="mt-2 text-sm" *ngIf="user">{{ user }}</p>
                    <p user class="mt-1 text-sm" *ngIf="user && department">
                        {{ department }}
                    </p>
                    <p start class="mt-1 text-sm" *ngIf="start">
                        {{ start | date: 'shortTime' }} &ndash;
                        {{ end | date: 'shortTime' }}
                    </p>
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            [name='space-info'] {
                width: 16rem;
            }

            [name='status'] {
                background-color: #43a047;
                font-weight: 500;
            }

            [name='status'].busy {
                background-color: #e53935;
            }

            [name='status'].pending {
                background-color: #ffb300;
            }

            [name='status'].not-bookable {
                background-color: #757575;
            }
        `,
    ],
})
export class ExploreDeskInfoComponent implements OnInit {
    /** Space to display details for */
    public readonly id = this._details.id;
    public readonly map_id = this._details.map_id;
    public readonly name = this._details.name;
    public readonly user = this._details.user;
    public readonly start = this._details.start;
    public readonly end = this._details.end;
    public readonly status = this._details.status;
    public readonly department = this._details.department;

    public y_pos: 'top' | 'bottom';

    public x_pos: 'left' | 'right';

    constructor(
        @Inject(MAP_FEATURE_DATA) private _details: DeskInfoData,
        private _element: ElementRef<HTMLElement>
    ) {}

    public ngOnInit(tries: number = 0) {
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
    }

    public get available_until() {
        return '';
    }
}
