import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { EventEmitter, signal } from '@angular/core';
import { NEVER, Observable, of } from 'rxjs';

import {
    ConfirmModalComponent,
    filterConfirmContent,
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

    it('should keep focus in the modal when loading removes the buttons', () => {
        spectator.query<HTMLButtonElement>('button[name="accept"]').focus();
        spectator.component.loading.set('Saving...');
        spectator.detectChanges();
        expect('button[name="accept"]').not.toExist();
        expect(document.activeElement).toBe(spectator.query('header h2'));
    });

    it('should only render filtered content', () => {
        spectator.component.content.set(
            'Remove <strong>Jo</strong>?<img src="x" onerror="alert(1)">',
        );
        spectator.detectChanges();
        expect('[content] strong').toHaveText('Jo');
        expect('[content] img').not.toExist();
    });

    const openWith = (afterClosed: Observable<unknown>) => {
        const ref = {
            componentInstance: {
                event: new EventEmitter<{ reason: string }>(),
                loading: signal(''),
            },
            afterClosed: () => afterClosed,
            close: vi.fn(),
            disableClose: false,
        };
        const dialog = { open: () => ref } as unknown as MatDialog;
        return {
            ref,
            result: openConfirmModal(
                { title: '', content: '', icon: { content: 'delete' } },
                dialog,
            ),
        };
    };

    it('should resolve on accept while the modal stays open for work', async () => {
        const { ref, result } = openWith(NEVER);
        ref.componentInstance.event.emit({ reason: 'other' });
        ref.componentInstance.event.emit({ reason: 'done' });
        const response = await result;
        expect(response.reason).toBe('done');

        response.loading('Working...');
        expect(ref.componentInstance.loading()).toBe('Working...');
        expect(ref.disableClose).toBe(true);
        response.loading('');
        expect(ref.disableClose).toBe(false);
        response.close();
        expect(ref.close).toHaveBeenCalledOnce();
    });

    it('should resolve with the close reason when the user dismisses the modal', async () => {
        const { result } = openWith(of({ reason: 'cancel' }));
        await expect(result).resolves.toMatchObject({ reason: 'cancel' });
    });
});

describe('filterConfirmContent', () => {
    it('should keep text and formatting tags', () => {
        expect(
            filterConfirmContent('One<br/><strong>Two</strong> <i>three</i>'),
        ).toBe('One<br><strong>Two</strong> <i>three</i>');
    });

    it('should remove attributes and unwrap other elements', () => {
        expect(
            filterConfirmContent(
                '<b class="fixed" onclick="x()">Jo</b>' +
                    '<a href="https://example.test"><em>link</em></a>' +
                    '<img src="x" onerror="alert(1)">',
            ),
        ).toBe('<b>Jo</b><em>link</em>');
    });
});
