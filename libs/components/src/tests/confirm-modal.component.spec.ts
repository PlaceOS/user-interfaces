import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { ConfirmModalComponent } from '../lib/confirm-modal.component';
import { IconComponent } from '../lib/icon.component';
import { SafePipe } from '../lib/safe.pipe';

describe('ConfirmModalComponent', () => {
    let spectator: Spectator<ConfirmModalComponent>;
    const createComponent = createComponentFactory({
        component: ConfirmModalComponent,
        declarations: [MockComponent(IconComponent), SafePipe],
        providers: [
            { provide: MatDialogRef, useValue: { close: jest.fn() } },
            { provide: MAT_DIALOG_DATA, useValue: {} },
        ],
        imports: [MatProgressSpinnerModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow showing a loading state', () => {
        expect('mat-spinner').not.toExist();
        expect('[loading]').not.toExist();
        spectator.component.loading = 'Testing loading...';
        spectator.detectChanges();
        expect('mat-spinner').toExist();
        expect('[loading]').toExist();
        expect('[loading] p').toContainText('Testing loading...');
    });

    it('should allow toggling user being able to close modal', () => {
        spectator.component.disableClose();
        expect(spectator.inject(MatDialogRef).disableClose).toBe(true);
        spectator.component.enableClose();
        expect(spectator.inject(MatDialogRef).disableClose).toBe(false);
        spectator.component.disableClose();
        expect(spectator.inject(MatDialogRef).disableClose).toBe(true);
    });
});
