import { MatMenuModule } from "@angular/material/menu";
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { IconComponent, ImageCarouselComponent, InteractiveMapComponent, UserAvatarComponent } from "@placeos/components";
import { MockComponent, MockModule } from "ng-mocks";
import { AttendeeListComponent } from "../lib/attendee-list.component";

import { EventDetailsModalComponent } from "../lib/event-details-modal.component";

describe('EventDetailsModalComponent', () => {
    let spectator: Spectator<EventDetailsModalComponent>;
    const createComponent = createComponentFactory({
        component: EventDetailsModalComponent,
        providers: [],
        declarations: [
            MockComponent(ImageCarouselComponent),
            MockComponent(InteractiveMapComponent),
            MockComponent(IconComponent),
            MockComponent(UserAvatarComponent),
            MockComponent(AttendeeListComponent)
        ],
        imports: [MockModule(MatMenuModule)]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

    it('should show images', () => expect('image-carousel').toExist());

    it('should show title', () => expect('[title]').toExist());

    it('should show map', () => expect('interactive-map').toExist());

    it('should show host', () => expect('[host]').toExist());

    it('should show attendees', () => {
        expect('attendee-list').not.toExist();
        spectator.click('button[show-attendees]');
        spectator.detectChanges();
        expect('attendee-list').toExist();
    });

});