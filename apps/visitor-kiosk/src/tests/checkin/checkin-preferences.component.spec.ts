import { signal } from '@angular/core';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { CateringItem, OrganisationService } from '@placeos/common';
import { asset_categories, asset_types, assets } from '@placeos/ts-client';
import { mockPage } from '@placeos/ts-client/compat';
import { MockProvider } from 'ng-mocks';

import { type StubApi, startStubApi } from '@placeos/common/tests';
import { CheckinPreferencesComponent } from '../../app/checkin/checkin-preferences.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

// Stub the guest catering calls and the asset operations of the menu
vi.mock('@placeos/ts-client', { spy: true });

const CATERING_PATH = '/api/staff/v1/guests/:email/catering';

/** Unsigned JWT with the visitor details of a check-in link */
function visitorJwt() {
    const payload = { u: { e: 'v@b.com', r: ['event-1', '', 'bld-1'] } };
    return `header.${btoa(JSON.stringify(payload))}.signature`;
}

/** Catering menu of a building, stored as assets of a hidden category */
function mockMenu(items: { id: string; tags: string[] }[]) {
    vi.mocked(asset_categories.query).mockResolvedValue(
        mockPage({
            data: [{ id: 'cat-1', name: '_CATERING_', hidden: true }],
        } as never),
    );
    vi.mocked(asset_types.query).mockResolvedValue(
        mockPage({
            data: [
                { id: 'type-1', name: 'CATERING:Cafe', category_id: 'cat-1' },
            ],
        } as never),
    );
    vi.mocked(assets.query).mockResolvedValue(
        mockPage({
            data: items.map(({ id, tags }) => ({
                id,
                name: id,
                asset_type_id: 'type-1',
                other_data: { tags },
            })),
        } as never),
    );
}

describe('CheckinPreferencesComponent', () => {
    let spectator: SpectatorRouting<CheckinPreferencesComponent>;
    const active_building = signal<{ id: string } | null>(null);
    const createComponent = createRoutingFactory({
        component: CheckinPreferencesComponent,
        detectChanges: false,
        providers: [
            {
                provide: CheckinStateService,
                useValue: {
                    event: signal({ id: 'event-1', asset_id: 'v@b.com' }),
                    loadGuestAndEvent: vi.fn(async () => null),
                    setError: vi.fn(),
                },
            },
            MockProvider(OrganisationService, {
                active_building,
            } as never),
        ],
    });

    let api: StubApi;
    /** Gives the saved beverage of the visitor */
    const catering_get = vi.fn<() => unknown>();
    /** Saves the beverage of the visitor */
    const catering_set = vi.fn<(body: unknown) => unknown>();

    beforeEach(() => {
        catering_get.mockReset().mockReturnValue(null);
        catering_set.mockReset().mockReturnValue(null);
        api = startStubApi();
        api.on('GET', CATERING_PATH, catering_get);
        api.on('PATCH', CATERING_PATH, (request) => catering_set(request.body));
    });

    afterEach(() => vi.unstubAllGlobals());

    it('should keep the form locked until the saved beverage loads', async () => {
        let load_saved: (value: unknown) => void = () => undefined;
        catering_get.mockReturnValue(
            new Promise((resolve) => (load_saved = resolve)),
        );
        spectator = createComponent();
        spectator.detectChanges();
        spectator.component.menu.set([new CateringItem({ name: 'Tea' })]);
        expect(spectator.component.loading()).toBe(true);
        load_saved(null);
        await vi.waitFor(() =>
            expect(spectator.component.loading()).toBe(false),
        );
    });

    describe('with the saved beverage loaded', () => {
        beforeEach(() => {
            vi.clearAllMocks();
            // The link's building loads a menu, and the catering types stay
            // cached for this file. Give every test the same category and type.
            mockMenu([{ id: 'tea', tags: ['Drink'] }]);
            active_building.set(null);
        });

        it('saves the chosen beverage for the visit', async () => {
            spectator = createComponent();
            spectator.component.beverage.set(
                new CateringItem({ id: 'tea', name: 'Tea' }),
            );

            await spectator.component.update();

            expect(catering_set).toHaveBeenCalledWith(
                expect.objectContaining({ id: 'tea', quantity: 1 }),
            );
            const save = api.requests.find((r) => r.method === 'PATCH');
            expect(save?.url.pathname).toBe(
                '/api/staff/v1/guests/v%40b.com/catering',
            );
            expect(save?.url.searchParams.get('booking_id')).toBe('event-1');
            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/welcome',
            ]);
        });

        it('continues without saving when no beverage is chosen', async () => {
            spectator = createComponent();

            await spectator.component.update();

            expect(catering_set).not.toHaveBeenCalled();
            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/welcome',
            ]);
        });

        it('loads the visitor from the token in the link', async () => {
            const jwt = visitorJwt();
            spectator = createComponent({ queryParams: { token: jwt } });
            spectator.detectChanges();

            await vi.waitFor(() =>
                expect(
                    spectator.inject(CheckinStateService).loadGuestAndEvent,
                ).toHaveBeenCalledWith('v@b.com', 'event-1'),
            );
            expect(api.fake.session.useToken).toHaveBeenCalledWith(
                jwt,
                undefined,
            );
        });

        it('offers only the drinks on the menu of the kiosk building', async () => {
            mockMenu([
                { id: 'tea', tags: ['Drink'] },
                { id: 'cake', tags: ['Food'] },
                { id: 'juice', tags: ['beverage'] },
            ]);
            active_building.set({ id: 'bld-1' });
            spectator = createComponent();
            spectator.detectChanges();

            await vi.waitFor(() =>
                expect(spectator.component.menu().map((_) => _.id)).toEqual([
                    'juice',
                    'tea',
                ]),
            );
            expect(assets.query).toHaveBeenCalledWith(
                expect.objectContaining({ zone_id: 'bld-1' }),
            );
            expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
        });

        it('returns to the welcome page when the menu has no drinks', async () => {
            mockMenu([{ id: 'cake', tags: ['Food'] }]);
            active_building.set({ id: 'bld-1' });
            spectator = createComponent();
            spectator.detectChanges();

            await vi.waitFor(() =>
                expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                    '/welcome',
                ]),
            );
            // The menu loaded, but had nothing to drink
            expect(assets.query).toHaveBeenCalled();
            expect(spectator.component.menu()).toEqual([]);
        });

        it('selects the beverage the visitor saved before', async () => {
            catering_get.mockReturnValue({ id: 'coffee', name: 'Coffee' });
            spectator = createComponent();
            spectator.detectChanges();

            await vi.waitFor(() =>
                expect(spectator.component.has_beverage()).toBe(true),
            );
            expect(spectator.component.beverage().id).toBe('coffee');
        });

        it('uses the building from the token in the link', async () => {
            spectator = createComponent({
                queryParams: { token: visitorJwt() },
            });
            spectator.detectChanges();

            await spectator.fixture.whenStable();
            expect(spectator.component.bld_id()).toBe('bld-1');
        });

        it('shows the error page when the visitor in the link is not found', async () => {
            spectator = createComponent({
                queryParams: { token: visitorJwt() },
            });
            const state = spectator.inject(CheckinStateService);
            vi.mocked(state.loadGuestAndEvent).mockRejectedValueOnce(
                new Error('Not found'),
            );
            spectator.detectChanges();

            await vi.waitFor(() =>
                expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                    '/checkin',
                    'error',
                ]),
            );
            expect(state.setError).toHaveBeenCalledWith(
                expect.stringContaining('Unable to find visitor'),
            );
        });
    });
});
