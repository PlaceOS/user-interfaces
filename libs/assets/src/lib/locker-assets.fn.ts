import { flatten } from '@placeos/common';
import {
    PlaceAsset,
    queryAssetCategories,
    queryAssets,
    queryAssetTypes,
    removeAsset,
} from '@placeos/ts-client';
import { defer, forkJoin, from, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { saveAsset, saveAssetCategory, saveAssetType } from './assets.fn';

const LOCKER_CATEGORY_NAME = '_LOCKERS_';
const LOCKER_BANK_TYPE_NAME = '_LOCKER_BANKS_';
const LOCKER_TYPE_NAME = '_LOCKERS_';

let _locker_bank_type_id: string | null = null;
let _locker_bank_type_id_promise: Promise<string> | null = null;
let _locker_type_id: string | null = null;
let _locker_type_id_promise: Promise<string> | null = null;
let _hidden_categories_promise: Promise<any[]> | null = null;
const _types_for_category_promises = new Map<string, Promise<any[]>>();

function normalise_name(name: string = '') {
    return name.trim().toLowerCase();
}

async function query_hidden_categories() {
    if (!_hidden_categories_promise) {
        _hidden_categories_promise = queryAssetCategories({
            hidden: true,
            limit: 500,
        })
            .then((_) => _.data)
            .catch(() => []);
    }
    return _hidden_categories_promise;
}

async function query_types_for_category(category_id: string) {
    if (!_types_for_category_promises.has(category_id)) {
        _types_for_category_promises.set(
            category_id,
            queryAssetTypes({ category_id, limit: 500 })
                .then((_) => _.data)
                .catch(() => []),
        );
    }
    return _types_for_category_promises.get(category_id);
}

async function ensure_hidden_category(name: string) {
    const match_name = normalise_name(name);
    let category = (await query_hidden_categories()).find(
        (_) => normalise_name(_.name) === match_name,
    );
    if (category) return category;
    _hidden_categories_promise = null;
    category = (await query_hidden_categories()).find(
        (_) => normalise_name(_.name) === match_name,
    );
    if (category) return category;
    const created = await saveAssetCategory({
        name,
        hidden: true,
    } as any).toPromise();
    _hidden_categories_promise = null;
    return created;
}

async function ensure_type(category_id: string, name: string) {
    const match_name = normalise_name(name);
    let type = (await query_types_for_category(category_id)).find(
        (_) => normalise_name(_.name) === match_name,
    );
    if (type) return type;
    const created = await saveAssetType({
        name,
        brand: 'PlaceOS',
        category_id,
    } as any).toPromise();
    _types_for_category_promises.delete(category_id);
    return created;
}

async function bootstrap_locker_type(type_name: string) {
    const category = await ensure_hidden_category(LOCKER_CATEGORY_NAME);
    const type = await ensure_type(category.id, type_name);
    return type.id;
}

export function resolveLockerBankTypeId(): Observable<string> {
    if (_locker_bank_type_id) return of(_locker_bank_type_id);
    if (!_locker_bank_type_id_promise) {
        _locker_bank_type_id_promise = bootstrap_locker_type(
            LOCKER_BANK_TYPE_NAME,
        ).then((id) => {
            _locker_bank_type_id = id;
            return id;
        });
    }
    return defer(() => from(_locker_bank_type_id_promise));
}

export function resolveLockerTypeId(): Observable<string> {
    if (_locker_type_id) return of(_locker_type_id);
    if (!_locker_type_id_promise) {
        _locker_type_id_promise = bootstrap_locker_type(LOCKER_TYPE_NAME).then(
            (id) => {
                _locker_type_id = id;
                return id;
            },
        );
    }
    return defer(() => from(_locker_type_id_promise));
}

export function queryLockerBankAssets(
    zone_id: string,
): Observable<PlaceAsset[]> {
    return resolveLockerBankTypeId().pipe(
        switchMap((type_id) => queryAssets({ zone_id, type_id, limit: 500 })),
        map((_) => _.data),
    );
}

export function queryLockerBankAssetsForZones(
    zone_ids: string[],
): Observable<PlaceAsset[]> {
    if (!zone_ids?.length) return of([]);
    return resolveLockerBankTypeId().pipe(
        switchMap((type_id) =>
            forkJoin(
                zone_ids.map((zone_id) =>
                    queryAssets({ zone_id, type_id, limit: 500 }).then(
                        (_) => _.data,
                    ),
                ),
            ),
        ),
        map((results) => flatten<PlaceAsset>(results)),
    );
}

export function saveLockerBankAsset(
    bank: Partial<PlaceAsset>,
): Observable<PlaceAsset> {
    return resolveLockerBankTypeId().pipe(
        switchMap((type_id) => saveAsset({ ...bank, asset_type_id: type_id })),
    );
}

export function deleteLockerBankAsset(id: string) {
    return from(removeAsset(id));
}

export function queryLockerAssets(zone_id: string): Observable<PlaceAsset[]> {
    return resolveLockerTypeId().pipe(
        switchMap((type_id) => queryAssets({ zone_id, type_id, limit: 500 })),
        map((_) => _.data),
    );
}

export function queryLockerAssetsForZones(
    zone_ids: string[],
): Observable<PlaceAsset[]> {
    if (!zone_ids?.length) return of([]);
    return resolveLockerTypeId().pipe(
        switchMap((type_id) =>
            forkJoin(
                zone_ids.map((zone_id) =>
                    queryAssets({ zone_id, type_id, limit: 500 }).then(
                        (_) => _.data,
                    ),
                ),
            ),
        ),
        map((results) => flatten<PlaceAsset>(results)),
    );
}

export function saveLockerAsset(
    locker: Partial<PlaceAsset>,
): Observable<PlaceAsset> {
    return resolveLockerTypeId().pipe(
        switchMap((type_id) =>
            saveAsset({ ...locker, asset_type_id: type_id }),
        ),
    );
}

export function deleteLockerAsset(id: string) {
    return from(removeAsset(id));
}
