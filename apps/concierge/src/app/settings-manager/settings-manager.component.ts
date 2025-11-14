import { Component, OnInit, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AsyncHandler, OrganisationService } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { first } from 'rxjs/operators';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { EmergencyContactsListComponent } from '../staff/emergency-contacts-list.component';
import { EmailTemplatesListComponent } from '../email-templates/email-templates-list.component';
import { UrlListComponent } from '../url-management/url-list.component';
import { POIListComponent } from '../poi-manager/poi-list.component';
import { POIManagementService } from '../poi-manager/poi-management.service';
import { UrlManagementService } from '../url-management/url-management.service';
import { MatDialog } from '@angular/material/dialog';
import { EmergencyContactModalComponent } from '../staff/emergency-contact-modal.component';
import { BehaviorSubject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
                    <mat-tab
                        [label]="
                            'APP.CONCIERGE.TAB_EMERGENCY_CONTACTS' | translate
                        "
                    ></mat-tab>
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_EMAIL_TEMPLATES' | translate"
                    ></mat-tab>
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_URL_MANAGEMENT' | translate"
                    ></mat-tab>
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_POI' | translate"
                    ></mat-tab>
                </mat-tab-group>
                <div class="flex-1 relative">
                    @if (selected_tab() === 0) {
                        <emergency-contacts-list
                            class="relative block h-full w-full"
                        ></emergency-contacts-list>
                    } @else if (selected_tab() === 1) {
                        <email-templates-list
                            class="relative block h-full w-full"
                            [hide_header]="true"
                        ></email-templates-list>
                    } @else if (selected_tab() === 2) {
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
                    } @else if (selected_tab() === 3) {
                        <poi-list
                            class="relative block h-full w-full"
                        ></poi-list>
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
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
    ],
})
export class SettingsManagerComponent extends AsyncHandler implements OnInit {
    private readonly _poi_service = inject(POIManagementService);
    private readonly _url_service = inject(UrlManagementService);
    private readonly _dialog = inject(MatDialog);
    private readonly _org = inject(OrganisationService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);

    public readonly selected_tab = signal(0);
    public url_search_term = '';
    private _change = new BehaviorSubject<number>(0);

    private readonly TAB_NAMES = [
        'emergency-contacts',
        'email-templates',
        'url-management',
        'poi',
    ];

    public readonly addButtonText = () => {
        const tab_index = this.selected_tab();
        if (tab_index === 0) return 'APP.CONCIERGE.CONTACTS_ADD';
        if (tab_index === 1) return 'APP.CONCIERGE.EMAIL_TEMPLATES_ADD';
        if (tab_index === 2) return 'APP.CONCIERGE.URLS_ADD';
        return 'APP.CONCIERGE.POI_ADD';
    };

    public readonly addItem = () => {
        const tab_index = this.selected_tab();
        if (tab_index === 0) {
            const ref = this._dialog.open(EmergencyContactModalComponent, {});
            ref.afterClosed().subscribe(() => this._change.next(Date.now()));
        } else if (tab_index === 1) {
            this._router.navigate(['/email-templates/manage']);
        } else if (tab_index === 2) {
            this._url_service.editURL();
        } else {
            this._poi_service.editPointOfInterest();
        }
    };

    public updateUrlSearch(value: string) {
        this._url_service.setSearchString(value);
    }

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
