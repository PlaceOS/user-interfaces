export interface ApplicationDetails {
    id?: string;
    name?: string;
    redirect_uri?: string;
}

export interface ApplicationRestriction {
    id?: string;
    name?: string;
    redirect_uri?: string;
    groups?: string[];
}

export interface LauncherApplication {
    id: string;
    name: string;
    redirect_uri: string;
    icon_urls: string[];
    icon_index: number;
}

export interface LauncherApplicationOptions {
    current_uri?: string;
    restrictions?: ApplicationRestriction[];
    user_groups?: string[];
}

export function buildLauncherApplications(
    applications: ApplicationDetails[],
    options: LauncherApplicationOptions = {},
): LauncherApplication[] {
    return (applications || [])
        .filter((app) => isSupportedRedirectUri(app?.redirect_uri))
        .filter((app) => !isSelfReference(app?.redirect_uri, options.current_uri))
        .filter((app) => isVisibleToUser(app, options))
        .sort((lhs, rhs) =>
            (lhs.name || nameFromUri(lhs.redirect_uri || '')).localeCompare(
                rhs.name || nameFromUri(rhs.redirect_uri || ''),
            ),
        )
        .map((app) => mapApplication(app));
}

export function appInitial(name: string) {
    return `${name || '?'}`.trim().charAt(0).toUpperCase() || '?';
}

function nameFromUri(uri: string) {
    try {
        return new URL(uri, location.origin).hostname;
    } catch {
        return 'Application';
    }
}

function isSupportedRedirectUri(uri?: string) {
    if (!uri) return false;
    try {
        const protocol = new URL(uri, location.origin).protocol;
        return protocol === 'http:' || protocol === 'https:';
    } catch {
        return false;
    }
}

export function faviconUrls(uri: string) {
    const path = redirectPath(uri);
    return [
        ...['svg', 'png', 'jpg', 'ico'].map(
            (ext) => `${path}assets/favicon.${ext}`,
        ),
        `${path}favicon.ico`,
    ];
}

export function redirectPath(uri: string) {
    try {
        const url = new URL(uri, location.origin);
        const pathname = url.pathname || '/';
        const last_segment = pathname
            .split('/')
            .filter((_) => !!_)
            .at(-1);
        const base_path = pathname.endsWith('/')
            ? pathname
            : last_segment?.includes('.')
              ? pathname.slice(0, pathname.lastIndexOf('/') + 1)
              : `${pathname}/`;
        return `${url.origin}${base_path.startsWith('/') ? '' : '/'}${base_path}`;
    } catch {
        return '/';
    }
}

export function isSelfReference(redirect_uri?: string, current_uri = location.href) {
    if (!redirect_uri || !current_uri) return false;
    return redirectPath(redirect_uri) === redirectPath(current_uri);
}

function mapApplication(app: ApplicationDetails): LauncherApplication {
    const redirect_uri = app.redirect_uri || '/';
    return {
        id: `${app.id || redirect_uri}`,
        name: app.name || nameFromUri(redirect_uri),
        redirect_uri,
        icon_urls: faviconUrls(redirect_uri),
        icon_index: 0,
    };
}

function isVisibleToUser(
    app: ApplicationDetails,
    options: LauncherApplicationOptions,
) {
    const matching_rules = (options.restrictions || []).filter((rule) =>
        matchesRestriction(app, rule),
    );
    if (!matching_rules.length) return true;
    const user_groups = options.user_groups || [];
    return matching_rules.some(
        (rule) =>
            !rule.groups?.length || rule.groups.some((group) => user_groups.includes(group)),
    );
}

function matchesRestriction(
    app: ApplicationDetails,
    rule: ApplicationRestriction,
) {
    const has_matcher = !!(rule.id || rule.name || rule.redirect_uri);
    if (!has_matcher) return false;
    if (rule.id && rule.id !== app.id) return false;
    if (rule.name && rule.name !== app.name) return false;
    if (
        rule.redirect_uri &&
        resolveUri(rule.redirect_uri) !== resolveUri(app.redirect_uri || '')
    ) {
        return false;
    }
    return true;
}

function resolveUri(uri: string) {
    try {
        return new URL(uri, location.origin).href;
    } catch {
        return uri;
    }
}
