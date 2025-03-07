import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { of } from 'rxjs';

import { CateringOrdersService } from '../lib/catering-orders.service';

jest.mock('libs/events/src/lib/events.fn');

import { SettingsService } from '@placeos/common';
import * as event_fn from 'libs/events/src/lib/events.fn';
import { MockProvider } from 'ng-mocks';

describe('CateringOrdersService', () => {
    let spectator: SpectatorService<CateringOrdersService>;
    const createService = createServiceFactory({
        service: CateringOrdersService,
        providers: [MockProvider(SettingsService, { get: jest.fn() })],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should allow for polling of events', () => {
        (event_fn as any).queryEvents = jest.fn(() => of([]));
        // TODO: check querying updates the
    });
});
