import { inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    AsyncHandler,
    firstTruthyValueFrom,
    i18n,
    log,
    notifySuccess,
    OrganisationService,
    unique,
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
    TriggerComparison,
    TriggerConditionOperator,
} from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';

import { openConfirmModal } from '@placeos/components';
import mqtt from 'mqtt';
import { Alert } from '../alerts.service';
import { AlertNotificationService } from '../push-notification.service';

export interface StateTopic {
    region_id?: string;
    building_id?: string;
    level_id?: string;
    area_id?: string;
    system_id?: string;
    driver_id?: string;
    module_name?: string;
    module_index?: string;
    state_key?: string;
}

let _org_id = '';

function topicToString(topic: StateTopic): string {
    return `placeos/${_org_id || '+'}/+/${topic.region_id || '+'}/${topic.building_id || '+'}/${topic.level_id || '+'}/${topic.area_id || '+'}/${topic.system_id || '+'}/${topic.driver_id || '+'}/${topic.module_name || '+'}/${topic.module_index || '+'}/${topic.state_key || '+'}`;
}

function stringToTopic(topic: string): StateTopic {
    const [
        _,
        _o,
        _s,
        bld_id,
        lvl_id,
        area_id,
        _b,
        sys_id,
        dev_id,
        mod_id,
        mod_idx,
        key,
    ] = topic.split('/');
    return {
        building_id: bld_id,
        level_id: lvl_id,
        area_id: area_id,
        system_id: sys_id,
        driver_id: dev_id,
        module_name: mod_id,
        module_index: mod_idx,
        state_key: key,
    };
}

function compareAsTopic(
    item: TriggerComparison,
    zones: { region?: string; building?: string; level?: string } = {},
): string {
    if (!(item.left instanceof Object))
        return topicToString({
            state_key: `${item.left}`,
            region_id: zones.region,
            building_id: zones.building,
        });
    const parts = (item.left?.mod || '').split('_');
    const module_index = parts.pop();
    const module_name = parts.join('_');
    const topic = topicToString({
        module_name,
        state_key: item.left.status,
        region_id: zones.region,
        building_id: zones.building,
        level_id: zones.level,
    });
    return topic;
}

function matchTopics(topic: string, comp: string): boolean {
    const t_state = topic.split('/');
    const comp_t_state = comp.split('/');
    for (let i = 0; i < t_state.length; i++) {
        if (
            t_state[i] !== comp_t_state[i] &&
            t_state[i] !== '+' &&
            comp_t_state[i] !== '+'
        ) {
            return false;
        }
    }
    return true;
}

interface BrokerAlert {
    time: number;
    topic: StateTopic;
    topic_str: string;
    value: any;
}

function findCompareMatches(alerts: BrokerAlert[], item: TriggerComparison) {
    const topic = compareAsTopic(item);
    const matches: BrokerAlert[] = [];
    for (const alert of alerts) {
        if (matchTopics(topic, alert.topic_str)) {
            switch (item.operator) {
                case TriggerConditionOperator.EQ:
                    item.right === alert.value ? matches.push(alert) : '';
                    break;
                case TriggerConditionOperator.NEQ:
                    item.right !== alert.value ? matches.push(alert) : '';
                    break;
                case TriggerConditionOperator.GT:
                    item.right > alert.value ? matches.push(alert) : '';
                    break;
                case TriggerConditionOperator.LT:
                    item.right < alert.value ? matches.push(alert) : '';
                    break;
                case TriggerConditionOperator.GTE:
                    item.right >= alert.value ? matches.push(alert) : '';
                    break;
                case TriggerConditionOperator.LTE:
                    item.right <= alert.value ? matches.push(alert) : '';
                    break;
                case TriggerConditionOperator.AND:
                    item.right && alert.value ? matches.push(alert) : '';
                    break;
                case TriggerConditionOperator.OR:
                    item.right || alert.value ? matches.push(alert) : '';
                    break;
                case TriggerConditionOperator.XOR:
                    (item.right as number) | alert.value
                        ? matches.push(alert)
                        : '';
                    break;
            }
        }
    }
    return matches;
}

