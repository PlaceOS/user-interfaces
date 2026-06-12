import {
    appInitial,
    buildLauncherApplications,
    faviconUrls,
    isSelfReference,
    redirectPath,
} from './application-loader.util';

describe('application loader utilities', () => {
    it('filters unsupported redirect URIs and sorts by display name', () => {
        const apps = buildLauncherApplications([
            {
                id: '2',
                name: 'Zeta',
                redirect_uri: 'https://example.com/zeta',
            },
            {
                id: '1',
                redirect_uri: 'https://alpha.example.com',
            },
            {
                id: '3',
                name: 'Mail Link',
                redirect_uri: 'mailto:test@example.com',
            },
        ]);

        expect(apps.map((_) => _.name)).toEqual([
            'alpha.example.com',
            'Zeta',
        ]);
    });

    it('filters the current application out of the list', () => {
        const apps = buildLauncherApplications(
            [
                {
                    id: 'self',
                    name: 'App Loader',
                    redirect_uri: 'https://example.com/app-loader/',
                },
                {
                    id: 'workplace',
                    name: 'Workplace',
                    redirect_uri: 'https://example.com/workplace/',
                },
            ],
            { current_uri: 'https://example.com/app-loader/index.html?x=1' },
        );

        expect(apps.map((_) => _.id)).toEqual(['workplace']);
    });

    it('applies matching group restrictions to app visibility', () => {
        const apps = buildLauncherApplications(
            [
                {
                    id: 'public',
                    name: 'Public App',
                    redirect_uri: 'https://example.com/public/',
                },
                {
                    id: 'admin',
                    name: 'Admin App',
                    redirect_uri: 'https://example.com/admin/',
                },
            ],
            {
                user_groups: ['staff'],
                restrictions: [
                    { id: 'admin', groups: ['admins'] },
                    { id: 'public', groups: [] },
                ],
            },
        );

        expect(apps.map((_) => _.id)).toEqual(['public']);
    });

    it('builds favicon candidates from the application path', () => {
        expect(faviconUrls('https://example.com/apps/workplace')).toEqual([
            'https://example.com/apps/workplace/assets/favicon.svg',
            'https://example.com/apps/workplace/assets/favicon.png',
            'https://example.com/apps/workplace/assets/favicon.jpg',
            'https://example.com/apps/workplace/assets/favicon.ico',
            'https://example.com/apps/workplace/favicon.ico',
        ]);
    });

    it('keeps file paths rooted to the containing directory', () => {
        expect(redirectPath('https://example.com/apps/app/index.html')).toBe(
            'https://example.com/apps/app/',
        );
    });

    it('detects self-referential links using the application base path', () => {
        expect(
            isSelfReference(
                'https://example.com/apps/app-loader/',
                'https://example.com/apps/app-loader/index.html#fragment',
            ),
        ).toBe(true);
    });

    it('returns an uppercase fallback initial', () => {
        expect(appInitial(' workplace ')).toBe('W');
        expect(appInitial('')).toBe('?');
    });
});
