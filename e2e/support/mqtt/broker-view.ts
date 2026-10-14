/**
 * What the MQTT broker holds, seen the way stagehand sees it.
 *
 * Connects through nginx at `/api/mqtt/` with a bearer as username and
 * password — stagehand's own arrangement, so rest-api checks this client and
 * its subscriptions exactly as it checks the app's.
 *
 * source publishes every status RETAINED, so the broker holds one message per
 * topic: the current value. That makes two questions worth asking, and this
 * file answers both:
 *
 * - `BrokerView`: a live subscription. Follows the broker as it changes, so a
 *   spec can wait for a value to arrive or a topic to be removed.
 * - `retainedSnapshot`: a fresh client's first look, which is exactly what a
 *   stagehand opened right now would load. Stale topics show up here and
 *   nowhere else: a client that was already connected never sees them again.
 *
 * Topic layout (source's `MqttPublisher.generate_status_key?`), with `_` for a
 * hierarchy zone the system is not in:
 *
 *   placeos/<org>/state/<region>/<building>/<level>/<area>/<system>/<driver>/<module name>/<index>/<status>
 */
import mqtt, { MqttClient } from 'mqtt';
import { BACKEND_URL } from '../env';

export interface StateTopic {
    org: string;
    region: string;
    building: string;
    level: string;
    area: string;
    system_id: string;
    driver_id: string;
    module_name: string;
    index: string;
    status: string;
}

/** A retained status as source publishes it: `{time, value}`. */
export interface StateValue {
    /** Unix seconds. */
    time: number;
    value: unknown;
}

export function parseStateTopic(topic: string): StateTopic | null {
    const p = topic.split('/');
    if (p.length !== 12 || p[0] !== 'placeos' || p[2] !== 'state') return null;
    const [
        ,
        org,
        ,
        region,
        building,
        level,
        area,
        system_id,
        driver_id,
        module_name,
        index,
        status,
    ] = p;
    return {
        org,
        region,
        building,
        level,
        area,
        system_id,
        driver_id,
        module_name,
        index,
        status,
    };
}

/** Every status topic for one system, in any zone. */
export function systemFilter(org_id: string, system_id: string): string {
    return `placeos/${org_id}/state/+/+/+/+/${system_id}/#`;
}

/** `Display_2` for `{module_name: 'Display', index: '2'}`. */
export function moduleSlug(
    t: Pick<StateTopic, 'module_name' | 'index'>,
): string {
    return `${t.module_name}_${t.index}`;
}

function brokerUrl(): string {
    const url = new URL('/api/mqtt/', BACKEND_URL);
    url.protocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
    return url.toString();
}

async function connect(token: string): Promise<MqttClient> {
    const client = mqtt.connect(brokerUrl(), {
        username: token,
        password: token,
        // The stack terminates TLS with a self-signed certificate.
        rejectUnauthorized: false,
        reconnectPeriod: 0,
        connectTimeout: 15_000,
        clean: true,
    });
    await new Promise<void>((resolve, reject) => {
        client.once('connect', () => resolve());
        client.once('error', (error) =>
            reject(
                new Error(
                    `MQTT connect to ${brokerUrl()} failed: ${error.message}. ` +
                        `Check: docker compose -p placeos-e2e logs mosquitto`,
                ),
            ),
        );
    });
    return client;
}

async function subscribe(client: MqttClient, filter: string): Promise<void> {
    const granted = await client.subscribeAsync(filter, { qos: 0 });
    // MQTT 3.1.1 answers a refused subscription with 0x80 rather than an error
    if (granted.some((g) => g.qos === 128)) {
        throw new Error(`MQTT subscription to ${filter} was refused`);
    }
}

