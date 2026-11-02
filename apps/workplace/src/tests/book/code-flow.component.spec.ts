import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import {
    OrganisationService,
    setCurrentUser,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

import { BookCodeFlowComponent } from '../../app/book/code-flow.component';

describe('BookCodeFlowComponent', () => {
    let spectator: SpectatorRouting<BookCodeFlowComponent>;
    const createComponent = createRoutingFactory({
        component: BookCodeFlowComponent,
        providers: [
            MockProvider(Router, { navigate: vi.fn() }),
            MockProvider(EventFormService),
            MockProvider(BookingFormService),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
        imports: [FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should carry scanned QR code params through to the route', () => {
        const router = spectator.inject(Router);
        (spectator.component as any).handleQrCode(
            'https://place.tech/workplace/#/book/code?asset_id=desk-1',
        );
        expect(router.navigate).toHaveBeenCalledWith(['/book/code'], {
            queryParams: { asset_id: 'desk-1' },
        });
    });

    it('should report the wrong resource when the current booking is for another desk', async () => {
        setCurrentUser(new StaffUser({ id: 'me', email: 'me@test.com' }));
        vi.mocked(ts_client.get).mockImplementation(
            () => Promise.resolve([{ id: 'b-1', asset_id: 'desk-2' }]) as any,
        );
        const router = spectator.inject(Router);

        await (spectator.component as any)._checkinBooking('desk-1');

        expect(router.navigate).toHaveBeenCalledWith(
            ['/book', 'code', 'error'],
            { queryParams: { type: 'wrong_resource', asset_id: 'desk-1' } },
        );
    });

    it('should check in to a desk asset booking from a code with the original desk id', async () => {
        setCurrentUser(new StaffUser({ id: 'me', email: 'me@test.com' }));
        vi.mocked(spectator.inject(SettingsService).get).mockImplementation(
            (key: string) =>
                key === 'app.desks.use_assets' ? true : undefined,
        );
        vi.spyOn(
            spectator.inject(OrganisationService),
            'organisation',
            'get',
        ).mockReturnValue({ id: 'org-1' } as any);
        const page = (data: any[]) =>
            Promise.resolve({ data, total: data.length, next: () => null });
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
            page([{ id: 'cat-1', name: '_DESKS_' }]) as any,
        );
        vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
            page([{ id: 'type-1', name: '_DESKS_' }]) as any,
        );
        // the booked desk can be in any building, so search the org
        vi.mocked(ts_client.queryAssets).mockImplementation(
            (query: any) =>
                page(
                    query.zones === 'org-1'
                        ? [
                              {
                                  id: 'asset-1',
                                  zone_id: 'level-1',
                                  map_id: 'desk-1',
                              },
                          ]
                        : [],
                ) as any,
        );
        vi.mocked(ts_client.get).mockImplementation(
            () => Promise.resolve([{ id: 'b-1', asset_id: 'asset-1' }]) as any,
        );
        vi.mocked(ts_client.post).mockResolvedValue({} as any);
        const router = spectator.inject(Router);

        await (spectator.component as any)._checkinBooking('desk-1');

        expect(router.navigate).toHaveBeenCalledWith([
            '/book',
            'code',
            'success',
        ]);
    });
});
