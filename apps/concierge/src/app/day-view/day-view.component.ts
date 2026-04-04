import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { startWith } from 'rxjs/operators';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { RoomBookingsComponent } from './room-bookings.component';

@Component({
    selector: '[app-new-dayview]',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <room-bookings></room-bookings>
            </main>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: var(--base-100);
            }

            @media print {
                :host {
                    display: none;
                }
            }
        `,
    ],
    imports: [
        ApplicationTopbarComponent,
        ApplicationSidebarComponent,
        RoomBookingsComponent,
    ],
})
export class DayViewComponent {
    private _router = inject(Router);

    private readonly _url = toSignal(
        this._router.events.pipe(startWith(null)),
        {
            initialValue: null,
        },
    );

    public readonly path = computed(() => {
        this._url();
        const parts = (this._router.url || '').split('/');
        return parts[parts.length - 1].split('?')[0];
    });
}
