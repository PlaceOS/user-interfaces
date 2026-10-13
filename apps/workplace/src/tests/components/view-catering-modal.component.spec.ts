import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MockComponent, MockProvider } from 'ng-mocks';
import { IconComponent } from '@placeos/components';

import { ViewCateringModalComponent } from '../../app/components/view-catering-modal.component';

describe('ViewCateringModalComponent', () => {
    const data = {
        catering: [
            { name: 'Coffee', quantity: 2 },
            { name: 'Tea', quantity: 3 },
        ],
        catering_note: 'No nuts please',
    };

    let spectator: Spectator<ViewCateringModalComponent>;
    const createComponent = createComponentFactory({
        component: ViewCateringModalComponent,
        declarations: [MockComponent(IconComponent)],
        detectChanges: false,
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: data },
            MockProvider(Router, { navigate: vi.fn() }),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('sets catering, note and total item count from dialog data on init', () => {
        spectator.detectChanges();
        expect(spectator.component.catering()).toEqual(data.catering);
        expect(spectator.component.catering_note()).toBe('No nuts please');
        expect(spectator.component.catering_items_total()).toBe(5);
    });

    it('closes all dialogs and navigates to the catering route on edit', () => {
        spectator.detectChanges();
        const dialog =
            spectator.fixture.componentRef.injector.get(MatDialog);
        const close_all = vi.spyOn(dialog, 'closeAll').mockImplementation(() => undefined);
        const router = spectator.inject(Router);
        spectator.component.edit();
        expect(close_all).toHaveBeenCalled();
        expect(router.navigate).toHaveBeenCalledWith(['/catering/']);
    });
});
