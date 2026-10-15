import { effect, inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    AsyncHandler,
    i18n,
    log,
    notifySuccess,
    OrganisationService,
} from '@placeos/common';
import {
    listDashboardAlerts,
    PlaceAlert,
    PlaceAlertDashboard,
    queryAlertDashboards,
    removeAlert,
    removeAlertDashboard,
    showAlert,
    showAlertDashboard,
    token,
    TriggerConditionOperator,
} from '@placeos/ts-client';

import { openConfirmModal } from '@placeos/components';
import mqtt from 'mqtt';
import { AlertNotificationService } from '../push-notification.service';
import {
    Alert,
    BrokerValue,
    compareAsTopic,
    parseBrokerMessage,
    raisedAlerts,
} from './broker-alerts';

@Injectable({
    providedIn: 'root',
})
export class DashboardsService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _push = inject(AlertNotificationService);

    private _mqtt_broker: mqtt.MqttClient;
    private _connected = false;
    /** The latest value of each topic the broker holds, by topic */
    private _values = new Map<string, BrokerValue>();
    private _initialising = signal(false);
    private _region_set_from_params = false;
    /** Capture original URL query string at construction time before effects can modify it */
    private _initial_query_string = (() => {
        const hash = location.hash;
        const idx = hash.indexOf('?');
        return idx >= 0 ? hash.substring(idx + 1) : '';
    })();
    /** Track alert IDs that have already been notified to prevent duplicates */
    private _notified_alert_ids = new Set<string>();
    /** Track current alert subscription scope to avoid unnecessary resets */
    private _alert_scope = '';

    public readonly loading = signal<string[]>([]);
    public readonly region_id = signal<string>('');
    public readonly building_id = signal<string>('');
    public readonly dashboard = signal<PlaceAlertDashboard>(undefined);
    public readonly alert = signal<PlaceAlert>(undefined);
    public readonly dashboard_list = signal<PlaceAlertDashboard[]>([]);
    public readonly alerts_list = signal<PlaceAlert[]>([]);
    public readonly dashboard_alert_map = signal<Record<string, PlaceAlert[]>>(
        {},
    );
    public readonly dashboard_alerts = signal<Alert[]>([]);

    constructor() {
        super();

        this._org.waitUntilInitialised().then(() => {
            // Check for region/building in URL query params immediately
            this._initFromQueryParams();

            // If not set from params, sync with the org service region and
            // default to all buildings.
            if (!this._region_set_from_params) {
                this.region_id.set(this._org.region?.id || '');
                this.building_id.set('');
            }
        });
        effect(() => {
            const region = this._org.active_region();
            if (this._region_set_from_params) return;
            const region_id = region?.id || '';
            if (this.region_id() === region_id) return;
            this.region_id.set(region_id);
            this.building_id.set('');
        });
    }

    /** Initialize region/building from URL query params */
    private _initFromQueryParams() {
        // Use query string captured at construction time to avoid reading
        // params injected by the _query_sync effect in AlertsComponent
        const params = new URLSearchParams(this._initial_query_string);

        const region_param = params.get('region');
        const building_param = params.get('building');

        if (region_param) {
            this._region_set_from_params = true;
            // 'all' means empty string (all regions/buildings)
            this.region_id.set(region_param === 'all' ? '' : region_param);
            if (building_param) {
                this.building_id.set(
                    building_param === 'all' ? '' : building_param,
                );
            }
        }
    }

    /** Set region from query params, preventing constructor from overwriting */
    public setRegionFromParams(region_id: string, building_id?: string) {
        this._region_set_from_params = true;
        this.region_id.set(region_id);
        if (building_id !== undefined) {
            this.building_id.set(building_id);
        }
    }

    public async setAlert(id: string) {
        this.loading.update((l) => [...l, 'ALERT']);
        const alert = await showAlert(id);
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
        const dashboard = await showAlertDashboard(id);
        this.dashboard.set(dashboard);
        this.loadDashboardAlerts();
        this.loading.update((l) => l.filter((i) => i !== 'DASHBOARD'));
    }

    public async loadDashboards() {
        this.loading.update((l) => [...l, 'DASHBOARD_LIST']);
        const alerts = await queryAlertDashboards({ limit: 100 });
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
        await removeAlertDashboard(dashboard.id);
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
        await removeAlert(alert.id);
        result.close();
        notifySuccess(i18n('APP.STAGEHAND.DASHBOARD_ALERTS_REMOVE_SUCCESS'));
        this.loadDashboardAlerts();
    }

    async loadDashboardAlerts(id = '') {
        const dashboard = this.dashboard();
        if (!dashboard && !id) return;
        this.loading.update((l) => [...l, 'ALERT_LIST']);
        const alerts = await listDashboardAlerts(id || dashboard.id);
        if (!id) this.alerts_list.set(alerts.data);
        else {
            this.dashboard_alert_map.update((m) => {
                m[id] = alerts.data;
                return m;
            });
        }
        this.loading.update((l) => l.filter((i) => i !== 'ALERT_LIST'));
    }

    public async listenForDashboardAlerts(force = false) {
        const dashboard = this.dashboard();
        if (!dashboard && !force) return;
        const alert_scope = [
            dashboard?.id || 'disconnected',
            this.region_id() || '',
            this.building_id() || '',
        ].join('|');
        const scope_changed = this._alert_scope !== alert_scope;
        if (!scope_changed && this._mqtt_broker && this._connected) return;

        if (scope_changed) {
            this.dashboard_alerts.set([]);
            this._values.clear();
        }
        this._alert_scope = alert_scope;
        if (!this._mqtt_broker) await this._initialiseBroker();
        this.timeout('listen_to_topics', () => this._listenToAlertTopics());
    }

    private async _initialiseBroker() {
        if (this._initialising()) return;
        this._initialising.set(true);
        try {
            await this._org.waitUntilInitialised();
            this.unsubWith('alert:');
            const jwt = token();
            const url = `${location.host}/api/mqtt/`;
            const secure = location.protocol === 'https:';
            this._mqtt_broker = mqtt.connect(
                `ws${secure ? 's' : ''}://${url}`,
                {
                    username: jwt,
                    password: jwt,
                    keepalive: 30,
                },
            );
            this._mqtt_broker.on('connect', () => {
                // on a reconnection the client subscribes again and is handed
                // every retained value; a topic removed while it was away
                // sends nothing, so start from what it is handed
                this._values.clear();
                this._connected = true;
            });
            this._mqtt_broker.on('disconnect', () => {
                this._connected = false;
                delete this._mqtt_broker;
            });
            this._mqtt_broker.on('message', (t, b) =>
                this._handleBrokerMessage(t, b),
            );
        } catch (e) {
            this.timeout('init_finish', () => this._initialising.set(false));
            throw e;
        }
        this.timeout('init_finish', () => this._initialising.set(false));
    }

    private _listenToAlertTopics() {
        if (!this._connected) {
            return this.timeout('alert_topics', () =>
                this._listenToAlertTopics(),
            );
        }
        this.unsubWith('alert:');
        // resubscribing hands back every retained value, so drop what came
        // from the old subscriptions rather than keep values nothing updates
        this._values.clear();
        const dashboard = this.dashboard();
        const alert_list = this.alerts_list();
        if (!alert_list.length) {
            alert_list.push({
                name: 'Disconnected Device',
                severity: 'medium',
                conditions: {
                    comparisons: [
                        {
                            left: 'connected',
                            operator: TriggerConditionOperator.EQ,
                            right: false,
                        },
                    ],
                },
            } as any);
        }
        for (const alert of alert_list) {
            for (const item of alert.conditions.comparisons) {
                const topic = compareAsTopic(
                    item,
                    this.building_id()
                        ? { building: this.building_id() }
                        : this.region_id()
                          ? { region: this.region_id() }
                          : {},
                    this._org.organisation.id,
                );
                if (!topic) continue;
                log('ALERTS', 'Listening to topic:', topic);
                this._mqtt_broker.subscribe(topic);
                this.subscription(
                    `alert:${dashboard?.id || 'disconnected'}|${topic}`,
                    () => {
                        log('ALERTS', 'Dropped topic:', topic);
                        this._mqtt_broker?.unsubscribe(topic);
                    },
                );
            }
        }
    }

    private _handleBrokerMessage(t: string, msg_buffer: Buffer) {
        let entry: BrokerValue | null;
        try {
            entry = parseBrokerMessage(t, msg_buffer.toString());
        } catch (e) {
            log('ALERTS', `Ignoring unreadable message on ${t}:`, e);
            return;
        }
        // keep only the latest value of each topic, and forget removed ones
        if (entry) this._values.set(t, entry);
        else this._values.delete(t);
        this._updateDashboardAlertList();
    }

    private _updateDashboardAlertList() {
        // a subscription is handed every retained topic at once, so wait for
        // the burst to finish before working the alerts out
        this.timeout(
            'update_alerts',
            () => {
                const alerts = raisedAlerts(
                    this.alerts_list(),
                    this._values.values(),
                );
                this._sendPushNotifications(alerts);
                this.dashboard_alerts.set(alerts);
            },
            50,
        );
    }

    /** Send push notifications for new alerts that haven't been notified yet */
    private _sendPushNotifications(alerts: Alert[]): void {
        log(
            'ALERTS',
            `_sendPushNotifications called with ${alerts.length} alerts`,
        );
        for (const alert of alerts) {
            // Skip if already notified
            if (this._notified_alert_ids.has(alert.id)) {
                log('ALERTS', `Skipping already notified alert: ${alert.id}`);
                continue;
            }

            log(
                'ALERTS',
                `Sending notification for new alert: ${alert.id}, severity: ${alert.severity}`,
            );
            // Mark as notified before sending to prevent duplicates
            this._notified_alert_ids.add(alert.id);

            // Send push notification
            this._push.notifyAlert({
                subject: alert.subject,
                body: alert.body,
                severity: alert.severity,
                location: alert.location,
                device: alert.device,
            });
        }

        // Clean up old notified IDs that are no longer in the current alert list
        const current_ids = new Set(alerts.map((a) => a.id));
        for (const id of this._notified_alert_ids) {
            if (!current_ids.has(id)) {
                this._notified_alert_ids.delete(id);
            }
        }
    }
}
