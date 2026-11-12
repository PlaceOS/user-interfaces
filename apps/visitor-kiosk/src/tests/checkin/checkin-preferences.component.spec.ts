import { signal } from '@angular/core';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { CateringItem, OrganisationService } from '@placeos/common';
import { get, patch, setToken } from '@placeos/ts-client';
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

describe('CheckinPreferencesComponent', () => {
    let spectator: SpectatorRouting<CheckinPreferencesComponent>;
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
                active_building: signal(null),
            }),
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
