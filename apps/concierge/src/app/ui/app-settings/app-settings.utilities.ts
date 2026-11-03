import { currentUser, SettingsService, VERSION } from '@placeos/common';
import { PlaceZone, showMetadata, updateMetadata } from '@placeos/ts-client';

export type AppSettings = Record<string, unknown>;

function isSettingsGroup(value: unknown): value is AppSettings {
    return !!value && typeof value === 'object' && !Array.isArray(value);
}

function normaliseAppSetting(key: string, value: unknown): unknown {
    if (
        (key === 'logo_light' || key === 'logo_dark') &&
        isSettingsGroup(value) &&
        typeof value.src === 'string'
    ) {
        return value.src;
    }
    return value;
}

function settingsEqual(left: unknown, right: unknown): boolean {
    if (Object.is(left, right)) return true;
    if (Array.isArray(left) && Array.isArray(right)) {
        return (
            left.length === right.length &&
            left.every((value, index) => settingsEqual(value, right[index]))
        );
    }
    if (!isSettingsGroup(left) || !isSettingsGroup(right)) return false;
    const left_keys = Object.keys(left);
    const right_keys = Object.keys(right);
    return (
        left_keys.length === right_keys.length &&
        left_keys.every(
            (key) => key in right && settingsEqual(left[key], right[key]),
        )
    );
}

/** Merge settings through `app.<group>.<setting>`. Setting values are atomic. */
export function mergeAppSettings(...layers: AppSettings[]): AppSettings {
    const result: AppSettings = {};
    for (const layer of layers) {
        if (!layer) continue;
        for (const key in layer) {
            const next_value = normaliseAppSetting(key, layer[key]);
            const current_value = result[key];
            result[key] =
                isSettingsGroup(current_value) && isSettingsGroup(next_value)
                    ? { ...current_value, ...next_value }
                    : next_value;
        }
    }
    return result;
}

/** Apply settings to fields supported by an application settings form. */
export function applyAppSettings<T extends AppSettings>(
    model: T,
    settings: AppSettings,
): T {
    const supported_settings: AppSettings = {};
    for (const key in settings) {
        if (key in model) supported_settings[key] = settings[key];
    }
    return mergeAppSettings(model, supported_settings) as T;
}

/**
 * Locker settings that every locker reader resolves as
 * `lockers.<setting>`, then `bookings.<setting>`, then its own default:
 * the Concierge locker booking modal, the Workplace locker form, the locker
 * select modal filters and `BookingFormService.settingForType`.
 */
export const LOCKER_BOOKING_FALLBACKS = [
    'allow_all_day',
    'all_day_default',
    'bookable_hours',
    'available_period',
    'max_duration',
] as const;

/**
 * Show the inherited `bookings.<key>` value in `model[group]` for each key in
 * `keys` that the form has and that `settings[group]` does not set.
 * `settings` holds every loaded layer, including the zone's own metadata.
 */
export function applyBookingFallbacks<T extends AppSettings>(
    model: T,
    settings: AppSettings,
    group: string,
    keys: readonly string[],
): T {
    const model_group = model[group];
    const group_settings = settings[group];
    const bookings = settings.bookings;
    if (!isSettingsGroup(model_group) || !isSettingsGroup(bookings)) {
        return model;
    }
    const fallbacks: AppSettings = {};
    for (const key of keys) {
        const is_unset =
            !isSettingsGroup(group_settings) ||
            group_settings[key] === undefined;
        if (key in model_group && is_unset && bookings[key] != null) {
            fallbacks[key] = bookings[key];
        }
    }
    return applyAppSettings(model, { [group]: fallbacks });
}

/** Whether a setting value belongs in the zone's saved settings. */
function isOverride(
    value: unknown,
    inherited_value: unknown,
    initial_value: unknown,
    is_stored: boolean,
): boolean {
    if (value === undefined || settingsEqual(value, inherited_value)) {
        return false;
    }
    return is_stored || !settingsEqual(value, initial_value);
}

/**
 * Return the settings to save on a zone. A value is saved when it differs
 * from the inherited value and the zone already stores it or the user changed
 * it from `initial_settings`. Untouched settings that the zone does not store
 * stay unset, so readers keep their own fallbacks.
 */
