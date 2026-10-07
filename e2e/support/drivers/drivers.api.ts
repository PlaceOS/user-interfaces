/**
 * Repositories, drivers and modules through the engine API.
 *
 * Needs ADMIN: only an admin may create any of these.
 */
import { APIRequestContext } from '@playwright/test';
import { ENGINE_API } from '../api';
import { DRIVERS_COMMIT, DRIVERS_REPOSITORY, DriverSpec } from './drivers.env';

function asList(body: unknown): any[] {
    return Array.isArray(body) ? body : ((body as any)?.results ?? []);
}

/** Does this error body mean the row is already there? */
function alreadyExists(body: string): boolean {
    return /already (exists|taken)|has already been taken|must be unique|should be unique|duplicate/i.test(
        body,
    );
}

async function getJson(
    api: APIRequestContext,
    path: string,
    params?: Record<string, string>,
) {
    const res = await api.get(path, { params });
    if (!res.ok())
        throw new Error(
            `GET ${path} failed: HTTP ${res.status()} ${await res.text()}`,
        );
    return res.json();
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * The repository row the e2e drivers are loaded from.
 *
 * `init` seeds its own `Drivers` row pointing at master; this one carries the
 * branch the suite is pinned to and is left alone by everything else.
 * `folder_name` is unique per repository type, so a second creator gets a
 * uniqueness error rather than a second row.
 */
export async function ensureDriversRepository(
    api: APIRequestContext,
): Promise<{ id: string; created: boolean }> {
    const find = async () =>
        asList(
            await getJson(api, `${ENGINE_API}/repositories`, { limit: '500' }),
        ).find(
            (r) =>
                r.folder_name === DRIVERS_REPOSITORY.folder_name &&
                `${r.repo_type}`.toLowerCase() === 'driver',
        );

    const found = await find();
    if (found) return { id: found.id, created: false };

    const res = await api.post(`${ENGINE_API}/repositories`, {
        data: {
            ...DRIVERS_REPOSITORY,
            repo_type: 'driver',
            commit_hash: 'HEAD',
            description: 'Drivers loaded by the e2e suite. Safe to delete.',
        },
    });
    if (res.ok()) return { id: (await res.json()).id, created: true };

    const body = await res.text();
    if (!alreadyExists(body)) {
        throw new Error(
            `create repository failed: HTTP ${res.status()} ${body}`,
        );
    }
    // The listing is search-backed and can lag a create by a moment.
    for (let i = 0; i < 15; i++) {
        const raced = await find();
        if (raced) return { id: raced.id, created: false };
        await sleep(2000);
    }
    throw new Error(
        `repository ${DRIVERS_REPOSITORY.folder_name} exists but is not listed`,
    );
}

/**
 * A driver row for `spec` at the pinned commit, which is what makes core fetch
 * (or have the farm build) its binary.
 *
 * Keyed on file, commit and repository: a row for another commit of the same
 * file is a different driver, and nothing stops two rows for one file.
 */
export async function ensureDriver(
    api: APIRequestContext,
    repository_id: string,
    spec: DriverSpec,
): Promise<{ id: string; created: boolean }> {
    const existing = asList(
        await getJson(api, `${ENGINE_API}/drivers`, { limit: '500' }),
    );
    const found = existing.find(
        (d) =>
            d.file_name === spec.file_name &&
            d.commit === DRIVERS_COMMIT &&
            d.repository_id === repository_id,
    );
    if (found) return { id: found.id, created: false };

    const res = await api.post(`${ENGINE_API}/drivers`, {
        data: {
            name: spec.name,
            description: spec.description,
            role: spec.role,
            module_name: spec.module_name,
            file_name: spec.file_name,
            commit: DRIVERS_COMMIT,
            repository_id,
        },
    });
    if (!res.ok()) {
        throw new Error(
            `create driver ${spec.name} failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
    return { id: (await res.json()).id, created: true };
}

/**
 * Wait until core holds a binary for the driver.
 *
 * `GET /drivers/:id/compiled` goes through core: 200 once the binary is on
 * core's disk, 404 while it is not, and 200 with `compilation_output` when the
 * farm refused to build it. core downloads the binary from the farm's S3 while
 * answering, and a request that lands during that download waits for it, so the
 * request gets the whole remaining budget rather than Playwright's 30 s default.
 * The driver row carries the same output, and is checked as well because core
 * writes it there whether or not anyone asks; `compilation_status=false` keeps
 * that read from asking core too.
 */
export async function waitForDriverCompiled(
    api: APIRequestContext,
    driver_id: string,
    label: string,
    timeoutMs: number,
    onProgress: (message: string) => void = () => {},
): Promise<void> {
    const deadline = Date.now() + timeoutMs;
    const started = Date.now();
    let last = '';
    let reported = 0;
    for (;;) {
        const row = await getJson(api, `${ENGINE_API}/drivers/${driver_id}`, {
            compilation_status: 'false',
        });
        if (row.compilation_output) {
            throw new Error(
                `${label} failed to build:\n${row.compilation_output}`,
            );
        }
        const res = await api.get(
            `${ENGINE_API}/drivers/${driver_id}/compiled`,
            { timeout: Math.max(deadline - Date.now(), 10_000) },
        );
        const body = await res.text();
        if (res.ok()) {
            let parsed: any = null;
            try {
                parsed = body ? JSON.parse(body) : null;
            } catch {
                parsed = null;
            }
            if (parsed?.compilation_output) {
                throw new Error(
                    `${label} failed to build:\n${parsed.compilation_output}`,
                );
            }
            return;
        }
        last = `HTTP ${res.status()} ${body.slice(0, 200)}`;
        const elapsed = Math.round((Date.now() - started) / 1000);
        if (elapsed - reported >= 30) {
            reported = elapsed;
            onProgress(`${label}: not loaded after ${elapsed}s (${last})`);
        }
        if (Date.now() > deadline) {
            throw new Error(
                `${label} was not loaded by core within ${Math.round(timeoutMs / 1000)}s ` +
                    `(last: ${last}). core fetches binaries from the build farm, which ` +
                    `compiles a commit it has not seen for this CPU architecture on first ` +
                    `request; that takes a few minutes and needs the farm reachable. ` +
                    `Check: docker compose -p placeos-e2e logs core`,
            );
        }
        await sleep(5000);
    }
}

export interface ModuleRow {
    id: string;
    driver_id: string;
    control_system_id?: string;
    running: boolean;
    [k: string]: unknown;
}

/** The modules in a system, straight from the database rather than search. */
export async function modulesInSystem(
    api: APIRequestContext,
    control_system_id: string,
): Promise<ModuleRow[]> {
    return asList(
        await getJson(api, `${ENGINE_API}/modules`, { control_system_id }),
    );
}

/**
 * A running logic module of `driver_id` in the system.
 *
 * Creating a logic module adds it to the system's module list on the backend
 * (`Module#add_logic_module`), so nothing has to patch the system. A module is
 * created stopped; `start` flips `running`, and core launches it on that change.
 */
export async function ensureLogicModule(
    api: APIRequestContext,
    control_system_id: string,
    driver_id: string,
): Promise<{ id: string; created: boolean }> {
    let mod = (await modulesInSystem(api, control_system_id)).find(
        (m) => m.driver_id === driver_id,
    );
    let created = false;
    if (!mod) {
        const res = await api.post(`${ENGINE_API}/modules`, {
            data: { driver_id, control_system_id },
        });
        if (!res.ok()) {
            throw new Error(
                `create module for ${driver_id} on ${control_system_id} failed: HTTP ` +
                    `${res.status()} ${await res.text()}`,
            );
        }
        mod = await res.json();
        created = true;
    }
    if (!mod!.running) {
        const res = await api.post(`${ENGINE_API}/modules/${mod!.id}/start`);
        if (!res.ok()) {
            throw new Error(
                `start module ${mod!.id} failed: HTTP ${res.status()} ${await res.text()}`,
            );
        }
    }
    return { id: mod!.id, created };
}

/**
 * A module's status variables, parsed.
 *
 * `GET /modules/:id/state` is the module's Redis hash, with every value a JSON
 * document in a string.
 */
export async function moduleState(
    api: APIRequestContext,
    module_id: string,
): Promise<Record<string, unknown>> {
    const raw = (await getJson(
        api,
        `${ENGINE_API}/modules/${module_id}/state`,
    )) as Record<string, string>;
    const state: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(raw || {})) {
        try {
            state[key] = JSON.parse(value);
        } catch {
            state[key] = value;
        }
    }
    return state;
}

/** Wait until the module has published `key`, and return its value. */
export async function waitForModuleState(
    api: APIRequestContext,
    module_id: string,
    key: string,
    timeoutMs: number,
): Promise<unknown> {
    const deadline = Date.now() + timeoutMs;
    for (;;) {
        const state = await moduleState(api, module_id);
        if (key in state) return state[key];
        if (Date.now() > deadline) {
            throw new Error(
                `module ${module_id} never published "${key}" within ${Math.round(timeoutMs / 1000)}s. ` +
                    `It has: ${JSON.stringify(Object.keys(state))}. A module with no state at all ` +
                    `usually did not start: docker compose -p placeos-e2e logs core`,
            );
        }
        await sleep(2000);
    }
}
