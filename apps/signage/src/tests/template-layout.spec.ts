import { SignageTemplateLayout } from '@placeos/ts-client';

import { computeTemplateLayout } from '../app/template-layout';

const layout = (
    position: SignageTemplateLayout['position'],
    values: Partial<SignageTemplateLayout> = {},
): SignageTemplateLayout => ({ position, plugin_params: {}, ...values });

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

    it('does not remove floating items from the player space', () => {
        const result = computeTemplateLayout([
            layout('floating', { x_pos: 0.2, y_pos: 0.3 }),
        ]);

        expect(result.items[0].rect).toEqual({
            left: 20,
            top: 30,
            width: 80,
            height: 70,
        });
        expect(result.player).toEqual({
            left: 0,
            top: 0,
            width: 100,
            height: 100,
        });
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
});
