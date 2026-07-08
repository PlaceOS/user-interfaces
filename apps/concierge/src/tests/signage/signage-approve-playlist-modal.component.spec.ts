import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import * as ts_client_mod from '@placeos/ts-client';
import { SignageApprovePlaylistModalComponent } from '../../app/signage/signage-approve-playlist-modal.component';
import { SignageStateService } from '../../app/signage/signage-state.service';

vi.mock('@placeos/ts-client', { spy: true });

async function flush() {
    for (let i = 0; i < 6; i++) {
        TestBed.flushEffects();
        await Promise.resolve();
    }
}

describe('SignageApprovePlaylistModalComponent', () => {
    let spectator: Spectator<SignageApprovePlaylistModalComponent>;
    let state: any;
    let dialog_ref: any;

    const createComponent = createComponentFactory({
        component: SignageApprovePlaylistModalComponent,
        detectChanges: false,
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: { id: 'pl-1' } },
            MockProvider(SignageStateService, {
                media: signal([
                    { id: 'a', name: 'A', thumbnail_url: '' },
                    { id: 'b', name: 'B', thumbnail_url: '' },
                ]) as any,
                previewMedia: vi.fn(),
                changed: vi.fn(),
            }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        // `spy: true` keeps real ts-client impls, which hang on live HTTP. Stub
        // the calls these tests exercise.
        (ts_client_mod.listSignagePlaylistMediaRevisions as any).mockResolvedValue(
            [{ items: ['a'] }, { items: ['b'] }],
        );
        (ts_client_mod.approveSignagePlaylist as any).mockResolvedValue(
            undefined,
        );
        (ts_client_mod.updateSignagePlaylistMedia as any).mockResolvedValue(
            undefined,
        );
        dialog_ref = { close: vi.fn(), disableClose: false };
        spectator = createComponent({
            providers: [MockProvider(MatDialogRef, dialog_ref)],
        });
        state = spectator.inject(SignageStateService) as any;
    });

    it('should expose current and previous playlist versions', async () => {
        await flush();

        expect(spectator.component.current_version()?.items).toEqual(['a']);
        expect(spectator.component.previous_version()?.items).toEqual(['b']);
    });

    it('should preview items via the state service', () => {
        const item = { id: 'm1' };
        spectator.component.previewItem(item);

        expect(state.previewMedia).toHaveBeenCalledWith(item);
    });

    it('should approve the playlist and close', async () => {
        await spectator.component.approve();

        expect(ts_client_mod.approveSignagePlaylist).toHaveBeenCalledWith(
            'pl-1',
        );
        expect(dialog_ref.close).toHaveBeenCalled();
        expect(state.changed).toHaveBeenCalled();
        expect(spectator.component.loading()).toBe('');
    });

    it('should restore the previous version when undoing changes', async () => {
        await flush();

        await spectator.component.undoChanges();

        expect(ts_client_mod.updateSignagePlaylistMedia).toHaveBeenCalledWith(
            'pl-1',
            ['b'],
        );
        expect(dialog_ref.close).toHaveBeenCalled();
        expect(state.changed).toHaveBeenCalled();
    });
});
