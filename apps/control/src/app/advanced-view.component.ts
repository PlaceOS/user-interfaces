import { Component, computed, inject, linkedSignal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { TranslatePipe } from '@placeos/components';
import { ControlStateService } from './control-state.service';
import { OutputDisplayComponent } from './ui/output-display.component';

const PAGE_SIZE = 6;

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

    public readonly outputs = this._state.output_list;

    private readonly _page_total = computed(() =>
        Math.max(1, Math.ceil((this.outputs()?.length || 0) / PAGE_SIZE)),
    );
    /** Selected page. Moves to the last page when the output list shrinks. */
    public readonly page = linkedSignal<number, number>({
        source: this._page_total,
        computation: (total, previous) =>
            Math.min(previous?.value ?? 0, total - 1),
    });

    public readonly paged_outputs = computed(() => {
        const p = this.page();
        return this.outputs().slice(p * PAGE_SIZE, (p + 1) * PAGE_SIZE);
    });

    public readonly page_count = computed(() =>
        new Array(this._page_total()).fill(0),
    );
}
