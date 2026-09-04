import {
    SIDEBAR_MAX,
    SIDEBAR_MIN,
    clampSidebar,
    nextSidebarWidth,
} from '../app/editor/constants';

describe('sidebar sizing', () => {
    it('keeps widths inside the allowed range', () => {
        expect(clampSidebar(300)).toBe(300);
        expect(clampSidebar(10)).toBe(SIDEBAR_MIN);
        expect(clampSidebar(9999)).toBe(SIDEBAR_MAX);
        expect(clampSidebar(240.6)).toBe(241);
    });

    it('grows the left sidebar when the handle moves right', () => {
        expect(nextSidebarWidth(256, 40, 'left')).toBe(296);
        expect(nextSidebarWidth(256, -40, 'left')).toBe(216);
    });

    it('inverts the delta for the right sidebar', () => {
        expect(nextSidebarWidth(320, 40, 'right')).toBe(280);
        expect(nextSidebarWidth(320, -40, 'right')).toBe(360);
    });

    it('clamps while dragging past the limits', () => {
        expect(nextSidebarWidth(SIDEBAR_MIN, -500, 'left')).toBe(SIDEBAR_MIN);
        expect(nextSidebarWidth(SIDEBAR_MAX, 500, 'left')).toBe(SIDEBAR_MAX);
    });
});
