import { Component, Input, SimpleChanges } from '@angular/core';
import { AsyncHandler, nextValueFrom } from '@placeos/common';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ControlStateService, RoomOutput } from '../control-state.service';
import { ICON_MAP } from '../ui/output-display.component';

@Component({
    selector: 'device-output-list-item',
    template: `
        <button
            matRipple
            class="m-2 h-40 w-full flex-1 rounded border bg-base-100 p-2 shadow"
            [class.border-base-200]="!active"
            [class.border-primary]="active"
            *ngIf="item || true"
            (click)="setActiveOutput()"
        >
            <div
                class="relative flex h-full w-full flex-col items-center justify-center rounded bg-info"
                [class.!bg-base-300]="!(input | async)"
            >
                <div
                    class="absolute left-1 top-1 rounded bg-base-300 p-1 text-sm text-white"
                    [class.!bg-primary]="active"
                >
                    {{ item?.name || 'Display' }}
                </div>
                <app-icon class="text-5xl">
                    {{
                        (input | async)?.icon ||
                            icons[(input | async)?.type] ||
                            'add_to_queue'
                    }}
                </app-icon>
                <span
                    class="text-sm text-white"
                    [class.opacity-60]="!(input | async)"
                >
                    {{
                        (input | async)?.name ||
                            ('APP.CONTROL.INPUT_EMPTY' | translate)
                    }}
                </span>
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
    standalone: false,
})
export class DeviceOutputListItemComponent extends AsyncHandler {
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
    public readonly setActiveOutput = async () => {
        const { selected_input } =
            (await nextValueFrom(this._state.system)) || {};
        this.item?.source === selected_input
            ? this._state.unroute(this.item.id)
            : this._state.setOutput(this.item?.id);
    };

    constructor(private _state: ControlStateService) {
        super();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.item) {
            this._input.next(this.item?.source || '');
        }
    }
}
