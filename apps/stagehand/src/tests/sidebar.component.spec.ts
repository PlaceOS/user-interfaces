import type { Mock } from 'vitest';
import { signal } from '@angular/core';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';

import { DashboardsService } from '../app/dashboards/dashboards.service';
import { PushNotificationSettingsComponent } from '../app/push-notification-settings.component';
import { AlertNotificationService } from '../app/push-notification.service';
import { groupScope } from '../app/support-groups';
import { SupportGroupsService } from '../app/support-groups.service';
import { SidebarComponent } from '../app/ui/sidebar.component';

describe('SidebarComponent', () => {
    let spectator: SpectatorRouting<SidebarComponent>;
    let component: SidebarComponent;

    let allow_dark_mode: ReturnType<typeof signal<boolean>>;
    let theme: ReturnType<typeof signal<string>>;
    let dialog: { open: Mock };
    let settings: any;
    let org: any;
    let dash: any;
    let push: any;
    let groups: any;

    const create_component = createRoutingFactory({
        component: SidebarComponent,
        detectChanges: false,
    });

    beforeEach(() => {
        allow_dark_mode = signal(false);
        theme = signal('light');
        dialog = { open: vi.fn() };
        settings = {
            signal: vi.fn((key: string, def: unknown) =>
                key === 'allow_dark_mode' ? allow_dark_mode : signal(def),
            ),
            theme_signal: theme,
            setTheme: vi.fn(),
        };
        org = {
            region_list: signal([{ id: 'reg-1', name: 'Region 1' }]),
            active_buildings: signal([{ id: 'bld-1', name: 'Building 1' }]),
            _region: undefined,
            _building: undefined,
            set region(value: unknown) {
                this._region = value;
            },
            get region() {
                return this._region;
            },
            set building(value: unknown) {
                this._building = value;
            },
            get building() {
                return this._building;
            },
        };
        dash = {
            region_id: signal(''),
            building_id: signal(''),
            listenForDashboardAlerts: vi.fn(),
        };
        groups = {
            can_view_all: signal(true),
            groups: signal([]),
            selected_group: signal(undefined),
            group_id: signal(''),
            scope: signal(null),
            setSelectedGroup: vi.fn(),
        };
        push = {
            enabled: signal(false),
            config: signal({
                critical: false,
                high: false,
                medium: false,
                low: false,
            }),
        };

        spectator = create_component({
            providers: [
                { provide: SettingsService, useValue: settings },
                { provide: OrganisationService, useValue: org },
                { provide: DashboardsService, useValue: dash },
                { provide: SupportGroupsService, useValue: groups },
                { provide: MatDialog, useValue: dialog },
                { provide: AlertNotificationService, useValue: push },
            ],
        });
        component = spectator.component;
        component.is_compact.set(false);
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should toggle the compact state', () => {
        expect(component.is_compact()).toBe(false);
        component.toggleCompact();
        expect(component.is_compact()).toBe(true);
        component.toggleCompact();
        expect(component.is_compact()).toBe(false);
    });

    it('should switch the theme based on the current mode', () => {
        theme.set('light');
        component.toggleDarkMode();
        expect(settings.setTheme).toHaveBeenCalledWith('dark');

        theme.set('dark');
        component.toggleDarkMode();
        expect(settings.setTheme).toHaveBeenCalledWith('light');
    });

    it('should expose the current dark-mode state', () => {
        theme.set('dark');
        expect(component.dark_mode()).toBe(true);
        theme.set('light');
        expect(component.dark_mode()).toBe(false);
    });

    it('should only allow dark-mode toggling when the setting is enabled', () => {
        expect(component.can_change_dark_mode()).toBe(false);
        allow_dark_mode.set(true);
        expect(component.can_change_dark_mode()).toBe(true);
    });

    it('should open the notification settings dialog', () => {
        component.openNotificationSettings();
        expect(dialog.open).toHaveBeenCalledWith(
            PushNotificationSettingsComponent,
        );
    });

    it('should apply the region, clear the building and re-listen', () => {
        component.building.set('bld-1');
        const region = { id: 'reg-1' };

        component.setRegion(region);

        expect(org.region).toBe(region);
        expect(component.building()).toBe('');
        expect(dash.listenForDashboardAlerts).toHaveBeenCalledWith(true);
    });

    it('should apply a region picked with the keyboard', async () => {
        spectator.detectChanges();
        // let ngModel select "All regions" first
        await spectator.fixture.whenStable();
        const select = spectator.query('#sidebar-region') as HTMLElement;

        // Arrow keys on a closed select pick the next option, with no click
        select.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'ArrowDown',
                keyCode: 40,
            } as KeyboardEventInit),
        );

        expect(org.region).toEqual({ id: 'reg-1', name: 'Region 1' });
        expect(dash.listenForDashboardAlerts).toHaveBeenCalledWith(true);
    });

    it('should apply the building and re-listen', () => {
        const building = { id: 'bld-2' };

        component.setBuilding(building);

        expect(org.building).toBe(building);
        expect(dash.listenForDashboardAlerts).toHaveBeenCalledWith(true);
    });

    it('should report notifications inactive while push is disabled', () => {
        push.enabled.set(false);
        push.config.set({
            critical: true,
            high: true,
            medium: true,
            low: true,
        });
        expect(component.notifications_active()).toBe(false);
    });

    it('should report notifications inactive when no severity is enabled', () => {
        push.enabled.set(true);
        push.config.set({
            critical: false,
            high: false,
            medium: false,
            low: false,
        });
        expect(component.notifications_active()).toBe(false);
    });

    it('should report notifications active when enabled with a severity on', () => {
        push.enabled.set(true);
        push.config.set({
            critical: true,
            high: false,
            medium: false,
            low: false,
        });
        expect(component.notifications_active()).toBe(true);
    });

    describe('support groups', () => {
        const zone = (id: string, parent_id: string, tags: string[]) =>
            ({ id, parent_id, tags, name: id }) as any;

        it('shows "All groups", and switches to the group picked', async () => {
            groups.groups.set([{ group: { id: 'g1', name: 'Level 3 AV' } }]);
            dialog.open.mockReturnValue({ afterClosed: () => of('g1') });
            spectator.detectChanges();
            const button = spectator.query('[group-selector]');
            expect(button.getAttribute('aria-label')).toBe(
                'Support group: All groups',
            );
            await component.selectGroup();
            expect(dialog.open).toHaveBeenCalledWith(
                expect.anything(),
                expect.objectContaining({
                    data: {
                        groups: groups.groups(),
                        selected_group_id: '',
                        show_all_groups: true,
                    },
                }),
            );
            expect(groups.setSelectedGroup).toHaveBeenCalledWith('g1');
        });

        it('keeps the group when the picker is dismissed', async () => {
            dialog.open.mockReturnValue({ afterClosed: () => of(undefined) });
            await component.selectGroup();
            expect(groups.setSelectedGroup).not.toHaveBeenCalled();
        });

        it('names the selected group', () => {
            groups.can_view_all.set(false);
            groups.groups.set([{ group: { id: 'g1', name: 'Level 3 AV' } }]);
            groups.selected_group.set({
                group: { id: 'g1', name: 'Level 3 AV' },
            });
            spectator.detectChanges();
            expect(
                spectator.query('[group-selector]').getAttribute('aria-label'),
            ).toBe('Support group: Level 3 AV');
        });

        it('hides the picker from a user with no group to pick', () => {
            groups.can_view_all.set(false);
            spectator.detectChanges();
            expect(spectator.query('[group-selector]')).toBeNull();
        });

        it('lists only the regions and buildings the group can see', () => {
            org.region_list.set([
                { id: 'reg-1', name: 'Region 1' },
                { id: 'reg-2', name: 'Region 2' },
            ]);
            org.active_buildings.set([
                { id: 'bld-1', name: 'Building 1' },
                { id: 'bld-2', name: 'Building 2' },
            ]);
            // granted a level of building 2, so its building and region show
            groups.scope.set(
                groupScope(
                    [zone('lvl-1', 'bld-2', ['level'])],
                    [zone('lvl-1', 'bld-2', ['level'])],
                    [
                        zone('bld-2', 'reg-1', ['building']),
                        zone('reg-1', 'org-1', ['region']),
                    ],
                ),
            );
            expect(component.region_list().map((r) => r.id)).toEqual(['reg-1']);
            expect(component.building_list().map((b) => b.id)).toEqual([
                'bld-2',
            ]);

            groups.scope.set(null);
            expect(component.region_list()).toHaveLength(2);
        });
    });
});
