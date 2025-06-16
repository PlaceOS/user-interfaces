import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { ControlStateService } from './control-state.service';

@Component({
    selector: 'control-advanced-view',
    template: `
        @if ((outputs | async)?.length) {
            <div
                class="flex h-1/2 w-full flex-1 flex-col items-center overflow-auto sm:flex-row sm:flex-wrap sm:justify-center"
            >
                @for (
                    output of outputs
                        | async
                        | slice: page * 6 : (page + 1) * 6;
                    track output.id || output.name
                ) {
                    <output-display
                        class="w-full min-w-[33%] sm:w-auto"
                        [item]="output"
                    ></output-display>
                }
            </div>
        } @else {
            <div
                class="absolute inset-0 flex flex-col items-center justify-center"
            >
                <p>{{ 'APP.CONTROL.OUTPUTS_EMPTY' | translate }}</p>
            </div>
        }
        @if ((page_count | async)?.length > 1) {
            <div
                class="flex h-12 w-full items-center justify-center space-x-2 px-2 pb-2"
            >
                @for (idx of page_count | async; track i; let i = $index) {
                    <button
                        icon
                        matRipple
                        [class.bg-primary]="page === i"
                        [class.text-black]="page !== i"
                        [class.bg-base-200]="page !== i"
                        (click)="page = i"
                    >
                        {{ i + 1 }}
                    </button>
                }
            </div>
        }
    `,
    styles: [
        `
            :host {
                position: relative;
                display: flex;
                width: 100%;
                height: 100%;
                flex-direction: column;
            }
        `,
    ],
    standalone: false,
})
export class ControlAdvancedViewComponent {
    public page = 0;

    public readonly outputs = this._state.output_list.pipe(map((_) => _ || []));

    public readonly page_count = this.outputs.pipe(
        map((_) => new Array(Math.floor(_.length / 6) + 1).fill(0)),
    );

    constructor(private _state: ControlStateService) {}
}
