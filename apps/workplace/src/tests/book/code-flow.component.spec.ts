import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import { EventFormService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';
import {SettingsService  } from '@placeos/common';

import { BookCodeFlowComponent } from '../../app/book/code-flow.component';

describe('BookCodeFlowComponent', () => {
    let spectator: SpectatorRouting<BookCodeFlowComponent>;
    const createComponent = createRoutingFactory({
        component: BookCodeFlowComponent,
        providers: [
            MockProvider(Router, { navigate: vi.fn() }),
            MockProvider(EventFormService),
            MockProvider(BookingFormService),
            MockProvider(SettingsService, { get: vi.fn() })
        ],
        imports: [FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should carry scanned QR code params through to the route', () => {
        const router = spectator.inject(Router);
        (spectator.component as any).handleQrCode(
            'https://place.tech/workplace/#/book/code?asset_id=desk-1',
        );
        expect(router.navigate).toHaveBeenCalledWith(['/book/code'], {
            queryParams: { asset_id: 'desk-1' },
        });
    });
});
