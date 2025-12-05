import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

import { MatRippleModule } from '@angular/material/core';
import { TranslatePipe } from '@placeos/components';
import { ControlStateService } from './control-state.service';
import { OutputDisplayComponent } from './ui/output-display.component';

@Component({
    selector: 'control-advanced-view',
    template: `
        @if (outputs()?.length) {
            <div
                class="flex h-1/2 w-full flex-1 flex-col items-center overflow-auto sm:flex-row sm:flex-wrap sm:justify-center"
            >
                @for (
                    output of paged_outputs();
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
        @if (page_count().length > 1) {
            <div
                class="flex h-12 w-full items-center justify-center space-x-2 px-2 pb-2"
            >
                @for (idx of page_count(); track i; let i = $index) {
                    <button
                        icon
                        matRipple
                        [class.bg-primary]="page() === i"
                        [class.text-black]="page() !== i"
                        [class.bg-base-200]="page() !== i"
                        (click)="page.set(i)"
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
    imports: [TranslatePipe, OutputDisplayComponent, MatRippleModule],
})
export class ControlAdvancedViewComponent {
    private _state = inject(ControlStateService);

    public readonly page = signal(0);

    public readonly outputs = toSignal(
        this._state.output_list.pipe(map((_) => _ || [])),
        { initialValue: [] },
    );

    public readonly paged_outputs = computed(() => {
        const all = this.outputs();
        const p = this.page();
        return all.slice(p * 6, (p + 1) * 6);
    });

    public readonly page_count = computed(() => {
        const len = this.outputs()?.length || 0;
        return new Array(Math.floor(len / 6) + 1).fill(0);
    });
}
