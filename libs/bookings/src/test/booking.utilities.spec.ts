import { FormGroup } from '@angular/forms';
import { generateBookingForm } from '../lib/booking.utilities';

describe('Booking Utilities', () => {
    describe('generateBookingForm', () => {
        it('should get current status from a list of bookings', () =>
            expect(generateBookingForm()).toBeInstanceOf(FormGroup)
        );
    });
});
