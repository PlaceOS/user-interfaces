import { computed, Signal } from '@angular/core';
import { settingSignal, userSignal } from '@placeos/common';

export type AvailableTab = 'desks' | 'rooms' | 'lockers';

/**
 * Features that are enabled for the current user.
 * Uses the same rules as the top menu: the `app.features` list, limited by
 * `app.feature_groups` to the user groups that can use each feature.
 */
export function landingFeatures(): Signal<string[]> {
    const feature_list = settingSignal<string[]>('features', []);
    const feature_groups = settingSignal<Record<string, string[]>>(
        'feature_groups',
        {},
    );
    const user = userSignal();
    return computed(() => {
        const groups = user()?.groups || [];
        const limits = feature_groups() || {};
        return (feature_list() || []).filter(
            (name) =>
                !limits[name]?.length ||
                limits[name].some((_) => groups.includes(_)),
        );
    });
}

/**
 * Tabs of the Available Now card that are enabled, in display order.
 * `hide_spaces` removes the desk and locker summaries by level.
 * `hide_rooms` removes the room summary.
 */
export function availableNowTabs(
    features: string[],
    hide_spaces: boolean,
    hide_rooms: boolean,
): AvailableTab[] {
    const tabs: AvailableTab[] = [];
    if (!hide_spaces && features.includes('desks')) tabs.push('desks');
    if (!hide_rooms && features.includes('spaces')) tabs.push('rooms');
    if (!hide_spaces && features.includes('lockers')) tabs.push('lockers');
    return tabs;
}

/** Booking links of the Quick Actions card with the feature for each link */
export const QUICK_LINKS = [
    {
        feature: 'desks',
        route: ['/book', 'desk'],
        icon: 'desk',
        name: 'APP.WORKPLACE.QUICK_LINK_DESKS',
    },
    {
        feature: 'spaces',
        route: ['/book', 'meeting'],
        icon: 'meeting_room',
        name: 'APP.WORKPLACE.QUICK_LINK_ROOMS',
    },
    {
        feature: 'parking',
        route: ['/book', 'parking'],
        icon: 'directions_car',
        name: 'APP.WORKPLACE.QUICK_LINK_PARKING',
    },
    {
        feature: 'lockers',
        route: ['/book', 'locker'],
        icon: 'lock',
        name: 'APP.WORKPLACE.QUICK_LINK_LOCKERS',
    },
];

/** Whether the Quick Actions card has an action to show */
export function hasQuickActions(
    features: string[],
    show_quick_book: boolean,
    show_quick_links: boolean,
): boolean {
    return (
        (show_quick_book && features.includes('desks')) ||
        (show_quick_links &&
            QUICK_LINKS.some((link) => features.includes(link.feature)))
    );
}
