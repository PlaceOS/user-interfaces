import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AsyncHandler,
    OrganisationService,
    settingSignal,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { first } from 'rxjs/operators';
import { AssetRequestListComponent } from '../asset-manager/asset-request-list.component';
import { DeskBookingsComponent } from '../desks/desk-bookings.component';
import { DesksStateService } from '../desks/desks-state.service';
import { LockerBookingsComponent } from '../lockers/locker-bookings.component';
import { LockerStateService } from '../lockers/locker-state.service';
import { ParkingBookingsListComponent } from '../parking/parking-bookings-list.component';
import { ParkingStateService } from '../parking/parking-state.service';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { GuestListingComponent } from '../visitors/guest-listing.component';
import { VisitorsStateService } from '../visitors/visitors-state.service';
import { BookingManagerTopbarComponent } from './booking-manager-topbar.component';

@Component({
    selector: '[app-booking-manager]',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <booking-manager-topbar
                    [tab_index]="selected_tab()"
                    [tab_name]="current_tab_name()"
                    [show_header]="true"
                ></booking-manager-topbar>
                <mat-tab-group
                    class="mx-8 mb-4 overflow-hidden rounded-md bg-base-200"
                    [(selectedIndex)]="selected_tab"
                    (selectedIndexChange)="onTabChange($event)"
                >
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
                    @if (show_assets()) {
                        <mat-tab
                            [label]="'APP.CONCIERGE.TAB_ASSETS' | translate"
                        ></mat-tab>
                    }
                    @if (show_visitors()) {
                        <mat-tab
                            [label]="'APP.CONCIERGE.TAB_VISITORS' | translate"
                        ></mat-tab>
                    }
                </mat-tab-group>
                <booking-manager-topbar
                    [tab_index]="selected_tab()"
                    [tab_name]="current_tab_name()"
                    [show_header]="false"
                ></booking-manager-topbar>
                <div class="relative w-full flex-1">
                    @if (current_tab_name() === 'desks') {
                        <desk-bookings
                            class="relative block h-full w-full"
                        ></desk-bookings>
                    } @else if (current_tab_name() === 'parking') {
                        <parking-bookings-list
                            class="relative block h-full w-full"
                        ></parking-bookings-list>
                    } @else if (current_tab_name() === 'lockers') {
                        <locker-bookings
                            class="relative block h-full w-full"
                        ></locker-bookings>
                    } @else if (current_tab_name() === 'assets') {
                        <app-asset-request-list
                            class="relative block h-full w-full"
                        ></app-asset-request-list>
                    } @else if (current_tab_name() === 'visitors') {
                        <guest-listings
                            class="relative block h-full w-full"
                        ></guest-listings>
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
        TranslatePipe,
        BookingManagerTopbarComponent,
        DeskBookingsComponent,
        ParkingBookingsListComponent,
        LockerBookingsComponent,
        AssetRequestListComponent,
        GuestListingComponent,
    ],
})
export class BookingManagerComponent extends AsyncHandler implements OnInit {
    private readonly _desk_service = inject(DesksStateService);
    private readonly _parking_service = inject(ParkingStateService);
    private readonly _locker_service = inject(LockerStateService);
    private readonly _visitors_service = inject(VisitorsStateService);
    private readonly _org = inject(OrganisationService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);

    public readonly selected_tab = signal(0);
    public readonly feature_list = settingSignal<string[]>('features', []);

    // Feature availability computed signals
    public readonly show_desks = computed(() =>
        this.feature_list().includes('desks'),
    );
    public readonly show_parking = computed(() =>
        this.feature_list().includes('parking'),
    );
    public readonly show_lockers = computed(() =>
        this.feature_list().includes('lockers'),
    );
    public readonly show_assets = computed(() =>
        this.feature_list().includes('assets'),
    );
    public readonly show_visitors = computed(() =>
        this.feature_list().includes('visitors'),
    );

    // Available tabs based on features
    public readonly available_tabs = computed(() => {
        const tabs: Array<{ name: string; feature: string }> = [];
        if (this.show_desks()) tabs.push({ name: 'desks', feature: 'desks' });
        if (this.show_parking())
            tabs.push({ name: 'parking', feature: 'parking' });
        if (this.show_lockers())
            tabs.push({ name: 'lockers', feature: 'lockers' });
        if (this.show_assets())
            tabs.push({ name: 'assets', feature: 'assets' });
        if (this.show_visitors())
            tabs.push({ name: 'visitors', feature: 'visitors' });
        return tabs;
    });

    // Current tab name based on selected index
    public readonly current_tab_name = computed(() => {
        const available = this.available_tabs();
        const index = this.selected_tab();
        return available[index]?.name || '';
    });

    private readonly TAB_NAMES = [
        'desks',
        'parking',
        'lockers',
        'assets',
        'visitors',
    ];

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
