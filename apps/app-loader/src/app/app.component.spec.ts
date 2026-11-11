import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { setCurrentUser, SettingsService } from '@placeos/common';
import { authority, queryApplications, setAPI_Key, setup } from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';

import { AppComponent } from './app.component';
import { LauncherApplication } from './application-loader.util';

// Only the external `@placeos/ts-client` package can be intercepted under the
// zoneless unit-test builder; workspace modules (`@placeos/common`) run for
// real. `setupPlace()` ultimately calls `setup()`, so stubbing `setup` keeps
// the real setup flow from touching the network. The current user is seeded
// through the `setCurrentUser` test seam rather than mocking the store.
vi.mock('@placeos/ts-client', { spy: true });

const settings_mock = {
    initialised: new BehaviorSubject<boolean>(false),
    get: vi.fn(),
};

function makeApp(overrides: Partial<LauncherApplication> = {}): LauncherApplication {
    return {
        id: 'app-1',
        name: 'Workplace',
        redirect_uri: 'https://example.com/workplace/',
        icon_urls: ['https://example.com/a.svg', 'https://example.com/b.png'],
        icon_index: 0,
        ...overrides,
    };
}

describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;

    const create_component = createComponentFactory({
        component: AppComponent,
        componentProviders: [{ provide: SettingsService, useValue: settings_mock }],
        detectChanges: false,
    });

    /** Drive ngOnInit to completion by unblocking the settings gate. */
    async function runInit() {
        settings_mock.initialised.next(true);
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        await new Promise((resolve) => setTimeout(resolve, 0));
        spectator.detectChanges();
    }

    beforeEach(() => {
        vi.clearAllMocks();
        settings_mock.initialised = new BehaviorSubject<boolean>(false);
        settings_mock.get.mockImplementation((key: string) => {
            if (key === 'composer') return {};
            if (key === 'mock') return false;
            if (key === 'app.application_restrictions') return [];
            return undefined;
        });
        vi.mocked(authority).mockReturnValue({ id: 'auth-1' } as any);
        vi.mocked(queryApplications).mockResolvedValue({ data: [] } as any);
        vi.mocked(setup).mockResolvedValue(undefined);
        vi.mocked(setAPI_Key).mockReturnValue(undefined);
        setCurrentUser({ id: 'user-1', groups: [] } as any);
        window.history.replaceState({}, '', '/');
        spectator = create_component();
    });

    afterEach(() => {
        window.history.replaceState({}, '', '/');
    });

    it('shows the loading spinner before applications resolve', () => {
        spectator.detectChanges();

        expect(spectator.component.loading()).toBe(true);
        expect(spectator.query('[aria-live="polite"]')).toHaveText(
            'Loading applications...',
        );
        expect(spectator.query('.app-grid')).toBeNull();
    });

    it('renders a launcher tile per resolved application, sorted by name', async () => {
        vi.mocked(queryApplications).mockResolvedValue({
            data: [
                {
                    id: 'workplace',
                    name: 'Workplace',
                    redirect_uri: 'https://example.com/workplace/',
                },
                {
                    id: 'concierge',
                    name: 'Concierge',
                    redirect_uri: 'https://example.com/concierge/',
                },
            ],
        } as any);

        await runInit();

        expect(spectator.component.loading()).toBe(false);
        const tiles = spectator.queryAll('.app-grid a');
        expect(tiles.length).toBe(2);
        const names = spectator.queryAll('.app-name').map((_) => _.textContent?.trim());
        expect(names).toEqual(['Concierge', 'Workplace']);
    });

    it('links each tile to its app root, without the oauth-resp.html page', async () => {
        vi.mocked(queryApplications).mockResolvedValue({
            data: [
                {
                    id: 'workplace',
                    name: 'Workplace',
                    redirect_uri: 'https://example.com/workplace/oauth-resp.html',
                },
            ],
        } as any);

        await runInit();

        const tile = spectator.query('.app-grid a');
        expect(tile?.getAttribute('href')).toBe('https://example.com/workplace/');
    });

    it('hides the tile that points back to the current page', async () => {
        window.history.replaceState({}, '', '/app-loader/?x=1');
        vi.mocked(queryApplications).mockResolvedValue({
            data: [
                {
                    id: 'self',
                    name: 'App Loader',
                    redirect_uri: `${location.origin}/app-loader/oauth-resp.html`,
                },
                {
                    id: 'workplace',
                    name: 'Workplace',
                    redirect_uri: 'https://example.com/workplace/',
                },
            ],
        } as any);

        await runInit();

        const names = spectator.queryAll('.app-name').map((_) => _.textContent?.trim());
        expect(names).toEqual(['Workplace']);
    });

    it('hides applications restricted to groups the user is not in', async () => {
        settings_mock.get.mockImplementation((key: string) => {
            if (key === 'composer') return {};
            if (key === 'mock') return false;
            if (key === 'app.application_restrictions')
                return [{ id: 'admin', groups: ['admins'] }];
            return undefined;
        });
        setCurrentUser({ id: 'u', groups: ['staff'] } as any);
        vi.mocked(queryApplications).mockResolvedValue({
            data: [
                {
                    id: 'admin',
                    name: 'Admin',
                    redirect_uri: 'https://example.com/admin/',
                },
                {
                    id: 'workplace',
                    name: 'Workplace',
                    redirect_uri: 'https://example.com/workplace/',
                },
            ],
        } as any);

        await runInit();

        const names = spectator.queryAll('.app-name').map((_) => _.textContent?.trim());
        expect(names).toEqual(['Workplace']);
    });

    it('shows an empty-state message when no applications are configured', async () => {
        vi.mocked(queryApplications).mockResolvedValue({ data: [] } as any);

        await runInit();

        expect(spectator.component.applications().length).toBe(0);
        expect(spectator.query('section')).toHaveText(
            'No applications configured for this domain.',
        );
    });

    it('shows the empty-state message when there is no active authority', async () => {
        vi.mocked(authority).mockReturnValue(null);

        await runInit();

        expect(queryApplications).not.toHaveBeenCalled();
        expect(spectator.query('section')).toHaveText(
            'No applications configured for this domain.',
        );
    });

    it('surfaces an error message when setup fails', async () => {
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
        vi.mocked(setup).mockRejectedValue(new Error('boom'));

        await runInit();

        expect(spectator.component.loading()).toBe(false);
        expect(spectator.component.error()).toBe(
            'Unable to load applications right now.',
        );
        expect(spectator.query('section')).toHaveText(
            'Unable to load applications right now.',
        );
    });

    it('registers an x-api-key from the query string before setup', async () => {
        window.history.replaceState({}, '', '/?x-api-key=secret-key');

        await runInit();

        expect(setAPI_Key).toHaveBeenCalledWith('secret-key');
        expect(vi.mocked(setAPI_Key).mock.invocationCallOrder[0]).toBeLessThan(
            vi.mocked(setup).mock.invocationCallOrder[0],
        );
    });

    it('does not register an api key when none is provided', async () => {
        await runInit();

        expect(setAPI_Key).not.toHaveBeenCalled();
    });

    describe('icon fallback', () => {
        function renderApps(apps: LauncherApplication[]) {
            spectator.component.loading.set(false);
            spectator.component.applications.set(apps);
            spectator.detectChanges();
        }

        function failImage(index: number) {
            spectator.queryAll('.app-grid a')[index].querySelector('img')!.dispatchEvent(
                new Event('error'),
            );
            spectator.detectChanges();
        }

        it('loads the next icon only for the tile whose image failed', () => {
            renderApps([makeApp({ id: 'a' }), makeApp({ id: 'b' })]);

            failImage(0);

            const sources = spectator
                .queryAll('.app-grid img')
                .map((_) => _.getAttribute('src'));
            expect(sources).toEqual([
                'https://example.com/b.png',
                'https://example.com/a.svg',
            ]);
        });

        it('shows the application initial once every icon has failed', () => {
            renderApps([makeApp({ name: 'Delta' })]);

            failImage(0);
            failImage(0);

            expect(spectator.query('.app-grid img')).toBeNull();
            expect(spectator.query('.app-grid span')).toHaveText('D');
            // Further errors cannot push the index past the candidate list.
            spectator.component.loadNextIcon(spectator.component.applications()[0]);
            expect(spectator.component.applications()[0].icon_index).toBe(2);
        });
    });
});