export function appSettingOverrides(
    working_settings: AppSettings,
    inherited_settings: AppSettings,
    initial_settings: AppSettings,
    stored_settings: AppSettings,
): AppSettings {
    const overrides: AppSettings = {};
    for (const key in working_settings) {
        const working_value = working_settings[key];
        if (working_value === undefined) continue;
        const inherited_value = inherited_settings[key];
        const initial_value = initial_settings[key];
        const stored_value = stored_settings[key];
        if (isSettingsGroup(working_value)) {
            const inherited_group = isSettingsGroup(inherited_value)
                ? inherited_value
                : {};
            const initial_group = isSettingsGroup(initial_value)
                ? initial_value
                : {};
            const stored_group = isSettingsGroup(stored_value)
                ? stored_value
                : {};
            const group_overrides: AppSettings = {};
            for (const setting_key in working_value) {
                const setting_value = working_value[setting_key];
                if (
                    isOverride(
                        setting_value,
                        inherited_group[setting_key],
                        initial_group[setting_key],
                        setting_key in stored_group,
                    )
                ) {
                    group_overrides[setting_key] = setting_value;
                }
            }
            if (Object.keys(group_overrides).length) {
                overrides[key] = group_overrides;
            }
        } else if (
            isOverride(
                working_value,
                inherited_value,
                initial_value,
                key in stored_settings,
            )
        ) {
            overrides[key] = working_value;
        }
    }
    return overrides;
}

/** Zone fields that the App Settings modals read. The organisation fits too. */
export type AppSettingsZone = Pick<PlaceZone, 'id' | 'name'> &
    Partial<Pick<PlaceZone, 'display_name' | 'parent_id'>>;

/** Applications that store their settings in zone metadata. */
export type MetadataApp = 'concierge' | 'workplace' | 'visitor-kiosk';

/** Settings checked in order for each app's metadata key, then the default. */
const APP_METADATA_KEYS: Record<
    MetadataApp,
    { settings: readonly string[]; fallback: string }
> = {
    concierge: {
        settings: ['app.concierge_metadata_key', 'app.concierge_app'],
        fallback: 'concierge_app',
    },
    workplace: {
        settings: ['app.workplace_metadata_key'],
        fallback: 'workplace_app',
    },
    'visitor-kiosk': {
        settings: ['app.visitor_kiosk_metadata_key', 'app.visitor_kiosk_app'],
        fallback: 'visitor-kiosk_app',
    },
};

/** Name of the zone metadata that holds the settings of `app`. */
export function appMetadataKey(
    settings: SettingsService,
    app: MetadataApp,
): string {
    const { settings: keys, fallback } = APP_METADATA_KEYS[app];
    for (const key of keys) {
        const value = settings.get<string>(key);
        if (value) return value;
    }
    return fallback;
}

/** Modal heading: the title and a badge with the zone name. */
export function appSettingsHeading(
    title: string,
    zone: AppSettingsZone,
): string {
    return `${title} <div class="font-mono text-xs px-2 py-1 rounded bg-base-300 ml-2">${zone.display_name || zone.name || 'Organisation'}</div>`;
}

/** Settings layers that an App Settings modal loads for a zone. */
export interface AppSettingsLayers {
    /** Application defaults, then organisation and parent zone settings. */
    inherited: AppSettings;
    /** Settings stored on the zone. */
    stored: AppSettings;
}

async function loadMetadata(id: string, key: string): Promise<AppSettings> {
    const metadata = await showMetadata(id, key);
    return (metadata.details || {}) as AppSettings;
}

/**
 * Load the `key` metadata of `zone` and of the zones it inherits from.
 * The organisation is skipped when it is the zone, and the parent zone is
 * skipped when it is the organisation. Rejects when a request fails.
 */
export async function loadLayeredAppSettings(
    zone: AppSettingsZone,
    org_id: string,
    key: string,
    defaults: AppSettings,
): Promise<AppSettingsLayers> {
    const is_org = zone.id === org_id;
    const org = is_org ? {} : await loadMetadata(org_id, key);
    const parent =
        !is_org && zone.parent_id && zone.parent_id !== org_id
            ? await loadMetadata(zone.parent_id, key)
            : {};
    const stored = await loadMetadata(zone.id, key);
    return { inherited: mergeAppSettings(defaults, org, parent), stored };
}

/** Current user details saved with each settings change. */
function editedBy(): AppSettings {
    const user = currentUser();
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        domain: location.hostname,
        role: user.groups.includes('placeos_admin')
            ? 'Admin'
            : user.groups.includes('placeos_support')
              ? 'Support'
              : 'User',
    };
}

/**
 * Save the form `values` as the `key` metadata of `zone_id`. Only the
 * overrides of `layers.inherited` are saved (see `appSettingOverrides`),
 * with an `edited_by` stamp for the current user. `initial` holds the form
 * values right after loading. `app_name` goes in the metadata description.
 */
export async function saveAppSettings(
    zone_id: string,
    key: string,
    app_name: string,
    layers: AppSettingsLayers,
    initial: AppSettings,
    values: AppSettings,
): Promise<void> {
    const details = appSettingOverrides(
        mergeAppSettings(layers.stored, values),
        layers.inherited,
        initial,
        layers.stored,
    );
    details.edited_by = editedBy();
    await updateMetadata(zone_id, {
        name: key,
        details,
        description: `[${VERSION.hash}|C] ${app_name} Application Settings`,
    });
}
