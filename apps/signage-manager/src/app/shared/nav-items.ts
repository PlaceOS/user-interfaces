const NAV_ITEMS = [
    { route: '/media', icon: 'stock_media', label: 'SIGNAGE_MANAGER.NAV_MEDIA' },
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
        route: '/branding',
        icon: 'palette',
        label: 'SIGNAGE_MANAGER.NAV_BRANDING',
    },
    { route: '/groups', icon: 'groups', label: 'COMMON.GROUPS' },
];

export type NavItem = (typeof NAV_ITEMS)[number];

export function filterManageNavItems(
    can_manage_groups: boolean,
    templates_enabled = false,
    ai_enabled = false,
): NavItem[] {
    return NAV_ITEMS.filter((item) => {
        if (item.route === '/groups') return can_manage_groups;
        if (item.route === '/templates') return templates_enabled;
        if (item.route === '/branding') return ai_enabled;
        return true;
    });
}
