import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'join-room-tooltip',
    template: `
        <div
            class="p-4 my-2 bg-base-100 shadow rounded flex flex-col items-center space-y-2"
        >
            <h3 class="mb-2 font-medium text-center">Join Rooms</h3>
            <button
                btn
                matRipple
                *ngFor="let mode of modes | async"
                (click)="join(mode.id)"
                [class.inverse]="mode.id !== (active | async)"
                class="w-64"
            >
                {{ mode.name }}
            </button>
        </div>
    `,
    styles: [``],
})
export class JoinRoomTooltipComponent {
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
        })
    );
    public readonly active = this._state.joined_id;
    public readonly join = (id) => this._state.join(id);

    constructor(private _state: ControlStateService) {}
}
