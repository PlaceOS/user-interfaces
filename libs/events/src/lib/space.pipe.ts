import { Pipe, PipeTransform } from '@angular/core';
import { OrganisationService, Space } from '@placeos/common';
import {
    PlaceSystem,
    querySystemsWithEmails,
    showSystem,
} from '@placeos/ts-client';

const MAX_CACHED_SPACES = 5000;
const MAX_FAILED_LOOKUPS = 500;
const FAILED_LOOKUP_TTL = 30 * 1000;
const SPACE_CACHE = new Map<string, Space>();
const SPACE_BY_ID = new Map<string, Space>();
const SPACE_BY_EMAIL = new Map<string, Space>();
const SPACE_REQUESTS = new Map<string, Promise<Space>>();
const FAILED_LOOKUPS = new Map<string, number>();

const EMPTY_SPACE = new Space({ email: 'empty.space@place.os' });

function cacheSpace(space: Space): void {
    const cache_key = space.id || space.email;
    if (!cache_key) return;

    if (SPACE_CACHE.has(cache_key)) SPACE_CACHE.delete(cache_key);
    SPACE_CACHE.set(cache_key, space);
    if (space.id) SPACE_BY_ID.set(space.id, space);
    if (space.email) SPACE_BY_EMAIL.set(space.email, space);

    while (SPACE_CACHE.size > MAX_CACHED_SPACES) {
        const oldest_key = SPACE_CACHE.keys().next().value;
        if (!oldest_key) break;
        const oldest = SPACE_CACHE.get(oldest_key);
        SPACE_CACHE.delete(oldest_key);
        if (oldest?.id && SPACE_BY_ID.get(oldest.id) === oldest) {
            SPACE_BY_ID.delete(oldest.id);
        }
        if (oldest?.email && SPACE_BY_EMAIL.get(oldest.email) === oldest) {
            SPACE_BY_EMAIL.delete(oldest.email);
        }
    }
}

function cachedSpace(space_id: string): Space | undefined {
    return SPACE_BY_ID.get(space_id) || SPACE_BY_EMAIL.get(space_id);
}

function rememberFailedLookup(space_id: string): void {
    FAILED_LOOKUPS.delete(space_id);
    FAILED_LOOKUPS.set(space_id, Date.now() + FAILED_LOOKUP_TTL);
    while (FAILED_LOOKUPS.size > MAX_FAILED_LOOKUPS) {
        const oldest_id = FAILED_LOOKUPS.keys().next().value;
        if (!oldest_id) break;
        FAILED_LOOKUPS.delete(oldest_id);
    }
}

export function updateSpaceList(space_list: Space[]): void {
    for (const space of space_list) cacheSpace(space);
}

let _org_service: OrganisationService = null;

@Pipe({
    name: 'space',
})
export class SpacePipe implements PipeTransform {
    public get org() {
        return _org_service;
    }

    public set org(value: OrganisationService) {
        _org_service = value;
    }

    constructor(org: OrganisationService = null) {
        if (org) this.org = org;
    }

    /** Get details of the space with the given ID or email address. */
    public async transform(space_id: string): Promise<Space> {
        if (this.org) await this.org.waitUntilInitialised();
        if (!space_id) return EMPTY_SPACE;

        const cached = cachedSpace(space_id);
        if (cached) return cached;

        const retry_after = FAILED_LOOKUPS.get(space_id) || 0;
        if (retry_after > Date.now()) return EMPTY_SPACE;
        FAILED_LOOKUPS.delete(space_id);

        const pending = SPACE_REQUESTS.get(space_id);
        if (pending) return pending;

        const request = this._loadSpace(space_id).finally(() =>
            SPACE_REQUESTS.delete(space_id),
        );
        SPACE_REQUESTS.set(space_id, request);
        return request;
    }

    public get(space_id: string): Space {
        return cachedSpace(space_id) || EMPTY_SPACE;
    }

    public updateSpaceList(space_list: Space[]): void {
        updateSpaceList(space_list);
    }

    private async _loadSpace(space_id: string): Promise<Space> {
        if (!space_id.includes('@')) {
            const system = await showSystem(space_id).catch(() => null);
            if (system) return this._cacheSystem(system);
        }

        const systems = (
            await querySystemsWithEmails({ in: space_id }).catch(() => ({
                data: [],
            }))
        ).data;
        if (systems.length === 1) return this._cacheSystem(systems[0]);

        rememberFailedLookup(space_id);
        return EMPTY_SPACE;
    }

    private _cacheSystem(system: PlaceSystem): Space {
        const space = new Space({
            ...(system as unknown as Partial<Space>),
            zones: [...(system.zones || [])],
            images: [...(system.images || [])],
            camera_snapshot_urls: [...(system.camera_snapshot_urls || [])],
            level: this.org?.levelWithID([...(system.zones || [])]),
        });
        cacheSpace(space);
        return space;
    }
}
