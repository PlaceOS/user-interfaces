import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { EMPTY_USER, setCurrentUser, SettingsService, StaffUser } from '@placeos/common';
import {
    authority,
    PlaceApplication,
    type PlaceAuthority,
    queryApplications,
    registerMockEndpoint,
    setAPI_Key,
    setup,
} from '@placeos/ts-client';
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

/** Resolve `queryApplications` with the given applications. */
function respondWith(apps: Partial<PlaceApplication>[]) {
    vi.mocked(queryApplications).mockResolvedValue({
        total: apps.length,
        next: () => null,
        data: apps.map((_) => new PlaceApplication(_)),
    });
}

/** Return the given values from the settings mock, by key. */
function useSettings(values: Record<string, unknown>) {
    settings_mock.get.mockImplementation((key: string) => values[key]);
}

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
        useSettings({ composer: {}, mock: false, 'app.application_restrictions': [] });
        vi.mocked(authority).mockReturnValue({ id: 'auth-1' } as PlaceAuthority);
        respondWith([]);
        vi.mocked(setup).mockResolvedValue(undefined);
        vi.mocked(setAPI_Key).mockReturnValue(undefined);
        setCurrentUser(new StaffUser({ email: 'user@example.com', groups: [] }));
        window.history.replaceState({}, '', '/');
        spectator = create_component();
    });

    afterEach(() => {
        window.history.replaceState({}, '', '/');
        // `setupPlace` stores the mock mode choice in local storage.
        localStorage.removeItem('mock');
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
        respondWith([
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
        ]);

        await runInit();

        expect(queryApplications).toHaveBeenCalledWith({ authority_id: 'auth-1' });
        expect(spectator.component.loading()).toBe(false);
        const tiles = spectator.queryAll('.app-grid a');
        expect(tiles.length).toBe(2);
        const names = spectator.queryAll('.app-name').map((_) => _.textContent?.trim());
        expect(names).toEqual(['Concierge', 'Workplace']);
    });

    it('links each tile to its app root, without the oauth-resp.html page', async () => {
        respondWith([
            {
                id: 'workplace',
                name: 'Workplace',
                redirect_uri: 'https://example.com/workplace/oauth-resp.html',
            },
        ]);

        await runInit();

        const tile = spectator.query('.app-grid a');
        expect(tile?.getAttribute('href')).toBe('https://example.com/workplace/');
    });

    it('hides the tile that points back to the current page', async () => {
        window.history.replaceState({}, '', '/app-loader/?x=1');
        respondWith([
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
        ]);

        await runInit();

        const names = spectator.queryAll('.app-name').map((_) => _.textContent?.trim());
        expect(names).toEqual(['Workplace']);
    });

    it('hides applications restricted to groups the user is not in', async () => {
        useSettings({
            composer: {},
            'app.application_restrictions': [{ id: 'admin', groups: ['admins'] }],
        });
        setCurrentUser(new StaffUser({ email: 'u@example.com', groups: ['staff'] }));
        respondWith([
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
        ]);

        await runInit();

        const names = spectator.queryAll('.app-name').map((_) => _.textContent?.trim());
        expect(names).toEqual(['Workplace']);
    });

    it('waits for the signed-in user before applying application restrictions', async () => {
        useSettings({
            composer: {},
            'app.application_restrictions': [{ id: 'admin', groups: ['admins'] }],
        });
        respondWith([
            { id: 'admin', name: 'Admin', redirect_uri: 'https://example.com/admin/' },
            { id: 'workplace', name: 'Workplace', redirect_uri: 'https://example.com/workplace/' },
        ]);
        // The store holds the empty placeholder until the user request returns
        setCurrentUser(EMPTY_USER);
        settings_mock.initialised.next(true);

        const init = spectator.component.ngOnInit();
        await new Promise((resolve) => setTimeout(resolve, 0));
        setCurrentUser(new StaffUser({ email: 'admin@example.com', groups: ['admins'] }));
        await init;

        const names = spectator.component.applications().map((_) => _.name);
        expect(names).toEqual(['Admin', 'Workplace']);
    });

    it('shows an error and skips the query when the signed-in user never loads', async () => {
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
        setCurrentUser(EMPTY_USER);
        settings_mock.initialised.next(true);
        vi.useFakeTimers();
        try {
            const init = spectator.component.ngOnInit();
            await vi.advanceTimersByTimeAsync(30_000);
            await init;
        } finally {
            vi.useRealTimers();
        }

        expect(queryApplications).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
        expect(spectator.component.error()).toBe(
            'Unable to load applications right now.',
        );
    });

    it('shows an empty-state message when no applications are configured', async () => {
        await runInit();

        expect(spectator.query('section')).toHaveText(
            'No applications configured for this domain.',
        );
    });

    it('shows the empty-state message when there is no active authority', async () => {
        vi.mocked(authority).mockReturnValue(undefined);

        await runInit();

        expect(queryApplications).not.toHaveBeenCalled();
        expect(spectator.query('section')).toHaveText(
            'No applications configured for this domain.',
        );
    });

    it.each([
        ['setup', () => vi.mocked(setup).mockRejectedValue(new Error('boom'))],
        [
            'the application query',
            () => vi.mocked(queryApplications).mockRejectedValue(new Error('boom')),
        ],
    ])('surfaces an error message when %s fails', async (_, fail) => {
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
        fail();

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

    it('sets up PlaceOS with the composer settings of the app', async () => {
        useSettings({
            composer: {
                use_domain: true,
                domain: 'placeos.example.com',
                port: '8443',
                protocol: 'https:',
            },
            mock: false,
        });

        await runInit();

        expect(setup).toHaveBeenCalledWith(
            expect.objectContaining({
                host: 'placeos.example.com:8443',
                auth_uri: 'https://placeos.example.com:8443/auth/oauth/authorize',
                mock: false,
            }),
        );
    });

    it.each([
        ['the mock setting is on', { composer: {}, mock: true }, '/'],
        ['the page URL asks for it', { composer: {}, mock: false }, '/?mock=true'],
    ])('sets up PlaceOS in mock mode when %s', async (_, values, url) => {
        useSettings(values);
        window.history.replaceState({}, '', url);

        await runInit();
        // The mock data module loads lazily, so setup runs a few ticks later.
        await vi.waitFor(() => expect(spectator.component.loading()).toBe(false));

        expect(spectator.component.error()).toBe('');
        expect(setup).toHaveBeenCalledWith(expect.objectContaining({ mock: true }));
        // `setupPlace` also reads the URL, so check the mock endpoints exist first.
        expect(vi.mocked(registerMockEndpoint).mock.invocationCallOrder[0]).toBeLessThan(
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
