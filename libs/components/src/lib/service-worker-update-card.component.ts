import { Component } from '@angular/core';
import { serviceWorkerUpdate } from '@placeos/common';

import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from './icon.component';

@Component({
    selector: 'placeos-service-worker-update-card',
    template: `
        @if (update(); as update_state) {
            <aside
                role="status"
                aria-live="assertive"
                class="border-base-300 bg-base-100 text-base-content pointer-events-auto fixed right-4 bottom-4 z-9999 flex w-[20rem] max-w-[calc(100vw-2rem)] items-center gap-3 rounded-lg border p-4 shadow-xl"
            >
                <div class="min-w-0 flex-1">
                    <h2 class="m-0 text-sm leading-tight font-medium">
                        {{ update_state.message || 'New version is available' }}
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
                    matTooltip="Reload App"
                    (click)="reloadApp()"
                >
                    <icon>refresh</icon>
                </button>
            </aside>
        }
    `,
    imports: [IconComponent, MatTooltipModule],
})
export class ServiceWorkerUpdateCardComponent {
    public readonly update = serviceWorkerUpdate();

    public reloadApp() {
        location.reload();
    }
}
