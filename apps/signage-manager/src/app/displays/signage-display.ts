import {
    create,
    PlaceSystem,
    type PlaceSystemsQueryOptions,
    query,
    show,
    update,
} from '@placeos/ts-client';
import { decodeEntityNames } from '../shared/decode-entity-names.util';

const SYSTEMS_PATH = 'systems';

/**
 * Build a display from raw API data, with its names decoded.
 *
 * `PlaceSystem` sets a missing `signage_last_seen` to the current time, which
 * shows a display that never checked in as online. Keep the raw value instead,
 * 0 when the player has never checked in.
 */
export function signageDisplay(raw: Partial<PlaceSystem>): PlaceSystem {
    const display = Object.assign(new PlaceSystem(raw), {
        signage_last_seen: raw.signage_last_seen || 0,
    });
    return decodeEntityNames(display);
}

/** Query systems as displays. Use instead of `querySystems` */
export function querySignageDisplays(query_params: PlaceSystemsQueryOptions) {
    return query({ query_params, fn: signageDisplay, path: SYSTEMS_PATH });
}

/** Load one system as a display. Use instead of `showSystem` */
export function showSignageDisplay(id: string) {
    return show({
        id,
        query_params: {},
        fn: signageDisplay,
        path: SYSTEMS_PATH,
    });
}

/** Patch a system and return it as a display. Use instead of `updateSystem` */
export function updateSignageDisplay(
    id: string,
    form_data: Partial<PlaceSystem>,
) {
    return update({
        id,
        form_data,
        query_params: {},
        method: 'patch',
        fn: signageDisplay,
        path: SYSTEMS_PATH,
    });
}

/** Create a system and return it as a display. Use instead of `addSystem` */
export function addSignageDisplay(form_data: Partial<PlaceSystem>) {
    return create({
        form_data,
        query_params: {},
        fn: signageDisplay,
        path: SYSTEMS_PATH,
    });
}
