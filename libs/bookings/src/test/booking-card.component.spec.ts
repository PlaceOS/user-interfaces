import { MatDialog } from '@angular/material/dialog';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { set } from 'date-fns';
import { MockComponent, MockProvider } from 'ng-mocks';

import { OrganisationService } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';

import { Booking, SettingsService } from '@placeos/common';
import { StatusPillComponent } from 'libs/components/src/lib/status-pill.component';
import { BehaviorSubject } from 'rxjs';
import { BookingCardComponent } from '../lib/booking-card.component';

describe('BookingCardComponent', () => {
    let spectator: SpectatorRouting<BookingCardComponent>;
    const createComponent = createRoutingFactory({
        component: BookingCardComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(StatusPillComponent),
        ],
        providers: [
            MockProvider(OrganisationService, {
                levelWithID: jest.fn(),
                level_list: new BehaviorSubject([]),
                buildingsForRegion: jest.fn(() => []),
            }),
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(SettingsService, { time_format: 'h:mm a' }),
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

    it('should show visitor name instead of reason when attendee is present', () => {
        spectator.setInput({
            booking: new Booking({
                booking_type: 'visitor',
                type: 'visitor',
                title: 'Vendor Interview',
                description: 'Vendor Interview',
                asset_name: 'Vendor Interview',
                asset_id: 'visitor.one@example.com',
                attendees: [
                    {
                        name: 'Visitor One',
                        email: 'visitor.one@example.com',
                    },
                ],
            } as any),
        });
        spectator.detectChanges();

        expect(spectator.component.resource_label).toBe('Visitor One');
    });
});
