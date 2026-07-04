import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/jest';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OrganisationService, SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { GroupEventDetailsModalComponent } from '@placeos/events';
import { MockComponent, MockProvider } from 'ng-mocks';

import { EventViewComponent } from '../../app/events/event-view.component';

describe('EventViewComponent', () => {
    let spectator: SpectatorRouting<EventViewComponent>;
    const createComponent = createRoutingFactory({
        component: EventViewComponent,
        declarations: [
            MockComponent(GroupEventDetailsModalComponent),
            MockComponent(IconComponent),
        ],
        imports: [MatProgressSpinnerModule],
        providers: [
            MockProvider(OrganisationService, {
                waitUntilInitialised: jest.fn(() => Promise.resolve()),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn(() => ''),
            } as any),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show the empty state when no event is loaded', () => {
        spectator.component.loading.set(false);
        spectator.component.event.set(null);
        spectator.detectChanges();
        expect(spectator.query('group-event-details-modal')).toBeNull();
        expect(spectator.fixture.nativeElement.textContent).toContain(
            'Event not found',
        );
    });

    it('should render the details modal when an event is present', () => {
        spectator.component.loading.set(false);
        spectator.component.event.set({ id: 'e1' } as any);
        spectator.detectChanges();
        expect('group-event-details-modal').toExist();
    });

    it('should show a loading spinner while loading', () => {
        spectator.component.loading.set(true);
        spectator.detectChanges();
        expect('mat-spinner').toExist();
    });
});
