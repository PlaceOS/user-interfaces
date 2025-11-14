import { Component, OnInit, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler, OrganisationService } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { first } from 'rxjs/operators';
import { BuildingListComponent } from '../building-manager/building-list.component';
import { BuildingManagementService } from '../building-manager/building-management.service';
import { LevelListComponent } from '../level-manager/level-list.component';
import { LevelManagementService } from '../level-manager/level-management.service';
import { RegionListComponent } from '../region-manager/region-list.component';
import { RegionManagementService } from '../region-manager/region-management.service';
import { BookingPanelSettingsModalComponent } from '../ui/app-settings/booking-panel-settings-modal.component';
import { ConciergeSettingsFormModalComponent } from '../ui/app-settings/concierge-settings-form-modal.component';
import { VisitorKioskSettingsFormModalComponent } from '../ui/app-settings/visitor-kiosk-settings-form-modal.component';
import { WorkplaceSettingsFormModalComponent } from '../ui/app-settings/workplace-settings-form-modal.component';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { PlaceZone } from '@placeos/ts-client';

@Component({
    selector: '[app-zone-manager]',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header
                    class="mb-2 flex items-center justify-between px-8 pb-2 pt-4"
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.ZONES_HEADER' | translate }}
                    </h2>
                    <div class="flex items-center gap-2">
                        @if (selected_tab() === 0) {
                            <button
                                icon
                                matRipple
                                [matMenuTriggerFor]="app_settings_menu"
                                [matTooltip]="'Organisation App Settings'"
                            >
                                <icon>more_vert</icon>
                            </button>
                        }
                        <button btn matRipple (click)="addItem()" class="w-48">
                            <div class="flex items-center space-x-2">
                                <icon>shadow_add</icon>
                                <div class="pr-2">{{ addButtonText() | translate }}</div>
                            </div>
                        </button>
                    </div>
                </header>
                <mat-tab-group
                    class="mb-4 bg-base-200 rounded-md mx-8 overflow-hidden"
                    [(selectedIndex)]="selected_tab"
                    (selectedIndexChange)="onTabChange($event)"
                >
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_REGIONS' | translate"
                    ></mat-tab>
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_BUILDINGS' | translate"
                    ></mat-tab>
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_LEVELS' | translate"
                    ></mat-tab>
                </mat-tab-group>
                <div class="content-area flex-1">
                    @if (selected_tab() === 0) {
                        <region-list
                            class="relative block h-full w-full"
                        ></region-list>
                    } @else if (selected_tab() === 1) {
                        <building-list
                            class="relative block h-full w-full"
                        ></building-list>
                    } @else if (selected_tab() === 2) {
                        <level-list
                            class="relative block h-full w-full"
                        ></level-list>
                    }
                </div>
                <mat-menu #app_settings_menu="matMenu">
                    <button mat-menu-item (click)="editWorkplaceSettings()">
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
                    <button mat-menu-item (click)="editConciergeSettings()">
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
                        (click)="editBookingPanelSettings()"
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
                        (click)="editVisitorKioskSettings()"
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
        `,
    ],
    imports: [
        ApplicationTopbarComponent,
        ApplicationSidebarComponent,
        MatTabsModule,
        MatMenuModule,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
        RegionListComponent,
        BuildingListComponent,
        LevelListComponent,
    ],
})
export class ZoneManagerComponent extends AsyncHandler implements OnInit {
    private readonly _region_service = inject(RegionManagementService);
    private readonly _building_service = inject(BuildingManagementService);
    private readonly _level_service = inject(LevelManagementService);
    private readonly _dialog = inject(MatDialog);
    private readonly _org = inject(OrganisationService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);

    public readonly selected_tab = signal(0);

    private readonly TAB_NAMES = ['regions', 'buildings', 'levels'];

    public readonly addButtonText = () => {
        const tab_index = this.selected_tab();
        if (tab_index === 0) return 'APP.CONCIERGE.REGIONS_ADD';
        if (tab_index === 1) return 'APP.CONCIERGE.BUILDINGS_ADD';
        return 'APP.CONCIERGE.LEVELS_ADD';
    };

    public readonly addItem = () => {
        const tab_index = this.selected_tab();
        if (tab_index === 0) this._region_service.editRegion();
        else if (tab_index === 1) this._building_service.editBuilding();
        else this._level_service.editLevel();
    };

    public onTabChange(index: number) {
        this.selected_tab.set(index);
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { tab: this.TAB_NAMES[index] },
            queryParamsHandling: 'merge',
        });
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('tab')) {
                    const tab_name = params.get('tab');
                    const tab_index = this.TAB_NAMES.indexOf(tab_name);
                    if (tab_index >= 0) {
                        this.selected_tab.set(tab_index);
                    }
                }
            }),
        );
    }

    public editWorkplaceSettings() {
        this._dialog.open(WorkplaceSettingsFormModalComponent, {
            data: { zone: this._org.organisation },
        });
    }

    public editConciergeSettings() {
        this._dialog.open(ConciergeSettingsFormModalComponent, {
            data: { zone: this._org.organisation },
        });
    }

    public editBookingPanelSettings() {
        this._dialog.open(BookingPanelSettingsModalComponent, {
            data: { zone: this._org.organisation },
        });
    }

    public editVisitorKioskSettings() {
        this._dialog.open(VisitorKioskSettingsFormModalComponent, {
            data: { zone: this._org.organisation },
        });
    }
}
