/**
 * Repositories, drivers and modules through the engine API.
 *
 * Needs ADMIN: only an admin may create any of these.
 */
import { APIRequestContext } from '@playwright/test';
import { ENGINE_API, alreadyExists, asList, getJson } from '../api';
import { DRIVERS_COMMIT, DRIVERS_REPOSITORY, DriverSpec } from './drivers.env';

interface RepositoryRow {
    id: string;
    folder_name: string;
    repo_type: string;
    uri: string;
    branch: string;
}

interface DriverRow {
    id: string;
    file_name: string;
    module_name: string;
    commit: string;
    repository_id: string;
    compilation_output?: string | null;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * The repository row the e2e drivers are loaded from.
 *
 * `init` seeds its own `Drivers` row pointing at master; this one carries the
 * branch the suite is pinned to and is left alone by everything else.
 * `folder_name` is unique per repository type, so a second creator gets a
 * uniqueness error rather than a second row. A row left by an earlier pin or
 * `E2E_DRIVERS_*` override is moved to the current uri and branch, because the
 * build farm resolves a driver's commit on its repository's branch.
 */
export async function ensureDriversRepository(
    api: APIRequestContext,
): Promise<{ id: string; created: boolean }> {
    const find = async () =>
        asList<RepositoryRow>(
            await getJson(api, `${ENGINE_API}/repositories`, { limit: '500' }),
        ).find(
            (r) =>
                r.folder_name === DRIVERS_REPOSITORY.folder_name &&
                `${r.repo_type}`.toLowerCase() === 'driver',
        );

    const found = await find();
    if (found) {
        await syncRepository(api, found);
        return { id: found.id, created: false };
    }

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
        if (raced) {
            await syncRepository(api, raced);
            return { id: raced.id, created: false };
        }
        await sleep(2000);
    }
    throw new Error(
        `repository ${DRIVERS_REPOSITORY.folder_name} exists but is not listed`,
    );
}

/** Point an existing repository row at the configured uri and branch. */
async function syncRepository(
    api: APIRequestContext,
    row: RepositoryRow,
): Promise<void> {
    const { uri, branch } = DRIVERS_REPOSITORY;
    if (row.uri === uri && row.branch === branch) return;
    const res = await api.patch(`${ENGINE_API}/repositories/${row.id}`, {
        data: { uri, branch },
    });
    if (!res.ok()) {
        throw new Error(
            `update repository ${row.id} to ${uri}@${branch} failed: HTTP ` +
                `${res.status()} ${await res.text()}`,
        );
    }
}

/**
 * A driver row for `spec` at the pinned commit, which is what makes core fetch
 * (or have the farm build) its binary.
 *
 * Keyed on file, commit and repository: a row for another commit of the same
 * file is a different driver, and nothing stops two rows for one file. The
 * listing is search-backed, so when the repository already existed a miss is
 * re-checked for a few seconds before creating: a seed re-run right after the
 * first would otherwise add a second row.
 */
