import { Component, OnInit, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler, OrganisationService } from '@placeos/common';
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
                    [show_header]="true"
                ></booking-manager-topbar>
                <mat-tab-group
                    class="mx-8 mb-4 overflow-hidden rounded-md bg-base-200"
                    [(selectedIndex)]="selected_tab"
                    (selectedIndexChange)="onTabChange($event)"
                >
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_DESKS' | translate"
                    ></mat-tab>
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_PARKING' | translate"
                    ></mat-tab>
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_LOCKERS' | translate"
                    ></mat-tab>
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_ASSETS' | translate"
                    ></mat-tab>
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_VISITORS' | translate"
                    ></mat-tab>
                </mat-tab-group>
                <booking-manager-topbar
                    [tab_index]="selected_tab()"
                    [show_header]="false"
                ></booking-manager-topbar>
                <div class="relative w-full flex-1">
                    @if (selected_tab() === 0) {
                        <desk-bookings
                            class="relative block h-full w-full"
                        ></desk-bookings>
                    } @else if (selected_tab() === 1) {
                        <parking-bookings-list
                            class="relative block h-full w-full"
                        ></parking-bookings-list>
                    } @else if (selected_tab() === 2) {
                        <locker-bookings
                            class="relative block h-full w-full"
                        ></locker-bookings>
                    } @else if (selected_tab() === 3) {
                        <app-asset-request-list
                            class="relative block h-full w-full"
                        ></app-asset-request-list>
                    } @else if (selected_tab() === 4) {
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

    private readonly TAB_NAMES = [
        'desks',
        'parking',
        'lockers',
        'assets',
        'visitors',
    ];

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
