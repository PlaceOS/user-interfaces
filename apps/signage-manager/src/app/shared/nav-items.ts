import { computed, inject } from '@angular/core';
import { SignageService } from '../signage.service';

const NAV_ITEMS = [
    {
        route: '/media',
        icon: 'stock_media',
        label: 'SIGNAGE_MANAGER.NAV_MEDIA',
    },
    {
        route: '/playlists',
        icon: 'playlist_play',
        label: 'SIGNAGE_MANAGER.NAV_PLAYLISTS',
    },
    {
        route: '/templates',
        icon: 'dashboard_customize',
        label: 'SIGNAGE_MANAGER.NAV_TEMPLATES',
    },
    { route: '/zones', icon: 'layers', label: 'SIGNAGE_MANAGER.NAV_ZONES' },
    {
        route: '/schedules',
        icon: 'calendar_view_day',
        label: 'SIGNAGE_MANAGER.NAV_SCHEDULES',
    },
    {
        route: '/displays',
        icon: 'display_settings',
        label: 'SIGNAGE_MANAGER.NAV_DISPLAYS',
    },
    {
        route: '/manage',
        icon: 'tune',
        label: 'SIGNAGE_MANAGER.NAV_MANAGE',
    },
    { route: '/groups', icon: 'groups', label: 'COMMON.GROUPS' },
];

export type NavItem = (typeof NAV_ITEMS)[number];

export function filterManageNavItems(
    can_manage_groups: boolean,
    templates_enabled = false,
): NavItem[] {
    return NAV_ITEMS.filter((item) => {
        if (item.route === '/groups') return can_manage_groups;
        if (item.route === '/templates') return templates_enabled;
        return true;
    });
}

/**
 * Nav items the current user can open, as a signal. Call it in an injection
 * context. Used by the nav sidebar and the command palette.
 */
export function injectNavItems() {
    const service = inject(SignageService);
    return computed(() =>
        filterManageNavItems(
            service.can_manage_all_groups() ||
                !!service.manageable_signage_groups().length,
            service.templates_enabled(),
        ),
    );
}
