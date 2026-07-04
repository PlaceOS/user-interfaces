import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

import * as ts_client_mod from '@placeos/ts-client';
import { SignageMediaModalComponent } from '../../app/signage/signage-media-modal.component';

jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        updateSignageMedia: jest.fn(async () => ({})),
    };
});

describe('SignageMediaModalComponent', () => {
    let spectator: Spectator<SignageMediaModalComponent>;
    let data: any;
    let on_add: jest.Mock;

    const createComponent = createComponentFactory({
        component: SignageMediaModalComponent,
        detectChanges: false,
        providers: [MockProvider(MatDialogRef, { close: jest.fn() })],
    });

    function build() {
        spectator = createComponent({
            providers: [{ provide: MAT_DIALOG_DATA, useValue: data }],
        });
    }

    beforeEach(() => {
        jest.clearAllMocks();
        on_add = jest.fn(async () => ({ id: 'media-new' }));
        data = {
            media: {
                id: '',
                media_type: 'image',
                name: 'Poster',
                valid_from: 100,
                valid_until: 200,
            },
            file: undefined,
            onAdd: on_add,
            preview: jest.fn(),
        };
    });

    it('should seed the model from the supplied media (seconds to ms)', () => {
        build();

        expect(spectator.component.model().name).toBe('Poster');
        expect(spectator.component.model().valid_from).toBe(100000);
        expect(spectator.component.model().valid_until).toBe(200000);
    });

    it('should derive media type from an attached video file', () => {
        data.file = new File([''], 'clip.mp4', { type: 'video/mp4' });
        build();

        expect(spectator.component.media_type).toBe('video');
    });

    it('should fall back to the media type when no file is attached', () => {
        build();

        expect(spectator.component.media_type).toBe('image');
    });

    it('should not save when the name is blank', async () => {
        data.media.name = '';
        build();

        await spectator.component.saveMedia();

        expect(ts_client_mod.updateSignageMedia).not.toHaveBeenCalled();
        expect(spectator.inject(MatDialogRef).close).not.toHaveBeenCalled();
    });

    it('should update existing media with unix validity bounds', async () => {
        data.media.id = 'm1';
        build();

        await spectator.component.saveMedia();

        expect(ts_client_mod.updateSignageMedia).toHaveBeenCalledWith(
            'm1',
            expect.objectContaining({ name: 'Poster' }),
        );
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
    });

    it('should delegate new media creation to the onAdd callback', async () => {
        const file = new File([''], 'clip.mp4', { type: 'video/mp4' });
        data.file = file;
        build();

        await spectator.component.saveMedia();

        expect(on_add).toHaveBeenCalledWith(file, expect.anything());
        expect(ts_client_mod.updateSignageMedia).not.toHaveBeenCalled();
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
    });
});
