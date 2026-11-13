import { AuthorisedUserGuard } from '@placeos/components';

import { routes } from '../app/app.routes';

describe('routes', () => {
    it('should require an authorised user for every lazy page', () => {
        const pages = routes.filter((route) => route.loadComponent);
        expect(pages.length).toBeGreaterThan(0);
        for (const page of pages) {
            expect(page.canActivate).toContain(AuthorisedUserGuard);
        }
    });

    it('should send unknown paths to the setup page', () => {
        expect(routes.at(-1)).toEqual({ path: '**', redirectTo: 'bootstrap' });
    });
});
