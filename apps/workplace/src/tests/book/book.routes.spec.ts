import { ROUTES } from '../../app/book/book.routes';

describe('booking routes', () => {
    const children = ROUTES[0].children || [];

    it('redirects legacy space booking links to the meeting flow', () => {
        expect(children).toContainEqual({
            path: 'spaces',
            redirectTo: 'meeting/form',
            pathMatch: 'full',
        });
        expect(children).toContainEqual({
            path: 'spaces/:step',
            redirectTo: 'meeting/:step',
        });
    });

    it('uses an Angular wildcard route for unknown booking links', () => {
        expect(children.at(-1)).toEqual({
            path: '**',
            redirectTo: 'meeting/form',
        });
    });
});
