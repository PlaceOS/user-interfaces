import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AsyncHandler,
    OrganisationService,
    settingSignal,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { EmailTemplatesListComponent } from '../email-templates/email-templates-list.component';
import { ParkingStateService } from '../parking/parking-state.service';
import { ParkingUsersListComponent } from '../parking/parking-users-list.component';
import { POIListComponent } from '../poi-manager/poi-list.component';
import { POIManagementService } from '../poi-manager/poi-management.service';
import { PointsAssetsComponent } from '../points/points-assets.component';
import { PointsOverviewComponent } from '../points/points-overview.component';
import { PointsStateService } from '../points/points-state.service';
import { EmergencyContactModalComponent } from '../staff/emergency-contact-modal.component';
import { EmergencyContactsListComponent } from '../staff/emergency-contacts-list.component';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { UrlListComponent } from '../url-management/url-list.component';
import { UrlManagementService } from '../url-management/url-management.service';

@Component({
    selector: '[app-settings-manager]',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header
                    class="mb-2 flex items-center justify-between px-8 pb-2 pt-4"
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.SETTINGS_HEADER' | translate }}
                    </h2>
                    <div class="flex items-center gap-2">
                        @if (addButtonText()) {
                            <button
                                btn
                                matRipple
                                (click)="addItem()"
                                class="w-48"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon>shadow_add</icon>
                                    <div class="pr-2">
                                        {{ addButtonText() | translate }}
                                    </div>
                                </div>
                            </button>
                        }
                    </div>
                </header>
                <mat-tab-group
                    class="mx-8 mb-4 overflow-hidden rounded-md bg-base-200"
                    [(selectedIndex)]="selected_tab"
                    (selectedIndexChange)="onTabChange($event)"
                >
                    @if (show_emergency_contacts()) {
                        <mat-tab
                            [label]="
                                'APP.CONCIERGE.TAB_EMERGENCY_CONTACTS'
                                    | translate
                            "
                        ></mat-tab>
                    }
                    @if (show_email_templates()) {
                        <mat-tab
                            [label]="
                                'APP.CONCIERGE.TAB_EMAIL_TEMPLATES' | translate
                            "
                        ></mat-tab>
                    }
                    @if (show_url_management()) {
                        <mat-tab
                            [label]="
                                'APP.CONCIERGE.TAB_URL_MANAGEMENT' | translate
                            "
                        ></mat-tab>
                    }
                    @if (show_poi()) {
                        <mat-tab
                            [label]="'APP.CONCIERGE.TAB_POI' | translate"
                        ></mat-tab>
                    }
                    @if (show_parking_users()) {
                        <mat-tab
                            [label]="
                                'APP.CONCIERGE.TAB_PARKING_USERS' | translate
                            "
                        ></mat-tab>
                    }
                    @if (show_points_overview()) {
                        <mat-tab
                            [label]="
                                'APP.CONCIERGE.TAB_POINTS_OVERVIEW' | translate
                            "
                        ></mat-tab>
                    }
                    @if (show_points_assets()) {
                        <mat-tab
                            [label]="
                                'APP.CONCIERGE.TAB_POINTS_ASSETS' | translate
                            "
                        ></mat-tab>
                    }
                </mat-tab-group>
                <div class="relative flex-1">
                    @if (current_tab_name() === 'emergency-contacts') {
                        <emergency-contacts-list
                            class="relative block h-full w-full"
                        ></emergency-contacts-list>
                    } @else if (current_tab_name() === 'email-templates') {
                        <email-templates-list
                            class="relative block h-full w-full"
                            [hide_header]="true"
                        ></email-templates-list>
                    } @else if (current_tab_name() === 'url-management') {
                        <div class="mb-4 flex justify-end">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <input
                                    matInput
                                    placeholder="Search"
                                    [(ngModel)]="url_search_term"
                                    (ngModelChange)="updateUrlSearch($event)"
                                />
                            </mat-form-field>
                        </div>
                        <short-url-list
                            class="relative block h-full w-full"
                        ></short-url-list>
                    } @else if (current_tab_name() === 'poi') {
                        <poi-list
                            class="relative block h-full w-full"
                        ></poi-list>
                    } @else if (current_tab_name() === 'parking-users') {
                        <parking-users-list
                            class="relative block h-full w-full"
                        ></parking-users-list>
                    } @else if (current_tab_name() === 'points-overview') {
                        <points-overview
                            class="relative block h-full w-full"
                        ></points-overview>
                    } @else if (current_tab_name() === 'points-assets') {
                        <points-assets
                            class="relative block h-full w-full"
                        ></points-assets>
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
        EmergencyContactsListComponent,
        EmailTemplatesListComponent,
        UrlListComponent,
        POIListComponent,
        ParkingUsersListComponent,
        PointsOverviewComponent,
        PointsAssetsComponent,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
    ],
})
export class SettingsManagerComponent extends AsyncHandler implements OnInit {
    private readonly _poi_service = inject(POIManagementService);
    private readonly _url_service = inject(UrlManagementService);
    private readonly _points_service = inject(PointsStateService);
    private readonly _parking_service = inject(ParkingStateService);
    private readonly _dialog = inject(MatDialog);
    private readonly _org = inject(OrganisationService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);

