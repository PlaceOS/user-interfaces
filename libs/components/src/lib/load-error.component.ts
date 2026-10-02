import { Component, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

/**
 * Shows that data failed to load, with a button to try again.
 * Use it in place of an empty state, so a failed request does not look
 * like a list with no items.
 */
@Component({
    selector: 'load-error',
    template: `
        <div
            role="alert"
            class="flex flex-col items-center justify-center gap-2 p-8 text-center"
        >
            <icon class="text-error text-3xl">error</icon>
            <p>{{ 'COMMON.LOAD_ERROR' | translate }}</p>
            <button btn matRipple class="inverse" (click)="retry.emit()">
                {{ 'COMMON.RETRY' | translate }}
            </button>
        </div>
    `,
    imports: [MatRippleModule, IconComponent, TranslatePipe],
})
export class LoadErrorComponent {
    public readonly retry = output<void>();
}
