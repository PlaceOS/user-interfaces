/**
 * Systems and harness modules for the stagehand specs, through the engine API.
 *
 * Every spec builds its own system, so nothing it asserts can be disturbed by
 * another spec or by a leftover: stagehand's hot list is org wide, and the only
 * part of it a spec can own is the rows for its own system.
 *
 * Needs ADMIN.
 */
import { APIRequestContext } from '@playwright/test';
import { ENGINE_API, asList, getJson, uniqueTitle, zonesWithTag } from '../api';
import { moduleState } from '../drivers/drivers.api';
import { STAGEHAND_SYSTEM_PREFIX } from './stagehand.env';

export interface HierarchyZones {
    org: string;
    building: string;
    level: string;
}

/** The org, building and level `init` seeded. */
export async function hierarchyZones(
    api: APIRequestContext,
): Promise<HierarchyZones> {
    const [[org], [building], [level]] = await Promise.all(
        ['org', 'building', 'level'].map((tag) => zonesWithTag(api, tag)),
    );
    if (!org || !building || !level) {
        throw new Error(
            `the stack has no org/building/level zones (got ${!!org}/${!!building}/${!!level}); ` +
                `\`init start\` creates them`,
        );
    }
    return { org: org.id, building: building.id, level: level.id };
}

export interface SystemRow {
    id: string;
    name: string;
    zones: string[];
    modules: string[];
}

/**
 * A system in the org, building and level.
 *
 * The org zone is what makes source publish its modules at all: a status topic
 * begins with the org, and source drops events for a system it cannot scope.
 */
