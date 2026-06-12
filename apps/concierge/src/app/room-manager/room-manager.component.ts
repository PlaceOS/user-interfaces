import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { startWith } from 'rxjs/operators';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { RoomListComponent } from './room-list.component';
import { RoomManagerTopbarComponent } from './room-manager-topbar.component';

@Component({
    selector: '[app-new-room-manager]',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <room-manager-topbar class="block w-full"></room-manager-topbar>
                <room-list
                    class="relative block h-1/2 w-full flex-1"
                ></room-list>
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

            sidebar {
                height: 100%;
            }

            main {
                display: flex;
                flex-direction: column;
                flex: 1;
                min-width: 50%;
                height: 100%;
            }
        `,
    ],
    imports: [
        ApplicationTopbarComponent,
        ApplicationSidebarComponent,
        RoomManagerTopbarComponent,
        RoomListComponent,
    ],
})
export class RoomManagerComponent {
    private _router = inject(Router);

    private readonly _url = toSignal(
        this._router.events.pipe(startWith(null)),
        {
            initialValue: null,
        },
    );

    public readonly path = computed(() => {
        this._url();
        const parts = this._router.url.split('/');
        return parts[parts.length - 1].split('?')[0];
    });
}
