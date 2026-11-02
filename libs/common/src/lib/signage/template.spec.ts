import { SignageTemplateLayout } from '@placeos/ts-client';
import {
    computeTemplateLayout,
    TEMPLATE_EDGE_BAR_HEIGHT_PC,
    TEMPLATE_SIDEBAR_WIDTH_PC,
} from './template';

const layout = (
    position: SignageTemplateLayout['position'],
    values: Partial<SignageTemplateLayout> = {},
): SignageTemplateLayout => ({ position, plugin_params: {}, ...values });

/** Rectangles of the layouts, in order */
const rects = (layouts: SignageTemplateLayout[]) =>
    computeTemplateLayout(layouts).items.map((item) => item.rect);

describe('computeTemplateLayout', () => {
    it('places edge items in order and leaves the rest for the player', () => {
        const result = computeTemplateLayout([
            layout('top', { y_pos: 0.1 }),
            layout('left', { x_pos: 0.25 }),
            layout('bottom', { y_pos: 0.2 }),
        ]);

        expect(result.items.map((item) => item.rect)).toEqual([
            { left: 0, top: 0, width: 100, height: 10 },
            { left: 0, top: 10, width: 25, height: 90 },
            { left: 25, top: 80, width: 75, height: 20 },
        ]);
        expect(result.player).toEqual({
            left: 25,
            top: 10,
            width: 75,
            height: 70,
        });
    });

    it('gives a footer inserted first the full frame width', () => {
        expect(rects([layout('bottom')])).toEqual([
            {
                left: 0,
                top: 100 - TEMPLATE_EDGE_BAR_HEIGHT_PC,
                width: 100,
                height: TEMPLATE_EDGE_BAR_HEIGHT_PC,
            },
        ]);
    });

    it('gives a footer inserted after a sidebar the remaining width', () => {
        expect(rects([layout('left'), layout('bottom')])).toEqual([
            { left: 0, top: 0, width: TEMPLATE_SIDEBAR_WIDTH_PC, height: 100 },
            {
                left: TEMPLATE_SIDEBAR_WIDTH_PC,
                top: 100 - TEMPLATE_EDGE_BAR_HEIGHT_PC,
                width: 100 - TEMPLATE_SIDEBAR_WIDTH_PC,
                height: TEMPLATE_EDGE_BAR_HEIGHT_PC,
            },
        ]);
    });

    it('gives a sidebar inserted after a header the remaining height', () => {
        const [header, sidebar] = rects([layout('top'), layout('right')]);
        expect(header.top).toBe(0);
        expect(header.width).toBe(100);
        expect(sidebar).toEqual({
            left: 100 - TEMPLATE_SIDEBAR_WIDTH_PC,
            top: TEMPLATE_EDGE_BAR_HEIGHT_PC,
            width: TEMPLATE_SIDEBAR_WIDTH_PC,
            height: 100 - TEMPLATE_EDGE_BAR_HEIGHT_PC,
        });
    });

    it('sizes edge panels from x_pos/y_pos', () => {
        const [header, sidebar] = rects([
            layout('top', { y_pos: 0.3 }),
            layout('left', { x_pos: 0.4 }),
        ]);
        expect(header.height).toBe(30);
        expect(sidebar.width).toBe(40);
        expect(sidebar.height).toBe(70);
    });

    it('fills floating items from their top-left corner without taking player space', () => {
        const result = computeTemplateLayout([
            layout('floating', { x_pos: 0.2, y_pos: 0.3 }),
            layout('bottom'),
        ]);

        expect(result.items[0].rect).toEqual({
            left: 20,
            top: 30,
            width: 80,
            height: 70,
        });
        expect(result.items[1].rect.width).toBe(100);
        expect(result.player).toEqual({
            left: 0,
            top: 0,
            width: 100,
            height: 100 - TEMPLATE_EDGE_BAR_HEIGHT_PC,
        });
    });

    it('fills the frame with a floating item that has no position', () => {
        expect(rects([layout('floating')])).toEqual([
            { left: 0, top: 0, width: 100, height: 100 },
        ]);
    });

    it('uses defaults and constrains item dimensions to the available space', () => {
        const result = computeTemplateLayout([
            layout('right'),
            layout('top', { y_pos: 2 }),
        ]);

        expect(result.items.map((item) => item.rect)).toEqual([
            { left: 80, top: 0, width: 20, height: 100 },
            { left: 0, top: 0, width: 80, height: 100 },
        ]);
        expect(result.player).toEqual({
            left: 0,
            top: 100,
            width: 80,
            height: 0,
        });
    });

    it('clamps floating corners to the frame', () => {
        const [rect] = rects([layout('floating', { x_pos: -0.2, y_pos: 5 })]);
        expect(rect).toEqual({ left: 0, top: 100, width: 100, height: 0 });
    });

    it('never lets edge panels exceed the remaining space', () => {
        const result = rects(Array.from({ length: 10 }, () => layout('top')));
        const total = result.reduce((sum, rect) => sum + rect.height, 0);
        expect(total).toBeLessThanOrEqual(100);
        for (const rect of result)
            expect(rect.height).toBeGreaterThanOrEqual(0);
    });
});
