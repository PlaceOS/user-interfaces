import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HotkeysService, setNotifyOutlet } from '@placeos/common';
import { SignageMedia, SignagePlugin } from '@placeos/ts-client';
import {
    MediaEditModalComponent,
    MediaEditModalData,
} from '../../app/shared/media-edit-modal.component';

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('MediaEditModalComponent', () => {
    const dialog_ref = {
        close: vi.fn(),
        disableClose: false,
    };
    const onAdd = vi.fn();
    const onEdit = vi.fn();
    const hotkey_listen = vi.fn();
    let hotkey_callback: () => void;
    let modal_data: MediaEditModalData;

    beforeEach(async () => {
        vi.clearAllMocks();
        setNotifyOutlet({ open: notify_open } as any, true);
        dialog_ref.disableClose = false;
        onAdd.mockResolvedValue(new SignageMedia({ id: 'media-1' }));
        onEdit.mockResolvedValue(undefined);
        hotkey_listen.mockImplementation(
            (_combo: string[], callback: () => void) => {
                hotkey_callback = callback;
                return { unsubscribe: vi.fn() };
            },
        );
        modal_data = {
            media: new SignageMedia({}),
            file: new File(['image'], 'poster.png', { type: 'image/png' }),
            file_metadata: {
                is_landscape: true,
                duration: 0,
                width: 1920,
                height: 1080,
            },
            onAdd,
            onEdit,
            preview: vi.fn(),
        };
        await TestBed.configureTestingModule({
            imports: [MediaEditModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: modal_data },
                { provide: MatDialogRef, useValue: dialog_ref },
                {
                    provide: HotkeysService,
                    useValue: { listen: hotkey_listen },
                },
            ],
        })
            .overrideComponent(MediaEditModalComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
    });

    it('keeps the dialog open and resets loading when an upload fails', async () => {
        onAdd.mockRejectedValue({ error: 'Upload failed' });
        const fixture = TestBed.createComponent(MediaEditModalComponent);
        const component = fixture.componentInstance;

        await expect(component.saveMedia()).resolves.toBeUndefined();

        expect(component.loading()).toBe(false);
        expect(dialog_ref.disableClose).toBe(false);
        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(notify_open).not.toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
        expect(notify_open).toHaveBeenCalledWith(
            'Failed to save media item. Error: Upload failed',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('saves when the S hotkey is pressed', () => {
        const fixture = TestBed.createComponent(MediaEditModalComponent);
        const component = fixture.componentInstance;
        const save = vi.spyOn(component, 'saveMedia').mockResolvedValue();

        hotkey_callback();

        expect(hotkey_listen).toHaveBeenCalledWith(
            ['KeyS'],
            expect.any(Function),
        );
        expect(save).toHaveBeenCalled();
    });

    it('starts blank validity dates as empty values', () => {
        const fixture = TestBed.createComponent(MediaEditModalComponent);
        const component = fixture.componentInstance;

        expect(component.model().valid_from).toBeNull();
        expect(component.model().valid_until).toBeNull();
    });

    it('shows a readable message when the upload is cancelled', async () => {
        onAdd.mockRejectedValue(undefined);
        const fixture = TestBed.createComponent(MediaEditModalComponent);
        const component = fixture.componentInstance;

        await component.saveMedia();

        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            'Failed to save media item. Error: Media upload was cancelled.',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('uses plugin-reported schema ahead of catalogue params', () => {
        modal_data.media = new SignageMedia({
            media_type: 'plugin',
            plugin_id: 'weather',
        });
        modal_data.file = undefined;
        modal_data.file_metadata = undefined;
        modal_data.plugin = new SignagePlugin({
            id: 'weather',
            params: {
                type: 'object',
                properties: {
                    theme: { type: 'string' },
                },
            },
        });
        const fixture = TestBed.createComponent(MediaEditModalComponent);
        const component = fixture.componentInstance;
        const plugin_schema = {
            type: 'object',
            properties: {
                units: { type: 'string', default: 'metric' },
            },
        };

        expect(component.active_plugin_schema()).toEqual(
            modal_data.plugin.params,
        );

        component.plugin_embed_schema.set(plugin_schema);

        expect(component.active_plugin_schema()).toEqual(plugin_schema);
    });

    it('populates plugin params with default values for new plugin media', () => {
        modal_data.media = new SignageMedia({
            media_type: 'plugin',
            plugin_id: 'weather',
        });
        modal_data.file = undefined;
        modal_data.file_metadata = undefined;
        modal_data.plugin = new SignagePlugin({
            id: 'weather',
            defaults: { size: 'large' },
            params: {
                type: 'object',
                properties: {
                    units: { type: 'string', default: 'metric' },
                    label: { type: 'string' },
                },
            },
        });
        const fixture = TestBed.createComponent(MediaEditModalComponent);
        fixture.detectChanges();

        expect(fixture.componentInstance.model().plugin_params).toEqual({
            size: 'large',
            units: 'metric',
        });
    });

    it('keeps existing plugin params when seeding defaults', () => {
        modal_data.media = new SignageMedia({
            media_type: 'plugin',
            plugin_id: 'weather',
            plugin_params: { units: 'imperial' },
        });
        modal_data.file = undefined;
        modal_data.file_metadata = undefined;
        modal_data.plugin = new SignagePlugin({
            id: 'weather',
            params: {
                type: 'object',
                properties: {
                    units: { type: 'string', default: 'metric' },
                    theme: { type: 'string', default: 'light' },
                },
            },
        });
        const fixture = TestBed.createComponent(MediaEditModalComponent);
        fixture.detectChanges();

        expect(fixture.componentInstance.model().plugin_params).toEqual({
            units: 'imperial',
            theme: 'light',
        });
    });

    it('saves plugin config using defaults from the plugin schema', async () => {
        modal_data.media = new SignageMedia({
            media_type: 'plugin',
            media_uri: '/plugins/weather/index.html',
            plugin_id: 'weather',
        });
        modal_data.file = undefined;
        modal_data.file_metadata = undefined;
        modal_data.plugin = new SignagePlugin({
            id: 'weather',
            defaults: { units: 'imperial', size: 'large' },
        });
        const fixture = TestBed.createComponent(MediaEditModalComponent);
        const component = fixture.componentInstance;

        component.plugin_embed_schema.set({
            type: 'object',
            properties: {
                units: { type: 'string', default: 'metric' },
                theme: { type: 'string', default: 'light' },
            },
        });
        component.model.update((model) => ({
            ...model,
            name: 'Weather',
            plugin_params: { theme: 'dark' },
        }));

        await component.saveMedia();

        expect(onAdd).toHaveBeenCalled();
        const media = onAdd.mock.calls[0][1] as SignageMedia;
        expect(media.plugin_params).toEqual({
            units: 'metric',
            size: 'large',
            theme: 'dark',
        });
    });

    describe('webpage thumbnails', () => {
        const generateThumbnail = vi.fn();
        const thumbnail_file = new File(['image'], 'thumb.png', {
            type: 'image/png',
        });
        const change_event = {
            target: { files: [thumbnail_file], value: 'thumb.png' },
        } as any;

        beforeEach(() => {
            generateThumbnail.mockResolvedValue('data:image/jpeg;base64,abc');
            modal_data.file = undefined;
            modal_data.file_metadata = undefined;
            modal_data.generateThumbnail = generateThumbnail;
            modal_data.media = new SignageMedia({
                media_type: 'webpage',
                media_uri: 'https://example.com',
                name: 'Example',
            });
        });

        it('offers a thumbnail picker for webpage media', () => {
            const fixture = TestBed.createComponent(MediaEditModalComponent);

            expect(fixture.componentInstance.can_set_thumbnail).toBe(true);
        });

        it('scales the picked image and sends it with a new item', async () => {
            const fixture = TestBed.createComponent(MediaEditModalComponent);
            const component = fixture.componentInstance;

            await component.setThumbnail(change_event);
            await component.saveMedia();

            expect(generateThumbnail).toHaveBeenCalledWith(thumbnail_file);
            expect(component.custom_thumbnail()).toBe(
                'data:image/jpeg;base64,abc',
            );
            expect(component.thumbnail_loading()).toBe(false);
            expect(onAdd.mock.calls[0][3]).toBe('data:image/jpeg;base64,abc');
        });

        it('sends the picked image when updating an existing item', async () => {
            modal_data.media = new SignageMedia({
                id: 'media-1',
                media_type: 'webpage',
                media_uri: 'https://example.com',
                name: 'Example',
            });
            const fixture = TestBed.createComponent(MediaEditModalComponent);
            const component = fixture.componentInstance;

            await component.setThumbnail(change_event);
            await component.saveMedia();

            expect(onEdit.mock.calls[0][1].thumbnail_image).toBe(
                'data:image/jpeg;base64,abc',
            );
        });

        it('keeps the existing thumbnail when generation fails', async () => {
            generateThumbnail.mockResolvedValue('');
            const fixture = TestBed.createComponent(MediaEditModalComponent);
            const component = fixture.componentInstance;

            await component.setThumbnail(change_event);

            expect(component.custom_thumbnail()).toBe('');
            expect(component.thumbnail_loading()).toBe(false);
        });
    });
});
