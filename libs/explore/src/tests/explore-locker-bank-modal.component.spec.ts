import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { LockerGridComponent } from 'libs/bookings/src/lib/locker-grid.component';
import { Locker, LockerBank } from 'libs/bookings/src/lib/locker.class';
import { MockProvider, ngMocks } from 'ng-mocks';

import { ExploreLockerBankModalComponent } from '../lib/explore-locker-bank-modal.component';

describe('ExploreLockerBankModalComponent', () => {
    let spectator: Spectator<ExploreLockerBankModalComponent>;
    const bank = { id: 'bank-1', name: 'Level 1 Lockers' } as LockerBank;
    const lockers = [{ id: 'locker-a' }, { id: 'locker-b' }] as Locker[];
    const createComponent = createComponentFactory({
        component: ExploreLockerBankModalComponent,
        ...ngMocks.guts(null),
        providers: [MockProvider(MAT_DIALOG_DATA, { bank, lockers })],
    });

    it('should render the locker bank name', () => {
        spectator = createComponent();
        spectator.detectChanges();
        expect(spectator.query('header h2')).toHaveText('Level 1 Lockers');
    });

    it('should pass the bank and busy locker statuses to the locker grid', () => {
        spectator = createComponent();
        spectator.detectChanges();
        const grid = ngMocks.findInstance(LockerGridComponent);
        expect(grid.bank()).toEqual(bank);
        expect(grid.bank_status()).toEqual({
            'locker-a': 'busy',
            'locker-b': 'busy',
        });
    });
});
