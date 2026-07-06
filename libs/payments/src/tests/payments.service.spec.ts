import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
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
                useValue: { open: vi.fn() },
            },
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create component', () => {
        expect(spectator.service).toBeTruthy();
    });
});
