import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Locker, LockerBank } from '@placeos/bookings';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { LockerGridComponent } from 'libs/bookings/src/lib/locker-grid.component';
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

    it('should create component', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });

    it('should render the locker bank name', () => {
        spectator = createComponent();
        spectator.detectChanges();
        expect(spectator.query('header h2')).toHaveText('Level 1 Lockers');
    });

    it('should map provided lockers to a busy status record', () => {
        spectator = createComponent();
        expect(spectator.component.bank()).toEqual(bank);
        expect(spectator.component.lockers()).toEqual({
            'locker-a': 'busy',
            'locker-b': 'busy',
        });
    });

    it('should render the locker grid for the bank', () => {
        spectator = createComponent();
        spectator.detectChanges();
        expect(spectator.query('locker-grid')).toBeTruthy();
        expect(ngMocks.findInstance(LockerGridComponent)).toBeTruthy();
    });

    it('should render a close button', () => {
        spectator = createComponent();
        spectator.detectChanges();
        expect(spectator.query('button[mat-dialog-close]')).toBeTruthy();
    });
});
