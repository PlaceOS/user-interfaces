import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { ControlStateService } from '../control-state.service';
import { DeviceOutputListItemComponent } from './output-list-item.component';

@Component({
    selector: 'device-output-list',
    template: `
        <div class="flex h-full w-full items-center overflow-x-auto">
            @if ((outputs | async)?.length > 1 || (preview_outputs | async)) {
                @for (output of outputs | async; track output.id) {
                    <device-output-list-item
                        [item]="output"
                        [active]="(active_output | async) === output.id"
                        class="max-w-1/2 w-64 sm:min-w-64"
                    ></device-output-list-item>
                }
            }
        </div>
    `,
    styles: [``],
    imports: [CommonModule, DeviceOutputListItemComponent],
})
export class DeviceOutputListComponent {
    private _state = inject(ControlStateService);

    public readonly outputs = this._state.output_list.pipe(map((_) => _ || []));
    public readonly active_output = this._state.active_output;

    public readonly preview_outputs = this._state.preview_outputs;

    constructor() {
        this.outputs.subscribe();
    }
}
