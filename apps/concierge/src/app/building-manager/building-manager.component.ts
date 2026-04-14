import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@placeos/components';
import { startWith } from 'rxjs/operators';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { BuildingListComponent } from './building-list.component';
import { BuildingManagementService } from './building-management.service';

@Component({
    selector: '[app-building-manager]',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header
                    class="mb-2 flex items-center justify-between px-8 pt-4 pb-8"
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.BUILDINGS_HEADER' | translate }}
                    </h2>
                    <button btn matRipple (click)="newBuilding()" class="w-40">
                        {{ 'APP.CONCIERGE.BUILDINGS_ADD' | translate }}
                    </button>
                </header>
                <building-list
                    class="relative block h-1/2 w-full flex-1"
                ></building-list>
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
        BuildingListComponent,
        ApplicationTopbarComponent,
        ApplicationSidebarComponent,
        MatRippleModule,
        TranslatePipe,
    ],
})
export class BuildingManagerComponent {
    private _state = inject(BuildingManagementService);
    private _router = inject(Router);

    private readonly _url = toSignal(
        this._router.events.pipe(startWith(null)),
        {
            initialValue: null,
        },
    );

    public readonly newBuilding = () => this._state.editBuilding();
    public readonly path = computed(() => {
        this._url();
        const parts = this._router.url.split('/');
        return parts[parts.length - 1].split('?')[0];
    });
}
