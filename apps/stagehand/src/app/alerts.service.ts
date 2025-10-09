import { inject, Injectable, signal } from '@angular/core';
import { firstTruthyValueFrom } from '@placeos/common';
import { OrganisationService } from '@placeos/common';
import { token } from '@placeos/ts-client';

import mqtt from 'mqtt';

type AlertSeverity = 'critical' | 'warning' | 'info';
type AlertStatus = 'open' | 'in progress' | 'closed' | 'resolved';
type DeviceType = 'display' | 'audio' | 'video' | 'network' | 'control';

export interface Alert {
    id: string;
    severity: AlertSeverity;
    type: DeviceType;
    location: string;
    subject: string;
    body: string;
    status: AlertStatus;
    timestamp: number;
}

export interface StateTopic {
    building_id: string;
    level_id: string;
    area_id: string;
    system_id: string;
    driver_id: string;
    module_name: string;
    module_index: string;
    state_key: string;
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

@Injectable({
    providedIn: 'root',
})
export class AlertsService {
    private _org = inject(OrganisationService);
    private _broker: mqtt.MqttClient;

    public readonly system_state = signal({});
    public readonly alerts = signal<Alert[]>([]);

    constructor() {
        this.init();
    }

    public async init() {
        await firstTruthyValueFrom(this._org.initialised);
        const jwt = token();
        const url = `${location.host}/api/mqtt/`;
        const secure = location.protocol === 'https:';
        this._broker = mqtt.connect(`ws${secure ? 's' : ''}://${url}`, {
            username: jwt,
            password: jwt,
        });
        this._broker.on('connect', () => {
            this._broker.subscribe(
                `placeos/${this._org.organisation.id}/state/+/+/+/+/+/+/+/+/connected`,
            );
        });
        this._broker.on('message', (t, msg) => {
            const data = JSON.parse(msg.toString());
            const topic = stringToTopic(t);
            console.log('MQTT:', topic, data);
            if (topic.state_key === 'connected') {
                this.system_state.update((old) => {
                    const sys = old[topic.system_id] || {
                        connected: [],
                        disconnected: [],
                    };
                    console.log('System:', sys);
                    const mod = `${topic.module_name}_${topic.module_index}`;
                    sys.connected = sys.connected.filter((_) => _ !== mod);
                    sys.disconnected = sys.disconnected.filter(
                        (_) => _ !== mod,
                    );
                    data.value === true
                        ? sys.connected.push(mod)
                        : sys.disconnected.push(mod);
                    this.alerts.update((list) => {
                        const id = `${topic.system_id}+${topic.module_name}_${topic.module_index}`;
                        return data.value
                            ? [...list.filter((_) => _.id !== id)]
                            : [
                                  ...list.filter((_) => _.id !== id),
                                  {
                                      id,
                                      severity: 'warning',
                                      type: 'control',
                                      subject: 'Disconnected',
                                      location: topic.system_id,
                                      body: `Module "${topic.module_name}_${topic.module_index}" is disconnected`,
                                      timestamp: data.timestamp,
                                      status: 'open',
                                  },
                              ];
                    });
                    return {
                        ...old,
                        [topic.system_id]: sys,
                    };
                });
            }
        });
    }
}