export async function createSystem(
    api: APIRequestContext,
    zones: HierarchyZones,
    label: string,
): Promise<SystemRow> {
    const res = await api.post(`${ENGINE_API}/systems`, {
        data: {
            name: uniqueTitle(`${STAGEHAND_SYSTEM_PREFIX} ${label}`),
            description: 'Created by the stagehand e2e specs. Safe to delete.',
            zones: [zones.org, zones.building, zones.level],
        },
    });
    if (!res.ok()) {
        throw new Error(
            `create system failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
    return res.json();
}

export async function getSystem(
    api: APIRequestContext,
    id: string,
): Promise<SystemRow> {
    return getJson(api, `${ENGINE_API}/systems/${id}`);
}

/** Replace a system's module list, which is also its module ORDER. */
export async function setSystemModules(
    api: APIRequestContext,
    system: SystemRow,
    modules: string[],
): Promise<SystemRow> {
    const current = await getSystem(api, system.id);
    const res = await api.patch(`${ENGINE_API}/systems/${system.id}`, {
        params: {
            version: `${(current as unknown as { version: number }).version}`,
        },
        data: { modules },
    });
    if (!res.ok()) {
        throw new Error(
            `update modules of ${system.id} failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
    return res.json();
}

/** Delete a system and every module in it. */
export async function deleteSystem(
    api: APIRequestContext,
    system_id: string,
): Promise<void> {
    const system = await getSystem(api, system_id).catch(() => null);
    if (!system) return;
    for (const module_id of system.modules ?? []) {
        await api.delete(`${ENGINE_API}/modules/${module_id}`);
    }
    await api.delete(`${ENGINE_API}/systems/${system_id}`);
}

/**
 * Delete systems a crashed run left behind.
 *
 * Only ones older than `olderThanMs`, so a sweep in one worker never takes a
 * system another worker is using right now.
 */
export async function sweepSystems(
    api: APIRequestContext,
    olderThanMs = 30 * 60 * 1000,
): Promise<void> {
    const res = await api.get(`${ENGINE_API}/systems`, {
        params: { q: STAGEHAND_SYSTEM_PREFIX, limit: '500' },
    });
    if (!res.ok()) return;
    const cutoff = Date.now() / 1000 - olderThanMs / 1000;
    for (const system of asList<SystemRow & { created_at: number }>(
        await res.json(),
    )) {
        if (
            system.name.startsWith(STAGEHAND_SYSTEM_PREFIX) &&
            system.created_at < cutoff
        ) {
            await deleteSystem(api, system.id);
        }
    }
}

export interface HarnessModule {
    id: string;
    custom_name?: string;
}

/**
 * Add a running state harness to the end of the system's module list.
 *
 * A device module needs an address and a port; the harness talks to nothing,
 * so loopback and the discard port will do. Unlike a logic module, a device
 * may not name a system when it is created (422, "should not be associated for
 * Device modules"): it joins one through the system's module list.
 *
 * Created already running, rather than created and then started: core loads a
 * module asynchronously on the create event, and a `start` that lands before
 * the load has finished is dropped ("No protocol manager for mod-…") and never
 * retried, leaving a module that is `running` with no process behind it.
 */
export async function addHarness(
    api: APIRequestContext,
    system_id: string,
    driver_id: string,
    options: { custom_name?: string } = {},
): Promise<HarnessModule> {
    const res = await api.post(`${ENGINE_API}/modules`, {
        data: {
            driver_id,
            ip: '127.0.0.1',
            port: 9,
            udp: true,
            running: true,
            custom_name: options.custom_name,
            notes: 'Created by the stagehand e2e specs. Safe to delete.',
        },
    });
    if (!res.ok()) {
        throw new Error(
            `create harness module failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
    const mod: { id: string } = await res.json();
    const added = await api.put(
        `${ENGINE_API}/systems/${system_id}/module/${mod.id}`,
    );
    if (!added.ok()) {
        throw new Error(
            `add module ${mod.id} to ${system_id} failed: HTTP ${added.status()} ${await added.text()}`,
        );
    }
    return { id: mod.id, custom_name: options.custom_name };
}

/** Call a function on a module. */
export async function exec(
    api: APIRequestContext,
    module_id: string,
    method: string,
    args: unknown[] = [],
): Promise<unknown> {
    const res = await api.post(
        `${ENGINE_API}/modules/${module_id}/exec/${method}`,
        {
            data: args,
        },
    );
    if (!res.ok()) {
        throw new Error(
            `exec ${method} on ${module_id} failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
    return res.json().catch(() => null);
}

/** Report the module as connected or not, as a device that stopped answering would. */
export async function setConnected(
    api: APIRequestContext,
    module_id: string,
    connected: boolean,
): Promise<void> {
    await exec(api, module_id, 'set_connected', [connected]);
}

/**
 * Wait until the module's own state (redis, read through rest-api) holds
 * `connected: expected`. The source of truth the broker is compared against.
 */
export async function waitForConnected(
    api: APIRequestContext,
    module_id: string,
    expected: boolean,
    timeoutMs = 60_000,
): Promise<void> {
    const deadline = Date.now() + timeoutMs;
    for (;;) {
        const state = await moduleState(api, module_id).catch(
            () => ({}) as Record<string, unknown>,
        );
        if (state['connected'] === expected) return;
        if (Date.now() > deadline) {
            throw new Error(
                `module ${module_id} never reported connected=${expected} within ` +
                    `${Math.round(timeoutMs / 1000)}s (state: ${JSON.stringify(state)}). ` +
                    `A module with no state did not start: docker compose -p placeos-e2e logs core`,
            );
        }
        await new Promise((r) => setTimeout(r, 500));
    }
}

/** Take a module out of a system without deleting it. */
export async function removeFromSystem(
    api: APIRequestContext,
    system_id: string,
    module_id: string,
): Promise<void> {
    const res = await api.delete(
        `${ENGINE_API}/systems/${system_id}/module/${module_id}`,
    );
    if (!res.ok()) {
        throw new Error(
            `remove ${module_id} from ${system_id} failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
}

export async function deleteModule(
    api: APIRequestContext,
    module_id: string,
): Promise<void> {
    const res = await api.delete(`${ENGINE_API}/modules/${module_id}`);
    if (!res.ok() && res.status() !== 404) {
        throw new Error(
            `delete module ${module_id} failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
}

/** Set a module's `custom_name`, which is the name systems address it by. */
export async function renameModule(
    api: APIRequestContext,
    module_id: string,
    custom_name: string,
): Promise<void> {
    const res = await api.patch(`${ENGINE_API}/modules/${module_id}`, {
        data: { custom_name },
    });
    if (!res.ok()) {
        throw new Error(
            `rename ${module_id} failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
}

/** Replace a system's zones. */
export async function setSystemZones(
    api: APIRequestContext,
    system: SystemRow,
    zones: string[],
): Promise<SystemRow> {
    const current = await getSystem(api, system.id);
    const res = await api.patch(`${ENGINE_API}/systems/${system.id}`, {
        params: {
            version: `${(current as unknown as { version: number }).version}`,
        },
        data: { zones },
    });
    if (!res.ok()) {
        throw new Error(
            `update zones of ${system.id} failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
    return res.json();
}

/** A level zone of the suite's own under `building`, for moving systems between. */
export async function ensureSecondLevel(
    api: APIRequestContext,
    building: string,
): Promise<string> {
    const name = 'E2E Stagehand Level 2';
    const found = (await zonesWithTag(api, 'level')).find(
        (z) => z.name === name,
    );
    if (found) return found.id;
    const res = await api.post(`${ENGINE_API}/zones`, {
        data: {
            name,
            tags: ['level'],
            parent_id: building,
            description: 'Safe to delete.',
        },
    });
    if (!res.ok()) {
        throw new Error(
            `create level zone failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
    return (await res.json()).id;
}

interface ModuleRow {
    id: string;
    name: string;
    custom_name?: string | null;
    driver_id: string;
}

/**
 * Every status topic the broker SHOULD retain for a system, from the source of
 * truth: the system's module list (order gives the index), each module's name,
 * the system's zones, and each module's own state in redis.
 *
 * Keys are the topic after `placeos/<org>/state/`; values are the status
 * values. `levels` lists the level zones a system may be in, so the topic's
 * level segment can be filled from whichever the system holds.
 */
export async function expectedTopics(
    api: APIRequestContext,
    system_id: string,
    zones: HierarchyZones,
    levels: string[] = [zones.level],
): Promise<Record<string, unknown>> {
    const system = await getSystem(api, system_id).catch(() => null);
    if (!system) return {};
    if (!system.zones.includes(zones.org)) return {};
    const building = system.zones.includes(zones.building)
        ? zones.building
        : '_';
    const level = levels.find((l) => system.zones.includes(l)) ?? '_';
    const counts: Record<string, number> = {};
    const out: Record<string, unknown> = {};
    for (const module_id of system.modules ?? []) {
        const mod: ModuleRow = await getJson(
            api,
            `${ENGINE_API}/modules/${module_id}`,
        );
        const name = mod.custom_name || mod.name;
        const index = (counts[name] = (counts[name] ?? 0) + 1);
        const state = await moduleState(api, module_id);
        for (const [status, value] of Object.entries(state)) {
            out[
                `_/${building}/${level}/_/${system_id}/${mod.driver_id}/${name}/${index}/${status}`
            ] = value;
        }
    }
    return out;
}
