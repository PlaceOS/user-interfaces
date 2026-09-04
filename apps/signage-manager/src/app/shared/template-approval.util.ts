import {
    showSignageTemplate,
    SignageTemplate,
    SignageTemplateLayout,
} from '@placeos/ts-client';
import {
    EDGE_BAR_HEIGHT_PC,
    FLOATING_DEFAULT_X_PC,
    FLOATING_DEFAULT_Y_PC,
    layoutRatioToPercentage,
    SIDEBAR_WIDTH_PC,
} from '../templates/template-layout.util';

function axisPercentage(
    layout: SignageTemplateLayout,
    axis: 'x_pos' | 'y_pos',
) {
    const percentage = layoutRatioToPercentage(layout[axis]);
    if (percentage !== null) return Math.round(percentage * 100) / 100;
    if (layout.position === 'floating') {
        return axis === 'x_pos' ? FLOATING_DEFAULT_X_PC : FLOATING_DEFAULT_Y_PC;
    }
    return axis === 'x_pos' ? SIDEBAR_WIDTH_PC : EDGE_BAR_HEIGHT_PC;
}

export function signageTemplateLayoutsEqual(
    current: SignageTemplateLayout,
    older?: SignageTemplateLayout,
) {
    if (!older || current.position !== older.position) return false;
    const uses_x =
        current.position === 'left' ||
        current.position === 'right' ||
        current.position === 'floating';
    const uses_y =
        current.position === 'top' ||
        current.position === 'bottom' ||
        current.position === 'floating';
    return (
        (current.plugin_id || '') === (older.plugin_id || '') &&
        (!uses_x ||
            axisPercentage(current, 'x_pos') ===
                axisPercentage(older, 'x_pos')) &&
        (!uses_y ||
            axisPercentage(current, 'y_pos') ===
                axisPercentage(older, 'y_pos')) &&
        JSON.stringify(current.plugin_params || {}) ===
            JSON.stringify(older.plugin_params || {})
    );
}

export function signageTemplateVersionsEqual(
    current: SignageTemplate,
    older: SignageTemplate,
) {
    return (
        current.name === older.name &&
        current.description === older.description &&
        current.background_item_id === older.background_item_id &&
        current.full_screen_takeover === older.full_screen_takeover &&
        JSON.stringify(current.tags) === JSON.stringify(older.tags) &&
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
