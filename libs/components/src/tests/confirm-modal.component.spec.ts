import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { EventEmitter, signal } from '@angular/core';
import { of } from 'rxjs';

import {
    ConfirmModalComponent,
    openConfirmModal,
} from '../lib/confirm-modal.component';
import { IconComponent } from '../lib/icon.component';
import { SafePipe } from '../lib/safe.pipe';

describe('ConfirmModalComponent', () => {
    let spectator: Spectator<ConfirmModalComponent>;
    const createComponent = createComponentFactory({
        component: ConfirmModalComponent,
        declarations: [MockComponent(IconComponent), SafePipe],
        providers: [
            { provide: MatDialogRef, useValue: { close: vi.fn() } },
            { provide: MAT_DIALOG_DATA, useValue: {} },
        ],
        imports: [MatProgressSpinnerModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should allow showing a loading state', () => {
        expect('mat-spinner').not.toExist();
        expect('[loading]').not.toExist();
        spectator.component.loading.set('Testing loading...');
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

    it('should stop the user closing the modal while it is loading', async () => {
        const ref = {
            componentInstance: {
                event: new EventEmitter(),
                loading: signal(''),
            },
            afterClosed: () => of({ reason: 'done' }),
            close: vi.fn(),
            disableClose: false,
        };
        const result = await openConfirmModal(
            {} as any,
            {
                open: () => ref,
            } as any,
        );
        result.loading('Working...');
        expect(ref.disableClose).toBe(true);
        result.loading('');
        expect(ref.disableClose).toBe(false);
    });
});
