export const NAV_ITEMS = [
    { route: '/media', icon: 'stock_media', label: 'Media' },
    { route: '/playlists', icon: 'playlist_play', label: 'Playlists' },
    { route: '/zones', icon: 'layers', label: 'Zones' },
    { route: '/schedules', icon: 'calendar_view_day', label: 'Schedules' },
    { route: '/displays', icon: 'display_settings', label: 'Displays' },
    { route: '/groups', icon: 'groups', label: 'Groups' },
];

export type NavItem = (typeof NAV_ITEMS)[number];

export function filterManageNavItems(can_manage_groups: boolean): NavItem[] {
    return can_manage_groups
        ? NAV_ITEMS
        : NAV_ITEMS.filter((item) => item.route !== '/groups');
}
