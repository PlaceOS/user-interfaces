import {
    MAT_DIALOG_DATA,
    MatDialogRef,
} from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    AuthenticatedImageDirective,
    IconComponent,
} from '@placeos/components';
import { MockComponent, MockDirective, MockProvider } from 'ng-mocks';
import { DealDetailsModalComponent } from '../../app/deals/deal-details-modal.component';

describe('DealDetailsModalComponent', () => {
    let spectator: Spectator<DealDetailsModalComponent>;
    const dialog_ref = { close: vi.fn() };
    const deal = {
        id: 'deal-1',
        name: 'Coffee Deal',
        details: '20% off',
        description: 'Enjoy a discount',
        terms: 'One per customer',
        image: 'https://example.com/img.png',
        expires_at: new Date('2030-01-01').valueOf(),
    };
    const createComponent = createComponentFactory({
        component: DealDetailsModalComponent,
        declarations: [
            MockComponent(IconComponent),
            MockDirective(AuthenticatedImageDirective),
        ],
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: deal },
            { provide: MatDialogRef, useValue: dialog_ref },
            MockProvider(MatDialogRef, dialog_ref as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should expose the injected deal data', () => {
        expect(spectator.component.deal).toBe(deal);
    });

    it('should render the deal name and description', () => {
        expect(spectator.query('h3')?.textContent).toContain('Coffee Deal');
        expect(spectator.element.textContent).toContain('Enjoy a discount');
        expect(spectator.element.textContent).toContain('One per customer');
    });

    it('should close the dialog when close() is called', () => {
        spectator.component.close();
        expect(dialog_ref.close).toHaveBeenCalled();
    });
});
