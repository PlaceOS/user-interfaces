import { inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { i18n, notifySuccess } from '@placeos/common';
import {
    listDashboardAlerts,
    PlaceAlert,
    PlaceAlertDashboard,
    queryAlertDashboards,
    removeAlert,
    removeAlertDashboard,
    showAlert,
    showAlertDashboard,
} from '@placeos/ts-client';
import { openConfirmModal } from 'libs/components/src/lib/confirm-modal.component';
import { lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DashboardsService {
    private _dialog = inject(MatDialog);

    public readonly loading = signal<string[]>([]);
    public readonly dashboard = signal<PlaceAlertDashboard>(undefined);
    public readonly alert = signal<PlaceAlert>(undefined);
    public readonly dashboard_list = signal<PlaceAlertDashboard[]>([]);
    public readonly alerts_list = signal<PlaceAlert[]>([]);

    public async setAlert(id: string) {
        this.loading.update((l) => [...l, 'ALERT']);
        const alert = await lastValueFrom(showAlert(id));
        this.alert.set(alert);
        this.loading.update((l) => l.filter((i) => i !== 'ALERT'));
    }

    public async setDashboard(id: string) {
        if (!id) {
            this.dashboard.set(null);
            this.alerts_list.set([]);
            return;
        }
        this.loading.update((l) => [...l, 'DASHBOARD']);
        const dashboard = await lastValueFrom(showAlertDashboard(id));
        this.dashboard.set(dashboard);
        this._loadDashboardAlerts();
        this.loading.update((l) => l.filter((i) => i !== 'DASHBOARD'));
    }

    public async loadDashboards() {
        this.loading.update((l) => [...l, 'DASHBOARD_LIST']);
        const alerts = await lastValueFrom(
            queryAlertDashboards({ limit: 100 }),
        );
        this.dashboard_list.set(alerts.data);
        this.loading.update((l) => l.filter((i) => i !== 'DASHBOARD_LIST'));
    }

    public async removeDashboard(dashboard: PlaceAlertDashboard) {
        const result = await openConfirmModal(
            {
                title: i18n('APP.STAGEHAND.DASHBOARD_REMOVE_HEADER'),
                content: i18n('APP.STAGEHAND.DASHBOARD_REMOVE_CONTENT', {
                    name: dashboard.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        result.loading('Removing dashboard...');
        await lastValueFrom(removeAlertDashboard(dashboard.id));
        result.close();
        notifySuccess(i18n('APP.STAGEHAND.DASHBOARD_REMOVE_SUCCESS'));
        this.loadDashboards();
    }

    public async removeDashboardAlert(alert: PlaceAlert) {
        const result = await openConfirmModal(
            {
                title: i18n('APP.STAGEHAND.DASHBOARD_ALERTS_REMOVE_HEADER'),
                content: i18n('APP.STAGEHAND.DASHBOARD_ALERTS_REMOVE_CONTENT', {
                    name: alert.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        result.loading('Removing dashboard alert...');
        await lastValueFrom(removeAlert(alert.id));
        result.close();
        notifySuccess(i18n('APP.STAGEHAND.DASHBOARD_ALERTS_REMOVE_SUCCESS'));
        this._loadDashboardAlerts();
    }

    private async _loadDashboardAlerts() {
        const dashboard = this.dashboard();
        if (!dashboard) return;
        this.loading.update((l) => [...l, 'ALERT_LIST']);
        const alerts = await lastValueFrom(listDashboardAlerts(dashboard.id));
        this.alerts_list.set(alerts.data);
        this.loading.update((l) => l.filter((i) => i !== 'ALERT_LIST'));
    }
}
