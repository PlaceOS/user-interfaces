import { log } from './general';

const LAZY_ROUTE_RELOAD_KEY = 'placeos.lazy_route_reload';
const RELOAD_THROTTLE = 30 * 1000;
const LAZY_ROUTE_ERROR_PATTERNS = [
    /ChunkLoadError/i,
    /Loading chunk [\w-]+ failed/i,
    /Failed to fetch dynamically imported module/i,
    /Importing a module script failed/i,
    /error loading dynamically imported module/i,
];

type StorageRef = Pick<Storage, 'getItem' | 'setItem'>;
type LocationRef = Pick<Location, 'hash' | 'pathname' | 'reload' | 'search'>;

interface ReloadState {
    signature: string;
    timestamp: number;
}

export interface LazyRouteReloadContext {
    storage?: StorageRef;
    location?: LocationRef;
    now?: number;
    online?: boolean;
}

export function isLazyRouteLoadError(error: unknown) {
    const message = getLazyRouteErrorMessage(error);
    return LAZY_ROUTE_ERROR_PATTERNS.some((pattern) => pattern.test(message));
}

export function reloadOnChunkLoadError(
    error: unknown,
    context: LazyRouteReloadContext = {},
) {
    if (!isLazyRouteLoadError(error)) throw error;

    const online =
        context.online ??
        (typeof navigator !== 'undefined' ? navigator.onLine : true);
    if (!online) throw error;

    const storage = context.storage ?? sessionStorage;
    const location_ref = context.location ?? location;
    const now = context.now ?? Date.now();
    const signature = `${location_ref.pathname}${location_ref.search}${location_ref.hash}:${getLazyRouteErrorMessage(error)}`;
    const reload_state = parseReloadState(
        storage.getItem(LAZY_ROUTE_RELOAD_KEY),
    );

    if (
        reload_state?.signature === signature &&
        now - reload_state.timestamp < RELOAD_THROTTLE
    ) {
        throw error;
    }

    storage.setItem(
        LAZY_ROUTE_RELOAD_KEY,
        JSON.stringify({ signature, timestamp: now }),
    );
    log(
        'ROUTER',
        'Lazy route load failed. Reloading application...',
        error,
        'warn',
        true,
    );
    location_ref.reload();
}

function getLazyRouteErrorMessage(error: unknown) {
    if (typeof error === 'string') return error;
    if (error instanceof Error) {
        return `${error.name}: ${error.message}`;
    }
    if (error && typeof error === 'object') {
        const name = 'name' in error ? `${error.name || ''}` : '';
        const message = 'message' in error ? `${error.message || ''}` : '';
        return `${name}: ${message}`.trim();
    }
    return `${error || ''}`;
}

function parseReloadState(state: string | null): ReloadState | null {
    if (!state) return null;
    try {
        const parsed_state = JSON.parse(state) as ReloadState;
        if (
            typeof parsed_state?.signature === 'string' &&
            typeof parsed_state?.timestamp === 'number'
        ) {
            return parsed_state;
        }
    } catch {}
    return null;
}
