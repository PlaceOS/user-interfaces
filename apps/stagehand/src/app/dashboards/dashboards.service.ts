import { inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    AsyncHandler,
    firstTruthyValueFrom,
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
    TriggerComparison,
    TriggerConditionOperator,
} from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';

import { openConfirmModal } from 'libs/components/src/lib/confirm-modal.component';
import mqtt from 'mqtt';
import { Alert } from '../alerts.service';

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

function compareAsTopic(item: TriggerComparison): string {
    if (!(item.left instanceof Object)) return;
    const parts = item.left.mod.split('_');
    const module_index = parts.pop();
    const module_name = parts.join('_');
    const topic = topicToString({
        module_name,
        state_key: item.left.status,
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

    private _mqtt_broker: mqtt.MqttClient;
    private _connected = false;
    private _alerts = signal([]);

    public readonly loading = signal<string[]>([]);
    public readonly dashboard = signal<PlaceAlertDashboard>(undefined);
    public readonly alert = signal<PlaceAlert>(undefined);
    public readonly dashboard_list = signal<PlaceAlertDashboard[]>([]);
    public readonly alerts_list = signal<PlaceAlert[]>([]);

    public readonly dashboard_alerts = signal<Alert[]>([]);

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

    public async listenForDashboardAlerts() {
        this.dashboard_alerts.set([]);
        const dashboard = this.dashboard();
        if (!dashboard) return;
        if (!this._mqtt_broker) await this._initialiseBroker();
        this.timeout('listen_to_topics', () => this._listenToAlertTopics());
    }

    private async _initialiseBroker() {
        await firstTruthyValueFrom(this._org.initialised);
        _org_id = this._org.organisation.id;
        const jwt = token();
        const url = `${location.host}/api/mqtt/`;
        const secure = location.protocol === 'https:';
        this._mqtt_broker = mqtt.connect(`ws${secure ? 's' : ''}://${url}`, {
            username: jwt,
            password: jwt,
        });
        this._mqtt_broker.on('connect', () => (this._connected = true));
        this._mqtt_broker.on('disconnect', () => {
            this._connected = false;
            delete this._mqtt_broker;
        });
        this._mqtt_broker.on('message', (t, b) =>
            this._handleBrokerMessage(t, b),
        );
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
        for (const alert of alert_list) {
            for (const item of alert.conditions.comparisons) {
                const topic = compareAsTopic(item);
                if (!topic) continue;
                log('ALERTS', 'Listening to topic:', topic);
                this._mqtt_broker.subscribe(topic);
                this.subscription(`alert:${dashboard.id}|${topic}`, () => {
                    log('ALERTS', 'Dropped topic:', topic);
                    this._mqtt_broker.unsubscribe(topic);
                });
            }
        }
    }

    private _handleBrokerMessage(t: string, msg_buffer: Buffer) {
        const topic = stringToTopic(t);
        const data = JSON.parse(msg_buffer.toString());
        const details = { ...data, topic, topic_str: t };
        this._alerts.update((l) => [...l.filter((_) => _), details]);
        console.log('Topic Message:', details);
        this._updateDashboardAlertList();
    }

    private _updateDashboardAlertList() {
        this.timeout(
            'update_alerts',
            () => {
                const alert_list = this.alerts_list();
                const alert_out: Alert[] = [];
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
                        if (
                            group.length >= alert.conditions.comparisons.length
                        ) {
                            const { time, topic_str } = group[1];
                            alert_out.push({
                                id: `${alert.id}+${time}`,
                                severity: alert.severity as any,
                                type: alert.alert_type as any,
                                location: topic_str,
                                subject: alert.name,
                                body: alert.description,
                                status: 'open',
                                timestamp: time * 1000,
                            });
                        }
                    }
                }
                this.dashboard_alerts.set(alert_out);
            },
            10,
        );
    }
}
