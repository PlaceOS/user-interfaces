import { Component, ElementRef, Inject, OnInit } from '@angular/core';

import { MAP_FEATURE_DATA } from '@placeos/components';

export interface DeskInfoData {
    map_id: string;
    user: string;
    start?: number;
    end?: number;
    status: 'free' | 'busy' | 'pending' | 'reserved' | 'unknown' | '';
}

@Component({
    selector: 'explore-desk-info',
    template: `
        <div
            name="space-info"
            [id]="map_id"
            [class]="
                'absolute rounded bg-white p-4 top-0 left-0 shadow ' +
                x_pos +
                ' ' +
                y_pos
            "
        >
            <div class="arrow"></div>
            <div class="details">
                <h4 map-id class="m-0 font-medium">{{ map_id }}</h4>
                <p user class="mt-2 text-sm" *ngIf="user">{{ user }}</p>
                <p start class="mt-1 text-sm" *ngIf="start">
                    {{ start | date: 'shortTime' }} &ndash;
                    {{ end | date: 'shortTime' }}
                </p>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 1;
            }

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
    public readonly map_id = this._details.map_id;
    public readonly user = this._details.user;
    public readonly start = this._details.start;
    public readonly end = this._details.end;

    public y_pos: 'top' | 'bottom';

    public x_pos: 'left' | 'right';

    constructor(
        @Inject(MAP_FEATURE_DATA) private _details: DeskInfoData,
        private _element: ElementRef<HTMLElement>
    ) {}

    public ngOnInit(tries: number = 0) {
        if (tries > 10) return;
        setTimeout(() => {
            const parent = this._element.nativeElement.parentElement
                ?.parentElement;
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
