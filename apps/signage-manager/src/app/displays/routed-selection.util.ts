import { effect, untracked, type WritableSignal } from '@angular/core';
import { i18n, notifyError } from '@placeos/common';

/**
 * Select the item that the route names, for a page with a list and details.
 * Takes the item from the loaded list, or loads it by id when the list does
 * not hold it, such as a link to an item past the loaded pages. Clears the
 * selection when the route drops the id after it selected an item.
 *
 * Creates an effect, so call it in an injection context.
 */
export function selectRoutedItem<T extends { id: string }>(options: {
    /** Id in the route, empty when the route has no item */
    id: () => string;
    /** Items loaded so far */
    list: () => readonly T[];
    selected: WritableSignal<T | null>;
    /** Load one item by id. A rejection shows an error. */
    load: (id: string) => Promise<T>;
}) {
    const { id, list, selected, load } = options;
    let route_resolved = false;
    // Id the route had when the effect last ran, and the id loaded for it.
    // The load runs once each time the route moves to an id, so going back
    // to an id loaded before loads it again.
    let route_id_seen = '';
    let requested_id = '';

    async function loadItem(item_id: string) {
        const item = await load(item_id).catch(() => null);
        if (id() !== item_id || untracked(selected)?.id === item_id) return;
        if (!item) {
            notifyError(i18n('COMMON.LOAD_ERROR'));
            return;
        }
        selected.set(item);
        route_resolved = true;
    }

    effect(() => {
        const route_id = id();
        const items = list();
        if (route_id !== route_id_seen) {
            route_id_seen = route_id;
            requested_id = '';
        }
        if (!route_id) {
            if (route_resolved) selected.set(null);
            return;
        }
        const match = items.find((item) => item.id === route_id);
        if (match) {
            if (selected()?.id !== match.id) selected.set(match);
            route_resolved = true;
        } else if (
            untracked(selected)?.id !== route_id &&
            requested_id !== route_id
        ) {
            requested_id = route_id;
            untracked(() => loadItem(route_id));
        }
    });
}
