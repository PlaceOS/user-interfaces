import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { LockerGridComponent } from '@placeos/bookings';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { MockComponent, MockPipe, ngMocks } from 'ng-mocks';

import { ViewLockerBankModalComponent } from '../../app/lockers/view-locker-bank-modal.component';

describe('ViewLockerBankModalComponent', () => {
    let spectator: Spectator<ViewLockerBankModalComponent>;
    const bank = { id: 'bank-1', name: 'North Wing', lockers: [] };

    const createComponent = createComponentFactory({
        component: ViewLockerBankModalComponent,
        overrideComponents: [
            [
                ViewLockerBankModalComponent,
                {
                    set: {
                        imports: [
                            MockComponent(LockerGridComponent),
                            MockComponent(IconComponent),
                            MockPipe(TranslatePipe),
                        ],
                    },
                },
            ],
        ],
        providers: [{ provide: MAT_DIALOG_DATA, useValue: { bank } }],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should show the bank as a read-only locker grid', () => {
        expect(spectator.query('h2')).toHaveText('North Wing');
        expect(ngMocks.input('locker-grid', 'bank')).toBe(bank);
        expect(ngMocks.input('locker-grid', 'default_status')).toBe(
            'not-bookable',
        );
    });
});
