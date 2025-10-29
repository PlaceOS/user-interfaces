import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { TranslatePipe } from '@placeos/components';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { LevelListComponent } from './level-list.component';
import { LevelManagementService } from './level-management.service';

@Component({
    selector: '[app-level-manager]',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header
                    class="mb-2 flex items-center justify-between px-8 pb-8 pt-4"
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.LEVELS_HEADER' | translate }}
                    </h2>
                    <button btn matRipple (click)="newLevel()" class="w-40">
                        {{ 'APP.CONCIERGE.LEVELS_ADD' | translate }}
                    </button>
                </header>
                <level-list
                    class="relative block h-1/2 w-full flex-1"
                ></level-list>
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
        MatRippleModule,
        TranslatePipe,
        LevelListComponent,
    ],
})
export class LevelManagerComponent {
    private _manager = inject(LevelManagementService);

    public readonly newLevel = () => this._manager.editLevel();
}
