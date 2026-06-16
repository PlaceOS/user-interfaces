import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { BookingFormService, ParkingService } from '@placeos/bookings';
import {
    CalendarEvent,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { EventFormService, SpacesService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';

import { ScheduleStateService } from '../../app/schedule/schedule-state.service';

describe('ScheduleStateService', () => {
    let spectator: SpectatorService<ScheduleStateService>;
    const router = { navigate: jest.fn() };
    const event_form = { newForm: jest.fn() };
    const spaces = {
        find: jest.fn(),
        loadSpace: jest.fn(),
    };
    const createService = createServiceFactory({
        service: ScheduleStateService,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn(),
                listen: jest.fn(() => signal(0)),
            } as any),
            MockProvider(OrganisationService, {
                active_building: signal({} as any),
                active_region: signal(null),
                building_list: signal([]),
                level_list: signal([]),
                module: jest.fn(() => null),
            } as any),
            MockProvider(MatDialog, { closeAll: jest.fn() }),
            MockProvider(Router, router),
            MockProvider(EventFormService, event_form),
            MockProvider(BookingFormService, { newForm: jest.fn() }),
            MockProvider(ParkingService, {}),
            MockProvider(SpacesService, spaces),
        ],
    });

    beforeEach(() => {
        jest.useFakeTimers();
        router.navigate.mockClear();
        event_form.newForm.mockClear();
        spaces.find.mockReset();
        spaces.loadSpace.mockReset();
        spectator = createService();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should use the event system as selected room when resources are missing', async () => {
        const room = {
            id: 'room-1',
            email: 'room-1@example.com',
            name: 'Boardroom',
            display_name: 'Boardroom',
            zones: ['lvl-1'],
        };
        spaces.find.mockImplementation((id) =>
            id === 'room-1' ? room : undefined,
        );
        const event = new CalendarEvent({
            id: 'event-1',
            creator: 'user@example.com',
            mailbox: 'user@example.com',
            system: { id: 'room-1', name: 'Boardroom' } as any,
            resources: [],
            title: 'Existing booking',
            date: new Date(2028, 5, 15, 10, 0, 0, 0).valueOf(),
            duration: 60,
        });

        await spectator.service.edit(event);
        jest.advanceTimersByTime(300);

        expect(router.navigate).toHaveBeenCalledWith([
            '/book',
            'meeting',
            'form',
        ]);
        expect(event_form.newForm).toHaveBeenCalledWith(
            expect.objectContaining({
                resources: [room],
            }),
        );
    });
});
