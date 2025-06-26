import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService } from '@placeos/organisation';
import { BookingPanelSettingsModalComponent } from '../ui/app-settings/booking-panel-settings-modal.component';
import { ConciergeSettingsFormModalComponent } from '../ui/app-settings/concierge-settings-form-modal.component';
import { VisitorKioskSettingsFormModalComponent } from '../ui/app-settings/visitor-kiosk-settings-form-modal.component';
import { WorkplaceSettingsFormModalComponent } from '../ui/app-settings/workplace-settings-form-modal.component';
import { RegionManagementService } from './region-management.service';

@Component({
    selector: '[app-region-manager]',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header
                    class="mb-2 flex items-center justify-between px-8 pb-2 pt-4"
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.REGIONS_HEADER' | translate }}
                    </h2>
                    <button btn matRipple (click)="newRegion()" class="w-40">
                        {{ 'APP.CONCIERGE.REGIONS_ADD' | translate }}
                    </button>
                </header>
                <div class="flex justify-end px-8 pb-8">
                    <button
                        icon
                        matRipple
                        [matMenuTriggerFor]="app_settings_menu"
                        [matTooltip]="'Organisation App Settings'"
                    >
                        <icon>more_vert</icon>
                    </button>
                    <mat-menu #app_settings_menu="matMenu">
                        <button
                            mat-menu-item
                            (click)="editWorkplaceSettings(org)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">meeting_room</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_WORKPLACE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="editConciergeSettings(org)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">support_agent</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_CONCIERGE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="editBookingPanelSettings(org)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">event_busy</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="editVisitorKioskSettings(org)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">qr_code</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    </mat-menu>
                </div>
                <region-list
                    class="relative block h-1/2 w-full flex-1"
                ></region-list>
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
                background-color: var(--b1);
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
    standalone: false,
})
export class RegionManagerComponent {
    private readonly _state = inject(RegionManagementService);
    private _dialog = inject(MatDialog);
    private _org = inject(OrganisationService);

    public readonly newRegion = () => this._state.editRegion();

    public get org() {
        return this._org.organisation;
    }

    public editWorkplaceSettings(zone) {
        console.log('Zone:', zone);
        this._dialog.open(WorkplaceSettingsFormModalComponent, {
            data: { zone },
        });
    }

    public editConciergeSettings(zone) {
        this._dialog.open(ConciergeSettingsFormModalComponent, {
            data: { zone },
        });
    }

    public editBookingPanelSettings(zone) {
        this._dialog.open(BookingPanelSettingsModalComponent, {
            data: { zone },
        });
    }

    public editVisitorKioskSettings(zone) {
        this._dialog.open(VisitorKioskSettingsFormModalComponent, {
            data: { zone },
        });
    }
}
