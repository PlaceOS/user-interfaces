import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'device-output-list',
    template: `
        <div class="flex h-full w-full items-center overflow-x-auto">
            <ng-container
                *ngIf="
                    (outputs | async)?.length > 1 || (preview_outputs | async)
                "
            >
                <device-output-list-item
                    *ngFor="let output of outputs | async"
                    [item]="output"
                    [active]="(active_output | async) === output.id"
                    class="max-w-1/2 w-64"
                ></device-output-list-item>
            </ng-container>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class DeviceOutputListComponent {
    public readonly outputs = this._state.output_list.pipe(map((_) => _ || []));
    public readonly active_output = this._state.active_output;
    public readonly preview_outputs = this._state.preview_outputs;

    constructor(private _state: ControlStateService) {
        this.outputs.subscribe();
    }
}
