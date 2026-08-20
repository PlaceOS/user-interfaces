import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
    listSignagePlaylistMedia,
    MediaAnimation,
    SignageMedia,
    SignagePlugin,
} from '@placeos/ts-client';
import { MediaPreviewModalComponent } from '../../app/shared/media-preview-modal.component';
import { SignageService } from '../../app/signage.service';

vi.mock('@placeos/ts-client', { spy: true });

describe('MediaPreviewModalComponent', () => {
    const editMedia = vi.fn();
    const playlists = signal<any[]>([]);
    const service = { playlists, editMedia };

    async function createComponent(
        media: SignageMedia,
        plugin?: SignagePlugin,
        group_id = '',
    ) {
        await TestBed.configureTestingModule({
            imports: [MediaPreviewModalComponent],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: { media, plugin, group_id },
                },
                { provide: SignageService, useValue: service },
            ],
        })
            .overrideComponent(MediaPreviewModalComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
        return TestBed.createComponent(MediaPreviewModalComponent)
            .componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        playlists.set([]);
        (listSignagePlaylistMedia as any).mockResolvedValue({
            items: [],
        });
        TestBed.resetTestingModule();
    });

    it('starts in a loading state for renderable media with a url', async () => {
        const component = await createComponent(
            new SignageMedia({
                id: 'm1',
                media_type: 'image',
                media_uri: 'https://cdn/image.png',
            }),
        );

        expect(component.media_loading()).toBe(true);
        expect(component.media_error()).toBe(false);
    });

    it('does not enter a loading state for plugin media', async () => {
        const component = await createComponent(
            new SignageMedia({ id: 'm1', media_type: 'plugin' }),
        );

        expect(component.media_loading()).toBe(false);
    });

    it('maps the media type to a translation label', async () => {
        const component = await createComponent(
            new SignageMedia({ id: 'm1', media_type: 'webpage' }),
        );

        expect(component.type_label()).toBe('COMMON.WEBPAGE');
    });

    it('uses the signage group passed to the modal', async () => {
        const component = await createComponent(
            new SignageMedia({ id: 'm1', media_type: 'image' }),
            undefined,
            'group-1',
        );

        expect(component.group_id).toBe('group-1');
    });

    it('maps the animation to a translation label', async () => {
        const component = await createComponent(
            new SignageMedia({
                id: 'm1',
                media_type: 'image',
                animation: MediaAnimation.CrossFade,
            }),
        );

        expect(component.animation_label()).toBe(
            'SIGNAGE_MANAGER.ANIM_CROSS_FADE',
        );
    });

    it('only produces a safe url for webpage media', async () => {
        const image = await createComponent(
            new SignageMedia({
                id: 'm1',
                media_type: 'image',
                media_uri: 'https://cdn/image.png',
            }),
        );
        expect(image.safe_url()).toBeNull();

        TestBed.resetTestingModule();
        const webpage = await createComponent(
            new SignageMedia({
                id: 'm2',
                media_type: 'webpage',
                media_uri: 'https://example.com',
            }),
        );
        expect(webpage.safe_url()).not.toBeNull();
    });

    it('merges plugin defaults with the media plugin params', async () => {
        const component = await createComponent(
            new SignageMedia({
                id: 'm1',
                media_type: 'plugin',
                plugin_params: { units: 'imperial' },
            }),
            new SignagePlugin({
                id: 'weather',
                defaults: { units: 'metric', theme: 'light' },
            }),
        );

        expect(component.plugin_config()).toEqual({
            units: 'imperial',
            theme: 'light',
        });
    });

    it('collects the playlists that contain the previewed media', async () => {
        playlists.set([
            { id: 'p1', name: 'One' },
            { id: 'p2', name: 'Two' },
            { id: 'p3', name: 'Three' },
        ]);
        (listSignagePlaylistMedia as any).mockImplementation(
            async (id: string) => ({
                items: id === 'p2' ? ['other', 'm1'] : ['other'],
            }),
        );
        const component = await createComponent(
            new SignageMedia({
                id: 'm1',
                media_type: 'image',
                media_uri: 'https://cdn/image.png',
            }),
        );

        await component.ngOnInit();

        expect(component.loading_playlists()).toBe(false);
        expect(component.containing_playlists().map((_) => _.id)).toEqual([
            'p2',
        ]);
    });

    it('ignores playlists that fail to load', async () => {
        playlists.set([
            { id: 'p1', name: 'One' },
            { id: 'p2', name: 'Two' },
        ]);
        (listSignagePlaylistMedia as any).mockImplementation(
            async (id: string) => {
                if (id === 'p1') throw new Error('boom');
                return { items: ['m1'] };
            },
        );
        const component = await createComponent(
            new SignageMedia({
                id: 'm1',
                media_type: 'image',
                media_uri: 'https://cdn/image.png',
            }),
        );

        await component.ngOnInit();

        expect(component.containing_playlists().map((_) => _.id)).toEqual([
            'p2',
        ]);
    });

    it('clears loading and error flags when the media loads', async () => {
        const component = await createComponent(
            new SignageMedia({
                id: 'm1',
                media_type: 'image',
                media_uri: 'https://cdn/image.png',
            }),
        );

        component.handleMediaLoaded();

        expect(component.media_loading()).toBe(false);
        expect(component.media_error()).toBe(false);
    });

    it('flags an error when the media fails to load', async () => {
        const component = await createComponent(
            new SignageMedia({
                id: 'm1',
                media_type: 'image',
                media_uri: 'https://cdn/image.png',
            }),
        );

        component.handleMediaLoadError();

        expect(component.media_loading()).toBe(false);
        expect(component.media_error()).toBe(true);
    });

    it('delegates edit requests to the signage service', async () => {
        const media = new SignageMedia({
            id: 'm1',
            media_type: 'image',
            media_uri: 'https://cdn/image.png',
        });
        const component = await createComponent(media);

        component.edit();

        expect(editMedia).toHaveBeenCalledWith(media);
    });
});
