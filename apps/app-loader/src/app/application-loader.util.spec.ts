import {
    appInitial,
    type ApplicationRestriction,
    buildLauncherApplications,
    faviconUrls,
    isSelfReference,
    redirectPath,
} from './application-loader.util';

describe('application loader utilities', () => {
    describe('buildLauncherApplications', () => {
        it('filters unsupported redirect URIs and sorts by display name', () => {
            const apps = buildLauncherApplications([
                { id: '2', name: 'Zeta', redirect_uri: 'https://example.com/zeta' },
                { id: '1', redirect_uri: 'https://alpha.example.com' },
                { id: '3', name: 'Mail Link', redirect_uri: 'mailto:test@example.com' },
                { id: '5', name: 'Script', redirect_uri: 'javascript:alert(1)' },
                { id: '4', name: 'No Link' },
            ]);

            expect(apps.map((_) => _.name)).toEqual(['alpha.example.com', 'Zeta']);
        });

        it('falls back to the redirect URI for a missing id', () => {
            const [app] = buildLauncherApplications([
                { name: 'Workplace', redirect_uri: 'https://example.com/workplace/' },
            ]);

            expect(app).toEqual({
                id: 'https://example.com/workplace/',
                name: 'Workplace',
                redirect_uri: 'https://example.com/workplace/',
                icon_urls: faviconUrls('https://example.com/workplace/'),
                icon_index: 0,
            });
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
    });

    describe('group restrictions', () => {
        const apps = [
            { id: 'admin', name: 'Admin', redirect_uri: 'https://example.com/admin/' },
            { id: 'public', name: 'Public', redirect_uri: 'https://example.com/public/' },
        ];
        const visibleIds = (
            restrictions: ApplicationRestriction[],
            user_groups: string[] = ['staff'],
        ) => buildLauncherApplications(apps, { restrictions, user_groups }).map((_) => _.id);

        it('hides a restricted app from users outside its groups', () => {
            expect(visibleIds([{ id: 'admin', groups: ['admins'] }])).toEqual(['public']);
        });

        it('shows a restricted app to users in one of its groups', () => {
            expect(
                visibleIds([{ id: 'admin', groups: ['admins', 'staff'] }]),
            ).toEqual(['admin', 'public']);
        });

        it('matches rules by name and by resolved redirect URI', () => {
            expect(visibleIds([{ name: 'Admin', groups: ['admins'] }])).toEqual(['public']);
            // A relative rule URI resolves against the current origin.
            expect(
                buildLauncherApplications(
                    [{ id: 'local', name: 'Local', redirect_uri: `${location.origin}/local/` }],
                    { restrictions: [{ redirect_uri: '/local/', groups: ['admins'] }] },
                ),
            ).toEqual([]);
        });

        it('requires every matcher on a rule to match', () => {
            expect(
                visibleIds([{ id: 'admin', name: 'Other', groups: ['admins'] }]),
            ).toEqual(['admin', 'public']);
        });

        it('ignores rules that have no matcher', () => {
            expect(visibleIds([{ groups: ['admins'] }])).toEqual(['admin', 'public']);
        });

        it('shows an app when any matching rule grants access', () => {
            expect(
                visibleIds([
                    { id: 'admin', groups: ['admins'] },
                    { name: 'Admin', groups: ['staff'] },
                ]),
            ).toEqual(['admin', 'public']);
        });

        it('treats a matching rule with no groups as open to everyone', () => {
            expect(visibleIds([{ id: 'admin', groups: [] }], [])).toEqual([
                'admin',
                'public',
            ]);
        });
    });

    describe('redirectPath', () => {
        it.each([
            ['https://example.com/apps/app/index.html', 'https://example.com/apps/app/'],
            ['https://example.com/apps/app', 'https://example.com/apps/app/'],
            ['https://example.com/apps/app/?x=1#y', 'https://example.com/apps/app/'],
            ['https://example.com', 'https://example.com/'],
            ['/apps/app/', `${location.origin}/apps/app/`],
            ['http://[invalid', '/'],
        ])('maps %s to %s', (uri, expected) => {
            expect(redirectPath(uri)).toBe(expected);
        });
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

    it('detects self-referential links using the application base path', () => {
        const current = 'https://example.com/apps/app-loader/index.html#fragment';
        expect(isSelfReference('https://example.com/apps/app-loader/', current)).toBe(true);
        expect(isSelfReference('https://example.com/apps/app-loader-v2/', current)).toBe(
            false,
        );
        // The same path on another origin is a different application.
        expect(isSelfReference('https://other.example.com/apps/app-loader/', current)).toBe(
            false,
        );
        expect(isSelfReference(undefined, current)).toBe(false);
    });

    it('returns an uppercase fallback initial', () => {
        expect(appInitial(' workplace ')).toBe('W');
        expect(appInitial('')).toBe('?');
        expect(appInitial('   ')).toBe('?');
    });
});
