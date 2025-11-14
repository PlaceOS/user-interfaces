import { Component, OnInit, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler, OrganisationService } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { first } from 'rxjs/operators';
import { RoomListComponent } from '../room-manager/room-list.component';
import { RoomManagementService } from '../room-manager/room-management.service';
import { DesksManageComponent } from '../desks/desks-manage.component';
import { DesksStateService } from '../desks/desks-state.service';
import { ParkingSpaceListComponent } from '../parking/parking-space-list.component';
import { ParkingStateService } from '../parking/parking-state.service';
import { LockerListComponent } from '../lockers/locker-list.component';
import { LockerStateService } from '../lockers/locker-state.service';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { ResourceManagerTopbarComponent } from './resource-manager-topbar.component';

@Component({
    selector: '[app-resource-manager]',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header
                    class="mb-2 flex items-center justify-between px-8 pb-2 pt-4"
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.RESOURCES_HEADER' | translate }}
                    </h2>
                    <div class="flex items-center gap-2">
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
                        [label]="'APP.CONCIERGE.TAB_ROOMS' | translate"
                    ></mat-tab>
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_DESKS' | translate"
                    ></mat-tab>
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_PARKING' | translate"
                    ></mat-tab>
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_LOCKERS' | translate"
                    ></mat-tab>
                </mat-tab-group>
                <resource-manager-topbar
                    [tab_index]="selected_tab()"
                ></resource-manager-topbar>
                <div class="content-area flex-1">
                    @if (selected_tab() === 0) {
                        <room-list
                            class="relative block h-full w-full"
                        ></room-list>
                    } @else if (selected_tab() === 1) {
                        <desks-manage
                            class="relative block h-full w-full"
                        ></desks-manage>
                    } @else if (selected_tab() === 2) {
                        <parking-space-list
                            class="relative block h-full w-full"
                        ></parking-space-list>
                    } @else if (selected_tab() === 3) {
                        <locker-list
                            class="relative block h-full w-full"
                        ></locker-list>
                    }
                </div>
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
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        ResourceManagerTopbarComponent,
        RoomListComponent,
        DesksManageComponent,
        ParkingSpaceListComponent,
        LockerListComponent,
    ],
})
export class ResourceManagerComponent extends AsyncHandler implements OnInit {
    private readonly _room_service = inject(RoomManagementService);
    private readonly _desk_service = inject(DesksStateService);
    private readonly _parking_service = inject(ParkingStateService);
    private readonly _locker_service = inject(LockerStateService);
    private readonly _org = inject(OrganisationService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);

    public readonly selected_tab = signal(0);

    private readonly TAB_NAMES = ['rooms', 'desks', 'parking', 'lockers'];

    public readonly addButtonText = () => {
        const tab_index = this.selected_tab();
        if (tab_index === 0) return 'APP.CONCIERGE.ROOMS_ADD';
        if (tab_index === 1) return 'APP.CONCIERGE.DESKS_ADD';
        if (tab_index === 2) return 'APP.CONCIERGE.PARKING_ADD';
        return 'APP.CONCIERGE.LOCKERS_ADD';
    };

    public readonly addItem = () => {
        const tab_index = this.selected_tab();
        if (tab_index === 0) this._room_service.editRoom();
        else if (tab_index === 1) this._desk_service.editDesk();
        else if (tab_index === 2) this._parking_service.editSpace();
        else this._locker_service.editLockerBank();
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
}