    public readonly selected_tab = signal(0);
    public url_search_term = '';
    private _change = new BehaviorSubject<number>(0);
    public readonly feature_list = settingSignal<string[]>('features', []);

    // Feature availability computed signals
    public readonly show_emergency_contacts = computed(
        () =>
            this.feature_list().includes('emergency-contacts') ||
            this.feature_list().includes('internal-users'),
    );
    public readonly show_email_templates = computed(() =>
        this.feature_list().includes('email-templates'),
    );
    public readonly show_url_management = computed(() =>
        this.feature_list().includes('url-management'),
    );
    public readonly show_poi = computed(() =>
        this.feature_list().includes('points-of-interest'),
    );
    public readonly show_parking_users = computed(() =>
        this.feature_list().includes('parking'),
    );
    public readonly show_points_overview = computed(() =>
        this.feature_list().includes('points'),
    );
    public readonly show_points_assets = computed(() =>
        this.feature_list().includes('points'),
    );

    // Available tabs based on features
    public readonly available_tabs = computed(() => {
        const tabs: Array<{ name: string; feature: string }> = [];
        if (this.show_emergency_contacts())
            tabs.push({
                name: 'emergency-contacts',
                feature: 'emergency-contacts',
            });
        if (this.show_email_templates())
            tabs.push({ name: 'email-templates', feature: 'email-templates' });
        if (this.show_url_management())
            tabs.push({ name: 'url-management', feature: 'url-management' });
        if (this.show_poi()) tabs.push({ name: 'poi', feature: 'poi' });
        if (this.show_parking_users())
            tabs.push({ name: 'parking-users', feature: 'parking' });
        if (this.show_points_overview())
            tabs.push({ name: 'points-overview', feature: 'points' });
        if (this.show_points_assets())
            tabs.push({ name: 'points-assets', feature: 'points' });
        return tabs;
    });

    // Current tab name based on selected index
    public readonly current_tab_name = computed(() => {
        const available = this.available_tabs();
        const index = this.selected_tab();
        return available[index]?.name || '';
    });

    private readonly TAB_NAMES = [
        'emergency-contacts',
        'email-templates',
        'url-management',
        'poi',
        'parking-users',
        'points-overview',
        'points-assets',
    ];

    public readonly addButtonText = () => {
        const tab = this.current_tab_name();
        if (tab === 'emergency-contacts') return 'APP.CONCIERGE.CONTACTS_ADD';
        if (tab === 'email-templates')
            return 'APP.CONCIERGE.EMAIL_TEMPLATES_ADD';
        if (tab === 'url-management') return 'APP.CONCIERGE.URLS_ADD';
        if (tab === 'poi') return 'APP.CONCIERGE.POI_ADD';
        if (tab === 'parking-users') return 'APP.CONCIERGE.PARKING_USER_NEW';
        if (tab === 'points-assets') return 'APP.CONCIERGE.POINTS_ASSETS_ADD';
        return '';
    };

    public readonly addItem = () => {
        const tab = this.current_tab_name();
        if (tab === 'emergency-contacts') {
            const ref = this._dialog.open(EmergencyContactModalComponent, {});
            ref.afterClosed().subscribe(() => this._change.next(Date.now()));
        } else if (tab === 'email-templates') {
            this._router.navigate(['/email-templates/manage']);
        } else if (tab === 'url-management') {
            this._url_service.editURL();
        } else if (tab === 'poi') {
            this._poi_service.editPointOfInterest();
        } else if (tab === 'parking-users') {
            this._parking_service.editUser();
        } else if (tab === 'points-assets') {
            this._points_service.newAsset();
        }
    };

    public updateUrlSearch(value: string) {
        this._url_service.setSearchString(value);
    }

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
