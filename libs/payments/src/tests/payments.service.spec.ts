import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/organisation';
import { PaymentsService } from '../lib/payments.service';

describe('PaymentsService', () => {
    let spectator: SpectatorService<PaymentsService>;
    const createService = createServiceFactory({
        service: PaymentsService,
        providers: [
            {
                provide: OrganisationService,
                useValue: {},
            },
            {
                provide: MatDialog,
                useValue: { open: jest.fn() },
            },
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create component', () => {
        expect(spectator.service).toBeTruthy();
    });
});
