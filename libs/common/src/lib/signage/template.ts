import type { SignageTemplateLayout } from '@placeos/ts-client';

/** Message type Signage Manager posts with unsaved layouts to preview */
export const SIGNAGE_PREVIEW_LAYOUTS_MESSAGE = 'signage:template-layouts';
/** Message type the player posts to ask Signage Manager for unsaved layouts */
export const SIGNAGE_PREVIEW_READY_MESSAGE = 'signage:template-preview-ready';

/**
 * Size of a top or bottom panel with no `y_pos`, as a percentage of the frame.
 * The API stores `x_pos`/`y_pos` as ratios from 0 to 1. For edge panels they
 * are the panel's size on the relevant axis. For floating panels they are the
 * top-left corner, with the panel filling the frame from there.
 */
export const TEMPLATE_EDGE_BAR_HEIGHT_PC = 15;
/** Width of a left or right panel with no `x_pos`, as a percentage */
export const TEMPLATE_SIDEBAR_WIDTH_PC = 20;
/** Top-left corner of a floating panel with no position, so it fills the frame */
export const TEMPLATE_FLOATING_POSITION_PC = 0;

/** Rectangle within the frame, all values are percentages (0-100) */
export interface TemplateLayoutRect {
    left: number;
    top: number;
    width: number;
    height: number;
}

/** A template item and where it shows in the frame */
export interface TemplateLayoutItem {
    layout: SignageTemplateLayout;
    rect: TemplateLayoutRect;
}

/** Template items placed in the frame */
export interface ComputedTemplateLayout {
    items: TemplateLayoutItem[];
    /** Space left for the media player */
    player: TemplateLayoutRect;
}

const clamp = (value: number, max = 100) =>
    Math.min(Math.max(value, 0), Math.max(max, 0));

function percentage(value: number | undefined, fallback: number) {
    return value === undefined ? fallback : clamp(value * 100);
}

/**
 * Place template items in array order and return the rectangle left for the
 * player. Each edge panel takes space from the area that is left, e.g. a
 * bottom panel placed first spans the full width, while one placed after a
 * sidebar spans the width that the sidebar leaves. Floating items overlay the
 * frame from their top-left corner and do not take player space.
 */
export function computeTemplateLayout(
    layouts: SignageTemplateLayout[],
): ComputedTemplateLayout {
    const player = { left: 0, top: 0, width: 100, height: 100 };
    const items = layouts.map((layout) => {
        let rect: TemplateLayoutRect;
        switch (layout.position) {
            case 'top': {
                const height = clamp(
                    percentage(layout.y_pos, TEMPLATE_EDGE_BAR_HEIGHT_PC),
                    player.height,
                );
                rect = { ...player, height };
                player.top += height;
                player.height -= height;
                break;
            }
            case 'bottom': {
                const height = clamp(
                    percentage(layout.y_pos, TEMPLATE_EDGE_BAR_HEIGHT_PC),
                    player.height,
                );
                rect = {
                    ...player,
                    top: player.top + player.height - height,
                    height,
                };
                player.height -= height;
                break;
            }
            case 'left': {
                const width = clamp(
                    percentage(layout.x_pos, TEMPLATE_SIDEBAR_WIDTH_PC),
                    player.width,
                );
                rect = { ...player, width };
                player.left += width;
                player.width -= width;
                break;
            }
            case 'right': {
                const width = clamp(
                    percentage(layout.x_pos, TEMPLATE_SIDEBAR_WIDTH_PC),
                    player.width,
                );
                rect = {
                    ...player,
                    left: player.left + player.width - width,
                    width,
                };
                player.width -= width;
                break;
            }
            case 'floating':
            default: {
                const left = percentage(
                    layout.x_pos,
                    TEMPLATE_FLOATING_POSITION_PC,
                );
                const top = percentage(
                    layout.y_pos,
                    TEMPLATE_FLOATING_POSITION_PC,
                );
                rect = { left, top, width: 100 - left, height: 100 - top };
                break;
            }
        }
        return { layout, rect };
    });
    return { items, player };
}
