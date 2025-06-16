import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { Space } from '@placeos/spaces';
import {
    MockComponent,
    MockDirective,
    MockModule,
    MockProvider,
} from 'ng-mocks';
import { AttendeeListComponent } from '../lib/attendee-list.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { BindingDirective } from 'libs/components/src/lib/binding.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { StatusPillComponent } from 'libs/components/src/lib/status-pill.component';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { EventDetailsModalComponent } from '../lib/event-details-modal.component';
import { CalendarEvent } from '../lib/event.class';

describe('EventDetailsModalComponent', () => {
    let spectator: Spectator<EventDetailsModalComponent>;
    const createComponent = createComponentFactory({
        component: EventDetailsModalComponent,
        providers: [
            MockProvider(MAT_DIALOG_DATA, { event: new CalendarEvent() }),
            MockProvider(OrganisationService, {
                levelWithID: jest.fn(),
                buildings: [],
            }),
            MockProvider(SettingsService, {
                get: jest.fn(),
                time_format: 'h:mm a',
                app_name: 'test',
            }),
        ],
        componentProviders: [
            MockProvider(SpacePipe, {
                transform: jest.fn(async () => new Space()),
            }),
        ],
        declarations: [
            MockComponent(ImageCarouselComponent),
            MockComponent(InteractiveMapComponent),
            MockComponent(IconComponent),
            MockComponent(UserAvatarComponent),
            MockComponent(AttendeeListComponent),
            MockDirective(BindingDirective),
            MockComponent(StatusPillComponent),
        ],
        imports: [
            MockModule(MatMenuModule),
            MockModule(MatDialogModule),
            MockModule(MatTooltipModule),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show images', () => {
        expect('image-carousel').not.toExist();
        (spectator.component as any).event = new CalendarEvent({
            system: { images: ['test.png'] },
        } as any);
        spectator.detectChanges();
        expect('image-carousel').toExist();
    });

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
