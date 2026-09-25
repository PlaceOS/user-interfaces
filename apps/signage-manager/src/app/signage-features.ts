import { i18n } from '@placeos/common';

/**
 * Features the `app.features` setting can turn on. Groups can only narrow
 * this list for their users.
 */
export const SIGNAGE_FEATURES = [
    { id: 'templates', label: i18n('SIGNAGE_MANAGER.FEATURE_TEMPLATES') },
    {
        id: 'template-editing',
        label: i18n('SIGNAGE_MANAGER.FEATURE_TEMPLATE_EDITING'),
    },
    {
        id: 'ai-generation',
        label: i18n('SIGNAGE_MANAGER.FEATURE_AI_GENERATION'),
    },
    { id: 'ai-editing', label: i18n('SIGNAGE_MANAGER.FEATURE_AI_EDITING') },
    {
        id: 'branding-editing',
        label: i18n('SIGNAGE_MANAGER.FEATURE_BRANDING_EDITING'),
    },
] as const;

export type SignageFeature = (typeof SIGNAGE_FEATURES)[number]['id'];

export const SIGNAGE_FEATURE_IDS: SignageFeature[] = SIGNAGE_FEATURES.map(
    ({ id }) => id,
);

/**
 * Signage settings stored on a group under `features.signage`. Child groups
 * inherit each key from their ancestors and can replace it. A missing key
 * keeps everything the global settings allow.
 */
export interface SignageGroupFeatures {
    /** Features the group's users can use, filtered by `app.features` */
    features?: string[];
    /** Plugin IDs the media library offers */
    available_plugins?: string[];
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return !!value && typeof value === 'object' && !Array.isArray(value);
}

function stringList(value: unknown) {
    return Array.isArray(value)
        ? value.filter((item): item is string => typeof item === 'string')
        : undefined;
}

/**
 * Read signage settings from a group's `features` or from the group features
 * route. Accepts the subsystem map (`{ signage: {...} }`) or the flat values
 * for one subsystem, and drops keys with the wrong type.
 */
export function signageGroupFeatures(raw: unknown): SignageGroupFeatures {
    if (!isRecord(raw)) return {};
    const source = isRecord(raw.signage) ? raw.signage : raw;
    const result: SignageGroupFeatures = {};
    const features = stringList(source.features);
    const plugins = stringList(source.available_plugins);
    if (features) result.features = features;
    if (plugins) result.available_plugins = plugins;
    return result;
}

/** Global features that the group also allows */
export function effectiveFeatures(
    global: readonly string[],
    group: SignageGroupFeatures,
) {
    const allowed = group.features;
    return allowed ? global.filter((id) => allowed.includes(id)) : [...global];
}
