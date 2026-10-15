import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { OrganisationService, SettingsService, Space } from '@placeos/common';
import { EventFormService } from 'libs/events/src/lib/event-form.service';

import { ExploreSpacesService } from '../lib/explore-spaces.service';
import { ExploreStateService } from '../lib/explore-state.service';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('ExploreSpacesService', () => {
    let spectator: SpectatorService<ExploreSpacesService>;
    const createService = createServiceFactory({
        service: ExploreSpacesService,
        providers: [
            MockProvider(ExploreStateService, {
                options: signal({ is_public: false }),
                spaces: signal([]),
                setStyles: vi.fn(),
                setFeatures: vi.fn(),
                setActions: vi.fn(),
            }),
            MockProvider(SettingsService, { get: vi.fn() }),
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }),
                building: { id: 'bld-1' } as any,
            } as any),
            MockProvider(EventFormService, { form: new UntypedFormGroup({}) } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.showMetadata).mockReturnValue(of({}) as any);
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should bind to spaces', () => {
        vi.useFakeTimers();
        const bindThenSubscribe = vi.fn(() => of().subscribe());
        const variableBinding = { bindThenSubscribe };
        const binding = vi.fn(() => variableBinding);
        const getModuleMock = vi.fn(() => ({ variable: binding }));
        vi.mocked(ts_client.getModule).mockImplementation(
            getModuleMock as any,
        );
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

    it('should listen to state changes', () => {
        // TODO: Fix
        // const spaces = [
        //     { id: '1', map_id: 'space-1', name: 'Test', bookable: true },
        //     { id: '2', map_id: 'space-2', name: 'Test 2', bookable: false },
        // ].map((_) => new Space(_));
        // const state = spectator.inject(ExploreStateService);
        // spectator.service.handleStatusChange(spaces, spaces[0], '');
        // tick(201);
        // expect(state.setStyles).toHaveBeenCalledWith('spaces', {
        //     '#space-1': { fill: DEFAULT_COLOURS['free'], opacity: 0.6 },
        //     '#space-2': { fill: DEFAULT_COLOURS['not-bookable'], opacity: 0.6 },
        // });
        // spectator.service.handleStatusChange(spaces, spaces[0], 'busy');
        // tick(401);
        // expect(state.setStyles).toHaveBeenCalledWith('spaces', {
        //     '#space-1': { fill: DEFAULT_COLOURS['busy'], opacity: 0.6 },
        //     '#space-2': { fill: DEFAULT_COLOURS['not-bookable'], opacity: 0.6 },
        // });
        // spectator.service.handleStatusChange(spaces, spaces[1], 'free');
        // tick(401);
        // expect(state.setStyles).toHaveBeenCalledWith('spaces', {
        //     '#space-1': { fill: DEFAULT_COLOURS['busy'], opacity: 0.6 },
        //     '#space-2': { fill: DEFAULT_COLOURS['not-bookable'], opacity: 0.6 },
        // });
    });

    // it('should allow making space bookings', () => {
    //     vi.useFakeTimers();
    //     const spaces = [
    //         { id: '1', map_id: 'space-1', name: 'Test', bookable: true },
    //         { id: '2', map_id: 'space-2', name: 'Test 2', bookable: false },
    //     ].map((_) => new Space(_));
    //     (notify as any).notifyError = vi.fn();
    //     const dialog = spectator.inject(MatDialog);
    //     spectator.service.handleStatusChange(spaces, spaces[0], '');
    //     vi.runOnlyPendingTimers();
    //     expect(dialog.open).not.toHaveBeenCalled();
    //     spectator.service.bookSpace(spaces[0]);
    //     expect(dialog.open).toHaveBeenCalled();
    //     expect(notify.notifyError).not.toHaveBeenCalled();
    //     spectator.service.bookSpace(spaces[1]);
    //     expect(notify.notifyError).toHaveBeenCalled();
    //     expect(dialog.open).toHaveBeenCalledTimes(1);
    // });

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

