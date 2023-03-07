import { MatDialog } from '@angular/material/dialog';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { Booking, BookingFormService } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { NewDeskFlowSuccessComponent } from 'apps/workplace/src/app/book/new-desk-flow/new-desk-flow-success.component';
import { MockProvider } from 'ng-mocks';

describe('NewDeskFlowSuccessComponent', () => {
    let spectator: SpectatorRouting<NewDeskFlowSuccessComponent>;
    const createComponent = createRoutingFactory({
        component: NewDeskFlowSuccessComponent,
        providers: [
            MockProvider(BookingFormService, { last_success: {} as any }),
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        declarations: [],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show assets if available', () => {
        expect('[assets]').not.toExist();
        spectator.inject(BookingFormService).last_success = new Booking({
            extension_data: { assets: [{ id: '1' }] },
        });
        spectator.detectChanges();
        expect('[assets]').toExist();
    });

    it('should resolve location', () => {
        spectator.inject(BookingFormService).last_success = new Booking({
            extension_data: { booking_asset: { zone: { id: '1' } } },
        });
        expect(spectator.component.location).toBe(', 1');
    });

    it('should navigate to root when done', () => {
        expect('[name="desk-confirm-continue"]').toExist();
        expect('[name="desk-confirm-continue"]').toHaveAttribute('href', '/');
    });
});
