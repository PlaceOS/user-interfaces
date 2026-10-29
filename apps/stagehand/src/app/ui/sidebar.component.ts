import {
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import {
    OrganisationService,
    SettingsService,
    settingSignal,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { DashboardsService } from '../dashboards/dashboards.service';
import { SupportGroupsService } from '../support-groups.service';
import { PushNotificationSettingsComponent } from '../push-notification-settings.component';
import { AlertNotificationService } from '../push-notification.service';

/** Start collapsed on narrow screens, so the sidebar does not cover the page */
const COMPACT_SIGNAL = signal(
    typeof matchMedia === 'function' &&
        matchMedia('(max-width: 767px)').matches,
);

@Component({
    selector: 'sidebar',
    template: `
        <nav
            sidebar
            aria-label="Primary"
            class="bg-secondary text-secondary-content flex h-full flex-col"
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
                        <div class="stagehand-muted truncate text-xs">
                            by PlaceOS
                        </div>
                    </div>
                </div>
                <button
                    icon
                    type="button"
                    matRipple
                    class="rounded-sm"
                    [class.w-14]="is_compact()"
                    (click)="toggleCompact()"
                    [attr.aria-label]="
                        is_compact() ? 'Expand sidebar' : 'Collapse sidebar'
                    "
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
            @if (show_group_selector()) {
                <div class="px-2 pt-1">
                    <button
                        matRipple
                        type="button"
                        group-selector
                        class="hover:bg-base-100/10 border-base-100/20 flex w-full items-center gap-2 rounded-sm border p-2 text-left"
                        [class.justify-center]="is_compact()"
                        [attr.aria-label]="'Support group: ' + group_label()"
                        [matTooltip]="is_compact() ? group_label() : ''"
                        matTooltipPosition="right"
                        (click)="selectGroup()"
                    >
                        <icon class="text-2xl">{{
                            selected_group() ? 'group' : 'public'
                        }}</icon>
                        @if (!is_compact()) {
                            <div class="min-w-0 flex-1">
                                <div
                                    class="stagehand-muted text-xs font-medium tracking-wide uppercase"
                                >
                                    Support group
                                </div>
                                <div class="truncate text-sm">
                                    {{ group_label() }}
                                </div>
                            </div>
                            <icon class="text-xl">unfold_more</icon>
                        }
                    </button>
                </div>
            }
            @if (!is_compact()) {
                @let r_list = region_list();
                @let bld_list = building_list();
                @if (r_list.length || bld_list.length) {
                    <div class="space-y-2 p-2">
                        @if (r_list.length > 0) {
                            <label
                                class="block px-1 text-xs font-medium tracking-wide uppercase"
                                for="sidebar-region"
                            >
                                Region
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript white-faded w-full"
                            >
                                <!-- selectionChange also fires for keyboard selection -->
                                <mat-select
                                    id="sidebar-region"
                                    [(ngModel)]="region"
                                    (selectionChange)="
                                        setRegion(regionById($event.value))
                                    "
                                    aria-label="Region"
                                >
                                    <mat-option value="">{{
                                        'COMMON.REGION_ALL' | translate
                                    }}</mat-option>
                                    @for (region of r_list; track region.id) {
                                        <mat-option [value]="region.id">{{
                                                region.display_name ||
                                                    region.name
                                            }}</mat-option
                                        >
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (bld_list.length > 0 && region()) {
                            <label
                                class="block px-1 text-xs font-medium tracking-wide uppercase"
                                for="sidebar-building"
                            >
                                Building
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript white-faded w-full"
                            >
                                <mat-select
                                    id="sidebar-building"
                                    [(ngModel)]="building"
                                    (selectionChange)="
                                        setBuilding(buildingById($event.value))
                                    "
                                    aria-label="Building"
                                >
                                    <mat-option value="">{{
                                        'COMMON.BUILDING_ALL' | translate
                                    }}</mat-option>
                                    @for (bld of bld_list; track bld.id) {
                                        <mat-option [value]="bld.id">{{
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
                    class="hover:bg-base-100/10 relative flex w-full items-center space-x-4 p-2"
                    routerLinkActive="bg-secondary-focus!"
                    ariaCurrentWhenActive="page"
                    aria-label="Alerts"
                    [routerLink]="['/alerts']"
                    [matTooltip]="is_compact() ? 'Alerts' : ''"
                    matTooltipPosition="right"
                >
                    <icon class="ml-0! text-3xl">notifications</icon>
                    @if (!is_compact()) {
                        <span class="truncate">Alerts</span>
                    }
                </a>
                <a
                    matRipple
                    class="hover:bg-base-100/10 relative flex w-full items-center space-x-4 p-2"
                    routerLinkActive="bg-secondary-focus!"
                    ariaCurrentWhenActive="page"
                    aria-label="Remote support"
                    [routerLink]="['/remote-support']"
                    [matTooltip]="is_compact() ? 'Remote Support' : ''"
                    matTooltipPosition="right"
                >
                    <icon class="ml-0! text-3xl">wifi</icon>
                    @if (!is_compact()) {
                        <span class="truncate">Remote Support</span>
                    }
                </a>
                @if (analytics_pages()?.length > 0) {
                    <a
                        matRipple
                        class="hover:bg-base-100/10 relative flex w-full items-center space-x-4 p-2"
                        routerLinkActive="bg-secondary-focus!"
                        ariaCurrentWhenActive="page"
                        aria-label="Analytics"
                        [routerLink]="['/analytics']"
                        [matTooltip]="is_compact() ? 'Analytics' : ''"
                        matTooltipPosition="right"
                    >
                        <icon class="ml-0! text-3xl">show_chart</icon>
                        @if (!is_compact()) {
                            <span class="truncate">Analytics</span>
                        }
                    </a>
                }
                <a
                    matRipple
                    class="hover:bg-base-100/10 relative flex w-full items-center space-x-4 p-2"
                    routerLinkActive="bg-secondary-focus!"
                    ariaCurrentWhenActive="page"
                    aria-label="Manage dashboards"
                    [routerLink]="['/dashboards']"
                    [matTooltip]="is_compact() ? 'Manage Dashboards' : ''"
                    matTooltipPosition="right"
                >
                    <icon class="ml-0! text-3xl">dashboard</icon>
                    @if (!is_compact()) {
                        <span class="truncate">Manage Dashboards</span>
                    }
                </a>
                @if (show_recorder_view()) {
                    <a
                        matRipple
                        class="hover:bg-base-100/10 relative flex w-full items-center space-x-4 p-2"
                        routerLinkActive="bg-secondary-focus!"
                        ariaCurrentWhenActive="page"
                        aria-label="Recorder streams"
                        [routerLink]="['/recorder-grid']"
                        [matTooltip]="is_compact() ? 'Recorder Streams' : ''"
                        matTooltipPosition="right"
                    >
                        <icon class="ml-0! text-3xl">stream</icon>
                        @if (!is_compact()) {
                            <span class="truncate">Recorder Streams</span>
                        }
                    </a>
                }
            </div>
            <div
                class="flex flex-col gap-2 py-4"
                [class.px-4]="!is_compact()"
                [class.px-0]="is_compact()"
            >
                @if (can_change_dark_mode()) {
                    <button
                        matRipple
                        type="button"
                        class="hover:bg-base-100/10 relative flex w-full items-center justify-center gap-2 rounded-sm p-2"
                        (click)="toggleDarkMode()"
                        [attr.aria-label]="
                            dark_mode()
                                ? 'Switch to light mode'
                                : 'Switch to dark mode'
                        "
                        [matTooltip]="
                            is_compact()
                                ? dark_mode()
                                    ? 'Switch to Light Mode'
                                    : 'Switch to Dark Mode'
                                : ''
                        "
                        matTooltipPosition="right"
                    >
                        <icon class="text-2xl">{{
                            dark_mode() ? 'dark_mode' : 'light_mode'
                        }}</icon>
                        @if (!is_compact()) {
                            <span class="flex-1 truncate text-left text-sm"
                                >Dark Mode</span
                            >
                            <span
                                class="ml-auto rounded-full px-2 py-0.5 text-xs"
                                [class.bg-success]="dark_mode()"
                                [class.text-success-content]="dark_mode()"
                                [class.bg-base-100]="!dark_mode()"
                                [class.text-base-content]="!dark_mode()"
                            >
                                {{ dark_mode() ? 'ON' : 'OFF' }}
                            </span>
                        }
                    </button>
                }
                <button
                    matRipple
                    type="button"
                    class="hover:bg-base-100/10 relative flex w-full items-center justify-center gap-2 rounded-sm p-2"
                    (click)="openNotificationSettings()"
                    aria-label="Notification settings"
                    [matTooltip]="is_compact() ? 'Notification Settings' : ''"
                    matTooltipPosition="right"
                >
                    <icon class="text-2xl">{{
                        notifications_active()
                            ? 'notifications_active'
                            : 'notifications_off'
                    }}</icon>
                    @if (!is_compact()) {
                        <span class="flex-1 truncate text-left text-sm"
                            >Notifications</span
                        >
                    }
                    @if (notifications_active() && !is_compact()) {
                        <span
                            class="bg-success text-success-content ml-auto rounded-full px-2 py-0.5 text-xs"
                            >ON</span
                        >
                    }
                </button>
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
                    aria-label="Launch PlaceOS Backoffice in a new tab"
                    [href]="backoffice_link()"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @if (!is_compact()) {
                        <span class="truncate text-sm">
                            Launch PlaceOS Backoffice
                        </span>
                    }
                    @if (is_compact()) {
                        <icon class="text-base-100 text-3xl">open_in_new</icon>
                    }
                </a>
                @if (!is_compact()) {
                    <p class="stagehand-muted text-center text-xs">
                        Access system configuration and management
                    </p>
                }
            </div>
        </nav>
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
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);
    private _groups = inject(SupportGroupsService);

    public readonly push = inject(AlertNotificationService);
    public readonly is_compact = COMPACT_SIGNAL;
    private readonly _allow_dark_mode = this._settings.signal(
        'allow_dark_mode',
        false,
    );
    private readonly _theme = this._settings.theme_signal;
    /** True if permission granted AND at least one severity is enabled */
    public readonly notifications_active = computed(() => {
        if (!this.push.enabled()) return false;
        const config = this.push.config();
        return config.critical || config.high || config.medium || config.low;
    });
    public readonly dark_mode = computed(() => this._theme() === 'dark');
    public readonly can_change_dark_mode = computed(
        () => !!this._allow_dark_mode(),
    );
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

    public readonly selected_group = this._groups.selected_group;
    public readonly group_label = computed(
        () => this.selected_group()?.group.name || 'All groups',
    );
    /** Shown to anyone in a group, or who can see them all */
    public readonly show_group_selector = computed(
        () => this._groups.can_view_all() || this._groups.groups().length > 0,
    );
    /** Regions, limited to those the selected group can see */
    public readonly region_list = computed(() => {
        const scope = this._groups.scope();
        const regions = this._org.region_list();
        return scope ? regions.filter((r) => scope.zones.has(r.id)) : regions;
    });
    /** Buildings of the region, limited to those the selected group can see */
    public readonly building_list = computed(() => {
        const scope = this._groups.scope();
        const buildings = this._org.active_buildings();
        return scope
            ? buildings.filter((b) => scope.zones.has(b.id))
            : buildings;
    });

    public regionById(id: string) {
        return this.region_list().find((r) => r.id === id) || null;
    }

    public buildingById(id: string) {
        return this.building_list().find((b) => b.id === id) || null;
    }

    public readonly setRegion = (r) => {
        this._org.region = r;
        this.building.set('');
        this._dash.listenForDashboardAlerts(true);
    };
    public readonly setBuilding = (b) => {
        this._org.building = b;
        this._dash.listenForDashboardAlerts(true);
    };

    /** Let the user pick the support group to work in */
    public async selectGroup() {
        const { GroupSelectModalComponent } =
            await import('./group-select-modal.component');
        const ref = this._dialog.open(GroupSelectModalComponent, {
            data: {
                groups: this._groups.groups(),
                selected_group_id: this._groups.group_id(),
                show_all_groups: this._groups.can_view_all(),
            },
        });
        const group_id: string | undefined = await firstValueFrom(
            ref.afterClosed(),
            { defaultValue: undefined },
        );
        if (group_id !== undefined) this._groups.setSelectedGroup(group_id);
    }

    public toggleCompact() {
        this.is_compact.update((s) => !s);
    }

    public toggleDarkMode() {
        this._settings.setTheme(this.dark_mode() ? 'light' : 'dark');
    }

    public openNotificationSettings() {
        this._dialog.open(PushNotificationSettingsComponent);
    }
}
