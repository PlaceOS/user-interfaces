import { Component, inject } from '@angular/core';
import { ControlStateService } from '../control-state.service';
import { DeviceOutputListItemComponent } from './output-list-item.component';

@Component({
    selector: 'device-output-list',
    template: `
        <div class="flex h-full w-full items-center overflow-x-auto">
            @if (outputs()?.length > 1 || preview_outputs()) {
                @for (output of outputs(); track output.id) {
                    <device-output-list-item
                        [item]="output"
                        [active]="active_output() === output.id"
                        class="w-64 max-w-1/2 sm:min-w-64"
                    ></device-output-list-item>
                }
            }
        </div>
    `,
    styles: [``],
    imports: [DeviceOutputListItemComponent],
})
export class DeviceOutputListComponent {
    private _state = inject(ControlStateService);

    public readonly outputs = this._state.output_list;
    public readonly active_output = this._state.active_output;
    public readonly preview_outputs = this._state.preview_outputs;
}
