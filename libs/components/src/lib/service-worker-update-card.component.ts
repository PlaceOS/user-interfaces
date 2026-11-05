import { Component, signal } from '@angular/core';
import { serviceWorkerUpdate } from '@placeos/common';

import { IconComponent } from './icon.component';

/**
 * Card that tells the user a new version is ready. It sits below CDK overlays
 * (z-index 1000), so it does not cover the buttons of an open dialog.
 */
@Component({
    selector: 'placeos-service-worker-update-card',
    template: `
        @if (!dismissed() && update(); as update_state) {
            <aside
                role="status"
                class="border-base-300 bg-base-100 text-base-content pointer-events-auto fixed right-4 bottom-4 z-999 flex w-[20rem] max-w-[calc(100vw-2rem)] items-center gap-3 rounded-lg border p-4 shadow-xl"
            >
                <div class="min-w-0 flex-1">
                    <h2 class="m-0 text-sm leading-tight font-medium">
                        {{ update_state.message || 'Update available' }}
                    </h2>
                    <p class="m-0 mt-1 text-xs opacity-70">
                        {{
                            update_state.details ||
                                'Refresh the page to get the new version of the application'
                        }}
                    </p>
                </div>
                <button
                    icon
                    default
                    [attr.title]="update_state.action || 'Reload App'"
                    [attr.aria-label]="update_state.action || 'Reload App'"
                    (click)="reloadApp()"
                >
                    <icon>refresh</icon>
                </button>
                <button
                    icon
                    dismiss
                    title="Dismiss"
                    aria-label="Dismiss"
                    (click)="dismissed.set(true)"
                >
                    <icon>close</icon>
                </button>
            </aside>
        }
    `,
    imports: [IconComponent],
})
export class ServiceWorkerUpdateCardComponent {
    public readonly update = serviceWorkerUpdate();
    /** Whether the user hid the card. It shows again after a reload. */
    public readonly dismissed = signal(false);

    public reloadApp() {
        location.reload();
    }
}
