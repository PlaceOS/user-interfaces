import { effect, inject, Injectable, signal, untracked } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    AsyncHandler,
    i18n,
    log,
    notifySuccess,
    OrganisationService,
} from '@placeos/common';
import {
    authorise,
    listDashboardAlerts,
    PlaceAlert,
    PlaceAlertDashboard,
    queryAlertDashboards,
    removeAlert,
    removeAlertDashboard,
    showAlert,
    showAlertDashboard,
    TriggerConditionOperator,
} from '@placeos/ts-client';

import { openConfirmModal } from '@placeos/components';
import mqtt from 'mqtt';
import { AlertNotificationService } from '../push-notification.service';
import {
    inGroupScope,
    scopeZoneFilters,
    topicZoneIds,
    ZoneFilter,
} from '../support-groups';
import { SupportGroupsService } from '../support-groups.service';
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
    private _groups = inject(SupportGroupsService);

    private _mqtt_broker: mqtt.MqttClient;
    private _connected = false;
    private _reconnect_attempts = 0;
    private _destroyed = false;
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
    /** Changes each time the selected group's scope does */
    private _group_scope_version = 0;
    /** Whether anything has asked for the alerts yet */
    private _listening = false;

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
        // A region or building the selected group cannot see falls back to
        // all of them
        effect(() => {
            const scope = this._groups.scope();
            if (!scope || !this._groups.scope_ready()) return;
            untracked(() => {
                const building = this.building_id();
                const region = this.region_id();
                if (building && !scope.zones.has(building)) {
                    this.building_id.set('');
                }
                if (region && !scope.zones.has(region)) {
                    this.region_id.set('');
                    this.building_id.set('');
                }
            });
        });
        // Listen again whenever the group, or what it can see, changes
        effect(() => {
            this._groups.scope();
            untracked(() => {
                this._group_scope_version++;
                if (this._listening) this.listenForDashboardAlerts(true);
            });
        });
    }

    /**
     * Zones the hot list listens on: the region or building picked, within
     * what the selected group can see
     */
    private _zoneFilters(): ZoneFilter[] {
        const building = this.building_id();
        const region = this.region_id();
        const scope = this._groups.scope();
        if (scope) return scopeZoneFilters(scope, building || region);
        if (building) return [{ building }];
        return [region ? { region } : {}];
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
        this._listening = true;
        const alert_scope = [
            dashboard?.id || 'disconnected',
            this.region_id() || '',
            this.building_id() || '',
            this._groups.group_id(),
            this._group_scope_version,
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

    protected override destroy() {
        // nothing may connect again: reconnecting and listening run on after
        // the timers are cleared, from promises that settle later
        this._destroyed = true;
        super.destroy();
        const client = this._mqtt_broker;
        delete this._mqtt_broker;
        this._connected = false;
        client?.end(true);
    }

    private async _initialiseBroker() {
        if (this._initialising() || this._destroyed) return;
        this._initialising.set(true);
        try {
            await this._org.waitUntilInitialised();
            if (this._destroyed) return;
            this.unsubWith('alert:');
            const url = `${location.host}/api/mqtt/`;
            const secure = location.protocol === 'https:';
            // The broker checks the token only as a connection opens, and the
            // client's own reconnect reuses the credentials it was created
            // with, long after that token has expired. Connections are opened
            // here instead, each with a current token
            this._mqtt_broker = mqtt.connect(
                `ws${secure ? 's' : ''}://${url}`,
                {
                    keepalive: 30,
                    manualConnect: true,
                    reconnectPeriod: 0,
                },
            );
            this._mqtt_broker.on('connect', () => {
                this._reconnect_attempts = 0;
                // each connection starts a clean session and is handed every
                // retained value as it subscribes; a topic removed while it
                // was away sends nothing, so start from what it is handed
                this._values.clear();
                this._connected = true;
                if (this._listening) {
                    this.timeout('listen_to_topics', () =>
                        this._listenToAlertTopics(),
                    );
                }
            });
            this._mqtt_broker.on('close', () => {
                this._connected = false;
                this._scheduleReconnect();
            });
            this._mqtt_broker.on('error', (e) =>
                log('ALERTS', 'Broker connection error:', e),
            );
            this._mqtt_broker.on('message', (t, b) =>
                this._handleBrokerMessage(t, b),
            );
            await this._connectBroker();
        } catch (e) {
            this.timeout('init_finish', () => this._initialising.set(false));
            throw e;
        }
        this.timeout('init_finish', () => this._initialising.set(false));
    }

    /** Opens the broker connection with a current token, renewed if expired */
    private async _connectBroker() {
        const client = this._mqtt_broker;
        if (!client) return;
        try {
            const jwt = await authorise();
            if (client !== this._mqtt_broker) return;
            client.options.username = jwt;
            client.options.password = jwt;
            client.reconnect();
        } catch (e) {
            log('ALERTS', 'Failed to authorise the broker connection:', e);
            this._scheduleReconnect();
        }
    }

    private _scheduleReconnect() {
        if (!this._mqtt_broker) return;
        const delay = Math.min(30_000, 1000 * 2 ** this._reconnect_attempts);
        this._reconnect_attempts += 1;
        this.timeout('broker_reconnect', () => this._connectBroker(), delay);
    }

    private _listenToAlertTopics() {
        if (!this._mqtt_broker) return;
        // under the same name as a request to listen, so a newer request
        // replaces a wait rather than running beside it
        if (!this._connected) {
            return this.timeout('listen_to_topics', () =>
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
        const zone_filters = this._zoneFilters();
        const topics = new Set<string>();
        for (const alert of alert_list) {
            for (const item of alert.conditions.comparisons) {
                for (const zones of zone_filters) {
                    const topic = compareAsTopic(
                        item,
                        zones,
                        this._org.organisation.id,
                    );
                    if (topic) topics.add(topic);
                }
            }
        }
        for (const topic of topics) {
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

    private _handleBrokerMessage(t: string, msg_buffer: Buffer) {
        let entry: BrokerValue | null;
        try {
            entry = parseBrokerMessage(t, msg_buffer.toString());
        } catch (e) {
            log('ALERTS', `Ignoring unreadable message on ${t}:`, e);
            return;
        }
        // a listened zone can hold zones the group is denied
        if (!inGroupScope(topicZoneIds(t), this._groups.scope())) return;
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
