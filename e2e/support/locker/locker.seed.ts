import { APIRequestContext } from '@playwright/test';
import { apiFor, ENGINE_API, zonesWithTag } from '../api';
import { WORKERS } from '../env';

const LOCKER_CATEGORY = '_LOCKERS_';
const LOCKER_BANK_TYPE = '_LOCKER_BANKS_';
const LOCKER_TYPE = '_LOCKERS_';
const BANK_PREFIX = 'E2E Locker Bank';
const LOCKER_PREFIX = 'E2E Locker';

export interface LockerIdentity {
    id: string;
    name: string;
}

export interface LockerFixture {
    zone_id: string;
    building_name: string;
    bank: LockerIdentity;
    locker: LockerIdentity;
}

async function listAll(
    api: APIRequestContext,
    path: string,
    params: Record<string, string> = {},
): Promise<any[]> {
    const response = await api.get(`${ENGINE_API}/${path}`, {
        params: { limit: '500', ...params },
    });
    if (!response.ok()) {
        throw new Error(
            `list ${path} failed: HTTP ${response.status()} ${await response.text()}`,
        );
    }
    const body = await response.json();
    return (Array.isArray(body) ? body : (body?.data ?? body?.results ?? [])) as any[];
}

async function create(
    api: APIRequestContext,
    path: string,
    data: Record<string, unknown>,
): Promise<any> {
    const response = await api.post(`${ENGINE_API}/${path}`, { data });
    if (!response.ok()) {
        throw new Error(
            `create ${path} failed: HTTP ${response.status()} ${await response.text()}`,
        );
    }
    return response.json();
}

async function update(
    api: APIRequestContext,
    path: string,
    data: Record<string, unknown>,
): Promise<void> {
    const response = await api.patch(`${ENGINE_API}/${path}`, { data });
    if (!response.ok()) {
        throw new Error(
            `update ${path} failed: HTTP ${response.status()} ${await response.text()}`,
        );
    }
}

async function ensureType(
    api: APIRequestContext,
    types: any[],
    category_id: string,
    name: string,
) {
    const existing = types.find((type) => type.name === name);
    return (
        existing ??
        create(api, 'asset_types', {
            name,
            brand: 'PlaceOS',
            category_id,
        })
    );
}

async function ensureLockers(
    api: APIRequestContext,
    workerIndex: number,
): Promise<LockerFixture> {
    const [building] = await zonesWithTag(api, 'building');
    if (!building?.id) throw new Error('no building zone — the stack is not seeded');

    const bank_name = `${BANK_PREFIX} ${workerIndex}`;
    const locker_name = `${LOCKER_PREFIX} ${workerIndex}`;
    const categories = await listAll(api, 'asset_categories', { hidden: 'true' });
    const category =
        categories.find((item) => item.name === LOCKER_CATEGORY) ??
        (await create(api, 'asset_categories', {
            name: LOCKER_CATEGORY,
            hidden: true,
        }));
    const types = await listAll(api, 'asset_types', { category_id: category.id });
    const bank_type = await ensureType(api, types, category.id, LOCKER_BANK_TYPE);
    const locker_type = await ensureType(api, types, category.id, LOCKER_TYPE);

    const banks = await listAll(api, 'assets', {
        zone_id: building.id,
        type_id: bank_type.id,
    });
    const existing_bank = banks.find(
        (item) =>
            item.identifier === bank_name ||
            item.name === bank_name ||
            item.other_data?.name === bank_name,
    );
    const bank =
        existing_bank ??
        (await create(api, 'assets', {
            identifier: bank_name,
            name: bank_name,
            map_id: '',
            notes: '',
            zone_id: building.id,
            zones: [building.id],
            asset_type_id: bank_type.id,
            tags: [],
            other_data: {
                name: bank_name,
                map_id: '',
                height: '1',
                tags: '[]',
                images: '[]',
            },
        }));

    const lockers = await listAll(api, 'assets', {
        zone_id: building.id,
        type_id: locker_type.id,
    });
    const existing_locker = lockers.find(
        (item) =>
            item.identifier === locker_name ||
            item.name === locker_name ||
            item.other_data?.name === locker_name,
    );
    const locker =
        existing_locker ??
        (await create(api, 'assets', {
            identifier: locker_name,
            name: locker_name,
            map_id: '',
            zone_id: building.id,
            zones: [building.id],
            asset_type_id: locker_type.id,
            bookable: true,
            parent_id: bank.id,
            features: [],
            other_data: {
                name: locker_name,
                map_id: '',
                assigned_to: '',
                assigned_name: '',
                accessible: 'false',
                position: '[0,0]',
                size: '[1,1]',
                features: '[]',
            },
        }));

    if (locker.parent_id !== bank.id) {
        await update(api, `assets/${locker.id}`, { parent_id: bank.id });
    }

    return {
        zone_id: building.id,
        building_name: String(building.display_name || building.name),
        bank: { id: bank.id, name: bank_name },
        locker: { id: locker.id, name: locker_name },
    };
}

let cache = new Map<number, Promise<LockerFixture>>();

export async function lockerForWorker(workerIndex: number): Promise<LockerFixture> {
    if (workerIndex < 0 || workerIndex >= WORKERS) {
        throw new Error(`worker ${workerIndex} is outside configured E2E_WORKERS=${WORKERS}`);
    }
    let pending = cache.get(workerIndex);
    if (!pending) {
        pending = (async () => {
            const admin = await apiFor('admin', 0);
            try {
                return await ensureLockers(admin, workerIndex);
            } finally {
                await admin.dispose();
            }
        })();
        cache.set(workerIndex, pending);
    }
    return pending.catch((error) => {
        cache.delete(workerIndex);
        throw error;
    });
}
