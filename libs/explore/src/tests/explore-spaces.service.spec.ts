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
jest.mock('libs/common/src/lib/notifications');

import * as ts_client from '@placeos/ts-client';
import * as notify from 'libs/common/src/lib/notifications';
import { fakeAsync, tick } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { EventFormService } from '@placeos/events';
import { FormGroup, UntypedFormGroup } from '@angular/forms';

describe('ExploreSpacesService', () => {
    let spectator: SpectatorService<ExploreSpacesService>;
    const createService = createServiceFactory({
        service: ExploreSpacesService,
        providers: [
            MockProvider(ExploreStateService, {
                spaces: new BehaviorSubject([]),
                setStyles: jest.fn(),
                setFeatures: jest.fn(),
                setActions: jest.fn(),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(EventFormService, { form: new UntypedFormGroup({}) }),
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should bind to spaces', fakeAsync(() => {
        const bind = jest.fn(() => jest.fn());
        const binding = jest.fn(() => ({ listen: jest.fn(() => of()), bind }));
        (ts_client as any).getModule = jest.fn(() => ({ binding }));
        const state = spectator.inject(ExploreStateService);
        (state.spaces as any).next([
            { id: 'space-1', name: 'Test', bookable: true },
        ]);
        expect(ts_client.getModule).toHaveBeenCalledWith('space-1', 'Bookings');
        expect(binding).toHaveBeenCalledTimes(2);
        expect(binding).toHaveBeenCalledWith('bookings');
        expect(binding).toHaveBeenCalledWith('status');
        expect(bind).toHaveBeenCalledTimes(2);

        expect(state.setActions).toHaveBeenCalled();
    }));

    it('should listen to state changes', fakeAsync(() => {
        const spaces = [
            { id: '1', map_id: 'space-1', name: 'Test', bookable: true },
            { id: '2', map_id: 'space-2', name: 'Test 2', bookable: false },
        ].map((_) => new Space(_));
        const state = spectator.inject(ExploreStateService);
        spectator.service.handleStatusChange(spaces, spaces[0], '');
        tick(101);
        expect(state.setStyles).toHaveBeenCalledWith('spaces', {
            '#space-1': { fill: DEFAULT_COLOURS['free'], opacity: 0.6 },
            '#space-2': { fill: DEFAULT_COLOURS['not-bookable'], opacity: 0.6 },
        });
        spectator.service.handleStatusChange(spaces, spaces[0], 'busy');
        tick(401);
        expect(state.setStyles).toHaveBeenCalledWith('spaces', {
            '#space-1': { fill: DEFAULT_COLOURS['busy'], opacity: 0.6 },
            '#space-2': { fill: DEFAULT_COLOURS['not-bookable'], opacity: 0.6 },
        });
        spectator.service.handleStatusChange(spaces, spaces[1], 'free');
        tick(401);
        expect(state.setStyles).toHaveBeenCalledWith('spaces', {
            '#space-1': { fill: DEFAULT_COLOURS['busy'], opacity: 0.6 },
            '#space-2': { fill: DEFAULT_COLOURS['not-bookable'], opacity: 0.6 },
        });
    }));

    it('should allow making space bookings', () => {
        jest.useFakeTimers();
        const spaces = [
            { id: '1', map_id: 'space-1', name: 'Test', bookable: true },
            { id: '2', map_id: 'space-2', name: 'Test 2', bookable: false },
        ].map((_) => new Space(_));
        (notify as any).notifyError = jest.fn();
        const dialog = spectator.inject(MatDialog);
        spectator.service.handleStatusChange(spaces, spaces[0], '');
        jest.runOnlyPendingTimers();
        expect(dialog.open).not.toHaveBeenCalled();
        spectator.service.bookSpace(spaces[0]);
        expect(dialog.open).toHaveBeenCalled();
        expect(notify.notifyError).not.toHaveBeenCalled();
        spectator.service.bookSpace(spaces[1]);
        expect(notify.notifyError).toHaveBeenCalled();
        expect(dialog.open).toHaveBeenCalledTimes(1);
    });
});