export async function ensureDriver(
    api: APIRequestContext,
    repository_id: string,
    spec: DriverSpec,
    repositoryIsNew: boolean,
): Promise<{ id: string; created: boolean }> {
    const find = async () =>
        asList<DriverRow>(
            await getJson(api, `${ENGINE_API}/drivers`, { limit: '500' }),
        ).find(
            (d) =>
                d.file_name === spec.file_name &&
                d.commit === DRIVERS_COMMIT &&
                d.repository_id === repository_id,
        );

    const attempts = repositoryIsNew ? 1 : 5;
    for (let i = 0; i < attempts; i++) {
        if (i) await sleep(2000);
        const found = await find();
        if (found) return { id: found.id, created: false };
    }

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
 * A request that fails outright (core still starting, a reset during the
 * download) is retried like a 404.
 *
 * The driver row carries the same output, and is checked as well because core
 * writes it there whether or not anyone asks; `compilation_status=false` keeps
 * that read from asking core too. Output already on the row when the wait
 * starts is from an earlier attempt, and only a change to it counts.
 */
export async function waitForDriverCompiled(
    api: APIRequestContext,
    driver_id: string,
    label: string,
    timeoutMs: number,
    onProgress: (message: string) => void = () => {},
): Promise<void> {
    const readRow = async (): Promise<DriverRow> =>
        getJson(api, `${ENGINE_API}/drivers/${driver_id}`, {
            compilation_status: 'false',
        });
    const deadline = Date.now() + timeoutMs;
    const started = Date.now();
    const stale = (await readRow()).compilation_output ?? null;
    let last = '';
    let reported = 0;
    while (Date.now() <= deadline) {
        const output = (await readRow()).compilation_output ?? null;
        if (output && output !== stale) {
            throw new Error(`${label} failed to build:\n${output}`);
        }
        const compiled = await api
            .get(`${ENGINE_API}/drivers/${driver_id}/compiled`, {
                timeout: Math.max(deadline - Date.now(), 10_000),
            })
            .then(async (res) => ({
                ok: res.ok(),
                status: res.status(),
                body: await res.text(),
            }))
            .catch((error: unknown) => ({
                ok: false,
                status: 0,
                body: `${error}`,
            }));
        if (compiled.ok) {
            const failure = compilationOutput(compiled.body);
            if (failure)
                throw new Error(`${label} failed to build:\n${failure}`);
            return;
        }
        last = `${compiled.status ? `HTTP ${compiled.status} ` : ''}${compiled.body.slice(0, 200)}`;
        const elapsed = Math.round((Date.now() - started) / 1000);
        if (elapsed - reported >= 30) {
            reported = elapsed;
            onProgress(`${label}: not loaded after ${elapsed}s (${last})`);
        }
        await sleep(5000);
    }
    throw new Error(
        `${label} was not loaded by core within ${Math.round(timeoutMs / 1000)}s ` +
            `(last: ${last}). core fetches binaries from the build farm, which ` +
            `compiles a commit it has not seen for this CPU architecture on first ` +
            `request; that takes a few minutes and needs the farm reachable. ` +
            `Check: docker compose -p placeos-e2e logs core`,
    );
}

/** The `compilation_output` in a `/compiled` body, if it has one. */
function compilationOutput(body: string): string | null {
    try {
        const parsed: unknown = body ? JSON.parse(body) : null;
        if (
            parsed &&
            typeof parsed === 'object' &&
            'compilation_output' in parsed
        ) {
            return `${parsed.compilation_output ?? ''}` || null;
        }
    } catch {
        /* not JSON: a plain success body */
    }
    return null;
}

export interface ModuleRow {
    id: string;
    driver_id: string;
    control_system_id?: string;
    name: string;
    running: boolean;
    [k: string]: unknown;
}

/** The modules in a system, straight from the database rather than search. */
export async function modulesInSystem(
    api: APIRequestContext,
    control_system_id: string,
): Promise<ModuleRow[]> {
    return asList<ModuleRow>(
        await getJson(api, `${ENGINE_API}/modules`, { control_system_id }),
    );
}

/**
 * A running logic module of `driver_id` in the system.
 *
 * Creating a logic module adds it to the system's module list on the backend
 * (`Module#add_logic_module`), so nothing has to patch the system. A module is
 * created stopped; `start` flips `running`, and core launches it on that change.
 *
 * A module with the same name from another driver is a leftover from an earlier
 * pin, and is deleted first. Kept, it would stay `<name>_1` and the new module
 * would be `<name>_2`, which nothing binds. Only call this on systems the suite
 * owns.
 */
export async function ensureLogicModule(
    api: APIRequestContext,
    control_system_id: string,
    driver_id: string,
): Promise<{ id: string; created: boolean }> {
    const driver: DriverRow = await getJson(
        api,
        `${ENGINE_API}/drivers/${driver_id}`,
        { compilation_status: 'false' },
    );
    const named = (await modulesInSystem(api, control_system_id)).filter(
        (m) => m.name === driver.module_name,
    );
    for (const stale of named.filter((m) => m.driver_id !== driver_id)) {
        const res = await api.delete(`${ENGINE_API}/modules/${stale.id}`);
        if (!res.ok()) {
            throw new Error(
                `delete stale module ${stale.id} on ${control_system_id} failed: HTTP ` +
                    `${res.status()} ${await res.text()}`,
            );
        }
    }

    let mod = named.find((m) => m.driver_id === driver_id);
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
        mod = (await res.json()) as ModuleRow;
        created = true;
    }
    if (!mod.running) {
        const res = await api.post(`${ENGINE_API}/modules/${mod.id}/start`);
        if (!res.ok()) {
            throw new Error(
                `start module ${mod.id} failed: HTTP ${res.status()} ${await res.text()}`,
            );
        }
    }
    return { id: mod.id, created };
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
