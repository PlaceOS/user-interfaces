import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { ViewLockerBankModalComponent } from '../../app/lockers/view-locker-bank-modal.component';

describe('ViewLockerBankModalComponent', () => {
    let spectator: Spectator<ViewLockerBankModalComponent>;
    const bank = { id: 'bank-1', name: 'North Wing', lockers: [] };

    const createComponent = createComponentFactory({
        component: ViewLockerBankModalComponent,
        shallow: true,
        providers: [{ provide: MAT_DIALOG_DATA, useValue: { bank } }],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should seed the bank signal from the injected dialog data', () => {
        expect(spectator.component.bank()).toBe(bank);
        expect(spectator.component.bank().name).toBe('North Wing');
    });
});
