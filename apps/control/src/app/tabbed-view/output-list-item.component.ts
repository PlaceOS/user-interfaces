import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AsyncHandler, nextValueFrom } from '@placeos/common';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ControlStateService, RoomOutput } from '../control-state.service';
import { ICON_MAP } from '../ui/output-display.component';

const STATUS = {};

@Component({
    selector: 'device-output-list-item',
    template: `
        <div
            class="relative m-2 h-40 w-full flex-1 rounded border bg-base-100 p-2 shadow"
            [class.border-base-200]="!active"
            [class.border-primary]="active"
            *ngIf="item || true"
        >
            @let source = input | async;
            <button
                matRipple
                class="relative z-0 flex h-full w-full flex-col items-center justify-center rounded bg-info"
                [class.!bg-base-300]="!source"
                (click)="setActiveOutput()"
            >
                <div
                    class="absolute left-1 top-1 rounded bg-base-300 p-1 text-sm text-white"
                    [class.!bg-primary]="active"
                >
                    {{ item?.name || 'Display' }}
                </div>
                <app-icon class="text-5xl">
                    {{ source?.icon || icons[source?.type] || 'add_to_queue' }}
                </app-icon>
                <span class="text-sm text-white" [class.opacity-60]="!source">
                    {{
                        source?.name || ('APP.CONTROL.INPUT_EMPTY' | translate)
                    }}
                </span>
            </button>
            @if (source) {
                @let muted = mute || input.id === 'mute';
                <button
                    icon
                    matRipple
                    class="absolute bottom-2 right-2 z-10 hover:shadow"
                    (click)="
                        setMute(input.id, !muted); $event.stopPropagation()
                    "
                >
                    <icon>{{ muted ? 'volume_off' : 'volume_up' }}</icon>
                </button>
            }
        </div>
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
export class DeviceOutputListItemComponent
    extends AsyncHandler
    implements OnChanges
{
    @Input() public item: RoomOutput;
    @Input() public active: boolean;
    /** Current volume level for output */
    public volume: number;
    /** Current mute state of the output */
    public mute: boolean;

    public last_input: string;

    public readonly icons = ICON_MAP;
    /** ID of the input associated with the displayed output */
    private _input = new BehaviorSubject('');
    /** Details of the associated input */
    public readonly input = combineLatest([
        this._input,
        this._state.available_inputs,
    ]).pipe(map(([id, list]) => list.find((_) => _.id === id || _.ref === id)));

    public readonly setVolume = (v) =>
        this.timeout('volume', () => this._state.setVolume(v, this.item?.id));
    public readonly setMute = (i, s) => {
        this._state.setRoute(s ? 'mute' : this.last_input, this.item?.id);
        this.last_input = i;
    };
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
