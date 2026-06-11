import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { notifyError, notifySuccess } from '@placeos/common';
import { SignageMedia, SignagePlugin } from '@placeos/ts-client';
import {
    MediaEditModalComponent,
    MediaEditModalData,
} from './media-edit-modal.component';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyError: jest.fn(),
    notifySuccess: jest.fn(),
}));

describe('MediaEditModalComponent', () => {
    const dialog_ref = {
        close: jest.fn(),
        disableClose: false,
    };
    const onAdd = jest.fn();
    const onEdit = jest.fn();
    let modal_data: MediaEditModalData;

    beforeEach(async () => {
        jest.clearAllMocks();
        dialog_ref.disableClose = false;
        onAdd.mockResolvedValue(new SignageMedia({ id: 'media-1' }));
        onEdit.mockResolvedValue(undefined);
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
            preview: jest.fn(),
        };
        await TestBed.configureTestingModule({
            imports: [MediaEditModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: modal_data },
                { provide: MatDialogRef, useValue: dialog_ref },
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
        expect(notifySuccess).not.toHaveBeenCalled();
        expect(notifyError).toHaveBeenCalledWith(
            'Failed to save media item. Error: Upload failed',
        );
    });

    it('shows a readable message when the upload is cancelled', async () => {
        onAdd.mockRejectedValue(undefined);
        const fixture = TestBed.createComponent(MediaEditModalComponent);
        const component = fixture.componentInstance;

        await component.saveMedia();

        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(notifyError).toHaveBeenCalledWith(
            'Failed to save media item. Error: Media upload was cancelled.',
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

        expect(fixture.componentInstance.form.value.plugin_params).toEqual({
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

        expect(fixture.componentInstance.form.value.plugin_params).toEqual({
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
        component.form.patchValue({
            name: 'Weather',
            plugin_params: { theme: 'dark' },
        });

        await component.saveMedia();

        expect(onAdd).toHaveBeenCalled();
        const media = onAdd.mock.calls[0][1] as SignageMedia;
        expect(media.plugin_params).toEqual({
            units: 'metric',
            size: 'large',
            theme: 'dark',
        });
    });
});
