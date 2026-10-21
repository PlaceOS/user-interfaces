import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import { setCurrentUser, SettingsService, StaffUser } from '@placeos/common';
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
});
