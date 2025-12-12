import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { TranslatePipe } from '@placeos/components';
import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'join-room-tooltip',
    template: `
        <div
            class="my-2 flex flex-col items-center space-y-2 rounded-sm bg-base-100 p-2 shadow-sm"
        >
            <h3
                class="w-full rounded-sm bg-base-200 px-4 py-2 text-xl font-medium"
            >
                {{ 'APP.CONTROL.ACTION_JOIN_ROOMS' | translate }}
            </h3>
            @for (mode of modes(); track mode) {
                <button
                    btn
                    matRipple
                    (click)="join(mode.id)"
                    [class.inverse]="mode.id !== active()"
                    class="w-64"
                >
                    {{ mode.name }}
                </button>
            }
        </div>
    `,
    styles: [``],
    imports: [TranslatePipe, MatRippleModule],
})
export class JoinRoomTooltipComponent {
    private _state = inject(ControlStateService);

    private readonly _join_modes = toSignal(this._state.join_modes, {
        initialValue: {} as Record<string, any>,
    });

    public readonly modes = computed(() => {
        const mapping = this._join_modes();
        const list: any[] = [];
        for (const id in mapping) {
            list.push({
                ...mapping[id],
                id,
            });
        }
        return list;
    });
    public readonly active = toSignal(this._state.joined_id);
    public readonly join = (id: string) => this._state.join(id);
}
