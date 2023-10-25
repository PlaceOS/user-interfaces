import { Component, Input, SimpleChanges } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { ControlStateService, RoomOutput } from '../control-state.service';

export const ICON_MAP = {
    Display: 'deskotp_windows',
    PC: 'desktop_windows',
    Laptop: 'laptop_chromebook',
    Camera: 'videocam',
    TV: 'tv',
};

@Component({
    selector: 'output-display',
    template: `
        <div class="p-4 m-2 bg-base-100 rounded shadow text-black" *ngIf="item">
            <div
                view
                matRipple
                class="h-48 border border-base-200 relative rounded mb-2 flex flex-col items-center justify-center space-y-2"
                [class.opacity-60]="!(input | async)"
                [class.bg-base-200]="!(input | async)"
                (click)="switchSource()"
            >
                <div
                    class="absolute top-1 left-1 bg-secondary text-white shadow px-2 py-1 rounded"
                >
                    {{ item?.name }}
                </div>
                <app-icon class="text-7xl">{{
                    (input | async)?.icon ||
                        icons[(input | async)?.type] ||
                        'add_to_queue'
                }}</app-icon>
                <p class="font-medium">
                    {{
                        (input | async)?.name || 'Click to select input source'
                    }}
                </p>
                <p class="text-xs">
                    <span *ngIf="(input | async)?.name" class="opacity-50">
                        Click to switch input source
                    </span>
                </p>
            </div>
            <div class="flex items-center space-x-2 w-full">
                <button icon matRipple (click)="setMute(!item.mute)">
                    <app-icon>{{
                        item.mute
                            ? 'volume_off'
                            : item.volume > 0
                            ? 'volume_up'
                            : 'volume_mute'
                    }}</app-icon>
                </button>
                <mat-slider class="flex-1"
                    ><input
                        matSliderThumb
                        [ngModel]="!mute ? item.volume : 0"
                        (ngModelChange)="setVolume($event)"
                /></mat-slider>
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
export class OutputDisplayComponent extends AsyncHandler {
    @Input() public item: RoomOutput;
    /** Current volume level for output */
    public volume: number;
    /** Current mute state of the output */
    public mute: boolean;
    /** ID of the input associated with the displayed output */
    private _input = new BehaviorSubject('');
    /** Details of the associated input */
    public readonly input = combineLatest([
        this._input,
        this._state.input_list,
    ]).pipe(map(([id, list]) => list.find((_) => _.id === id || _.ref === id)));

    public readonly icons = ICON_MAP;

    public readonly switchSource = () => this._state.switchSource(this.item.id);
    public readonly setVolume = (v) =>
        this.timeout('volume', () => this._state.setVolume(v, this.item.id));
    public readonly setMute = (s) => this._state.setMute(s, this.item.id);

    public get id(): string {
        return this._state.id;
    }

    constructor(private _state: ControlStateService) {
        super();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.item) {
            this._input.next(this.item?.source || '');
        }
    }
}
