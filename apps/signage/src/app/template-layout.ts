import { SignageTemplateLayout } from '@placeos/ts-client';

export interface TemplateLayoutRect {
    left: number;
    top: number;
    width: number;
    height: number;
}

export interface TemplateLayoutItem {
    layout: SignageTemplateLayout;
    rect: TemplateLayoutRect;
}

export interface ComputedTemplateLayout {
    items: TemplateLayoutItem[];
    player: TemplateLayoutRect;
}

const EDGE_BAR_SIZE = 15;
const SIDE_BAR_SIZE = 20;
const FLOATING_POSITION = 50;

const clamp = (value: number, max = 100) =>
    Math.min(Math.max(value, 0), Math.max(max, 0));

function percentage(value: number | undefined, fallback: number) {
    return value === undefined ? fallback : clamp(value * 100);
}

/**
 * Place template items in order and return the rectangle left for the player.
 * Floating items do not consume player space.
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
                    percentage(layout.y_pos, EDGE_BAR_SIZE),
                    player.height,
                );
                rect = { ...player, height };
                player.top += height;
                player.height -= height;
                break;
            }
            case 'bottom': {
                const height = clamp(
                    percentage(layout.y_pos, EDGE_BAR_SIZE),
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
                    percentage(layout.x_pos, SIDE_BAR_SIZE),
                    player.width,
                );
                rect = { ...player, width };
                player.left += width;
                player.width -= width;
                break;
            }
            case 'right': {
                const width = clamp(
                    percentage(layout.x_pos, SIDE_BAR_SIZE),
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
                const left = percentage(layout.x_pos, FLOATING_POSITION);
                const top = percentage(layout.y_pos, FLOATING_POSITION);
                rect = { left, top, width: 100 - left, height: 100 - top };
                break;
            }
        }
        return { layout, rect };
    });
    return { items, player };
}
