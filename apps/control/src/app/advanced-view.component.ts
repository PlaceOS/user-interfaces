import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { ControlStateService } from './control-state.service';

@Component({
    selector: 'control-advanced-view',
    template: `
        <div
            class="flex h-1/2 w-full flex-1 flex-col items-center overflow-auto sm:flex-row sm:flex-wrap sm:justify-center"
            *ngIf="(outputs | async)?.length; else empty_state"
        >
            <output-display
                class="w-full min-w-[33%] sm:w-auto"
                *ngFor="
                    let output of outputs
                        | async
                        | slice: page * 6 : (page + 1) * 6
                "
                [item]="output"
            ></output-display>
        </div>
        <div
            class="flex h-12 w-full items-center justify-center space-x-2 px-2 pb-2"
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
                <p>{{ 'APP.CONTROL.OUTPUTS_EMPTY' | translate }}</p>
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
