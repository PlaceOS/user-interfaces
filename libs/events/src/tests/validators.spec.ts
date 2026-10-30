import { FormControl, FormGroup } from '@angular/forms';
import { addDays, subDays } from 'date-fns';
import { endInFuture } from '../lib/validators';

describe('Event Validators', () => {
    describe('endInFuture', () => {
        it('should handle times in the future', () => {
            const form = new FormGroup({
                date: new FormControl(addDays(new Date(), 2).valueOf()),
                duration: new FormControl(30),
            });
            expect(endInFuture(form.get('duration'))).toBeNull();
        });

        it('should handle times in the past', () => {
            const form = new FormGroup({
                date: new FormControl(subDays(new Date(), 2).valueOf()),
                duration: new FormControl(30),
            });
            expect(endInFuture(form.get('duration'))).toEqual({
                duration: true,
            });
        });
    });
});
