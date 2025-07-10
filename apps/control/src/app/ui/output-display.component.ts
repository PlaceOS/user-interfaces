import {
    Component,
    OnChanges,
    SimpleChanges,
    inject,
    input,
} from '@angular/core';
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
        @if (item()) {
            <div class="m-2 rounded bg-base-100 p-4 text-black shadow">
                <div
                    view
                    matRipple
                    class="relative mb-2 flex h-48 flex-col items-center justify-center space-y-2 rounded border border-base-200"
                    [class.opacity-60]="!(input | async)"
                    [class.bg-base-200]="!(input | async)"
                    (click)="switchSource()"
                >
                    <div
                        class="absolute left-1 top-1 rounded bg-secondary px-2 py-1 text-white shadow"
                    >
                        {{ item()?.name }}
                    </div>
                    <icon class="text-7xl">{{
                        (input | async)?.icon ||
                            icons[(input | async)?.type] ||
                            'add_to_queue'
                    }}</icon>
                    <p class="font-medium">
                        {{
                            (input | async)?.name ||
                                'Click to select input source'
                        }}
                    </p>
                    <p class="text-xs">
                        @if ((input | async)?.name) {
                            <span class="opacity-50">
                                {{ 'APP.CONTROL.OUTPUT_SWITCH' | translate }}
                            </span>
                        }
                    </p>
                </div>
                <div class="flex w-full items-center space-x-2">
                    <button icon matRipple (click)="setMute(!item().mute)">
                        <icon>{{
                            item().mute
                                ? 'volume_off'
                                : item().volume > 0
                                  ? 'volume_up'
                                  : 'volume_mute'
                        }}</icon>
                    </button>
                    <mat-slider class="flex-1"
                        ><input
                            matSliderThumb
                            [ngModel]="!mute ? item().volume : 0"
                            (ngModelChange)="setVolume($event)"
                    /></mat-slider>
                </div>
            </div>
        }
    `,
    styles: [
        `
            [view] {
                width: 28vw;
            }
        `,
    ],
    standalone: false,
})
export class OutputDisplayComponent extends AsyncHandler implements OnChanges {
    private _state = inject(ControlStateService);

    public readonly item = input<RoomOutput>(undefined);
    /** Current volume level for output */
    public volume: number;
    /** Current mute state of the output */
    public mute: boolean;
    /** ID of the input associated with the displayed output */
    private _input = new BehaviorSubject('');
    /** Details of the associated input */
    public readonly input = combineLatest([
        this._input,
        this._state.available_inputs,
    ]).pipe(map(([id, list]) => list.find((_) => _.id === id || _.ref === id)));

    public readonly icons = ICON_MAP;

    public readonly switchSource = () =>
        this._state.switchSource(this.item().id);
    public readonly setVolume = (v) =>
        this.timeout('volume', () => this._state.setVolume(v, this.item().id));
    public readonly setMute = (s) => this._state.setMute(s, this.item().id);

    public get id(): string {
        return this._state.id;
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.item) {
            this._input.next(this.item()?.source || '');
        }
    }
}
