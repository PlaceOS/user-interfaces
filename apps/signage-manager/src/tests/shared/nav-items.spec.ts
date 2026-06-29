import { filterManageNavItems } from '../../app/shared/nav-items';

describe('filterManageNavItems', () => {
    it('hides group management when the user cannot manage groups', () => {
        expect(
            filterManageNavItems(false).some(
                (item) => item.route === '/groups',
            ),
        ).toBe(false);
    });

    it('shows group management when the user can manage groups', () => {
        expect(
            filterManageNavItems(true).some((item) => item.route === '/groups'),
        ).toBe(true);
    });
});
