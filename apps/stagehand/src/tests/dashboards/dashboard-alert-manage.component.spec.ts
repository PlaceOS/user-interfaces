import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { delay, of } from 'rxjs';

import { notifyError } from '@placeos/common';
import { addAlert, updateAlert } from '@placeos/ts-client';

import { DashboardAlertManageComponent } from '../../app/dashboards/dashboard-alert-manage.component';
import { DashboardsService } from '../../app/dashboards/dashboards.service';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';
import { SystemSearchFieldComponent } from '../../app/dashboards/system-search-field.component';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyError: jest.fn(),
}));

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    addAlert: jest.fn(),
    updateAlert: jest.fn(),
}));

describe('DashboardAlertManageComponent', () => {
    let spectator: SpectatorRouting<DashboardAlertManageComponent>;
    let service: any;
    let dialog: any;

    const create_component = createRoutingFactory({
        component: DashboardAlertManageComponent,
        shallow: true,
        detectChanges: false,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(SettingsToggleComponent),
            MockComponent(SimpleTableComponent),
            MockComponent(SystemSearchFieldComponent),
        ],
        providers: [MockProvider(DashboardsService), MockProvider(MatDialog)],
    });

    function build(route_options = {}) {
        spectator = create_component({
            providers: [
                MockProvider(DashboardsService, service),
                MockProvider(MatDialog, dialog),
            ],
            ...route_options,
        });
        return spectator;
    }

    beforeEach(() => {
        jest.clearAllMocks();
        service = {
            dashboard: signal<any>({ id: 'dash-1', name: 'Lobby' }),
            alert: signal<any>(undefined),
            setDashboard: jest.fn(),
            setAlert: jest.fn(),
        };
        dialog = { open: jest.fn() };
    });

    it('should reject saving when the name is missing', async () => {
        build();
        spectator.component.model.update((m) => ({ ...m, name: '' }));

        await spectator.component.save();

        expect(notifyError).toHaveBeenCalled();
        expect(addAlert).not.toHaveBeenCalled();
        expect(updateAlert).not.toHaveBeenCalled();
    });

    it('should not save when there is no active dashboard', async () => {
        service.dashboard.set(undefined);
        build();
        spectator.component.model.update((m) => ({ ...m, name: 'Overheat' }));

        await spectator.component.save();

        expect(addAlert).not.toHaveBeenCalled();
        expect(updateAlert).not.toHaveBeenCalled();
    });

    it('should create a new alert against the active dashboard and navigate', async () => {
        (addAlert as jest.Mock).mockResolvedValue({ id: 'alert-1' });
        build();
        spectator.component.model.update((m) => ({ ...m, name: 'Overheat' }));

        await spectator.component.save();

        expect(addAlert).toHaveBeenCalledWith(
            expect.objectContaining({
                name: 'Overheat',
                alert_dashboard_id: 'dash-1',
            }),
        );
        expect(service.setDashboard).toHaveBeenCalledWith('dash-1');
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/dashboards',
            'alert-1',
            'alerts',
        ]);
    });

    it('should update an existing alert on save', async () => {
        (updateAlert as jest.Mock).mockResolvedValue({ id: 'alert-9' });
        service.alert.set({ id: 'alert-9', name: 'Old' });
        build();
        spectator.component.model.update((m) => ({
            ...m,
            id: 'alert-9',
            name: 'Updated',
        }));

        await spectator.component.save();

        expect(updateAlert).toHaveBeenCalledWith(
            'alert-9',
            expect.objectContaining({ id: 'alert-9', name: 'Updated' }),
        );
        expect(addAlert).not.toHaveBeenCalled();
    });

    it('should remove a comparison condition from the model', () => {
        build();
        const condition = { left: 'connected', operator: '==', right: false };
        spectator.component.model.update((m) => ({
            ...m,
            conditions: {
                comparisons: [condition as any],
                time_dependents: [],
            },
        }));

        spectator.component.removeCondition(condition as any);

        expect(spectator.component.model().conditions.comparisons).toEqual([]);
    });

    it('should not open the condition dialog without a selected system', async () => {
        build();

        await spectator.component.editCondition();

        expect(dialog.open).not.toHaveBeenCalled();
    });

    it('should merge dialog results into the model conditions', async () => {
        const new_comparison = {
            left: 'temp',
            operator: '>',
            right: 50,
        };
        dialog.open.mockReturnValue({
            afterClosed: () =>
                of({
                    comparisons: [new_comparison],
                    time_dependents: [],
                }).pipe(delay(1)),
        });
        build();
        spectator.component.template_system.set({ id: 'sys-1' } as any);

        await spectator.component.editCondition();

        expect(dialog.open).toHaveBeenCalled();
        expect(spectator.component.model().conditions.comparisons).toContain(
            new_comparison,
        );
    });

    it('should ignore a cancelled condition dialog', async () => {
        dialog.open.mockReturnValue({
            afterClosed: () => of(null).pipe(delay(1)),
        });
        build();
        spectator.component.template_system.set({ id: 'sys-1' } as any);
        const before = spectator.component.model().conditions;

        await spectator.component.editCondition();

        expect(spectator.component.model().conditions).toEqual(before);
    });

    it('should load the routed alert into the model on init', async () => {
        service.alert.set({
            id: 'alert-3',
            name: 'Loaded',
            description: 'desc',
        });
        build({ params: { id: 'dash-1', alert_id: 'alert-3' } });

        await spectator.component.setAlert('alert-3');

        expect(service.setAlert).toHaveBeenCalledWith('alert-3');
        expect(spectator.component.model().name).toBe('Loaded');
    });
});
