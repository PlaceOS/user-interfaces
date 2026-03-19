import { FormGroup } from '@angular/forms';
import { Booking } from '@placeos/common';
import { generateBookingForm } from '../lib/booking.utilities';

describe('Booking Utilities', () => {
    describe('generateBookingForm', () => {
        it('should get current status from a list of bookings', () =>
            expect(generateBookingForm()).toBeInstanceOf(FormGroup));

        it('should use visitor_name extension data instead of description for visitor forms', () => {
            const form = generateBookingForm(
                new Booking({
                    booking_type: 'visitor',
                    asset_id: 'visitor@example.com',
                    description: 'Vendor Interview',
                    extension_data: { visitor_name: 'Visitor One' },
                }),
            );

            expect(form.value.asset_name).toBe('Visitor One');
        });
    });
});
