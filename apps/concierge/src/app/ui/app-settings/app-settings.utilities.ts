export type AppSettings = Record<string, unknown>;

function isSettingsGroup(value: unknown): value is AppSettings {
    return !!value && typeof value === 'object' && !Array.isArray(value);
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
            const next_value = layer[key];
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

/** Return only values that differ from the inherited settings baseline. */
export function appSettingOverrides(
    working_settings: AppSettings,
    inherited_settings: AppSettings,
): AppSettings {
    const overrides: AppSettings = {};
    for (const key in working_settings) {
        const working_value = working_settings[key];
        if (working_value === undefined) continue;
        const inherited_value = inherited_settings[key];
        if (isSettingsGroup(working_value)) {
            const inherited_group = isSettingsGroup(inherited_value)
                ? inherited_value
                : {};
            const group_overrides: AppSettings = {};
            for (const setting_key in working_value) {
                const setting_value = working_value[setting_key];
                if (
                    setting_value !== undefined &&
                    !settingsEqual(setting_value, inherited_group[setting_key])
                ) {
                    group_overrides[setting_key] = setting_value;
                }
            }
            if (Object.keys(group_overrides).length) {
                overrides[key] = group_overrides;
            }
        } else if (!settingsEqual(working_value, inherited_value)) {
            overrides[key] = working_value;
        }
    }
    return overrides;
}
