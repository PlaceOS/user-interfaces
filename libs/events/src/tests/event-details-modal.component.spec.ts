import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    CalendarEvent,
    OrganisationService,
    SettingsService,
    Space,
    User,
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
import { UserPipe } from 'libs/users/src/lib/user.pipe';
import { EventDetailsModalComponent } from '../lib/event-details-modal.component';

describe('EventDetailsModalComponent', () => {
    let spectator: Spectator<EventDetailsModalComponent>;
    const edit_fn = vi.fn();
    const remove_fn = vi.fn();
    const user_pipe_transform = vi.fn(
        async (user_id: string, lookup_mode?: string) =>
            new User({
                email: user_id,
                name: lookup_mode === 'email-prefix' ? 'Katherine Savage' : '',
            }),
    );
    const createComponent = createComponentFactory({
        component: EventDetailsModalComponent,
        providers: [
            MockProvider(MAT_DIALOG_DATA, {
                event: new CalendarEvent({
                    host: 'katherine.savage@royhill.com.au',
                }),
                edit_fn,
                remove_fn,
            }),
            MockProvider(OrganisationService, {
                levelWithID: vi.fn(),
                buildings: [],
                building: { timezone: 'UTC' } as any,
            }),
            MockProvider(SettingsService, {
                get: vi.fn(),
                time_format: 'h:mm a',
                app_name: 'test',
            }),
        ],
        componentProviders: [
            MockProvider(SpacePipe, {
                transform: vi.fn(async () => new Space()),
            }),
        ],
        declarations: [
            mockComponent(ImageCarouselComponent),
            mockComponent(InteractiveMapComponent),
            mockComponent(IconComponent),
            mockComponent(UserAvatarComponent),
            mockComponent(AttendeeListComponent),
            MockPipe(UserPipe, user_pipe_transform),
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

    beforeEach(() => {
        vi.clearAllMocks();
        spectator = createComponent();
    });

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

    it('should not delete ended events', () => {
        const event = new CalendarEvent({
            id: 'event-1',
            date: Date.now() - 2 * 60 * 60 * 1000,
            duration: 60,
        } as any);

        spectator.component.remove(event);

        expect(remove_fn).not.toHaveBeenCalled();
    });

    it('should show map', () => expect('interactive-map').toExist());

    it('should show host', () => expect('[host]').toExist());

    it('should resolve an aliased host name by email prefix', async () => {
        expect(user_pipe_transform).toHaveBeenCalledWith(
            'katherine.savage@royhill.com.au',
            'email-prefix',
        );
        await spectator.fixture.whenStable();
        await vi.waitFor(() => {
            spectator.detectChanges();
            expect('[host]').toHaveText('Katherine Savage');
            expect('[host]').toHaveText('katherine.savage@royhill.com.au');
        });
    });

    it('should show attendees', () => {
        expect('attendee-list').not.toExist();
        spectator.click('button[show-attendees]');
        spectator.detectChanges();
        expect('attendee-list').toExist();
    });
});
