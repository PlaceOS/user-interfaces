import { createRoutingFactory, SpectatorRouting } from "@ngneat/spectator/jest";
import { Booking } from "@placeos/bookings";
import { IconComponent } from "@placeos/components";
import { OrganisationService } from "@placeos/organisation";
import { set } from "date-fns";
import { MockComponent } from "ng-mocks";
import { BookingCardComponent } from "../../app/components/booking-card.component";

describe('BookingCardComponent', () => {
    let spectator: SpectatorRouting<BookingCardComponent>;
    const createComponent = createRoutingFactory({
        component: BookingCardComponent,
        declarations: [
            MockComponent(IconComponent),
        ],
        providers: [
            { provide: OrganisationService, useValue: { levelWithID: jest.fn() } }
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
        spectator.setInput({
            booking: new Booking({
                date: set(Date.now(), { hours: 8, minutes: 0 }).valueOf(),
            }),
        });
        
        spectator.detectChanges();
        expect(spectator.element).toMatchSnapshot();
        spectator.setInput({ show_day: true });
        spectator.detectChanges();
        expect(spectator.element).toMatchSnapshot();
    })
});