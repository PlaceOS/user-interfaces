import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { ControlStateService } from './control-state.service';

@Component({
    selector: 'control-advanced-view',
    template: `
        <div
            class="w-full flex-1 h-1/2 flex items-center flex-col sm:flex-row sm:justify-center sm:flex-wrap overflow-auto"
            *ngIf="(outputs | async)?.length; else empty_state"
        >
            <output-display
                class="w-full sm:w-auto min-w-[33%]"
                *ngFor="
                    let output of outputs
                        | async
                        | slice: page * 6:(page + 1) * 6
                "
                [item]="output"
            ></output-display>
        </div>
        <div
            class="w-full h-12 flex items-center justify-center px-2 pb-2 space-x-2"
            *ngIf="(page_count | async)?.length > 1"
        >
            <button
                icon
                matRipple
                *ngFor="let idx of page_count | async; let i = index"
                [class.bg-primary]="page === i"
                [class.text-black]="page !== i"
                [class.bg-base-200]="page !== i"
                (click)="page = i"
            >
                {{ i + 1 }}
            </button>
        </div>
        <ng-template #empty_state>
            <div
                class="absolute inset-0 flex flex-col items-center justify-center"
            >
                <p>No output devices setup for this system.</p>
            </div>
        </ng-template>
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
})
export class ControlAdvancedViewComponent {
    public page = 0;

    public readonly outputs = this._state.output_list.pipe(map((_) => _ || []));

    public readonly page_count = this.outputs.pipe(
        map((_) => new Array(Math.floor(_.length / 6) + 1).fill(0))
    );

    constructor(private _state: ControlStateService) {}
}
