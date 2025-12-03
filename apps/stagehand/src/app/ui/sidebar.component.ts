import { AsyncPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { OrganisationService } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { settingSignal } from 'libs/common/src/lib/settings.service';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { DashboardsService } from '../dashboards/dashboards.service';

const COMPACT_SIGNAL = signal(false);

@Component({
    selector: 'sidebar',
    template: `
        <div
            sidebar
            class="flex h-full flex-col bg-secondary text-secondary-content"
            [style.width]="is_compact() ? '3.5rem' : '16rem'"
        >
            <div class="flex items-center px-1">
                <div
                    header
                    class="overflow-hidden"
                    [style.width]="is_compact() ? '0rem' : '13rem'"
                >
                    <div class="px-2 py-4">
                        <div class="truncate text-2xl font-medium">
                            Stagehand
                        </div>
                        <div class="truncate text-xs opacity-40">
                            by PlaceOS
                        </div>
                    </div>
                </div>
                <button
                    icon
                    matRipple
                    class="rounded"
                    [class.w-14]="is_compact()"
                    (click)="toggleCompact()"
                    [matTooltip]="
                        is_compact() ? 'Expand Sidebar' : 'Collapse Sidebar'
                    "
                    matTooltipPosition="right"
                >
                    <icon class="text-3xl">{{
                        is_compact() ? 'menu' : 'close'
                    }}</icon>
                </button>
            </div>
            @if (!is_compact()) {
                @let r_list = region_list | async;
                @let bld_list = building_list | async;
                @if (r_list.length || bld_list.length) {
                    <div class="space-y-2 p-2">
                        @if (r_list.length > 0) {
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript white-faded w-full"
                            >
                                <mat-select [(ngModel)]="region">
                                    <mat-option
                                        value=""
                                        (click)="setRegion(null)"
                                        >{{
                                        'COMMON.REGION_ALL' | translate
                                    }}</mat-option>
                                    @for (region of r_list; track region.id) {
                                        <mat-option
                                            [value]="region.id"
                                            (click)="setRegion(region)"
                                            >{{
                                                region.display_name ||
                                                    region.name
                                            }}</mat-option
                                        >
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (bld_list.length > 0 && region()) {
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript white-faded w-full"
                            >
                                <mat-select [(ngModel)]="building">
                                    <mat-option
                                        value=""
                                        (click)="setBuilding(null)"
                                        >{{
                                        'COMMON.BUILDING_ALL' | translate
                                    }}</mat-option>
                                    @for (bld of bld_list; track bld.id) {
                                        <mat-option
                                            [value]="bld.id"
                                            (click)="setBuilding(bld)"
                                            >{{
                                                bld.display_name || bld.name
                                            }}</mat-option
                                        >
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                    </div>
                }
            }
            <div class="mt-2 flex-1 space-y-1 overflow-auto">
                <a
                    matRipple
                    class="relative flex w-full items-center space-x-4 p-2"
                    routerLinkActive="bg-secondary-focus"
                    [routerLink]="['/alerts']"
                    [matTooltip]="is_compact() ? 'Alerts' : ''"
                    matTooltipPosition="right"
                >
                    <div
                        class="absolute inset-0 bg-base-100 opacity-0 hover:opacity-10"
                    ></div>
                    <icon class="!ml-0 text-3xl">notifications</icon>
                    @if (!is_compact()) {
                        <span class="truncate">Alerts</span>
                    }
                </a>
                <a
                    matRipple
                    class="relative flex w-full items-center space-x-4 p-2"
                    routerLinkActive="bg-secondary-focus"
                    [routerLink]="['/remote-support']"
                    [matTooltip]="is_compact() ? 'Remote Support' : ''"
                    matTooltipPosition="right"
                >
                    <div
                        class="absolute inset-0 bg-base-100 opacity-0 hover:opacity-10"
                    ></div>
                    <icon class="!ml-0 text-3xl">wifi</icon>
                    @if (!is_compact()) {
                        <span class="truncate">Remote Support</span>
                    }
                </a>
                @if (analytics_pages()?.length > 0) {
                    <a
                        matRipple
                        class="relative flex w-full items-center space-x-4 p-2"
                        routerLinkActive="bg-secondary-focus"
                        [routerLink]="['/analytics']"
                        [matTooltip]="is_compact() ? 'Analytics' : ''"
                        matTooltipPosition="right"
                    >
                        <div
                            class="absolute inset-0 bg-base-100 opacity-0 hover:opacity-10"
                        ></div>
                        <icon class="!ml-0 text-3xl">show_chart</icon>
                        @if (!is_compact()) {
                            <span class="truncate">Analytics</span>
                        }
                    </a>
                }
                <a
                    matRipple
                    class="relative flex w-full items-center space-x-4 p-2"
                    routerLinkActive="bg-secondary-focus"
                    [routerLink]="['/dashboards']"
                    [matTooltip]="is_compact() ? 'Manage Dashboards' : ''"
                    matTooltipPosition="right"
                >
                    <div
                        class="absolute inset-0 bg-base-100 opacity-0 hover:opacity-10"
                    ></div>
                    <icon class="!ml-0 text-3xl">dashboard</icon>
                    @if (!is_compact()) {
                        <span class="truncate">Manage Dashboards</span>
                    }
                </a>
                @if (show_recorder_view()) {
                    <a
                        matRipple
                        class="relative flex w-full items-center space-x-4 p-2"
                        routerLinkActive="bg-secondary-focus"
                        [routerLink]="['/recorder-grid']"
                        [matTooltip]="is_compact ? 'Recorder Streams' : ''"
                        matTooltipPosition="right"
                    >
                        <div
                            class="absolute inset-0 bg-base-100 opacity-0 hover:opacity-10"
                        ></div>
                        <icon class="!ml-0 text-2xl">stream</icon>
                        @if (!is_compact) {
                            <span class="truncate">Recorder Streams</span>
                        }
                    </a>
                }
            </div>
            <div
                class="flex flex-col space-y-2 py-4"
                [class.px-4]="!is_compact()"
                [class.px-0]="is_compact()"
            >
                <a
                    btn
                    matRipple
                    class="inverse"
                    [class.min-w-0]="is_compact()"
                    [class.base]="!is_compact()"
                    [class.clear]="is_compact()"
                    [matTooltip]="
                        is_compact() ? 'Launch PlaceOS Backoffice' : ''
                    "
                    matTooltipPosition="right"
                    [href]="backoffice_link()"
                    target="_blank"
                    ref="noopener noreferrer"
                >
                    @if (!is_compact()) {
                        <span class="truncate text-sm">
                            Launch PlaceOS Backoffice
                        </span>
                    }
                    @if (is_compact()) {
                        <icon class="text-3xl text-base-100">open_in_new</icon>
                    }
                </a>
                @if (!is_compact()) {
                    <p class="text-center text-xs opacity-40">
                        Access system configuration and management
                    </p>
                }
            </div>
        </div>
    `,
    styles: [
        `
            [sidebar],
            [header] {
                transition: width 200ms;
            }
        `,
    ],
    imports: [
        AsyncPipe,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
        RouterModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        TranslatePipe,
    ],
})
export class SidebarComponent {
    private _dash = inject(DashboardsService);
    private _org = inject(OrganisationService);

    public readonly is_compact = COMPACT_SIGNAL;
    public readonly backoffice_link = settingSignal(
        'backoffice_link',
        `${location.origin}/backoffice/`,
    );
    public readonly show_recorder_view = settingSignal(
        'show_recorder_view',
        false,
    );
    public readonly analytics_pages = settingSignal('analytics_pages', []);
    public readonly region = this._dash.region_id;
    public readonly building = this._dash.building_id;

    public readonly region_list = this._org.region_list;
    public readonly building_list = this._org.active_buildings;

    public readonly setRegion = (r) => {
        this._org.region = r;
        this.building.set('');
        this._dash.listenForDashboardAlerts(true);
    };
    public readonly setBuilding = (b) => {
        this._org.building = b;
        this._dash.listenForDashboardAlerts(true);
    };

    public toggleCompact() {
        this.is_compact.update((s) => !s);
    }
}
