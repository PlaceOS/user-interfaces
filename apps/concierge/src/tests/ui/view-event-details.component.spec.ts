import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { ViewEventDetailsComponent } from '../../app/ui/view-event-details.component';
import { EventsStateService } from '../../app/day-view/events-state.service';

describe('ViewEventDetailsComponent', () => {
    let spectator: Spectator<ViewEventDetailsComponent>;
    const state = {
        setEvent: jest.fn(),
        newBooking: jest.fn(),
        removeBooking: jest.fn(() => Promise.resolve(true)),
    };
    const settings = { get: jest.fn(), time_format: 'h:mm a' };

    const createComponent = createComponentFactory({
        component: ViewEventDetailsComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(EventsStateService, state as any),
            MockProvider(SettingsService, settings as any),
            MockProvider(OrganisationService, {
                building: { display_name: 'HQ', name: 'HQ' },
            } as any),
        ],
    });

    beforeEach(() => {
        state.setEvent.mockClear();
        state.newBooking.mockClear();
        state.removeBooking.mockClear();
        state.removeBooking.mockResolvedValue(true);
        settings.get.mockReset();
        spectator = createComponent();
    });

    it('should resolve the space id from event resources first', () => {
        spectator.fixture.componentRef.setInput('event', {
            resources: [{ id: 'space-res' }],
            space: { id: 'space-space' },
            system: { id: 'space-system' },
        } as any);
        expect(spectator.component.space_id()).toBe('space-res');
    });

    it('should fall back to the system id when no resources exist', () => {
        spectator.fixture.componentRef.setInput('event', {
            resources: [],
            system: { id: 'space-system' },
        } as any);
        expect(spectator.component.space_id()).toBe('space-system');
    });

    it('should format the event time range', () => {
        spectator.fixture.componentRef.setInput('event', {
            date: new Date('2026-06-15T09:00:00').valueOf(),
            duration: 60,
            resources: [],
        } as any);
        expect(spectator.component.time()).toBe('9:00 AM - 10:00 AM');
    });

    it('should reflect the delegated setting', () => {
        settings.get.mockImplementation((name: string) =>
            name === 'app.delegated' ? true : undefined,
        );
        expect(spectator.component.is_delegated()).toBe(true);
    });

    it('should clear the active event on close', () => {
        spectator.component.close();
        expect(state.setEvent).toHaveBeenCalledWith(null);
    });

    it('should start a new booking on edit', () => {
        const event = { resources: [] } as any;
        spectator.fixture.componentRef.setInput('event', event);
        spectator.component.edit();
        expect(state.newBooking).toHaveBeenCalledWith(event);
    });

    it('should close after a successful remove', async () => {
        spectator.fixture.componentRef.setInput('event', { resources: [] } as any);
        await spectator.component.remove();
        expect(state.removeBooking).toHaveBeenCalled();
        expect(state.setEvent).toHaveBeenCalledWith(null);
    });

    it('should not close when remove is cancelled', async () => {
        state.removeBooking.mockResolvedValue(false);
        spectator.fixture.componentRef.setInput('event', { resources: [] } as any);
        await spectator.component.remove();
        expect(state.setEvent).not.toHaveBeenCalled();
    });
});
