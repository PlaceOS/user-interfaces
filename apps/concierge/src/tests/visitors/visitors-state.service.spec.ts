import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { addDays, addMinutes, getUnixTime, startOfDay } from 'date-fns';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { SettingsService } from '@placeos/common';

import { VisitorsStateService } from '../../app/visitors/visitors-state.service';

jest.mock('@placeos/events');
jest.mock('@placeos/bookings');
jest.mock('@placeos/common');

import * as booking_mod from '@placeos/bookings';
import * as common_mod from '@placeos/common';
import { OrganisationService } from '@placeos/common';
import * as event_mod from '@placeos/events';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('VisitorStateService', () => {
    let spectator: SpectatorService<VisitorsStateService>;
    const createService = createServiceFactory({
        service: VisitorsStateService,
        providers: [
            MockProvider(MatDialog, {
                open: jest.fn(() => ({
                    afterClosed: jest.fn(() => of(true)),
                })),
            } as any),
            MockProvider(OrganisationService, {
                active_building: signal({
                    id: 'bld-1',
                    timezone: 'Australia/Sydney',
                }),
                building: { id: 'bld-1', timezone: 'Australia/Sydney' },
            } as any),
            MockProvider(SettingsService, {
                time_format: 'h:mm a',
                get: ((name: string) =>
                    name === 'app.bookings.use_building_timezone'
                        ? true
                        : undefined) as any,
            } as any),
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create component', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should list visitor events', async () => {
        (event_mod as any).queryEvents = jest.fn(() =>
            Promise.resolve([{ guests: [{}], attendees: [{}, {}] }]),
        );
        (booking_mod as any).queryBookings = jest.fn(() =>
            Promise.resolve([{ extension_data: {} }]),
        );
        expect(booking_mod.queryBookings).not.toHaveBeenCalled();
        TestBed.flushEffects();
        await wait(10);
        expect(spectator.service.bookings()).toHaveLength(1);
        expect(booking_mod.queryBookings).toHaveBeenCalled();
    });

    it('should apply building timezone to visitor listing requests', async () => {
        (booking_mod as any).queryBookings = jest.fn(() =>
            Promise.resolve([{ extension_data: {} }]),
        );
        (common_mod.getTimezoneDifferenceInHours as jest.Mock).mockReturnValue(
            2,
        );
        const date = new Date('2026-06-15T12:00:00').valueOf();

        spectator.service.setFilters({ date, period: 1 });
        TestBed.flushEffects();
        await wait(10);

        const start = addMinutes(startOfDay(new Date(date)), 120);
        const end = addDays(start, 1);
        expect(booking_mod.queryBookings).toHaveBeenLastCalledWith(
            expect.objectContaining({
                period_start: getUnixTime(start),
                period_end: getUnixTime(end),
            }),
        );
    });

    it('should allow filtering of visitor events', async () => {
        (booking_mod as any).queryBookings = jest.fn(() =>
            Promise.resolve([{ asset_name: 'true', extension_data: {} }]),
        );
        expect(booking_mod.queryBookings).not.toHaveBeenCalled();
        TestBed.flushEffects();
        await wait(10);
        expect(spectator.service.filtered_bookings()).toHaveLength(1);
        spectator.service.setSearchString('test');
        expect(spectator.service.filtered_bookings()).toHaveLength(0);
    });

    it('should allow polling of visitor events', async () => {
        // TODO: Handle base class not being mocked
        // (event_mod as any).queryEvents = jest.fn(() => of([]));
        // expect(event_mod.queryEvents).not.toHaveBeenCalled();
        // spectator.service.events.subscribe();
        // await timer(155).toPromise();
        // expect(event_mod.queryEvents).toHaveBeenCalledTimes(1);
        // spectator.service.startPolling(300);
        // await timer(455).toPromise();
        // expect(event_mod.queryEvents).toHaveBeenCalledTimes(2);
        // spectator.service.stopPolling();
        // await timer(400).toPromise();
        // expect(event_mod.queryEvents).toHaveBeenCalledTimes(2);
    });

    it('should allow checking in visitors', async () => {
        (booking_mod as any).approveBooking = jest.fn(() =>
            Promise.resolve({}),
        );
        (booking_mod as any).checkinBooking = jest.fn(() =>
            Promise.resolve({}),
        );
        (booking_mod as any).updateBookingInductionStatus = jest.fn(() =>
            Promise.resolve({}),
        );
        (common_mod as any).notifySuccess = jest.fn(() => null);
        (common_mod as any).unique = jest.fn(() => []);
        expect(booking_mod.checkinBooking).not.toHaveBeenCalled();
        await spectator.service.setCheckinState({ id: '1' } as any);

        expect(booking_mod.checkinBooking).toHaveBeenCalledWith('1', true);
    });

    it('should allow checking out visitors', async () => {
        (booking_mod as any).checkinBooking = jest.fn(() =>
            Promise.resolve({}),
        );
        (common_mod as any).notifySuccess = jest.fn(() => null);
        (common_mod as any).unique = jest.fn(() => []);
        expect(booking_mod.checkinBooking).not.toHaveBeenCalled();
        await spectator.service.setCheckinState({ id: '1' } as any, false);
        expect(booking_mod.checkinBooking).toHaveBeenCalledWith('1', false);
    });

    it('should allow checking in all visitors', async () => {
        (booking_mod as any).queryBookings = jest.fn(() =>
            Promise.resolve([{ parent_id: '1', extension_data: {} }]),
        );
        (booking_mod as any).checkinBooking = jest.fn(() =>
            Promise.resolve({}),
        );
        (common_mod as any).notifySuccess = jest.fn(() => null);
        (common_mod as any).unique = jest.fn(() => []);
        TestBed.flushEffects();
        await wait(10);
        expect(booking_mod.checkinBooking).not.toHaveBeenCalled();
        await spectator.service.setCheckinStateForEvent('1');
        expect(booking_mod.checkinBooking).toHaveBeenCalled();
    });

    it('should allow checking out all visitors', async () => {
        (booking_mod as any).queryBookings = jest.fn(() =>
            Promise.resolve([{ parent_id: '1', extension_data: {} }]),
        );
        (booking_mod as any).checkinBooking = jest.fn(() =>
            Promise.resolve({}),
        );
        (common_mod as any).notifySuccess = jest.fn(() => null);
        (common_mod as any).unique = jest.fn(() => []);
        TestBed.flushEffects();
        await wait(10);
        expect(booking_mod.checkinBooking).not.toHaveBeenCalled();
        await spectator.service.setCheckinStateForEvent('1');
        expect(booking_mod.checkinBooking).toHaveBeenCalled();
    });
});
