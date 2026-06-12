import { Component, inject } from '@angular/core';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SignageService } from '../signage.service';
import { SignageGroupUsersComponent } from './signage-group-users.component';
import { SignageGroupZonesComponent } from './signage-group-zones.component';

@Component({
    selector: 'signage-group-content',
    template: `
        @if (selected_group()) {
            <div class="flex h-full flex-col overflow-hidden">
                <div class="flex min-h-0 flex-1 flex-col gap-3 p-3 lg:flex-row">
                    <signage-group-users
                        id="group-users-panel"
                        role="tabpanel"
                        aria-labelledby="group-users-tab"
                        class="min-h-0 flex-1 lg:min-w-0"
                        [class.tablet-hidden]="active_tab() === 'zones'"
                        [class.tablet-full]="active_tab() === 'users'"
                    />
                    <signage-group-zones
                        id="group-zones-panel"
                        role="tabpanel"
                        aria-labelledby="group-zones-tab"
                        class="min-h-0 flex-1 lg:min-w-0"
                        [class.tablet-hidden]="active_tab() === 'users'"
                        [class.tablet-full]="active_tab() === 'zones'"
                    />
                </div>
            </div>
        } @else {
            <div
                class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <icon class="text-6xl">group</icon>
                <p>{{ 'SIGNAGE_MANAGER.GROUP_SELECT_DETAILS' | translate }}</p>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
            }

            .tablet-hidden {
                @media (max-width: 1023px) {
                    display: none !important;
                }
            }

            .tablet-full {
                @media (max-width: 1023px) {
                    flex: 1;
                    min-width: 0;
                }
            }
        `,
    ],
    imports: [
        IconComponent,
        SignageGroupUsersComponent,
        SignageGroupZonesComponent,
        TranslatePipe,
    ],
})
export class SignageGroupContentComponent {
    private readonly _service = inject(SignageService);

    public readonly selected_group = this._service.managed_group;
    public readonly active_tab = this._service.managed_group_tab;
}
