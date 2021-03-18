import { Component, Input, SimpleChanges } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { ControlStateService, RoomOutput } from '../control-state.service';

const ICON_MAP = {
    Display: 'deskotp_windows',
    PC: 'desktop_windows',
    Laptop: 'laptop_chromebook',
    Camera: 'videocam',
    TV: 'tv',
};

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
                <button mat-icon-button (click)="mute = !mute">
                    <app-icon>{{
                        mute
                            ? 'volume_off'
                            : volume > 0
                            ? 'volume_up'
                            : 'volume_mute'
                    }}</app-icon>
                </button>
                <mat-slider
                    [ngModel]="!mute ? volume : 0"
                    (ngModelChange)="volume = $event; mute = false"
                    class="flex-1"
                ></mat-slider>
            </div>
        </div>
        <div *ngIf="item?.module">
            <i
                binding
                [sys]="id"
                [mod]="item.module"
                bind="volume"
                exec="volume"
                [(model)]="volume"
            ></i>
            <i
                binding
                [sys]="id"
                [mod]="item.module"
                bind="mute"
                exec="mute"
                [(model)]="mute"
            ></i>
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
    ]).pipe(map(([id, list]) => list.find((_) => _.id === id)));

    public readonly icons = ICON_MAP;

    public readonly switchSource = () => this._state.switchSource(this.item.id);

    public get id(): string {
        return this._state.id;
    }

    constructor(private _state: ControlStateService) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.item) {
            this._input.next(this.item?.source || '');
        }
    }
}
