import { Component, ElementRef, Inject } from '@angular/core';
import { MAP_FEATURE_DATA } from '@user-interfaces/components';
import { CalendarEvent } from '@user-interfaces/events';
import { Space } from '@user-interfaces/spaces';
import { getViewer, coordinatesForElement } from '@yuion/svg-viewer';

export interface SpaceInfoData {
    space: Space;
    events: CalendarEvent[];
    status: 'free' | 'busy' | 'pending' | 'reserved' | 'unknown' | '';
}

@Component({
    selector: 'explore-space-info',
    template: `
        <div
            *ngIf="space"
            name="space-info"
            [id]="space.id"
            [class]="
                'absolute rounded bg-white p-4 top-0 left-0 shadow ' +
                x_pos +
                ' ' +
                y_pos
            "
        >
            <div class="arrow"></div>
            <div class="details">
                <h4 class="m-0 mb-2">{{ space.display_name || space.name }}</h4>
                <div class="text-sm" *ngIf="space.capacity >= 0">
                    <span>Capacity: </span>{{ space.capacity }}
                    {{ space.capacity === 1 ? 'person' : 'people' }}
                </div>
                <div class="flex flex-wrap my-2 text-sm">
                    <div
                        name="status"
                        [class]="
                            'capitalize rounded p-1 px-2 text-light ' + status
                        "
                    >
                        {{ status }}
                    </div>
                    <div
                        name="available-until"
                        *ngIf="status !== 'not-bookable'"
                    >
                        {{ available_until }}
                    </div>
                </div>
                <div class="features" *ngIf="space.features?.length > 0">
                    <h4 class="m-0 mb-2">Room Features</h4>
                    <ul class="pl-2">
                        <li
                            class="text-sm"
                            *ngFor="let feature of space.features"
                        >
                            {{ feature }}
                        </li>
                    </ul>
                </div>
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
export class ExploreSpaceInfoComponent {
    /** Space to display details for */
    public readonly space = this._details.space;
    /** List of upcoming events for space */
    public readonly events = this._details.events;
    /** Current status of the space */
    public readonly status = this._details.status;

    public y_pos: 'top' | 'bottom';

    public x_pos: 'left' | 'right';

    constructor(
        @Inject(MAP_FEATURE_DATA) private _details: SpaceInfoData,
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
