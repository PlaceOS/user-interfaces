import { SignageTemplateLayout } from '@placeos/ts-client';
import {
    computeTemplateLayoutRects,
    EDGE_BAR_HEIGHT_PC,
    FLOATING_DEFAULT_X_PC,
    FLOATING_DEFAULT_Y_PC,
    SIDEBAR_WIDTH_PC,
} from '../../app/templates/template-layout.util';

const layout = (
    position: SignageTemplateLayout['position'],
    extra: Partial<SignageTemplateLayout> = {},
): SignageTemplateLayout => ({ position, plugin_params: {}, ...extra });

describe('computeTemplateLayoutRects', () => {
    it('gives a footer inserted first the full frame width', () => {
        const [rect] = computeTemplateLayoutRects([layout('bottom')]);
        expect(rect).toEqual({
            left: 0,
            top: 100 - EDGE_BAR_HEIGHT_PC,
            width: 100,
            height: EDGE_BAR_HEIGHT_PC,
        });
    });

    it('gives a footer inserted after a sidebar the remaining width', () => {
        const [sidebar, footer] = computeTemplateLayoutRects([
            layout('left'),
            layout('bottom'),
        ]);
        expect(sidebar).toEqual({
            left: 0,
            top: 0,
            width: SIDEBAR_WIDTH_PC,
            height: 100,
        });
        expect(footer).toEqual({
            left: SIDEBAR_WIDTH_PC,
            top: 100 - EDGE_BAR_HEIGHT_PC,
            width: 100 - SIDEBAR_WIDTH_PC,
            height: EDGE_BAR_HEIGHT_PC,
        });
    });

    it('gives a sidebar inserted after a header the remaining height', () => {
        const [header, sidebar] = computeTemplateLayoutRects([
            layout('top'),
            layout('right'),
        ]);
        expect(header.top).toBe(0);
        expect(header.width).toBe(100);
        expect(sidebar).toEqual({
            left: 100 - SIDEBAR_WIDTH_PC,
            top: EDGE_BAR_HEIGHT_PC,
            width: SIDEBAR_WIDTH_PC,
            height: 100 - EDGE_BAR_HEIGHT_PC,
        });
    });

    it('consumes space in insertion order for every edge panel', () => {
        const [top, left, bottom] = computeTemplateLayoutRects([
            layout('top'),
            layout('left'),
            layout('bottom'),
        ]);
        expect(top.width).toBe(100);
        expect(left.top).toBe(EDGE_BAR_HEIGHT_PC);
        expect(left.height).toBe(100 - EDGE_BAR_HEIGHT_PC);
        expect(bottom.left).toBe(SIDEBAR_WIDTH_PC);
        expect(bottom.width).toBe(100 - SIDEBAR_WIDTH_PC);
    });

    it('sizes edge panels from x_pos/y_pos', () => {
        const [header, sidebar] = computeTemplateLayoutRects([
            layout('top', { y_pos: 30 }),
            layout('left', { x_pos: 40 }),
        ]);
        expect(header.height).toBe(30);
        expect(sidebar.width).toBe(40);
        expect(sidebar.height).toBe(70);
    });

    it('fills floating panels from their top-left corner without consuming space', () => {
        const [float_rect, footer] = computeTemplateLayoutRects([
            layout('floating', { x_pos: 10, y_pos: 20 }),
            layout('bottom'),
        ]);
        expect(float_rect).toEqual({
            left: 10,
            top: 20,
            width: 90,
            height: 80,
        });
        expect(footer.width).toBe(100);
    });

    it('uses the default corner for floating panels without a position', () => {
        const [rect] = computeTemplateLayoutRects([layout('floating')]);
        expect(rect).toEqual({
            left: FLOATING_DEFAULT_X_PC,
            top: FLOATING_DEFAULT_Y_PC,
            width: 100 - FLOATING_DEFAULT_X_PC,
            height: 100 - FLOATING_DEFAULT_Y_PC,
        });
    });

    it('clamps values to the frame', () => {
        const [top, float_rect] = computeTemplateLayoutRects([
            layout('top', { y_pos: 250 }),
            layout('floating', { x_pos: -20, y_pos: 500 }),
        ]);
        expect(top.height).toBe(100);
        expect(float_rect.left).toBe(0);
        expect(float_rect.width).toBe(100);
        expect(float_rect.top).toBe(100);
        expect(float_rect.height).toBe(0);
    });

    it('never lets edge panels exceed the remaining space', () => {
        const rects = computeTemplateLayoutRects(
            Array.from({ length: 10 }, () => layout('top')),
        );
        const total = rects.reduce((sum, rect) => sum + rect.height, 0);
        expect(total).toBeLessThanOrEqual(100);
        for (const rect of rects) expect(rect.height).toBeGreaterThanOrEqual(0);
    });
});
