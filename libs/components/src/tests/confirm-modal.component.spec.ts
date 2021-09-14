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

    it('should render confirmation details', () => {
        expect('mat-spinner').not.toExist();
        expect('h3').toContainText('Confirm');
        expect('[content]').toContainText('Are you sure?');
        expect('button[mat-dialog-close]').toContainText('Cancel');
        expect('button[name="accept"]').toContainText('Accept');
        (spectator.component as any).title = 'Test Modal';
        (spectator.component as any).content = 'You are doing a good job!';
        (spectator.component as any).confirm_text = 'Yep';
        (spectator.component as any).cancel_text = 'Hmm...';
        spectator.detectChanges();
        expect('h3').toContainText('Test Modal');
        expect('[content]').toContainText('You are doing a good job!');
        expect('button[mat-dialog-close]').toContainText('Hmm...');
        expect('button[name="accept"]').toContainText('Yep');
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
