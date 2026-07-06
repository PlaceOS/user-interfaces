import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { Booking } from '@placeos/common';

import { ParkingSpecialRequestModalComponent } from '../../app/parking/parking-special-request-modal.component';

describe('ParkingSpecialRequestModalComponent', () => {
    let spectator: Spectator<ParkingSpecialRequestModalComponent>;
    let booking: Partial<Booking>;

    const createComponent = createComponentFactory({
        component: ParkingSpecialRequestModalComponent,
        shallow: true,
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useFactory: () => ({ booking }),
            },
        ],
    });

    it('should read the reason from the booking extension notes', () => {
        booking = {
            extension_data: { notes: '  Needs wheelchair access  ' },
            description: 'ignored',
        } as any;

        spectator = createComponent();

        expect(spectator.component.request_notes).toBe(
            'Needs wheelchair access',
        );
    });

    it('should fall back to the booking description when no notes exist', () => {
        booking = {
            extension_data: {},
            description: 'Fallback reason',
        } as any;

        spectator = createComponent();

        expect(spectator.component.request_notes).toBe('Fallback reason');
    });

    it('should map attachment urls into named links and drop empty entries', () => {
        booking = {
            extension_data: {
                attachments: [
                    'https://files.example.com/docs/Doctor%20Note.pdf',
                    '',
                ],
            },
        } as any;

        spectator = createComponent();

        expect(spectator.component.attachments).toEqual([
            {
                url: 'https://files.example.com/docs/Doctor%20Note.pdf',
                name: 'Doctor Note.pdf',
            },
        ]);
    });

    it('should expose an empty attachment list when none are provided', () => {
        booking = { extension_data: {} } as any;

        spectator = createComponent();

        expect(spectator.component.attachments).toEqual([]);
    });
});
