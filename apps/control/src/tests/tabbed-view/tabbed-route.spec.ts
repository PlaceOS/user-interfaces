import { UrlSegment } from '@angular/router';

import { tabbedRouteMatcher } from '../../app/tabbed-view/tabbed-route';

/** URL segments for the given path */
const segments = (path: string) =>
    path.split('/').map((p) => new UrlSegment(p, {}));

describe('tabbedRouteMatcher', () => {
    it('should match a system with and without a tab', () => {
        expect(
            tabbedRouteMatcher(segments('tabbed/sys-1'))?.posParams?.['system']
                .path,
        ).toBe('sys-1');
        const match = tabbedRouteMatcher(segments('tabbed/sys-1/vc'));
        expect(match?.posParams?.['system'].path).toBe('sys-1');
        expect(match?.posParams?.['tab'].path).toBe('vc');
    });

    it('should not match other paths', () => {
        expect(tabbedRouteMatcher(segments('tabbed'))).toBeNull();
        expect(tabbedRouteMatcher(segments('panel/sys-1'))).toBeNull();
        expect(tabbedRouteMatcher(segments('tabbed/a/b/c'))).toBeNull();
    });
});
