import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { AsyncHandler } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { ControlStateService, RoomOutput } from '../control-state.service';
import { ICON_MAP } from '../ui/output-display.component';

const STATUS = {};

@Component({
    selector: 'device-output-list-item',
    template: `
        @if (item()) {
            <div
                class="bg-base-100 relative m-2 h-40 w-full flex-1 rounded-sm border p-2 shadow-sm"
                [class.border-base-200]="!active()"
                [class.border-primary]="active()"
            >
                @let source = input();
                <button
                    matRipple
                    class="bg-info relative z-0 flex h-full w-full flex-col items-center justify-center rounded-sm"
                    [class.bg-base-300!]="!source"
                    (click)="setActiveOutput()"
                >
                    <div
                        class="border-base-300 bg-base-100 text-base-content absolute top-1 left-1 rounded-full border px-2 py-1 text-xs"
                        [class.bg-primary!]="active()"
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
export class DeviceOutputListItemComponent extends AsyncHandler {
    private _state = inject(ControlStateService);

    public readonly item = input<RoomOutput>(undefined);
    public readonly active = input<boolean>(undefined);
    /** Current volume level for output */
    public volume: number;
    /** Current mute state of the output */
    public mute: boolean;
    public last_input: string;

    public readonly icons = ICON_MAP;
    private readonly _available_inputs = toSignal(
        this._state.available_inputs,
        {
            initialValue: [],
        },
    );
    private readonly _system = toSignal(this._state.system);
    /** Details of the associated input */
    public readonly input = computed(() => {
        const id = this.item()?.source || '';
        return this._available_inputs().find(
            (_) => _.id === id || _.ref === id,
        );
    });

    public readonly setVolume = (v) =>
        this.timeout('volume', () => this._state.setVolume(v, this.item()?.id));
    public readonly setMute = (i, s) => {
        this._state.setRoute(s ? 'mute' : this.last_input, this.item()?.id);
        this.last_input = i;
    };
    public readonly setActiveOutput = () => {
        const { selected_input } = this._system() || {};
        const input = this.input();
        const item = this.item();
        console.log('Input:', selected_input, item, input);
        input?.id === selected_input
            ? this._state.unroute(item.id)
            : this._state.setOutput(item?.id);
    };
}
