import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { GroupEventDetailsModalComponent } from '@placeos/events';
import { MockComponent, MockProvider } from 'ng-mocks';

import { EventViewComponent } from '../../app/events/event-view.component';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

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
                waitUntilInitialised: vi.fn(() => Promise.resolve()),
            }),
            MockProvider(SettingsService, {
                get: vi.fn(() => ''),
            } as any),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should show the empty state when no event is loaded', () => {
        spectator.component.loading.set(false);
        spectator.component.event.set(null);
        spectator.detectChanges();
        expect(spectator.query('group-event-details-modal')).toBeNull();
        expect(spectator.fixture.nativeElement.textContent).toContain(
            'event_busy',
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

    it('should not load a group event metadata from the metadata route', async () => {
        vi.mocked<(url: string) => Promise<unknown>>(
            ts_client.get,
        ).mockImplementation(async (url) =>
            url.includes('/metadata/')
                ? { view_access: 'PUBLIC' }
                : {
                      id: 'event-1',
                      title: 'Group event',
                      attendees: [],
                      extension_data: {
                          shared_event: true,
                          view_access: 'OPEN',
                      },
                  },
        );

        await spectator.component.ngOnInit();
        spectator.setRouteParam('id', 'event-1');
        await vi.waitFor(() =>
            expect(spectator.component.event()).toBeTruthy(),
        );

        expect(spectator.component.event().extension_data.view_access).toBe(
            'OPEN',
        );
        expect(ts_client.get).not.toHaveBeenCalledWith(
            expect.stringContaining('/metadata/'),
        );
    });
});
