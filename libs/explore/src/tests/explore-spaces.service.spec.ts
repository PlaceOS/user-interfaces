import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { SettingsService } from '@placeos/common';
import { BehaviorSubject, of } from 'rxjs';

import { Space } from '@placeos/spaces';
import {
    DEFAULT_COLOURS,
    ExploreSpacesService,
} from '../lib/explore-spaces.service';
import { ExploreStateService } from '../lib/explore-state.service';

jest.mock('@placeos/ts-client');
jest.mock('@placeos/common');

import * as ts_client from '@placeos/ts-client';
import * as common_mod from '@placeos/common';

describe('ExploreSpacesService', () => {
    let spectator: SpectatorService<ExploreSpacesService>;
    const createService = createServiceFactory({
        service: ExploreSpacesService,
        providers: [
            {
                provide: ExploreStateService,
                useValue: {
                    spaces: new BehaviorSubject([]),
                    setStyles: jest.fn(),
                    setFeatures: jest.fn(),
                    setActions: jest.fn(),
                },
            },
            { provide: SettingsService, useValue: { get: jest.fn() } },
            { provide: MatDialog, useValue: { open: jest.fn() } },
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should bind to spaces', () => {
        const bind = jest.fn(() => jest.fn());
        const binding = jest.fn(() => ({ listen: jest.fn(() => of()), bind }));
        (ts_client as any).getModule = jest.fn(() => ({ binding }));
        const state = spectator.inject(ExploreStateService);
        (state.spaces as any).next([
            { id: 'space-1', name: 'Test', bookable: true },
        ]);
        expect(ts_client.getModule).toHaveBeenCalledWith('space-1', 'Bookings');
        expect(binding).toHaveBeenCalledTimes(4);
        expect(binding).toHaveBeenCalledWith('bookings');
        expect(binding).toHaveBeenCalledWith('status');
        expect(bind).toHaveBeenCalledTimes(4);
        expect(state.setActions).toHaveBeenCalled();
    });

    it('should listen to state changes', () => {
        jest.useFakeTimers();
        const spaces = [
            { id: '1', map_id: 'space-1', name: 'Test', bookable: true },
            { id: '2', map_id: 'space-2', name: 'Test 2', bookable: false },
        ].map((_) => new Space(_));
        console.log('Spaces:', spaces);
        const state = spectator.inject(ExploreStateService);
        spectator.service.handleStatusChange(spaces, spaces[0], '');
        jest.runOnlyPendingTimers();
        expect(state.setStyles).toHaveBeenCalledWith('spaces', {
            '#space-1': { fill: DEFAULT_COLOURS['free'], opacity: 0.6 },
            '#space-2': { fill: DEFAULT_COLOURS['not-bookable'], opacity: 0.6 },
        });
        spectator.service.handleStatusChange(spaces, spaces[0], 'busy');
        jest.runOnlyPendingTimers();
        expect(state.setStyles).toHaveBeenCalledWith('spaces', {
            '#space-1': { fill: DEFAULT_COLOURS['busy'], opacity: 0.6 },
            '#space-2': { fill: DEFAULT_COLOURS['not-bookable'], opacity: 0.6 },
        });
        spectator.service.handleStatusChange(spaces, spaces[1], 'free');
        jest.runOnlyPendingTimers();
        expect(state.setStyles).toHaveBeenCalledWith('spaces', {
            '#space-1': { fill: DEFAULT_COLOURS['busy'], opacity: 0.6 },
            '#space-2': { fill: DEFAULT_COLOURS['not-bookable'], opacity: 0.6 },
        });
        jest.useRealTimers();
    });

    it('should allow making space bookings', () => {
        jest.useFakeTimers();
        const spaces = [
            { id: '1', map_id: 'space-1', name: 'Test', bookable: true },
            { id: '2', map_id: 'space-2', name: 'Test 2', bookable: false },
        ].map((_) => new Space(_));
        (common_mod as any).notifyError = jest.fn();
        const dialog = spectator.inject(MatDialog);
        spectator.service.handleStatusChange(spaces, spaces[0], '');
        jest.runOnlyPendingTimers();
        expect(dialog.open).not.toHaveBeenCalled();
        spectator.service.bookSpace(spaces[0]);
        expect(dialog.open).toHaveBeenCalled();
        expect(common_mod.notifyError).not.toHaveBeenCalled();
        spectator.service.bookSpace(spaces[1]);
        expect(common_mod.notifyError).toHaveBeenCalled();
        expect(dialog.open).toHaveBeenCalledTimes(1);
    });
});
