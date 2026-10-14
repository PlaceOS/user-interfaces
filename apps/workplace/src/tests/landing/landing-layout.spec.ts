import {
    LANDING_WIDGETS,
    layoutFor,
    visibleWidgets,
    widgetSpans,
} from '../../app/landing-new/landing-layout';

describe('landing layout', () => {
    const ids = (list: { id: string }[]) => list.map((_) => _.id);
    const [available_now, , , favourites, colleagues] = LANDING_WIDGETS;
    const default_widgets = LANDING_WIDGETS.filter((_) => !_.optional);

    describe('visibleWidgets', () => {
        it('should use the default widgets when no layout is saved', () => {
            expect(default_widgets.length).toBe(5);
            expect(visibleWidgets(LANDING_WIDGETS)).toEqual(default_widgets);
            expect(visibleWidgets(LANDING_WIDGETS, null)).toEqual(
                default_widgets,
            );
        });

        it('should show an optional widget only when the layout has it', () => {
            const list = visibleWidgets(LANDING_WIDGETS, {
                order: ['world_clock', 'favourites'],
                hidden: ['available_now', 'quick_actions', 'desk_week'],
            });
            expect(ids(list)).toEqual([
                'world_clock',
                'favourites',
                'colleagues',
            ]);
        });

        it('should use the saved order and leave out removed widgets', () => {
            const list = visibleWidgets(LANDING_WIDGETS, {
                order: ['favourites', 'available_now', 'colleagues'],
                hidden: ['quick_actions', 'desk_week'],
            });
            expect(ids(list)).toEqual([
                'favourites',
                'available_now',
                'colleagues',
            ]);
        });

        it('should put a widget that the layout does not know last', () => {
            const list = visibleWidgets(LANDING_WIDGETS, {
                order: ['colleagues', 'favourites'],
                hidden: ['quick_actions', 'desk_week'],
            });
            expect(ids(list)).toEqual([
                'colleagues',
                'favourites',
                'available_now',
            ]);
        });

        it('should leave out saved widgets that are not available', () => {
            const list = visibleWidgets([favourites, colleagues], {
                order: ['desk_week', 'colleagues', 'colleagues', 'favourites'],
                hidden: [],
            });
            expect(ids(list)).toEqual(['colleagues', 'favourites']);
        });
    });

    it('should save the removed default widgets that are available', () => {
        const focus_timer = LANDING_WIDGETS.find((_) => _.id === 'focus_timer');
        const available = [available_now, favourites, colleagues, focus_timer];
        expect(layoutFor([colleagues, available_now], available)).toEqual({
            order: ['colleagues', 'available_now'],
            hidden: ['favourites'],
        });
    });

    describe('widgetSpans', () => {
        it('should keep the default layout of the page', () => {
            const sizes = default_widgets.map((_) => _.size);
            expect(widgetSpans(sizes)).toEqual([4, 2, 6, 4, 2]);
        });

        it('should give two widgets of one size half a row each', () => {
            expect(widgetSpans(['large', 'large'])).toEqual([3, 3]);
            expect(widgetSpans(['small', 'small', 'large'])).toEqual([3, 3, 6]);
        });

        it('should give a widget with no partner the row', () => {
            expect(widgetSpans(['small', 'full', 'large'])).toEqual([6, 6, 6]);
            expect(widgetSpans(['small', 'large', 'small'])).toEqual([2, 4, 6]);
        });
    });
});
