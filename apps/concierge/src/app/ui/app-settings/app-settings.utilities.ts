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
