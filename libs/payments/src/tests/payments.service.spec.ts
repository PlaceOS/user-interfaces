import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { PaymentsService } from '../lib/payments.service';

describe('PaymentsService', () => {
    let spectator: SpectatorService<PaymentsService>;
    const createService = createServiceFactory({
        service: PaymentsService,
        providers: [],
    });

    beforeEach(() => (spectator = createService()));

    it('should create component', () => {
        expect(spectator.service).toBeTruthy();
    });

});