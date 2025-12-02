import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
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
                        class="max-w-1/2 w-64 sm:min-w-64"
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

    public readonly outputs = toSignal(
        this._state.output_list.pipe(map((_) => _ || [])),
        { initialValue: [] },
    );
    public readonly active_output = toSignal(this._state.active_output);
    public readonly preview_outputs = toSignal(this._state.preview_outputs);
}
