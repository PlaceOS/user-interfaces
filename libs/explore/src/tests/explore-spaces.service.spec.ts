import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { OrganisationService, SettingsService } from '@placeos/common';
import { EventFormService } from '@placeos/events';

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
                options: signal({ is_public: false }) as any,
                spaces: signal([]) as any,
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
});
