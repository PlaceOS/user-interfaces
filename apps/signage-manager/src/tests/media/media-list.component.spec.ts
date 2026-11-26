import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SignageMedia } from '@placeos/ts-client';
import { ImageGenService } from '../../app/image-gen/image-gen.service';
import { MediaListComponent } from '../../app/media/media-list.component';
import { SignageMediaService } from '../../app/media/signage-media.service';
import { SignageContextService } from '../../app/signage-context.service';

function media(id: string, tags: string[]) {
    return { id, name: id, tags, media_type: 'image' };
}

describe('MediaListComponent folders', () => {
    const media_items = signal<unknown[]>([]);
    const media_tags = signal<string[]>([]);
    const media_tag_counts = signal<Record<string, number>>({});
    const media_view_mode = signal<'grid' | 'list' | 'folder'>('grid');
    const signage_groups = signal<unknown[]>([]);
    const can_manage_all_groups = signal(false);
    const can_update_media_tags = signal(true);
    const show_media_group_tabs = signal(true);
    const set_selected_group = vi.fn();
    const context_stub = {
        signage_groups,
        selected_group_id: signal(''),
        include_child_data: signal(false),
        can_manage_all_groups,
        can_update_media_tags,
        can_update: signal(true),
        can_create: signal(true),
        can_delete: signal(true),
        can_share: signal(true),
        features: signal<string[]>(['ai-editing']),
        hasFeature: (id: string) => context_stub.features().includes(id),
        setSelectedGroup: set_selected_group,
    };
    const media_stub = {
        media: media_items,
        media_tags,
        media_tag_counts,
        media_view_mode,
        media_view: signal({}),
        search_term: signal(''),
        folder_tag: signal<string | null>(null),
        folder_media: signal<unknown[]>([]),
        folder_loading: signal(false),
        folder_has_more: signal(false),
        folder_error: signal(false),
        loadMoreFolderMedia: vi.fn(),
        retryFolderMedia: vi.fn(),
        media_has_more: signal(false),
        media_loading: signal(false),
        media_error: signal(false),
        show_media_group_tabs,
        addMediaTags: vi.fn(),
        renameMediaTag: vi.fn(),
        removeMediaTag: vi.fn(),
        loadMoreMedia: vi.fn(),
        retryMedia: vi.fn(),
    };

    function make() {
        TestBed.configureTestingModule({
            providers: [
                { provide: SignageContextService, useValue: context_stub },
                { provide: SignageMediaService, useValue: media_stub },
                {
                    provide: ImageGenService,
                    useValue: { can_edit: signal(true) },
                },
            ],
        });
        return TestBed.createComponent(MediaListComponent).componentInstance;
    }

    beforeEach(() => {
        context_stub.features.set(['ai-editing']);
        window.matchMedia = vi.fn().mockReturnValue({
            matches: false,
            addListener: vi.fn(),
            removeListener: vi.fn(),
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
        });
        media_items.set([
            media('a', ['news', 'lobby']),
            media('b', ['news']),
            media('c', []),
        ]);
        // Tags come from the tag-counts endpoint (pre-sorted by the service).
        media_tags.set(['lobby', 'news']);
        media_tag_counts.set({});
        media_view_mode.set('folder');
        signage_groups.set([]);
        can_manage_all_groups.set(false);
        can_update_media_tags.set(true);
        show_media_group_tabs.set(true);
        set_selected_group.mockReset();
        context_stub.selected_group_id.set('');
        media_stub.media_has_more.set(false);
        media_stub.media_error.set(false);
        media_stub.loadMoreMedia.mockReset();
        media_stub.folder_tag.set(null);
        media_stub.folder_media.set([]);
    });

    it('offers the group tabs only while the media group tabs are enabled', () => {
        signage_groups.set([
            { group: { id: 'a', name: 'Alpha' } },
            { group: { id: 'b', name: 'Beta' } },
        ]);
        const component = make();

        expect(component.can_switch_groups()).toBe(true);

        show_media_group_tabs.set(false);

        expect(component.can_switch_groups()).toBe(false);
    });

    it('offers image edits only when the user can create the derived image', () => {
        const component = make();
        expect(component.can_edit_with_image_gen()).toBe(true);

        context_stub.can_create.set(false);

        expect(component.can_edit_with_image_gen()).toBe(false);
    });

    it('hides image edits when the group turns image editing off', () => {
        const component = make();

        context_stub.features.set([]);

        expect(component.can_edit_with_image_gen()).toBe(false);
    });

    it('offers the all-groups view to an all-group manager', () => {
        signage_groups.set([{ group: { id: 'a', name: 'Alpha' } }]);
        const component = make();

        expect(component.can_switch_groups()).toBe(false);

        can_manage_all_groups.set(true);

        expect(component.can_switch_groups()).toBe(true);
    });

    it('builds one folder per endpoint tag with loaded counts plus an untagged bucket', () => {
        const component = make();
        const folders = component.folders();
        // untagged first, then tags from the endpoint with loaded-media counts
        expect(folders.map((f) => [f.id, f.count])).toEqual([
            [component.untagged_id, 1],
            ['lobby', 1],
            ['news', 2],
        ]);
        expect(folders.at(0)!.untagged).toBe(true);
    });

    it('counts tagged folders from the backend, not the loaded media', () => {
        // The backend counts every item, including media not yet paged in.
        media_tag_counts.set({ lobby: 12, news: 40 });
        const component = make();
        expect(component.folders().map((f) => [f.id, f.count])).toEqual([
            [component.untagged_id, 1],
            ['lobby', 12],
            ['news', 40],
        ]);
    });

    it('falls back to loaded counts for tags the backend did not count', () => {
        media_tag_counts.set({ news: 40 });
        const component = make();
        expect(component.folders().map((f) => [f.id, f.count])).toEqual([
            [component.untagged_id, 1],
            ['lobby', 1],
            ['news', 40],
        ]);
    });

    it('always shows the untagged bucket, even when every item is tagged', () => {
        const component = make();
        media_items.set([media('a', ['news']), media('b', ['lobby'])]);
        const untagged = component.folders().find((f) => f.untagged);
        expect(untagged).toBeTruthy();
        expect(untagged!.count).toBe(0);
    });

    it('shows no folders when there is no media and no tags', () => {
        const component = make();
        media_items.set([]);
        media_tags.set([]);
        expect(component.folders()).toEqual([]);
    });

    it('shows only media in the opened folder', () => {
        const component = make();
        // The server lists a tag folder
        media_stub.folder_media.set([
            media('a', ['news']),
            media('b', ['news']),
        ]);
        component.openFolder('news');
        TestBed.flushEffects();
        expect(component.display_media().map((m) => m.id)).toEqual(['a', 'b']);

        component.openFolder(component.untagged_id);
        expect(component.display_media().map((m) => m.id)).toEqual(['c']);

        component.closeFolder();
        expect(component.display_media().length).toBe(3);
    });

    it('gives the selection checkboxes and bulk actions accessible names', () => {
        media_view_mode.set('grid');
        make();
        const fixture = TestBed.createComponent(MediaListComponent);
        fixture.componentInstance.toggleSelection('a');
        fixture.detectChanges();
        const element: HTMLElement = fixture.nativeElement;

        const checkbox = element.querySelector('input[type="checkbox"]');
        expect(checkbox.getAttribute('aria-label')).toBe('Select a');
        const footer_names = [...element.querySelectorAll('footer button')].map(
            (button) => button.getAttribute('aria-label'),
        );
        expect(footer_names).toEqual([
            'Clear selected media',
            'Tags',
            'Delete',
            'Add to Playlist',
            'Share',
        ]);
    });

    // Folders come from the tag counts, so they can show after media fails
    it('shows the load error and retry with the folders', () => {
        media_stub.media_error.set(true);
        make();
        const fixture = TestBed.createComponent(MediaListComponent);
        fixture.detectChanges();

        const retry = [
            ...fixture.nativeElement.querySelectorAll('button'),
        ].find((button: HTMLButtonElement) =>
            button.textContent.includes('Retry'),
        );
        expect(fixture.nativeElement.textContent).toContain('lobby');
        expect(retry).toBeTruthy();

        retry.click();

        expect(media_stub.retryMedia).toHaveBeenCalled();
    });

    it('shows the server list of an open tag folder without paging the library', () => {
        const component = make();
        media_stub.media_has_more.set(true);
        media_stub.folder_media.set([media('z', ['news'])]);

        component.openFolder('news');
        TestBed.flushEffects();

        expect(media_stub.folder_tag()).toBe('news');
        expect(component.display_media().map((m) => m.id)).toEqual(['z']);
        expect(media_stub.loadMoreMedia).not.toHaveBeenCalled();
        component.closeFolder();
        TestBed.flushEffects();
        expect(media_stub.folder_tag()).toBeNull();
        media_stub.media_has_more.set(false);
    });

    it('clears the selection when another folder opens', () => {
        const component = make();
        component.toggleSelection('a');
        TestBed.flushEffects();

        component.openFolder('news');
        TestBed.flushEffects();

        expect(component.selected_ids().size).toBe(0);
    });

    // The server cannot list untagged media, and they can be on any page
    it('loads every page while the untagged folder is open', () => {
        const component = make();
        media_stub.loadMoreMedia.mockImplementation(() => {
            media_items.update((items) => [...items, media('d', [])]);
            media_stub.media_has_more.set(false);
        });
        media_stub.media_has_more.set(true);
        TestBed.flushEffects();
        expect(media_stub.loadMoreMedia).not.toHaveBeenCalled();

        component.openFolder(component.untagged_id);
        TestBed.flushEffects();

        expect(media_stub.loadMoreMedia).toHaveBeenCalledOnce();
        expect(media_stub.folder_tag()).toBeNull();
    });

    it('adds loaded media to the screen a part at a time', () => {
        media_view_mode.set('grid');
        media_items.set(
            Array.from({ length: 250 }, (_, index) => media(`m${index}`, [])),
        );
        const component = make();
        expect(component.rendered_media()).toHaveLength(200);

        component.showMore();
        expect(component.rendered_media()).toHaveLength(250);
        expect(media_stub.loadMoreMedia).not.toHaveBeenCalled();

        // Selected items stay on screen in the other layout
        media_view_mode.set('list');
        expect(component.rendered_media()).toHaveLength(250);
    });

    it('clears the open folder when leaving folder view', () => {
        const component = make();
        component.openFolder('news');
        media_view_mode.set('grid');
        TestBed.flushEffects();
        expect(component.selected_folder()).toBeNull();
        // grid/list views always show the full filtered set
        expect(component.display_media().length).toBe(3);
    });

    // The nav selector and breadcrumbs switch group without this component
    it('clears the selection and open folder when the group changes', () => {
        const component = make();
        component.toggleSelection('a');
        component.openFolder('news');

        context_stub.selected_group_id.set('group-2');

        expect(component.selected_count()).toBe(0);
        expect(component.selected_folder()).toBeNull();
    });

    it('adds tags to every selected media item and clears the selection', async () => {
        media_stub.addMediaTags.mockResolvedValue(true);
        const component = make();
        component.toggleSelection('a');
        component.toggleSelection('c');

        await component.addTagsToSelected();

        expect(media_stub.addMediaTags).toHaveBeenCalledWith([
            expect.objectContaining({ id: 'a' }),
            expect.objectContaining({ id: 'c' }),
        ]);
        expect(component.selected_count()).toBe(0);
    });

    it('shows the loaded thumbnail shape on a masonry card', () => {
        const component = make();
        const item = {
            id: 'a',
            orientation: 'portrait',
        } as SignageMedia;
        expect(component.aspectRatio(item)).toBe(9 / 16);

        component.setAspectRatio('a', 4 / 3);

        expect(component.aspectRatio(item)).toBe(4 / 3);
    });
});
