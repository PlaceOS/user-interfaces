export const NAV_ITEMS = [
    { route: '/media', icon: 'stock_media', label: 'SIGNAGE_MANAGER.NAV_MEDIA' },
    {
        route: '/playlists',
        icon: 'playlist_play',
        label: 'SIGNAGE_MANAGER.NAV_PLAYLISTS',
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
    { route: '/groups', icon: 'groups', label: 'COMMON.GROUPS' },
];

export type NavItem = (typeof NAV_ITEMS)[number];

export function filterManageNavItems(can_manage_groups: boolean): NavItem[] {
    return can_manage_groups
        ? NAV_ITEMS
        : NAV_ITEMS.filter((item) => item.route !== '/groups');
}
