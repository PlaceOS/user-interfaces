import { Component, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

/**
 * Floating bar for actions on the selected rows of a list.
 * Put the action buttons inside the element. The bar shows only while
 * `count` is more than zero.
 */
@Component({
    selector: 'bulk-actions-bar',
    template: `
        @if (count() > 0) {
            <div
                role="toolbar"
                class="bg-base-100 border-base-300 fixed bottom-16 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border py-1 pr-1 pl-4 shadow-xl"
            >
                <span class="mr-2 text-sm font-medium whitespace-nowrap">
                    {{
                        'COMMON.SELECTED_COUNT' | translate: { count: count() }
                    }}
                </span>
                <ng-content />
                <button
                    icon
                    matRipple
                    [matTooltip]="'COMMON.CLEAR_SELECTION' | translate"
                    [attr.aria-label]="'COMMON.CLEAR_SELECTION' | translate"
                    (click)="clear.emit()"
                >
                    <icon>close</icon>
                </button>
            </div>
        }
    `,
    imports: [MatRippleModule, MatTooltipModule, IconComponent, TranslatePipe],
})
export class BulkActionsBarComponent {
    /** Number of selected rows */
    public readonly count = input(0);
    public readonly clear = output<void>();
}
