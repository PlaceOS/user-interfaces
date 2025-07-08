import { Component, input } from '@angular/core';
import { ApplicationLink } from '@placeos/common';

@Component({
    selector: 'status-overlay',
    template: `
        <div
            status-overlay
            class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-secondary text-white"
        >
            @if (!loading()) {
                <div
                    class="mb-4 rounded-full bg-base-100 text-4xl"
                    [class.text-success]="!error()"
                    [class.text-error]="error()"
                >
                    <icon>{{ error() ? 'close' : 'done' }}</icon>
                </div>
                <div class="mb-4 text-center text-lg">
                    @if (!error()) {
                        <ng-content></ng-content>
                    } @else {
                        <p error>{{ error() }}</p>
                    }
                </div>
                <div class="flex items-center space-x-2">
                    @for (link of links(); track link) {
                        <a
                            btn
                            matRipple
                            class="w-32"
                            [routerLink]="[link.route]"
                        >
                            {{ link.name }}
                        </a>
                    }
                </div>
            } @else {
                <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
                <p loading class="text-center text-lg">{{ loading() }}</p>
            }
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class StatusOverlayComponent {
    /** Whether overlay is loading */
    public readonly loading = input('');
    /** Details about any errors that have occurred */
    public readonly error = input('');
    /** Links to display on success */
    public readonly links = input<ApplicationLink[]>([]);
}
