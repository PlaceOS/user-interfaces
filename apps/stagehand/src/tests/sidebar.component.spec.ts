import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';

import { DashboardsService } from '../app/dashboards/dashboards.service';
import { PushNotificationSettingsComponent } from '../app/push-notification-settings.component';
import { AlertNotificationService } from '../app/push-notification.service';
import { SidebarComponent } from '../app/ui/sidebar.component';

describe('SidebarComponent', () => {
    let spectator: SpectatorRouting<SidebarComponent>;
    let component: SidebarComponent;

    let allow_dark_mode: ReturnType<typeof signal<boolean>>;
    let theme: ReturnType<typeof signal<string>>;
    let dialog: { open: jest.Mock };
    let settings: any;
    let org: any;
    let dash: any;
    let push: any;

    const create_component = createRoutingFactory({
        component: SidebarComponent,
        detectChanges: false,
    });

    beforeEach(() => {
        allow_dark_mode = signal(false);
        theme = signal('light');
        dialog = { open: jest.fn() };
        settings = {
            signal: jest.fn((key: string, def: any) =>
                key === 'allow_dark_mode' ? allow_dark_mode : signal(def),
            ),
            theme_signal: theme,
            setTheme: jest.fn(),
        };
        org = {
            region_list: signal([{ id: 'reg-1', name: 'Region 1' }]),
            active_buildings: signal([{ id: 'bld-1', name: 'Building 1' }]),
            _region: undefined,
            _building: undefined,
            set region(value: any) {
                this._region = value;
            },
            get region() {
                return this._region;
            },
            set building(value: any) {
                this._building = value;
            },
            get building() {
                return this._building;
            },
        };
        dash = {
            region_id: signal(''),
            building_id: signal(''),
            listenForDashboardAlerts: jest.fn(),
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
});
