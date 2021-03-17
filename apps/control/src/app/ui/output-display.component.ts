import { Component, Input, SimpleChanges } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { ControlStateService, RoomOutput } from '../control-state.service';

const ICON_MAP = {
    'Display': 'deskotp_windows',
    'PC': 'desktop_windows',
    'Laptop': 'laptop_chromebook',
    'TV': 'tv'
}

@Component({
    selector: 'output-display',
    template: `
        <div class="p-4 m-2 bg-white rounded shadow text-black">
            <div
                view
                matRipple
                class="h-48 border border-gray-300 relative rounded mb-2 flex flex-col items-center justify-center space-y-2"
                [class.opacity-60]="!(input | async)"
                [class.bg-gray-300]="!(input | async)"
                (click)="switchSource()"
            >
                <div
                    class="absolute top-1 left-1 bg-secondary text-white shadow px-2 py-1 rounded"
                >
                    {{ item?.name }}
                </div>
                <app-icon class="text-7xl">{{
                    icons[(input | async)?.type] || 'add_to_queue'
                }}</app-icon>
                <p>
                    {{
                        (input | async)?.name || 'Click to select input source'
                    }}
                </p>
                <p class="text-xs">
                    <span *ngIf="(input | async)?.name">Click to switch input source</span>
                </p>
            </div>
            <div class="flex items-center space-x-2 w-full">
                <button mat-icon-button><app-icon>volume_up</app-icon></button>
                <mat-slider class="flex-1"></mat-slider>
            </div>
        </div>
    `,
    styles: [
        `
            [view] {
                width: 28vw;
            }
        `,
    ],
})
export class OutputDisplayComponent {
    @Input() public item: RoomOutput;
    /** ID of the input associated with the displayed output */
    private _input = new BehaviorSubject('');
    /** Details of the associated input */
    public readonly input = combineLatest([
        this._input,
        this._state.input_list,
    ]).pipe(map(([id, list]) => list.find((_) => _.id === id)));

    public readonly icons = ICON_MAP;

    public readonly switchSource = () => this._state.switchSource(this.item.id);


    constructor(private _state: ControlStateService) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.item) {
            this._input.next(this.item?.source || '');
        }
    }
}
