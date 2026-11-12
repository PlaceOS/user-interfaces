import {
    TEMPLATE_EDGE_BAR_HEIGHT_PC,
    TEMPLATE_FLOATING_POSITION_PC,
    TEMPLATE_SIDEBAR_WIDTH_PC,
} from '@placeos/common';
import { SignageTemplateLayout } from '@placeos/ts-client';
import {
    applyLayoutPositionDefaults,
    layoutPercentageToRatio,
    layoutPositionValid,
} from '../../app/templates/template-layout.util';

const layout = (
    position: SignageTemplateLayout['position'],
    extra: Partial<SignageTemplateLayout> = {},
): SignageTemplateLayout => ({ position, plugin_params: {}, ...extra });

describe('applyLayoutPositionDefaults', () => {
    it('adds the displayed default for each layout position', () => {
        expect(applyLayoutPositionDefaults(layout('top'))).toMatchObject({
            y_pos: TEMPLATE_EDGE_BAR_HEIGHT_PC / 100,
        });
        expect(applyLayoutPositionDefaults(layout('bottom'))).toMatchObject({
            y_pos: TEMPLATE_EDGE_BAR_HEIGHT_PC / 100,
        });
        expect(applyLayoutPositionDefaults(layout('left'))).toMatchObject({
            x_pos: TEMPLATE_SIDEBAR_WIDTH_PC / 100,
        });
        expect(applyLayoutPositionDefaults(layout('right'))).toMatchObject({
            x_pos: TEMPLATE_SIDEBAR_WIDTH_PC / 100,
        });
        expect(applyLayoutPositionDefaults(layout('floating'))).toMatchObject({
            x_pos: TEMPLATE_FLOATING_POSITION_PC / 100,
            y_pos: TEMPLATE_FLOATING_POSITION_PC / 100,
        });
    });

    it('accepts edge panel sizes only between 0 and 100 percent', () => {
        expect(layoutPositionValid(layout('top'))).toBe(true);
        expect(layoutPositionValid(layout('left', { x_pos: 0.25 }))).toBe(true);
        for (const percentage of [0, 100, 150]) {
            const x_pos = layoutPercentageToRatio(percentage);
            expect(layoutPositionValid(layout('right', { x_pos }))).toBe(false);
        }
        expect(
            layoutPositionValid(layout('floating', { x_pos: 0, y_pos: 1 })),
        ).toBe(true);
    });

    it('preserves explicit positions, including zero', () => {
        expect(
            applyLayoutPositionDefaults(
                layout('floating', { x_pos: 0, y_pos: 0.8 }),
            ),
        ).toMatchObject({ x_pos: 0, y_pos: 0.8 });
    });
});
