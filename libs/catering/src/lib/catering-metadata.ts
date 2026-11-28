import {
    isJsonArray,
    isJsonRecord,
    jsonRecords,
    jsonStrings,
} from '@placeos/common';
import { type AttachedResourceRuleset } from '@placeos/components';
import { type JsonValue } from '@placeos/ts-client';
import type { CateringSettings } from './catering-state.service';

/**
 * Catering settings of a building from the details of its
 * `catering-settings` metadata. Known fields with the wrong type are left
 * out. Other fields stay, so a save keeps them.
 * @param details Details of the metadata, or `undefined` without metadata
 */
export function cateringSettingsFromJson(
    details: JsonValue | undefined,
): CateringSettings {
    if (!isJsonRecord(details)) return {};
    const { require_notes, charge_codes, disabled_rooms, ...other } = details;
    const settings: CateringSettings = { ...other };
    if (typeof require_notes === 'boolean') {
        settings.require_notes = require_notes;
    }
    if (isJsonArray(charge_codes)) {
        settings.charge_codes = jsonStrings(charge_codes);
    }
    if (isJsonArray(disabled_rooms)) {
        settings.disabled_rooms = jsonStrings(disabled_rooms);
    }
    return settings;
}

/**
 * Rulesets from the details of a `catering_config` metadata. Each ruleset
 * must have a string `name` and a `rules` list of `[type, value]` pairs.
 * Rules of another shape are left out.
 *
 * The rule values are not checked: the stored data can have a string, such
 * as `"10:30"`, where `AttachedResourceRule` has a number, and the catering
 * rules read both. A stored ruleset can also have no `id`. So the rulesets
 * need a cast to the app type, which keeps the stored data unchanged.
 * @param details Details of the metadata, or `undefined` without metadata
 */
export function rulesetsFromJson(
    details: JsonValue | undefined,
): AttachedResourceRuleset[] {
    return jsonRecords(details).flatMap((item) => {
        // Other fields of the ruleset stay, so a save keeps them
        const { id, name, rules, ...other } = item;
        if (typeof name !== 'string' || !isJsonArray(rules)) return [];
        const ruleset = {
            ...other,
            ...(typeof id === 'string' ? { id } : {}),
            name,
            rules: rules.filter(
                (rule) =>
                    isJsonArray(rule) &&
                    rule.length === 2 &&
                    typeof rule[0] === 'string',
            ),
        };
        return [ruleset as unknown as AttachedResourceRuleset];
    });
}
