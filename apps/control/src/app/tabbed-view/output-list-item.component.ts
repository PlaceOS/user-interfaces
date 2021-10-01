import { Component, Input, SimpleChanges } from '@angular/core';
import { BaseClass } from '@placeos/common';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ControlStateService, RoomOutput } from '../control-state.service';
import { ICON_MAP } from '../ui/output-display.component';

@Component({
    selector: 'device-output-list-item',
    template: `
        <button
            matRipple
            class="m-2 rounded bg-white shadow h-40 w-full flex-1 border p-2"
            [class.border-primary]="active"
            *ngIf="item || true"
            (click)="setActiveOutput()"
        >
            <div
                class="bg-secondary bg-opacity/90 rounded w-full h-[6.5rem] relative flex flex-col items-center justify-center"
                [class.!bg-gray-400]="!(input | async)"
            >
                <div
                    class="absolute top-1 left-1 p-1 text-sm rounded bg-white/20"
                    [class.!bg-primary]="active"
                >
                    {{ item?.name || 'Display' }}
                </div>
                <app-icon class="text-5xl">
                    {{ (input | async)?.icon || icons[(input | async)?.type] || 'add_to_queue' }}
                </app-icon>
                <span
                    class="text-white text-sm"
                    [class.opacity-60]="!(input | async)"
                >
                    {{ (input | async)?.name || 'No input source' }}
                </span>
            </div>
            <div class="flex items-center space-x-2 w-full text-black">
                <button mat-icon-button (click)="setMute(!item?.mute)">
                    <app-icon>{{
                        item?.mute
                            ? 'volume_off'
                            : item?.volume > 0
                            ? 'volume_up'
                            : 'volume_mute'
                    }}</app-icon>
                </button>
                <mat-slider
                    [ngModel]="!mute ? item?.volume : 0"
                    (ngModelChange)="setVolume($event)"
                    class="flex-1"
                ></mat-slider>
            </div>
        </button>
    `,
    styles: [
        `
            :host {
                display: flex;
            }
        `,
    ],
})
export class DeviceOutputListItemComponent extends BaseClass {
    @Input() public item: RoomOutput;
    @Input() public active: boolean;
    /** Current volume level for output */
    public volume: number;
    /** Current mute state of the output */
    public mute: boolean;

    public readonly icons = ICON_MAP;
    /** ID of the input associated with the displayed output */
    private _input = new BehaviorSubject('');
    /** Details of the associated input */
    public readonly input = combineLatest([
        this._input,
        this._state.input_list,
    ]).pipe(map(([id, list]) => list.find((_) => _.id === id || _.ref === id)));

    public readonly setVolume = (v) =>
        this.timeout('volume', () => this._state.setVolume(v, this.item?.id));
    public readonly setMute = (s) => this._state.setMute(s, this.item?.id);
    public readonly setActiveOutput = () =>
        this._state.setOutput(this.item?.id);

    constructor(private _state: ControlStateService) {
        super();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.item) {
            this._input.next(this.item?.source || '');
        }
    }
}
