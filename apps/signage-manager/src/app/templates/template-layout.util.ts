import {
    TEMPLATE_EDGE_BAR_HEIGHT_PC,
    TEMPLATE_FLOATING_POSITION_PC,
    TEMPLATE_SIDEBAR_WIDTH_PC,
} from '@placeos/common';
import {
    SignageTemplateLayout,
    SignageTemplateLayoutPosition,
} from '@placeos/ts-client';

export const LAYOUT_POSITIONS: SignageTemplateLayoutPosition[] = [
    'top',
    'bottom',
    'left',
    'right',
    'floating',
];

const POSITION_ICONS: Record<SignageTemplateLayoutPosition, string> = {
    top: 'align_vertical_top',
    bottom: 'align_vertical_bottom',
    left: 'align_horizontal_left',
    right: 'align_horizontal_right',
    floating: 'picture_in_picture',
};

const POSITION_LABELS: Record<SignageTemplateLayoutPosition, string> = {
    top: 'SIGNAGE_MANAGER.TEMPLATE_POSITION_TOP',
    bottom: 'SIGNAGE_MANAGER.TEMPLATE_POSITION_BOTTOM',
    left: 'SIGNAGE_MANAGER.TEMPLATE_POSITION_LEFT',
    right: 'SIGNAGE_MANAGER.TEMPLATE_POSITION_RIGHT',
    floating: 'SIGNAGE_MANAGER.TEMPLATE_POSITION_FLOATING',
};

export function layoutPositionIcon(position: SignageTemplateLayoutPosition) {
    return POSITION_ICONS[position] || 'crop_free';
}

export function layoutPositionLabel(position: SignageTemplateLayoutPosition) {
    return POSITION_LABELS[position] || position;
}

/*
 * The player shares the layout defaults and maths in
 * `libs/common/src/lib/signage/template.ts`, so the preview shows what
 * screens show and saving does not move a panel.
 */

const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), Math.max(min, max));

function layoutRatioToPercentage(value?: number) {
    return value === undefined ? null : clamp(value, 0, 1) * 100;
}

export function layoutPercentageToRatio(value: number | null) {
    return value === null || !Number.isFinite(value)
        ? undefined
        : clamp(value / 100, 0, 1);
}

/** Displayed percentage for a layout axis, with the default when unset. */
export function layoutAxisPercentage(
    layout: SignageTemplateLayout,
    axis: 'x_pos' | 'y_pos',
) {
    const percentage = layoutRatioToPercentage(layout[axis]);
    if (percentage !== null) return Math.round(percentage * 100) / 100;
    if (layout.position === 'floating') return TEMPLATE_FLOATING_POSITION_PC;
    return axis === 'x_pos'
        ? TEMPLATE_SIDEBAR_WIDTH_PC
        : TEMPLATE_EDGE_BAR_HEIGHT_PC;
}

/** Position axes that have an effect for the given layout position. */
export function layoutPositionAxes(layout: SignageTemplateLayout) {
    const axes: ('x_pos' | 'y_pos')[] = [];
    if (['left', 'right', 'floating'].includes(layout.position)) {
        axes.push('x_pos');
    }
    if (['top', 'bottom', 'floating'].includes(layout.position)) {
        axes.push('y_pos');
    }
    return axes;
}

/** Add the displayed position defaults before sending a layout to the API. */
export function applyLayoutPositionDefaults(
    layout: SignageTemplateLayout,
): SignageTemplateLayout {
    switch (layout.position) {
        case 'top':
        case 'bottom':
            return {
                ...layout,
                y_pos:
                    layout.y_pos ??
                    layoutPercentageToRatio(TEMPLATE_EDGE_BAR_HEIGHT_PC),
            };
        case 'left':
        case 'right':
            return {
                ...layout,
                x_pos:
                    layout.x_pos ??
                    layoutPercentageToRatio(TEMPLATE_SIDEBAR_WIDTH_PC),
            };
        case 'floating':
            return {
                ...layout,
                x_pos:
                    layout.x_pos ??
                    layoutPercentageToRatio(TEMPLATE_FLOATING_POSITION_PC),
                y_pos:
                    layout.y_pos ??
                    layoutPercentageToRatio(TEMPLATE_FLOATING_POSITION_PC),
            };
    }
}

/**
 * Whether the API accepts the position of a layout once defaults are added.
 * Edge panel sizes must be more than 0 and less than 1.
 */
export function layoutPositionValid(layout: SignageTemplateLayout) {
    const { position, x_pos, y_pos } = applyLayoutPositionDefaults(layout);
    if (position === 'floating') {
        return x_pos !== undefined && y_pos !== undefined;
    }
    return [x_pos, y_pos].every(
        (value) => value === undefined || (value > 0 && value < 1),
    );
}
