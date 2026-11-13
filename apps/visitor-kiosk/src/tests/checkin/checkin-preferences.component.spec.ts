import { signal } from '@angular/core';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { CateringItem, OrganisationService } from '@placeos/common';
import {
    get,
    patch,
    queryAssetCategories,
    queryAssets,
    queryAssetTypes,
    setToken,
} from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

import { CheckinPreferencesComponent } from '../../app/checkin/checkin-preferences.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

// Workspace modules cannot be intercepted, so stub the API client they call
vi.mock('@placeos/ts-client', { spy: true });

/** Unsigned JWT with the visitor details of a check-in link */
function visitorJwt() {
    const payload = { u: { e: 'v@b.com', r: ['event-1', '', 'bld-1'] } };
    return `header.${btoa(JSON.stringify(payload))}.signature`;
}

/** Catering menu of a building, stored as assets of a hidden category */
function mockMenu(items: { id: string; tags: string[] }[]) {
    vi.mocked(queryAssetCategories).mockResolvedValue({
        data: [{ id: 'cat-1', name: '_CATERING_', hidden: true }],
    } as never);
    vi.mocked(queryAssetTypes).mockResolvedValue({
        data: [{ id: 'type-1', name: 'CATERING:Cafe', category_id: 'cat-1' }],
    } as never);
    vi.mocked(queryAssets).mockResolvedValue({
        data: items.map(({ id, tags }) => ({
            id,
            name: id,
            asset_type_id: 'type-1',
            other_data: { tags },
        })),
    } as never);
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

    it('should keep the form locked until the saved beverage loads', async () => {
        let load_saved: (value: unknown) => void = () => undefined;
        vi.mocked(get).mockReturnValue(
            new Promise((resolve) => (load_saved = resolve)) as any,
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
            vi.mocked(get).mockResolvedValue(null);
            vi.mocked(patch).mockResolvedValue(null);
            vi.mocked(setToken).mockImplementation(() => undefined);
            active_building.set(null);
        });

        it('saves the chosen beverage for the visit', async () => {
            spectator = createComponent();
            spectator.component.beverage.set(
                new CateringItem({ id: 'tea', name: 'Tea' }),
            );

            await spectator.component.update();

            expect(patch).toHaveBeenCalledWith(
                expect.stringContaining(
                    'v%40b.com/catering?booking_id=event-1',
                ),
                expect.objectContaining({ id: 'tea', quantity: 1 }),
            );
            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/welcome',
            ]);
        });

        it('continues without saving when no beverage is chosen', async () => {
            spectator = createComponent();

            await spectator.component.update();

            expect(patch).not.toHaveBeenCalled();
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
            expect(setToken).toHaveBeenCalledWith(jwt);
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
            expect(queryAssets).toHaveBeenCalledWith(
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
            expect(queryAssets).toHaveBeenCalled();
            expect(spectator.component.menu()).toEqual([]);
        });

        it('selects the beverage the visitor saved before', async () => {
            vi.mocked(get).mockResolvedValue({
                id: 'coffee',
                name: 'Coffee',
            } as never);
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
