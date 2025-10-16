import { CommonModule } from '@angular/common';
import {
    Component,
    OnChanges,
    SimpleChanges,
    inject,
    input,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { AsyncHandler, nextValueFrom } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ControlStateService, RoomOutput } from '../control-state.service';
import { ICON_MAP } from '../ui/output-display.component';

const STATUS = {};

@Component({
    selector: 'device-output-list-item',
    template: `
        @if (item()) {
            <div
                class="relative m-2 h-40 w-full flex-1 rounded border bg-base-100 p-2 shadow"
                [class.border-base-200]="!active()"
                [class.border-primary]="active()"
            >
                @let source = input | async;
                <button
                    matRipple
                    class="relative z-0 flex h-full w-full flex-col items-center justify-center rounded bg-info"
                    [class.!bg-base-300]="!source"
                    (click)="setActiveOutput()"
                >
                    <div
                        class="absolute left-1 top-1 rounded-full border border-base-300 bg-base-100 px-2 py-1 text-xs text-base-content"
                        [class.!bg-primary]="active()"
                    >
                        {{ item()?.name || 'Display' }}
                    </div>
                    <icon
                        class="text-5xl"
                        [class.opacity-30]="!source"
                        [class.text-base-content]="!source"
                    >
                        {{
                            source?.icon ||
                                icons[source?.type] ||
                                'add_to_queue'
                        }}
                    </icon>
                    <span
                        class="text-sm"
                        [class.opacity-30]="!source"
                        [class.text-base-content]="!source"
                    >
                        {{
                            source?.name ||
                                ('APP.CONTROL.INPUT_EMPTY' | translate)
                        }}
                    </span>
                </button>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
            }
        `,
    ],
    imports: [CommonModule, TranslatePipe, MatRippleModule, IconComponent],
})
export class DeviceOutputListItemComponent
    extends AsyncHandler
    implements OnChanges
{
    private _state = inject(ControlStateService);

    public readonly item = input<RoomOutput>(undefined);
    public readonly active = input<boolean>(undefined);
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
        this.timeout('volume', () => this._state.setVolume(v, this.item()?.id));
    public readonly setMute = (i, s) => {
        this._state.setRoute(s ? 'mute' : this.last_input, this.item()?.id);
        this.last_input = i;
    };
    public readonly setActiveOutput = async () => {
        const { selected_input } =
            (await nextValueFrom(this._state.system)) || {};
        const input = await nextValueFrom(this.input);
        const item = this.item();
        console.log('Input:', selected_input, item, input);
        input?.id === selected_input
            ? this._state.unroute(item.id)
            : this._state.setOutput(item?.id);
    };

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.item) {
            this._input.next(this.item()?.source || '');
        }
    }
}
