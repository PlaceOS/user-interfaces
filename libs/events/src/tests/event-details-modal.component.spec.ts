import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    CalendarEvent,
    OrganisationService,
    SettingsService,
    Space,
} from '@placeos/common';
import { MockDirective, MockModule, MockPipe, MockProvider } from 'ng-mocks';
import { AttendeeListComponent } from '../lib/attendee-list.component';

import { DatePipe } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { mockComponent } from 'libs/common/src/tests/test-helpers';
import { BindingDirective } from 'libs/components/src/lib/binding.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { StatusPillComponent } from 'libs/components/src/lib/status-pill.component';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';
import { SpacePipe } from 'libs/events/src/lib/space.pipe';
import { EventDetailsModalComponent } from '../lib/event-details-modal.component';

describe('EventDetailsModalComponent', () => {
    let spectator: Spectator<EventDetailsModalComponent>;
    const createComponent = createComponentFactory({
        component: EventDetailsModalComponent,
        providers: [
            MockProvider(MAT_DIALOG_DATA, {
                event: new CalendarEvent(),
                edit_fn: jest.fn(),
                remove_fn: jest.fn(),
            }),
            MockProvider(OrganisationService, {
                levelWithID: jest.fn(),
                buildings: [],
                building: { timezone: 'UTC' } as any,
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
            mockComponent(ImageCarouselComponent),
            mockComponent(InteractiveMapComponent),
            mockComponent(IconComponent),
            mockComponent(UserAvatarComponent),
            mockComponent(AttendeeListComponent),
            MockDirective(BindingDirective),
            mockComponent(StatusPillComponent),
        ],
        imports: [
            MockModule(MatMenuModule),
            MockModule(MatDialogModule),
            MockModule(MatTooltipModule),
            MockPipe(DatePipe),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show images', () => {
        expect('image-carousel').not.toExist();
        (spectator.component as any).event.set(
            new CalendarEvent({
                system: { images: ['test.png'] },
            } as any),
        );
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
