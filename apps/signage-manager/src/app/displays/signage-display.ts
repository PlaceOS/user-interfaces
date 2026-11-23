import { type System, type SystemInput, systems } from '@placeos/ts-client';
import { orThrow, orThrowPage, type Page } from '@placeos/ts-client/compat';
import { decodeEntityNames } from '../shared/decode-entity-names.util';
import { signageSystem } from '../signage-models';

/**
 * Build a display from API data, with its names decoded. A display that
 * never checked in has a `signage_last_seen` of 0.
 */
export function signageDisplay(raw: Partial<System>): System {
    return decodeEntityNames(
        signageSystem({
            ...raw,
            signage_last_seen: raw.signage_last_seen || 0,
        }),
    );
}

/** The page with its systems as displays. `next` gives display pages too. */
function displayPage(page: Page<readonly System[]>): Page<readonly System[]> {
    return {
        ...page,
        data: page.data.map(signageDisplay),
        next: page.next ? () => page.next()?.then(displayPage) ?? null : null,
    };
}

/** Query systems as displays. Use instead of `systems.query` */
export function querySignageDisplays(
    query_params: Parameters<typeof systems.query>[0],
) {
    return systems.query(query_params).then(orThrowPage).then(displayPage);
}

/** Load one system as a display. Use instead of `systems.show` */
export function showSignageDisplay(id: string) {
    return systems.show({ sys_id: id }).then(orThrow).then(signageDisplay);
}

/**
 * Patch a system and return it as a display. Use instead of
 * `systems.update`. The server checks `version` against the saved system.
 */
export function updateSignageDisplay(id: string, form_data: SystemInput) {
    return systems
        .update({
            sys_id: id,
            version: form_data.version || 0,
            body: form_data,
        })
        .then(orThrow)
        .then(signageDisplay);
}

/** Create a system and return it as a display. Use instead of `systems.create` */
export function addSignageDisplay(form_data: SystemInput) {
    return systems
        .create({ body: form_data })
        .then(orThrow)
        .then(signageDisplay);
}
