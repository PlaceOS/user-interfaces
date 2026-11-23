import { NO_ERRORS_SCHEMA, SecurityContext } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import {
    playlist_media,
    type PlaylistItem,
    type SignagePlugin as SignagePluginV7,
} from '@placeos/ts-client';
import { MediaAnimation, mockReply } from '@placeos/ts-client/compat';
import { SignageMediaService } from '../../app/media/signage-media.service';
import { MediaPreviewModalComponent } from '../../app/shared/media-preview-modal.component';
import { SignageContextService } from '../../app/signage-context.service';
import {
    signageMedia,
    signagePlaylist,
    signagePlugin,
} from '../../app/signage-models';

vi.mock('@placeos/ts-client', { spy: true });

describe('MediaPreviewModalComponent', () => {
    const editMedia = vi.fn();
    const service = { editMedia };

    async function createComponent(
        media: PlaylistItem,
        plugin?: SignagePluginV7,
        group_id = '',
    ) {
        await TestBed.configureTestingModule({
            imports: [MediaPreviewModalComponent],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: { media, plugin, group_id },
                },
                { provide: SignageMediaService, useValue: service },
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
        vi.mocked(playlist_media.show).mockResolvedValue(
            mockReply(signageMedia({})),
        );
        TestBed.resetTestingModule();
    });

    it('starts in a loading state for renderable media with a url', async () => {
        const component = await createComponent(
            signageMedia({
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
            signageMedia({ id: 'm1', media_type: 'plugin' }),
        );

        expect(component.media_loading()).toBe(false);
    });

    it('maps the media type to a translation label', async () => {
        const component = await createComponent(
            signageMedia({ id: 'm1', media_type: 'webpage' }),
        );

        expect(component.type_label()).toBe('COMMON.WEBPAGE');
    });

    it('shows every media tag in the preview details', async () => {
        const media = signageMedia({
            id: 'm1',
            media_type: null,
            tags: ['lobby', 'news'],
        });
        await TestBed.configureTestingModule({
            imports: [MediaPreviewModalComponent],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: { media },
                },
                { provide: SignageMediaService, useValue: service },
                // The rendered shared-with list injects the context
                { provide: SignageContextService, useValue: {} },
            ],
        })
            .overrideComponent(MediaPreviewModalComponent, {
                set: { schemas: [NO_ERRORS_SCHEMA] },
            })
            .compileComponents();
        const fixture = TestBed.createComponent(MediaPreviewModalComponent);

        await fixture.whenStable();

        const preview_text = fixture.nativeElement.textContent;
        expect(preview_text).toContain('lobby');
        expect(preview_text).toContain('news');
    });

    /** Render the real template, without the media itself */
    async function renderPreview(media: PlaylistItem) {
        await TestBed.configureTestingModule({
            imports: [MediaPreviewModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: { media } },
                { provide: SignageMediaService, useValue: service },
                // The rendered shared-with list injects the context
                { provide: SignageContextService, useValue: {} },
            ],
        })
            .overrideComponent(MediaPreviewModalComponent, {
                set: { schemas: [NO_ERRORS_SCHEMA] },
            })
            .compileComponents();
        const fixture = TestBed.createComponent(MediaPreviewModalComponent);
        await fixture.whenStable();
        fixture.detectChanges();
        return fixture.nativeElement as HTMLElement;
    }

    // A failed lookup must not claim the media is in no playlist
    it('offers a retry when the playlists of the media fail to load', async () => {
        vi.mocked(playlist_media.show).mockRejectedValue(new Error('boom'));
        const element = await renderPreview(
            signageMedia({ id: 'm1', media_type: null }),
        );

        expect(element.textContent).not.toContain('Not in any playlists');
        // The shared-with list reads the media as well
        const calls = vi.mocked(playlist_media.show).mock.calls.length;
        element.querySelector<HTMLButtonElement>('load-error button').click();

        expect(playlist_media.show).toHaveBeenCalledTimes(calls + 1);
    });

    it('names the close button', async () => {
        const element = await renderPreview(
            signageMedia({ id: 'm1', media_type: null }),
        );

        const close = element.querySelector('header button[icon]');
        expect(close.getAttribute('aria-label')).toBe('Close media preview');
    });

    it('names the icon-only edit button', async () => {
        const element = await renderPreview(
            signageMedia({ id: 'm1', media_type: null }),
        );

        const edit = element.querySelector('aside button[icon]');
        expect(edit.getAttribute('aria-label')).toBeTruthy();
    });

    it('uses the signage group passed to the modal', async () => {
        const component = await createComponent(
            signageMedia({ id: 'm1', media_type: 'image' }),
            undefined,
            'group-1',
        );

        expect(component.group_id).toBe('group-1');
    });

    it('maps the animation to a translation label', async () => {
        const component = await createComponent(
            signageMedia({
                id: 'm1',
                media_type: 'image',
                animation: MediaAnimation.CrossFade,
            }),
        );

        expect(component.animation_label()).toBe(
            'SIGNAGE_MANAGER.ANIM_CROSS_FADE',
        );
    });

    it('maps an animation index from the API to its label', async () => {
        const component = await createComponent(
            signageMedia({
                id: 'm1',
                media_type: 'image',
                animation: 2 as unknown as MediaAnimation,
            }),
        );

        expect(component.animation_label()).toBe(
            'SIGNAGE_MANAGER.ANIM_CROSS_FADE',
        );
    });

    it('only produces a safe url for webpage media', async () => {
        const image = await createComponent(
            signageMedia({
                id: 'm1',
                media_type: 'image',
                media_uri: 'https://cdn/image.png',
            }),
        );
        expect(image.safe_url()).toBeNull();

        TestBed.resetTestingModule();
        const webpage = await createComponent(
            signageMedia({
                id: 'm2',
                media_type: 'webpage',
                media_uri: 'https://example.com',
            }),
        );
        expect(webpage.safe_url()).not.toBeNull();
    });

    it('does not load a stored non-web url in the preview frame', async () => {
        const component = await createComponent(
            signageMedia({
                id: 'm1',
                media_type: 'webpage',
                media_uri: 'javascript:alert(document.cookie)',
            }),
        );

        expect(
            TestBed.inject(DomSanitizer).sanitize(
                SecurityContext.RESOURCE_URL,
                component.safe_url(),
            ),
        ).toBe('about:blank');
    });

    it('merges plugin defaults with the media plugin params', async () => {
        const component = await createComponent(
            signageMedia({
                id: 'm1',
                media_type: 'plugin',
                plugin_params: { units: 'imperial' },
            }),
            signagePlugin({
                id: 'weather',
                defaults: { units: 'metric', theme: 'light' },
            }),
        );

        expect(component.plugin_config()).toEqual({
            units: 'imperial',
            theme: 'light',
        });
    });

    it('loads containing playlists from the media response', async () => {
        vi.mocked(playlist_media.show).mockResolvedValue(
            mockReply(
                signageMedia({
                    id: 'm1',
                    playlists: [
                        signagePlaylist({ id: 'p1', name: 'One' }),
                        signagePlaylist({ id: 'p2', name: 'Two' }),
                    ],
                }),
            ),
        );
        const component = await createComponent(
            signageMedia({
                id: 'm1',
                media_type: 'image',
                media_uri: 'https://cdn/image.png',
            }),
            undefined,
            'group-1',
        );

        await component.ngOnInit();

        // The server checks access through the groups of the media, so the
        // lookup takes only the id, also with a group selected
        expect(playlist_media.show).toHaveBeenCalledExactlyOnceWith({
            id: 'm1',
        });
        expect(component.loading_playlists()).toBe(false);
        expect(component.containing_playlists().map((_) => _.id)).toEqual([
            'p1',
            'p2',
        ]);
    });

    it('uses no group filter when no group is selected', async () => {
        const component = await createComponent(
            signageMedia({
                id: 'm1',
                media_type: 'image',
                media_uri: 'https://cdn/image.png',
            }),
        );

        await component.ngOnInit();

        expect(playlist_media.show).toHaveBeenCalledWith({ id: 'm1' });
    });

    // A preview from the edit modal is of media that is not saved yet
    it('does not look up playlists for media without an id', async () => {
        const component = await createComponent(
            signageMedia({ media_type: 'image' }),
        );

        await component.ngOnInit();

        expect(playlist_media.show).not.toHaveBeenCalled();
        expect(component.loading_playlists()).toBe(false);
    });

    it('clears playlist loading when the media request fails', async () => {
        vi.mocked(playlist_media.show).mockRejectedValue(new Error('boom'));
        const component = await createComponent(
            signageMedia({ id: 'm1', media_type: 'image' }),
        );

        await component.ngOnInit();

        expect(component.loading_playlists()).toBe(false);
        expect(component.containing_playlists()).toEqual([]);
    });

    it('clears loading and error flags when the media loads', async () => {
        const component = await createComponent(
            signageMedia({
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
            signageMedia({
                id: 'm1',
                media_type: 'image',
                media_uri: 'https://cdn/image.png',
            }),
        );

        component.handleMediaLoadError();

        expect(component.media_loading()).toBe(false);
        expect(component.media_error()).toBe(true);
    });
});
