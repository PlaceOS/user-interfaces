import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AsyncHandler,
    OrganisationService,
    settingSignal,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { first } from 'rxjs/operators';
import { DesksManageComponent } from '../desks/desks-manage.component';
import { DesksStateService } from '../desks/desks-state.service';
import { LockerListComponent } from '../lockers/locker-list.component';
import { LockerStateService } from '../lockers/locker-state.service';
import { ParkingSpaceListComponent } from '../parking/parking-space-list.component';
import { ParkingStateService } from '../parking/parking-state.service';
import { RoomListComponent } from '../room-manager/room-list.component';
import { RoomManagementService } from '../room-manager/room-management.service';
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
                                <div class="pr-2">
                                    {{ addButtonText() | translate }}
                                </div>
                            </div>
                        </button>
                    </div>
                </header>
                <mat-tab-group
                    class="mx-8 mb-4 overflow-hidden rounded-md bg-base-200"
                    [(selectedIndex)]="selected_tab"
                    (selectedIndexChange)="onTabChange($event)"
                >
                    @if (show_rooms()) {
                        <mat-tab
                            [label]="'APP.CONCIERGE.TAB_ROOMS' | translate"
                        ></mat-tab>
                    }
                    @if (show_desks()) {
                        <mat-tab
                            [label]="'APP.CONCIERGE.TAB_DESKS' | translate"
                        ></mat-tab>
                    }
                    @if (show_parking()) {
                        <mat-tab
                            [label]="'APP.CONCIERGE.TAB_PARKING' | translate"
                        ></mat-tab>
                    }
                    @if (show_lockers()) {
                        <mat-tab
                            [label]="'APP.CONCIERGE.TAB_LOCKERS' | translate"
                        ></mat-tab>
                    }
                </mat-tab-group>
                <resource-manager-topbar
                    [tab_index]="selected_tab()"
                    [tab_name]="current_tab_name()"
                ></resource-manager-topbar>
                <div class="content-area flex-1">
                    @if (current_tab_name() === 'rooms') {
                        <room-list
                            class="relative block h-full w-full"
                        ></room-list>
                    } @else if (current_tab_name() === 'desks') {
                        <desks-manage
                            class="relative block h-full w-full"
                        ></desks-manage>
                    } @else if (current_tab_name() === 'parking') {
                        <parking-space-list
                            class="relative block h-full w-full"
                        ></parking-space-list>
                    } @else if (current_tab_name() === 'lockers') {
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
    public readonly feature_list = settingSignal<string[]>('features', []);

    // Feature availability computed signals
    public readonly show_rooms = computed(
        () =>
            this.feature_list().includes('spaces') ||
            this.feature_list().includes('zones'),
    );
    public readonly show_desks = computed(() =>
        this.feature_list().includes('desks'),
    );
    public readonly show_parking = computed(() =>
        this.feature_list().includes('parking'),
    );
    public readonly show_lockers = computed(() =>
        this.feature_list().includes('lockers'),
    );

    // Available tabs based on features
    public readonly available_tabs = computed(() => {
        const tabs: Array<{ name: string; feature: string }> = [];
        if (this.show_rooms()) tabs.push({ name: 'rooms', feature: 'spaces' });
        if (this.show_desks()) tabs.push({ name: 'desks', feature: 'desks' });
        if (this.show_parking())
            tabs.push({ name: 'parking', feature: 'parking' });
        if (this.show_lockers())
            tabs.push({ name: 'lockers', feature: 'lockers' });
        return tabs;
    });

    // Current tab name based on selected index
    public readonly current_tab_name = computed(() => {
        const available = this.available_tabs();
        const index = this.selected_tab();
        return available[index]?.name || '';
    });

    private readonly TAB_NAMES = ['rooms', 'desks', 'parking', 'lockers'];

    public readonly addButtonText = () => {
        const tab = this.current_tab_name();
        if (tab === 'rooms') return 'APP.CONCIERGE.ROOMS_ADD';
        if (tab === 'desks') return 'APP.CONCIERGE.DESKS_ADD';
        if (tab === 'parking') return 'APP.CONCIERGE.PARKING_ADD';
        return 'APP.CONCIERGE.LOCKERS_ADD';
    };

    public readonly addItem = () => {
        const tab = this.current_tab_name();
        if (tab === 'rooms') this._room_service.editRoom();
        else if (tab === 'desks') this._desk_service.editDesk();
        else if (tab === 'parking') this._parking_service.editSpace();
        else if (tab === 'lockers') this._locker_service.editLockerBank();
    };

    public onTabChange(index: number) {
        this.selected_tab.set(index);
        const available = this.available_tabs();
        if (available[index]) {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { tab: available[index].name },
                queryParamsHandling: 'merge',
            });
        }
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('tab')) {
                    const tab_name = params.get('tab');
                    const available = this.available_tabs();
                    const tab_index = available.findIndex(
                        (t) => t.name === tab_name,
                    );
                    if (tab_index >= 0) {
                        this.selected_tab.set(tab_index);
                    }
                }
            }),
        );
    }
}
