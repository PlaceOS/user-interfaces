import { Component, input } from '@angular/core';
import { IconComponent } from './icon.component';

export type StatusValue = 'success' | 'warning' | 'error' | 'info' | 'neutral';

@Component({
    selector: 'status-pill',
    template: `
        <div
            class="flex items-center space-x-2 rounded-full bg-opacity-30 px-2 py-1 text-base font-medium text-black"
            [class.bg-success-light]="status() === 'success'"
            [class.bg-warning-light]="status() === 'warning'"
            [class.bg-error-light]="status() === 'error'"
            [class.bg-info-light]="status() === 'info'"
            [class.bg-base-200]="status() === 'neutral'"
        >
            <div
                class="flex h-5 w-5 items-center justify-center rounded-full"
                [class.text-success]="status() === 'success'"
                [class.text-warning]="status() === 'warning'"
                [class.text-error]="status() === 'error'"
                [class.text-info]="status() === 'info'"
                [class.text-base-content]="status() === 'neutral'"
                [class.opacity-40]="status() === 'neutral'"
            >
                <icon class="text-2xl">
                    @switch (status()) {
                        @case ('success') {
                            check_circle
                        }
                        @case ('error') {
                            cancel
                        }
                        @case ('neutral') {
                            block
                        }
                        @case ('info') {
                            info
                        }
                        @default {
                            warning
                        }
                    }
                </icon>
            </div>
            <div
                class="text-base-content"
                [class.opacity-40]="status() === 'neutral'"
            >
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [``],
    imports: [IconComponent],
})
export class StatusPillComponent {
    public readonly status = input<string>(undefined);
}
