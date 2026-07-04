import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { DealModalComponent } from '../../app/deals/deal-modal.component';

describe('DealModalComponent', () => {
    let spectator: SpectatorRouting<DealModalComponent>;
    let dialog_ref: { close: jest.Mock };

    const deal = {
        id: 'deal-1',
        name: 'Coffee Deal',
        details: '20% off',
        description: 'Discounted coffee',
        terms: 'One per customer',
        expires_at: Date.now(),
        image: '',
    };

    const createComponent = createRoutingFactory({
        component: DealModalComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: deal },
            {
                provide: MatDialogRef,
                useFactory: () => (dialog_ref = { close: jest.fn() }),
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should render the deal name and details', () => {
        expect(spectator.query('h3')?.textContent).toContain('Coffee Deal');
        expect(spectator.query('.bg-info')?.textContent).toContain('20% off');
    });

    it('should close the dialog when close is called', () => {
        spectator.component.close();
        expect(dialog_ref.close).toHaveBeenCalled();
    });

    it('should emit remove when the remove button is clicked', () => {
        const remove_spy = jest.fn();
        spectator.component.remove.subscribe(remove_spy);

        spectator.click('button.error');

        expect(remove_spy).toHaveBeenCalled();
    });
});
