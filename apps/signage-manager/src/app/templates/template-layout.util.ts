import {
    SignageTemplateLayout,
    SignageTemplateLayoutPosition,
} from '@placeos/ts-client';

/** Rectangle within the preview frame, all values are percentages (0-100) */
export interface TemplateLayoutRect {
    left: number;
    top: number;
    width: number;
    height: number;
}

/**
 * The API stores `x_pos`/`y_pos` as ratios from 0 to 1. For edge panels they
 * are the panel's size on the relevant axis. For floating panels they are the
 * top-left corner, with the panel filling the frame from there.
 */
export const EDGE_BAR_HEIGHT_PC = 15;
export const SIDEBAR_WIDTH_PC = 20;
export const FLOATING_DEFAULT_X_PC = 50;
export const FLOATING_DEFAULT_Y_PC = 50;

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

const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), Math.max(min, max));

export function layoutRatioToPercentage(value?: number) {
    return value === undefined ? null : clamp(value, 0, 1) * 100;
}

export function layoutPercentageToRatio(value: number | null) {
    return value === null || !Number.isFinite(value)
        ? undefined
        : clamp(value / 100, 0, 1);
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
                    layout.y_pos ?? layoutPercentageToRatio(EDGE_BAR_HEIGHT_PC),
            };
        case 'left':
        case 'right':
            return {
                ...layout,
                x_pos:
                    layout.x_pos ?? layoutPercentageToRatio(SIDEBAR_WIDTH_PC),
            };
        case 'floating':
            return {
                ...layout,
                x_pos:
                    layout.x_pos ??
                    layoutPercentageToRatio(FLOATING_DEFAULT_X_PC),
                y_pos:
                    layout.y_pos ??
                    layoutPercentageToRatio(FLOATING_DEFAULT_Y_PC),
            };
    }
}

/**
 * Resolve each layout item to a rectangle in the preview frame. Items are
 * placed in array order, each edge panel consuming space from the remaining
 * unclaimed area — e.g. a bottom panel inserted first spans the full frame
 * width, while one inserted after a sidebar spans the width left over by it.
 * Edge panels read `x_pos`/`y_pos` as their size on the axis they consume.
 * Floating panels read them as their top-left corner, overlay the frame from
 * there to the bottom-right, and don't consume space from following items.
 */
export function computeTemplateLayoutRects(
    layouts: SignageTemplateLayout[],
): TemplateLayoutRect[] {
    const rem = { left: 0, top: 0, width: 100, height: 100 };
    return layouts.map((layout) => {
        switch (layout.position) {
            case 'top': {
                const height = Math.min(
                    layoutRatioToPercentage(layout.y_pos) ??
                        EDGE_BAR_HEIGHT_PC,
                    rem.height,
                );
                const rect = { ...rem, height };
                rem.top += height;
                rem.height -= height;
                return rect;
            }
            case 'bottom': {
                const height = Math.min(
                    layoutRatioToPercentage(layout.y_pos) ??
                        EDGE_BAR_HEIGHT_PC,
                    rem.height,
                );
                const rect = {
                    ...rem,
                    top: rem.top + rem.height - height,
                    height,
                };
                rem.height -= height;
                return rect;
            }
            case 'left': {
                const width = Math.min(
                    layoutRatioToPercentage(layout.x_pos) ?? SIDEBAR_WIDTH_PC,
                    rem.width,
                );
                const rect = { ...rem, width };
                rem.left += width;
                rem.width -= width;
                return rect;
            }
            case 'right': {
                const width = Math.min(
                    layoutRatioToPercentage(layout.x_pos) ?? SIDEBAR_WIDTH_PC,
                    rem.width,
                );
                const rect = {
                    ...rem,
                    left: rem.left + rem.width - width,
                    width,
                };
                rem.width -= width;
                return rect;
            }
            case 'floating':
            default: {
                const left = clamp(
                    layoutRatioToPercentage(layout.x_pos) ??
                        FLOATING_DEFAULT_X_PC,
                    0,
                    100,
                );
                const top = clamp(
                    layoutRatioToPercentage(layout.y_pos) ??
                        FLOATING_DEFAULT_Y_PC,
                    0,
                    100,
                );
                return { left, top, width: 100 - left, height: 100 - top };
            }
        }
    });
}
