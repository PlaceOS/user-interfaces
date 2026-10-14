/**
 * Connecting `source` to the stack's MQTT broker.
 *
 * source publishes to every Broker row in the database and to nothing else, so
 * without one the stack has a broker that never receives a message. This adds
 * the row, with the credentials a deployment uses: an API key, sent as both
 * username and password. mosquitto-go-auth hands it to rest-api
 * (`/api/engine/v2/mqtt/mqtt_user`), which accepts an API key wherever it
 * accepts a bearer and, unlike a bearer, it does not expire mid-run.
 *
 * Publishing needs support permissions (`MQTT.mqtt_acl_status` in rest-api), so
 * the key is minted as Support. A browser only subscribes, which any signed in
 * user may do.
 *
 * Run by `e2e/stack/up.sh`. Idempotent: a Broker row that exists is left alone,
 * because the API key's secret is only returned when it is created and cannot
 * be read back to compare.
 */
import { APIRequestContext } from '@playwright/test';
import { ENGINE_API, asList, currentUser, getJson } from '../api';
import { BACKEND_URL, assertLocalOnly } from '../env';
import { adminApi } from '../seed';

export const BROKER_NAME = 'E2E Mosquitto';
const API_KEY_NAME = 'e2e-source-mqtt';

/** `UserJWT::Permissions::Support` */
const SUPPORT_PERMISSIONS = 1;

interface BrokerRow {
    id: string;
    name: string;
    host: string;
    port: number;
}

interface ApiKeyRow {
    id: string;
    name: string;
    x_api_key?: string | null;
}

export async function ensureBroker(
    api: APIRequestContext,
): Promise<{ id: string; created: boolean }> {
    const brokers = asList<BrokerRow>(
        await getJson(api, `${ENGINE_API}/brokers`, { limit: '100' }),
    );
    const found = brokers.find((b) => b.name === BROKER_NAME);
    if (found) return { id: found.id, created: false };

    const api_key = await mintPublisherKey(api);
    const res = await api.post(`${ENGINE_API}/brokers`, {
        data: {
            name: BROKER_NAME,
            description:
                'The e2e stack broker that source publishes to. Safe to delete.',
            host: 'mosquitto',
            port: 1883,
            tls: false,
            auth_type: 'UserPassword',
            username: api_key,
            password: api_key,
        },
    });
    if (!res.ok()) {
        throw new Error(
            `create broker failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
    return { id: (await res.json()).id, created: true };
}

/**
 * A fresh API key for source. One left by an earlier seed whose broker row has
 * since gone is replaced: its secret is unrecoverable, and the name is unique.
 */
async function mintPublisherKey(api: APIRequestContext): Promise<string> {
    const keys = asList<ApiKeyRow>(
        await getJson(api, `${ENGINE_API}/api_keys`, { limit: '500' }),
    );
    for (const stale of keys.filter((k) => k.name === API_KEY_NAME)) {
        await api.delete(`${ENGINE_API}/api_keys/${stale.id}`);
    }
    const user = await currentUser(api);
    const res = await api.post(`${ENGINE_API}/api_keys`, {
        data: {
            name: API_KEY_NAME,
            description: 'source publishing to the e2e broker. Safe to delete.',
            user_id: user.id,
            scopes: ['public'],
            permissions: SUPPORT_PERMISSIONS,
        },
    });
    if (!res.ok()) {
        throw new Error(
            `create api key failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
    const key: ApiKeyRow = await res.json();
    if (!key.x_api_key) {
        throw new Error('create api key returned no x_api_key');
    }
    return key.x_api_key;
}

if (require.main === module) {
    (async () => {
        assertLocalOnly(BACKEND_URL);
        const api = await adminApi();
        try {
            const broker = await ensureBroker(api);
            console.log(
                `  broker     ${broker.created ? 'created' : 'present'}  ${BROKER_NAME} -> mosquitto:1883`,
            );
        } finally {
            await api.dispose();
        }
    })().catch((e) => {
        console.error(e.message);
        process.exit(1);
    });
}
