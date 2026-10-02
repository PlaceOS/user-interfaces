import { TestBed } from '@angular/core/testing';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { HotkeysService, setNotifyOutlet } from '@placeos/common';
import {
    MediaAnimation,
    SignageMedia,
    SignagePlugin,
} from '@placeos/ts-client';
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
    const dialog = { openDialogs: [] as unknown[] };
    let hotkey_callback: () => void;
    let modal_data: MediaEditModalData;

    beforeEach(async () => {
        vi.clearAllMocks();
        setNotifyOutlet({ open: notify_open } as any, true);
        dialog_ref.disableClose = false;
        dialog.openDialogs = [dialog_ref];
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
                { provide: MatDialog, useValue: dialog },
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

    it('ignores the S hotkey while another dialog is on top', () => {
        const fixture = TestBed.createComponent(MediaEditModalComponent);
        const component = fixture.componentInstance;
        const save = vi.spyOn(component, 'saveMedia').mockResolvedValue();
        dialog.openDialogs = [dialog_ref, { id: 'preview' }];

        hotkey_callback();

        expect(save).not.toHaveBeenCalled();
    });

    it('ignores the S hotkey while a select has focus', () => {
        const fixture = TestBed.createComponent(MediaEditModalComponent);
        const component = fixture.componentInstance;
        const save = vi.spyOn(component, 'saveMedia').mockResolvedValue();
        const select = document.createElement('div');
        select.setAttribute('role', 'combobox');
        select.tabIndex = 0;
        document.body.appendChild(select);
        select.focus();

        hotkey_callback();

        expect(save).not.toHaveBeenCalled();
        select.remove();
    });

    it('uploads a new file with the picked permissions', async () => {
        const fixture = TestBed.createComponent(MediaEditModalComponent);
        const component = fixture.componentInstance;
        component.permissions.set('admin');

        await component.saveMedia();

        expect(onAdd.mock.calls[0][5]).toBe('admin');
    });

    // The animation is stored as a name, such as "cut", not a number
    it('offers the saved animation of the media as an option', () => {
        modal_data.media = new SignageMedia({
            id: 'media-1',
            name: 'Poster',
            animation: MediaAnimation.Cut,
        });
        const fixture = TestBed.createComponent(MediaEditModalComponent);
        const component = fixture.componentInstance;

        const values = component.animation_options.map(({ value }) => value);
        expect(values).toContain(component.model().animation);
        expect(values).toEqual(Object.values(MediaAnimation));
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

    describe('webpage urls', () => {
        beforeEach(() => {
            modal_data.file = undefined;
            modal_data.file_metadata = undefined;
            modal_data.media = new SignageMedia({
                id: 'media-1',
                media_type: 'webpage',
                media_uri: 'javascript:alert(1)',
                name: 'Example',
            });
        });

        it('does not load a stored non-web url in the preview frame', () => {
            const component = TestBed.createComponent(
                MediaEditModalComponent,
            ).componentInstance;

            expect(component.preview_url()).toBe('about:blank');
        });

        it('refuses to save a non-web url and saves a normalised one', async () => {
            const component = TestBed.createComponent(
                MediaEditModalComponent,
            ).componentInstance;

            await component.saveMedia();

            expect(component.form.media_uri().invalid()).toBe(true);
            expect(onEdit).not.toHaveBeenCalled();

            component.model.update((model) => ({
                ...model,
                media_uri: 'https://example.com',
            }));
            await component.saveMedia();

            expect(onEdit.mock.calls[0][1].media_uri).toBe(
                'https://example.com/',
            );
        });
    });

    /** Render the real template, with changes to the modal data */
    async function renderModal(data: Partial<MediaEditModalData>) {
        TestBed.resetTestingModule();
        await TestBed.configureTestingModule({
            imports: [MediaEditModalComponent],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: { ...modal_data, file: undefined, ...data },
                },
                { provide: MatDialogRef, useValue: dialog_ref },
                { provide: MatDialog, useValue: dialog },
                {
                    provide: HotkeysService,
                    useValue: { listen: hotkey_listen },
                },
            ],
        }).compileComponents();
        const fixture = TestBed.createComponent(MediaEditModalComponent);
        // The shared-with list keeps a request open, so the fixture never
        // becomes stable. A select shows its value a task after its options.
        fixture.detectChanges();
        await new Promise((resolve) => setTimeout(resolve));
        fixture.detectChanges();
        return fixture.nativeElement as HTMLElement;
    }

    describe('default play time hint', () => {
        /** Hint next to the play time label, for media without a play time */
        async function renderHint(media: SignageMedia) {
            const element = await renderModal({ media });
            const label = element.querySelector('label[for="media-play-time"]');
            return label.nextElementSibling.textContent.trim();
        }

        // The playlist default, else 15 seconds, applies to an image
        it('shows no fixed length for an image', async () => {
            const hint = await renderHint(
                new SignageMedia({
                    id: 'm-1',
                    name: 'Poster',
                    media_type: 'image',
                }),
            );

            expect(hint).toMatch(/default/i);
            expect(hint).not.toMatch(/\d/);
        });

        it('shows the video length for a video', async () => {
            const hint = await renderHint(
                new SignageMedia({
                    id: 'm-1',
                    name: 'Clip',
                    media_type: 'video',
                    video_length: 12000,
                }),
            );

            expect(hint).toMatch(/12/);
        });
    });

    // The API stores an animation name but returns its index
    it.each([2, 'cross_fade'])(
        'shows a saved animation of %s by name',
        async (animation) => {
            const element = await renderModal({
                media: new SignageMedia({
                    id: 'm-1',
                    name: 'Poster',
                    media_type: 'image',
                    animation: animation as MediaAnimation,
                }),
            });

            expect(
                element.querySelector('#media-animation').textContent,
            ).toContain('Cross Fade');
        },
    );

    // A notification would sit under the full screen modal
    it('shows the 4K warning for a large new file in the modal', async () => {
        const create_url = URL.createObjectURL;
        URL.createObjectURL = vi.fn(() => 'blob:poster');
        try {
            const element = await renderModal({
                file: new File(['image'], 'poster.png', { type: 'image/png' }),
                file_metadata: {
                    is_landscape: true,
                    duration: 0,
                    width: 7680,
                    height: 4320,
                },
            });

            expect(
                element.querySelector('[role="alert"]').textContent,
            ).toContain('Maximum supported resolution');
        } finally {
            URL.createObjectURL = create_url;
        }
    });

    it('points every label at a control', async () => {
        const element = await renderModal({
            media: new SignageMedia({
                id: 'm-1',
                name: 'Clip',
                media_type: 'video',
            }),
        });

        const missing = [...element.querySelectorAll('label[for]')]
            .map((label) => label.getAttribute('for'))
            .filter((id) => !element.querySelector(`#${id}`));
        expect(missing).toEqual([]);
        const animation = element.querySelector('#media-animation');
        const label_ids = animation.getAttribute('aria-labelledby').split(' ');
        expect(label_ids).toContain('media-animation-label');
    });
});
