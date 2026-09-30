import {
    showSignageTemplate,
    SignageTemplate,
    SignageTemplateLayout,
} from '@placeos/ts-client';
import {
    layoutAxisPercentage,
    layoutPositionAxes,
} from '../templates/template-layout.util';

export type TemplateLayoutField =
    | 'position'
    | 'plugin_id'
    | 'x_pos'
    | 'y_pos'
    | 'plugin_params';

export type TemplateField =
    | 'name'
    | 'description'
    | 'tags'
    | 'background_item_id'
    | 'full_screen_takeover'
    | 'merge';

/**
 * List the fields of `layout` that differ from `other`. Values are compared
 * as displayed, so an unset position equals its displayed default.
 */
export function signageTemplateLayoutChanges(
    layout: SignageTemplateLayout,
    other: SignageTemplateLayout,
) {
    const changes: TemplateLayoutField[] = [];
    if (layout.position !== other.position) changes.push('position');
    if ((layout.plugin_id || '') !== (other.plugin_id || '')) {
        changes.push('plugin_id');
    }
    const other_axes = layoutPositionAxes(other);
    for (const axis of layoutPositionAxes(layout)) {
        if (
            !other_axes.includes(axis) ||
            layoutAxisPercentage(layout, axis) !==
                layoutAxisPercentage(other, axis)
        ) {
            changes.push(axis);
        }
    }
    if (
        JSON.stringify(layout.plugin_params || {}) !==
        JSON.stringify(other.plugin_params || {})
    ) {
        changes.push('plugin_params');
    }
    return changes;
}

export function signageTemplateLayoutsEqual(
    current: SignageTemplateLayout,
    older?: SignageTemplateLayout,
) {
    return !!older && !signageTemplateLayoutChanges(current, older).length;
}

/** List the template details that differ between two versions. */
export function signageTemplateFieldChanges(
    current: SignageTemplate,
    older: SignageTemplate,
) {
    const changes: TemplateField[] = [];
    if (current.name !== older.name) changes.push('name');
    if (current.description !== older.description) changes.push('description');
    if (JSON.stringify(current.tags) !== JSON.stringify(older.tags)) {
        changes.push('tags');
    }
    if (current.background_item_id !== older.background_item_id) {
        changes.push('background_item_id');
    }
    if (current.merge !== older.merge) changes.push('merge');
    if (current.full_screen_takeover !== older.full_screen_takeover) {
        changes.push('full_screen_takeover');
    }
    return changes;
}

export function signageTemplateVersionsEqual(
    current: SignageTemplate,
    older: SignageTemplate,
) {
    return (
        !signageTemplateFieldChanges(current, older).length &&
        current.layouts.length === older.layouts.length &&
        current.layouts.every((layout, index) =>
            signageTemplateLayoutsEqual(layout, older.layouts[index]),
        )
    );
}

export async function loadTemplateApprovalVersions(template_id: string) {
    const pending_template = await showSignageTemplate(template_id);
    let approved_template: SignageTemplate | null = null;
    try {
        approved_template = await showSignageTemplate(template_id, {
            approved: true,
        });
    } catch {
        // A new template has no approved version to compare or restore.
    }
    return approved_template &&
        !signageTemplateVersionsEqual(pending_template, approved_template)
        ? [pending_template, approved_template]
        : [pending_template];
}
