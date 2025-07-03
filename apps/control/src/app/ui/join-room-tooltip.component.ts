import { Component, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'join-room-tooltip',
    template: `
        <div
            class="my-2 flex flex-col items-center space-y-2 rounded bg-base-100 p-2 shadow"
        >
            <h3
                class="w-full rounded bg-base-200 px-4 py-2 text-xl font-medium"
            >
                {{ 'APP.CONTROL.ACTION_JOIN_ROOMS' | translate }}
            </h3>
            @for (mode of modes | async; track mode) {
                <button
                    btn
                    matRipple
                    (click)="join(mode.id)"
                    [class.inverse]="mode.id !== (active | async)"
                    class="w-64"
                >
                    {{ mode.name }}
                </button>
            }
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class JoinRoomTooltipComponent {
    private _state = inject(ControlStateService);

    public readonly modes = this._state.join_modes.pipe(
        map((mapping) => {
            const list = [];
            for (const id in mapping) {
                list.push({
                    ...mapping[id],
                    id,
                });
            }
            return list;
        }),
    );
    public readonly active = this._state.joined_id;
    public readonly join = (id) => this._state.join(id);
}
