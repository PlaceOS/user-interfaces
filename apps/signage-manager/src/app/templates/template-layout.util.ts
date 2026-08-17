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
 * For edge panels `x_pos`/`y_pos` are the panel's size (percent of the frame
 * — width and height respectively). For floating panels they are the top-left
 * corner instead, with the panel filling the frame from there. Defaults apply
 * when a panel has no value set.
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
                    clamp(layout.y_pos ?? EDGE_BAR_HEIGHT_PC, 0, 100),
                    rem.height,
                );
                const rect = { ...rem, height };
                rem.top += height;
                rem.height -= height;
                return rect;
            }
            case 'bottom': {
                const height = Math.min(
                    clamp(layout.y_pos ?? EDGE_BAR_HEIGHT_PC, 0, 100),
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
                    clamp(layout.x_pos ?? SIDEBAR_WIDTH_PC, 0, 100),
                    rem.width,
                );
                const rect = { ...rem, width };
                rem.left += width;
                rem.width -= width;
                return rect;
            }
            case 'right': {
                const width = Math.min(
                    clamp(layout.x_pos ?? SIDEBAR_WIDTH_PC, 0, 100),
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
                    layout.x_pos ?? FLOATING_DEFAULT_X_PC,
                    0,
                    100,
                );
                const top = clamp(
                    layout.y_pos ?? FLOATING_DEFAULT_Y_PC,
                    0,
                    100,
                );
                return { left, top, width: 100 - left, height: 100 - top };
            }
        }
    });
}
