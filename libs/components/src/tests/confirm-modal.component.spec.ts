import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from '../lib/icon.component';
import { SafePipe } from '../lib/safe.pipe';
import { ConfirmModalComponent } from '../lib/confirm-modal.component';

describe('ConfirmModalComponent', () => {
    let spectator: Spectator<ConfirmModalComponent>;
    const createComponent = createComponentFactory({
        component: ConfirmModalComponent,
        declarations: [MockComponent(IconComponent), SafePipe],
        providers: [
            { provide: MatDialogRef, useValue: { close: jest.fn() } },
            { provide: MAT_DIALOG_DATA, useValue: {} }
        ],
        imports: [MatProgressSpinnerModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