@Injectable({
    providedIn: 'root',
})
export class DashboardsService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _push = inject(AlertNotificationService);

    private _mqtt_broker: mqtt.MqttClient;
    private _connected = false;
    private _alerts = signal([]);
    private _initialising = signal(false);
    private _region_set_from_params = false;
    /** Track alert IDs that have already been notified to prevent duplicates */
    private _notified_alert_ids = new Set<string>();

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
        // Check for region/building in URL query params immediately
        this._initFromQueryParams();

        firstTruthyValueFrom(this._org.initialised).then(() => {
            this.timeout('org_init', () => {
                // Don't overwrite if region was explicitly set from query params
                if (!this._region_set_from_params) {
                    this.region_id.set(this._org.region?.id || '');
                    this.building_id.set(this._org.building?.id || '');
                }
            });
        });
    }

    /** Initialize region/building from URL query params */
    private _initFromQueryParams() {
        // Parse query params from hash (for hash routing) or search
        const hash = location.hash;
        const queryIndex = hash.indexOf('?');
        const queryString = queryIndex >= 0 ? hash.substring(queryIndex + 1) : '';
        const params = new URLSearchParams(queryString);

        const region_param = params.get('region');
        const building_param = params.get('building');

        if (region_param) {
            this._region_set_from_params = true;
            // 'all' means empty string (all regions/buildings)
            this.region_id.set(region_param === 'all' ? '' : region_param);
            if (building_param) {
                this.building_id.set(building_param === 'all' ? '' : building_param);
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
        this.loadDashboardAlerts();
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
        this.loadDashboardAlerts();
    }

    async loadDashboardAlerts(id = '') {
        const dashboard = this.dashboard();
        if (!dashboard && !id) return;
        this.loading.update((l) => [...l, 'ALERT_LIST']);
        const alerts = await lastValueFrom(
            listDashboardAlerts(id || dashboard.id),
        );
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
        this.dashboard_alerts.set([]);
        const dashboard = this.dashboard();
        if (!dashboard && !force) return;
        if (!this._mqtt_broker) await this._initialiseBroker();
        this.timeout('listen_to_topics', () => this._listenToAlertTopics());
    }

    private async _initialiseBroker() {
        if (this._initialising()) return;
        this._initialising.set(true);
        try {
            await firstTruthyValueFrom(this._org.initialised);
            this.unsubWith('alert:');
            _org_id = this._org.organisation.id;
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
            this._mqtt_broker.on('connect', () => (this._connected = true));
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
        const topic = stringToTopic(t);
        const data = JSON.parse(msg_buffer.toString());
        const details = { ...data, topic, topic_str: t };
        this._alerts.update((l) => [...l.filter((_) => _), details]);
        this._updateDashboardAlertList();
    }

    private _updateDashboardAlertList() {
        this.timeout(
            'update_alerts',
            () => {
                const alert_list = this.alerts_list();
                let alert_out: Alert[] = [];
                for (const alert of alert_list) {
                    const comparision_matches: any[][] = [];
                    for (const item of alert.conditions.comparisons) {
                        const matches = findCompareMatches(
                            this._alerts(),
                            item,
                        );
                        comparision_matches.push(matches);
                    }
                    console.log('Matches:', alert, comparision_matches);
                    if (!comparision_matches.length) continue;
                    const match_groups: any[][] = [];
                    for (const match of comparision_matches[0]) {
                        const group = [match];
                        for (let i = 1; i < comparision_matches.length; i++) {
                            const other_match = comparision_matches[i].find(
                                (_) =>
                                    Math.abs(_.time - match.time) <
                                    alert.debounce_period,
                            );
                            if (other_match) group.push(other_match);
                        }
                        match_groups.push(group);
                    }
                    for (const group of match_groups) {
                        const required_matches = alert.any_match
                            ? 1
                            : alert.conditions.comparisons.length;
                        if (group.length >= required_matches) {
                            const { time, topic_str } = group[0];
                            const topic = stringToTopic(topic_str);
                            const device = `${topic.module_name}_${topic.module_index}`;
                            alert_out.push({
                                id: `${alert.id}+${topic.system_id}+${device}`,
                                severity: alert.severity as any,
                                type: alert.alert_type as any,
                                location: topic.system_id,
                                device,
                                subject: alert.name,
                                body: alert.description,
                                status: 'open',
                                timestamp: time * 1000,
                            });
                        }
                    }
                    alert_out = unique(alert_out, 'id');
                }
                // Send push notifications for new alerts
                this._sendPushNotifications(alert_out);
                this.dashboard_alerts.set(alert_out);
            },
            10,
        );
    }

    /** Send push notifications for new alerts that haven't been notified yet */
    private _sendPushNotifications(alerts: Alert[]): void {
        log('ALERTS', `_sendPushNotifications called with ${alerts.length} alerts`);
        for (const alert of alerts) {
            // Skip if already notified
            if (this._notified_alert_ids.has(alert.id)) {
                log('ALERTS', `Skipping already notified alert: ${alert.id}`);
                continue;
            }

            log('ALERTS', `Sending notification for new alert: ${alert.id}, severity: ${alert.severity}`);
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