function decode(payload: Buffer): StateValue | undefined {
    // A zero length retained publish removes the topic from the broker
    if (payload.length === 0) return undefined;
    return JSON.parse(payload.toString()) as StateValue;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** A live view of the topics under one filter. */
export class BrokerView {
    /** Topic -> what the broker currently holds for it, as far as this client has seen. */
    readonly topics = new Map<string, StateValue>();
    /** Every message received, in order, for diagnosing a failure. */
    readonly log: { topic: string; retained: boolean; payload: string }[] = [];

    private constructor(
        private readonly client: MqttClient,
        readonly filter: string,
    ) {
        client.on('message', (topic, payload, packet) => {
            this.log.push({
                topic,
                retained: packet.retain,
                payload: payload.toString(),
            });
            const value = decode(payload);
            if (value === undefined) this.topics.delete(topic);
            else this.topics.set(topic, value);
        });
    }

    static async open(token: string, filter: string): Promise<BrokerView> {
        const client = await connect(token);
        const view = new BrokerView(client, filter);
        await subscribe(client, filter);
        return view;
    }

    /** The current value of a module's status, matched on name, index and status. */
    find(module_name: string, index: number | string, status: string) {
        for (const [topic, value] of this.topics) {
            const t = parseStateTopic(topic);
            if (
                t &&
                t.module_name === module_name &&
                t.index === `${index}` &&
                t.status === status
            ) {
                return { topic, ...t, ...value };
            }
        }
        return undefined;
    }

    /** Wait until `module_name`_`index`.`status` holds `expected`. */
    async waitForValue(
        module_name: string,
        index: number | string,
        status: string,
        expected: unknown,
        timeoutMs: number,
    ) {
        const deadline = Date.now() + timeoutMs;
        for (;;) {
            const found = this.find(module_name, index, status);
            if (
                found &&
                JSON.stringify(found.value) === JSON.stringify(expected)
            )
                return found;
            if (Date.now() > deadline) {
                throw new Error(
                    `${module_name}_${index}.${status} never became ${JSON.stringify(expected)} ` +
                        `on the broker within ${Math.round(timeoutMs / 1000)}s ` +
                        `(holds ${found ? JSON.stringify(found.value) : 'nothing'}).\n` +
                        `Messages on ${this.filter}:\n${this.describeLog()}`,
                );
            }
            await sleep(100);
        }
    }

    describeLog(): string {
        return this.log.length
            ? this.log
                  .map(
                      (m) =>
                          `  ${m.retained ? 'R' : ' '} ${m.topic} ${m.payload || '<removed>'}`,
                  )
                  .join('\n')
            : '  (none)';
    }

    async close(): Promise<void> {
        await this.client.endAsync(true);
    }
}

/**
 * What a client connecting now is handed: every retained topic under `filter`.
 *
 * The broker sends retained messages straight after it acknowledges the
 * subscription, so this waits until `quietMs` passes without one. Only retained
 * messages count; a live update arriving meanwhile is not part of the snapshot.
 */
export async function retainedSnapshot(
    token: string,
    filter: string,
    quietMs = 1_500,
): Promise<Map<string, StateValue>> {
    const client = await connect(token);
    const retained = new Map<string, StateValue>();
    let last = Date.now();
    client.on('message', (topic, payload, packet) => {
        if (!packet.retain) return;
        last = Date.now();
        const value = decode(payload);
        if (value !== undefined) retained.set(topic, value);
    });
    try {
        await subscribe(client, filter);
        last = Date.now();
        while (Date.now() - last < quietMs) await sleep(100);
        return retained;
    } finally {
        await client.endAsync(true);
    }
}

/**
 * A fresh client's view of one system: topic after `placeos/<org>/state/` ->
 * value. Comparable with `expectedTopics` in `stagehand.api.ts`.
 */
export async function retainedForSystem(
    token: string,
    org_id: string,
    system_id: string,
): Promise<Record<string, unknown>> {
    const snapshot = await retainedSnapshot(
        token,
        systemFilter(org_id, system_id),
        1_000,
    );
    const prefix = `placeos/${org_id}/state/`;
    return Object.fromEntries(
        [...snapshot].map(([topic, v]) => [
            topic.slice(prefix.length),
            v.value,
        ]),
    );
}
