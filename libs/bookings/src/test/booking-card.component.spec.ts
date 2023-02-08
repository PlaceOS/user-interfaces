import { MatDialog } from '@angular/material/dialog';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { set } from 'date-fns';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from '@placeos/components';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';

import { Booking } from '../lib/booking.class';
import { BookingCardComponent } from '../lib/booking-card.component';

describe('BookingCardComponent', () => {
    let spectator: SpectatorRouting<BookingCardComponent>;
    const createComponent = createRoutingFactory({
        component: BookingCardComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            {
                provide: OrganisationService,
                useValue: { levelWithID: jest.fn() },
            },
            { provide: MatDialog, useValue: { open: jest.fn() } },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show event details', () => {
        expect('[name="view-booking-details"]').not.toExist();
        spectator.setInput({
            booking: new Booking({
                date: set(1, { hours: 8, minutes: 0 }).valueOf(),
            }),
        });
        spectator.detectChanges();
        expect('[name="view-booking-details"]').toExist();
        expect('[day]').not.toExist();
        spectator.setInput({ show_day: true });
        spectator.detectChanges();
        expect('[day]').toExist();
    });
});
