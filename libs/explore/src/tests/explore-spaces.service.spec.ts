import { ApplicationRef, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { OrganisationService, SettingsService, Space } from '@placeos/common';
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { EventFormService } from 'libs/events/src/lib/event-form.service';

import { ExploreBookQrComponent } from '../lib/explore-book-qr.component';
import { ExploreBookingModalComponent } from '../lib/explore-booking-modal.component';
import {
    DEFAULT_COLOURS,
    ExploreSpacesService,
} from '../lib/explore-spaces.service';
import { ExploreStateService } from '../lib/explore-state.service';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('ExploreSpacesService', () => {
    let spectator: SpectatorService<ExploreSpacesService>;
    const createService = createServiceFactory({
        service: ExploreSpacesService,
        providers: [
            // A new state for each test, so late timers of an earlier
            // service do not write to the spies of this test
            {
                provide: ExploreStateService,
                useFactory: () => ({
                    options: signal({ is_public: false }),
                    spaces: signal([]),
                    setStyles: vi.fn(),
                    setFeatures: vi.fn(),
                    setActions: vi.fn(),
                }),
            },
            MockProvider(SettingsService, { get: vi.fn() }),
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }),
                building: { id: 'bld-1' } as any,
                organisation: { id: 'org-1' } as any,
            } as any),
            MockProvider(EventFormService, {
                form: new UntypedFormGroup({}),
                model: signal({}),
                newForm: vi.fn(),
                openEventLinkModal: vi.fn(),
            } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: {},
        } as any);
        spectator = createService();
        // Provider mocks are shared, so clear settings from earlier tests
        vi.mocked(spectator.inject(SettingsService).get).mockReset();
    });

    afterEach(() => vi.useRealTimers());

    it('should bind to spaces', () => {
        vi.useFakeTimers();
        const bindThenSubscribe = vi.fn(() => of().subscribe());
        const variableBinding = { bindThenSubscribe };
        const binding = vi.fn(() => variableBinding);
        const getModuleMock = vi.fn(() => ({ variable: binding }));
        vi.mocked(ts_client.getModule).mockImplementation(getModuleMock as any);
        const state = spectator.inject(ExploreStateService);
        (state.spaces as any).set([
            { id: 'space-1', name: 'Test', bookable: true },
        ]);
        TestBed.tick();
        vi.runOnlyPendingTimers();
        expect(getModuleMock).toHaveBeenCalledWith('space-1', 'Bookings');
        expect(binding).toHaveBeenCalledWith('bookings');
        expect(binding).toHaveBeenCalledWith('status');
        expect(binding).toHaveBeenCalledWith('presence');
        expect(state.setActions).toHaveBeenCalled();
        vi.useRealTimers();
    });

    it('should colour bookable spaces by status and skip the others', () => {
        vi.useFakeTimers();
        const settings = spectator.inject(SettingsService);
        vi.mocked(settings.get).mockImplementation((key: string) =>
            key === 'app.explore.colors' ? { 'space-busy': '#123456' } : null,
        );
        const state = spectator.inject(ExploreStateService);
        const spaces = [
            new Space({ id: 'space-1', map_id: 'map-1', bookable: true }),
            new Space({ id: 'space-2', map_id: 'map-2', bookable: true }),
            new Space({ id: 'space-3', map_id: 'map-3', bookable: false }),
        ];

        // An empty status means the space is free
        spectator.service.handleStatusChange(spaces, spaces[0], '');
        spectator.service.handleStatusChange(spaces, spaces[1], 'busy');
        spectator.service.handleStatusChange(spaces, spaces[2], 'busy');
        vi.advanceTimersByTime(100);

        expect(vi.mocked(state.setStyles).mock.calls.at(-1)).toEqual([
            'spaces',
            {
                '#map-1': { fill: DEFAULT_COLOURS.free, opacity: 0.6 },
                '#map-2': { fill: '#123456', opacity: 0.6 },
            },
        ]);
        vi.useRealTimers();
    });

    describe('bookSpace', () => {
        const notify_open = vi.fn((_message: string) => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        const notified = () => notify_open.mock.calls.map(([msg]) => msg);
        const space = new Space({
            id: 'space-1',
            map_id: 'map-1',
            name: 'Room 1',
            email: 'room-1@place.tech',
            bookable: true,
        } as any);
        let settings: Record<string, unknown>;

        /** Load the booking rules and room alerts resources */
        async function load(metadata: Record<string, unknown> = {}) {
            vi.mocked(ts_client.showMetadata).mockImplementation(
                (_, name) =>
                    Promise.resolve({ details: metadata[name] ?? {} }) as any,
            );
            TestBed.tick();
            await TestBed.inject(ApplicationRef).whenStable();
        }

        function setStatus(status: string) {
            spectator.service.handleStatusChange([space], space, status);
        }

        beforeEach(() => {
            settings = {};
            vi.mocked(spectator.inject(SettingsService).get).mockImplementation(
                (key: string) => settings[key],
            );
            notify_open.mockClear();
            setNotifyOutlet({ open: notify_open } as any, true);
        });

        afterEach(() => setNotifyOutlet(null, true));

        it('should refuse a space that is not free unless forced', async () => {
            await load();
            const dialog = spectator.inject(MatDialog);

            await spectator.service.bookSpace(space);
            setStatus('busy');
            await spectator.service.bookSpace(space);
            expect(notified()).toEqual([
                'EXPLORE.SPACES_UNAVAILABLE_ERROR',
                'EXPLORE.SPACES_UNAVAILABLE_ERROR',
            ]);
            expect(dialog.open).not.toHaveBeenCalled();

            await spectator.service.bookSpace(space, true);
            expect(dialog.open).toHaveBeenCalledTimes(1);
        });

        it('should refuse a space that is not bookable, even when forced', async () => {
            await load();
            const closed = new Space({ id: 'space-2', bookable: false });

            await spectator.service.bookSpace(closed, true);

            expect(notified()).toEqual(['EXPLORE.SPACES_UNAVAILABLE_ERROR']);
            expect(spectator.inject(MatDialog).open).not.toHaveBeenCalled();
        });

        it('should refuse a space hidden by the booking rules', async () => {
            await load({
                room_booking_rules: [
                    {
                        zone: '*',
                        rules: { hidden: true },
                        conditions: { resource_ids: ['space-1'] },
                    },
                ],
            });
            setStatus('free');

            await spectator.service.bookSpace(space);

            expect(notified()).toEqual(['EXPLORE.SPACES_PERMISSIONS_ERROR']);
        });

        it('should show the alert message of a closed room', async () => {
            await load({
                room_alerts: { 'space-1': ['closed', 'Closed for repairs'] },
            });
            setStatus('free');

            await spectator.service.bookSpace(space);

            expect(notified()).toEqual(['Closed for repairs']);
            expect(spectator.inject(MatDialog).open).not.toHaveBeenCalled();
        });

        it('should open the room booking URL with the space details', async () => {
            const open = vi.spyOn(window, 'open').mockReturnValue(null);
            await load();
            const linked = new Space({
                ...space,
                display_name: 'Room & Co',
                room_booking_url:
                    'https://book.test/{id}?name={name}&map={map_id}&user={email_start}&domain={email_end}',
            } as any);
            spectator.service.handleStatusChange([linked], linked, 'free');

            await spectator.service.bookSpace(linked);

            expect(open).toHaveBeenCalledWith(
                'https://book.test/space-1?name=Room%20%26%20Co&map=map-1&user=room-1&domain=place.tech',
                '_blank',
                'noopener,noreferrer',
            );
            expect(spectator.inject(MatDialog).open).not.toHaveBeenCalled();
            open.mockRestore();
        });

        it('should open the booking modal, or the QR code when set', async () => {
            await load();
            setStatus('free');
            const dialog = spectator.inject(MatDialog);
            const event_form = spectator.inject(EventFormService);

            await spectator.service.bookSpace(space);
            settings['app.explore.show_booking_qr'] = true;
            await spectator.service.bookSpace(space);

            expect(vi.mocked(dialog.open).mock.calls).toEqual([
                [
                    ExploreBookingModalComponent,
                    { data: { space, alert: undefined } },
                ],
                [ExploreBookQrComponent, { data: { space, alert: undefined } }],
            ]);
            expect(event_form.model().resources).toEqual([space]);
        });

        it('should open the event link modal when room booking is off', async () => {
            await load();
            setStatus('free');
            settings['app.events.booking_unavailable'] = true;
            const event_form = spectator.inject(EventFormService);

            await spectator.service.bookSpace(space);

            expect(event_form.openEventLinkModal).toHaveBeenCalled();
            expect(spectator.inject(MatDialog).open).not.toHaveBeenCalled();
        });

        it('should refuse to book outside the bookable hours', async () => {
            await load();
            setStatus('free');
            // 6am is before the bookable hours
            vi.useFakeTimers({
                toFake: ['Date'],
                now: new Date(2026, 6, 9, 6, 0),
            });
            settings['app.events.bookable_hours'] = { start: 8, end: 18 };

            await spectator.service.bookSpace(space);
            vi.useRealTimers();

            expect(notified()).toEqual(['EXPLORE.OUTSIDE_BOOKABLE_HOURS']);
            expect(spectator.inject(MatDialog).open).not.toHaveBeenCalled();
        });

        it('should book on a short press but not after a long press', async () => {
            await load();
            vi.useFakeTimers();
            setStatus('free');
            (
                spectator.service as unknown as {
                    updateActions(spaces: Space[]): void;
                }
            ).updateActions([space]);
            vi.advanceTimersByTime(50);
            const [, actions] = vi
                .mocked(spectator.inject(ExploreStateService).setActions)
                .mock.calls.at(-1);
            const down = actions.find((_) => _.action === 'mousedown');
            const up = actions.find((_) => _.action === 'mouseup');
            const dialog = spectator.inject(MatDialog);

            down.callback(new Event('mousedown'));
            up.callback(new Event('mouseup'));
            await vi.advanceTimersByTimeAsync(0);
            expect(dialog.open).toHaveBeenCalledTimes(1);

            // A long press pans the map, so it does not book
            down.callback(new Event('mousedown'));
            await vi.advanceTimersByTimeAsync(300);
            up.callback(new Event('mouseup'));
            await vi.advanceTimersByTimeAsync(0);
            expect(dialog.open).toHaveBeenCalledTimes(1);
            vi.useRealTimers();
        });
    });

    it('should show presence icons only when the setting is on', () => {
        vi.useFakeTimers();
        const state = spectator.inject(ExploreStateService);
        const spaces = [
            new Space({ id: 'space-1', map_id: 'map-1' }),
            new Space({ id: 'space-2', map_id: 'map-2' }),
        ];
        const presence_calls = () =>
            vi
                .mocked(state.setFeatures)
                .mock.calls.filter(([group]) => group === 'spaces-presence');

        spectator.service.handlePresenceChange(spaces, spaces[0], true);
        vi.advanceTimersByTime(100);
        expect(presence_calls()).toEqual([]);

        vi.mocked(spectator.inject(SettingsService).get).mockImplementation(
            (key: string) => key === 'app.show_presence_indicators',
        );
        spectator.service.handlePresenceChange(spaces, spaces[1], false);
        vi.advanceTimersByTime(100);
        const [, features] = presence_calls().at(-1);
        expect(
            features.map(({ location, data }) => [location, data['color']]),
        ).toEqual([
            ['map-1', 'var(--success)'],
            ['map-2', 'var(--base-content)'],
        ]);
        vi.useRealTimers();
    });

    it('should keep stable room features and update their data in place', () => {
        vi.useFakeTimers();
        const callbacks: Record<string, (value: unknown) => void> = {};
        vi.mocked(ts_client.getModule).mockImplementation(
            (id: string) =>
                ({
                    variable: (name: string) => ({
                        bindThenSubscribe: (callback) => {
                            callbacks[`${id}:${name}`] = callback;
                            return () => null;
                        },
                    }),
                }) as any,
        );
        const state = spectator.inject(ExploreStateService);
        (state.spaces as any).set([
            new Space({ id: 'space-1', map_id: 'map-1', bookable: true }),
        ]);
        TestBed.tick();
        vi.runOnlyPendingTimers();
        const set_features = vi.mocked(state.setFeatures);
        const room_calls = () =>
            set_features.mock.calls.filter(([group]) => group === 'spaces');
        expect(room_calls()).toHaveLength(1);
        const [feature] = room_calls()[0][1];
        expect(feature.track_id).toBe('space:hover:space-1');
        const data = feature.data as any;
        expect(data.status()).toBe('not-bookable');

        // Status and booking changes update the signals, not the features
        callbacks['space-1:status']('busy');
        callbacks['space-1:bookings']([
            { id: 'event-1', date: Date.now(), duration: 30 },
        ]);
        vi.runOnlyPendingTimers();
        expect(room_calls()).toHaveLength(1);
        expect(data.status()).toBe('busy');
        expect(data.events().map((event) => event.id)).toEqual(['event-1']);
        expect(state.setStyles).toHaveBeenCalledWith(
            'spaces',
            expect.objectContaining({ '#map-1': expect.anything() }),
        );
        vi.useRealTimers();
    });
});
