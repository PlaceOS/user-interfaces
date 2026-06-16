import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    computed,
    inject,
    signal,
} from '@angular/core';
import { Router } from '@angular/router';
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ApplicationTopbarComponent,
        ApplicationSidebarComponent,
        RoomBookingsComponent,
    ],
})
export class DayViewComponent {
    private _router = inject(Router);
    private _destroy = inject(DestroyRef);

    private readonly _url = signal<unknown>(null);

    constructor() {
        const sub = this._router.events.subscribe(() =>
            this._url.set(this._router.url),
        );
        this._destroy.onDestroy(() => sub.unsubscribe());
    }

    public readonly path = computed(() => {
        this._url();
        const parts = (this._router.url || '').split('/');
        return parts[parts.length - 1].split('?')[0];
    });
}
