import { signal } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { delay, of } from 'rxjs';

import {
    addAlert,
    TriggerComparison,
    TriggerConditionOperator,
    TriggerTimeCondition,
    TriggerTimeConditionType,
    updateAlert,
} from '@placeos/ts-client';

import {
    IconComponent,
    SettingsToggleComponent,
    SimpleTableComponent,
} from '@placeos/components';
import { setNotifyOutlet } from '@placeos/common';
import { DashboardAlertManageComponent } from '../../app/dashboards/dashboard-alert-manage.component';
import { DashboardsService } from '../../app/dashboards/dashboards.service';
import { SystemSearchFieldComponent } from '../../app/dashboards/system-search-field.component';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('DashboardAlertManageComponent', () => {
    let spectator: SpectatorRouting<DashboardAlertManageComponent>;
    let service: any;
    let dialog: any;
    let notify_open: ReturnType<typeof vi.fn>;

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
        // Disable the zoneless auto-tick: these tests assert on component
        // signals/methods, not the DOM. Auto change-detection would render the
        // experimental signal-forms + mat-select template and emit benign async
        // rxjs/material errors that vitest reports as unhandled.
        providers: [
            MockProvider(DashboardsService),
            MockProvider(MatDialog),
            { provide: ComponentFixtureAutoDetect, useValue: false },
        ],
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
        vi.clearAllMocks();
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        service = {
            dashboard: signal<unknown>({ id: 'dash-1', name: 'Lobby' }),
            alert: signal<unknown>(undefined),
            setDashboard: vi.fn(async () => true),
            setAlert: vi.fn(async () => true),
        };
        dialog = { open: vi.fn() };
    });

    afterEach(() => {
        spectator?.fixture?.destroy();
        setNotifyOutlet(null, true);
    });

    it('should reject saving when the name is missing', async () => {
        build();
        spectator.component.model.update((m) => ({ ...m, name: '' }));

        await spectator.component.save();

        expect(notify_open).toHaveBeenCalled();
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
        vi.mocked(addAlert).mockResolvedValue({ id: 'alert-1' } as any);
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
            'dash-1',
            'alerts',
        ]);
    });

    it('should tell the user when the alert fails to save', async () => {
        vi.mocked(addAlert).mockRejectedValue(new Error('offline'));
        build();
        spectator.component.model.update((m) => ({ ...m, name: 'Overheat' }));

        await spectator.component.save();

        expect(notify_open).toHaveBeenCalled();
        expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
    });

    it('should update an existing alert on save', async () => {
        vi.mocked(updateAlert).mockResolvedValue({ id: 'alert-9' } as any);
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

    it('should remove a comparison, keeping the time dependents', () => {
        build();
        const condition: TriggerComparison = {
            left: 'connected',
            operator: TriggerConditionOperator.EQ,
            right: false,
        };
        const kept: TriggerComparison = {
            left: 'power',
            operator: TriggerConditionOperator.EQ,
            right: true,
        };
        const time_dependent: TriggerTimeCondition = {
            type: TriggerTimeConditionType.AT,
            time: 0,
        };
        spectator.component.model.update((m) => ({
            ...m,
            conditions: {
                comparisons: [condition, kept],
                time_dependents: [time_dependent],
            },
        }));

        spectator.component.removeCondition(condition);

        expect(spectator.component.model().conditions).toEqual({
            comparisons: [kept],
            time_dependents: [time_dependent],
        });
    });

    it('should not open the condition dialog without a selected system', async () => {
        build();

        await spectator.component.editCondition();

        expect(dialog.open).not.toHaveBeenCalled();
    });

    it('should take the condition list the dialog returns', async () => {
        const old_comparison = { left: 'power', operator: '==', right: true };
        const new_comparison = { left: 'temp', operator: '>', right: 50 };
        // The dialog returns every condition, the new one included
        dialog.open.mockReturnValue({
            afterClosed: () =>
                of({
                    comparisons: [old_comparison, new_comparison],
                    time_dependents: [],
                }).pipe(delay(1)),
        });
        build();
        spectator.component.model.update((m) => ({
            ...m,
            conditions: {
                comparisons: [old_comparison as any],
                time_dependents: [],
            },
        }));
        spectator.component.template_system.set({ id: 'sys-1' });

        await spectator.component.editCondition();

        expect(dialog.open).toHaveBeenCalled();
        expect(spectator.component.model().conditions.comparisons).toEqual([
            old_comparison,
            new_comparison,
        ]);
    });

    it('should ignore a cancelled condition dialog', async () => {
        dialog.open.mockReturnValue({
            afterClosed: () => of(null).pipe(delay(1)),
        });
        build();
        spectator.component.template_system.set({ id: 'sys-1' });
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

    it('should not save over another alert when the load fails', async () => {
        service.alert.set({ id: 'alert-1', name: 'Previous' });
        service.setAlert = vi.fn(async () => false);
        build({ params: { id: 'dash-1', alert_id: 'alert-2' } });

        await spectator.component.setAlert('alert-2');
        spectator.component.model.update((m) => ({ ...m, name: 'Edited' }));
        await spectator.component.save();

        expect(spectator.component.model().id).not.toBe('alert-1');
        expect(ts_client.updateAlert).not.toHaveBeenCalled();
        expect(ts_client.addAlert).not.toHaveBeenCalled();
    });

    it('should not leave the page when destroyed during the dashboard load', async () => {
        service.dashboard.set({ id: 'dash-0' });
        let finish: (loaded: boolean) => void = () => undefined;
        service.setDashboard = vi.fn(
            () => new Promise<boolean>((resolve) => (finish = resolve)),
        );
        build({ params: { id: 'dash-1' } });
        const navigate = spectator.inject(Router).navigate;

        const init = spectator.component.ngOnInit();
        spectator.fixture.destroy();
        finish(false);
        await init;
        // Let any timer the old code set run
        await new Promise((resolve) => setTimeout(resolve));

        expect(navigate).not.toHaveBeenCalled();
    });

    it('should wait for a slow dashboard load before checking it', async () => {
        vi.useFakeTimers();
        service.dashboard.set(undefined);
        service.setDashboard = vi.fn(
            () =>
                new Promise<void>((resolve) =>
                    setTimeout(() => {
                        service.dashboard.set({ id: 'dash-1' });
                        resolve();
                    }, 1000),
                ),
        );
        build({ params: { id: 'dash-1' } });
        const navigate = spectator.inject(Router).navigate;

        spectator.component.ngOnInit();
        await vi.advanceTimersByTimeAsync(1500);
        vi.useRealTimers();

        expect(navigate).not.toHaveBeenCalled();
    });

    it('should leave when the routed dashboard does not load', async () => {
        service.dashboard.set({ id: 'dash-0' });
        build({ params: { id: 'dash-1' } });
        const navigate = spectator.inject(Router).navigate;

        await spectator.component.ngOnInit();
        await new Promise((resolve) => setTimeout(resolve));

        expect(navigate).toHaveBeenCalledWith(['/dashboards']);
    });
});
