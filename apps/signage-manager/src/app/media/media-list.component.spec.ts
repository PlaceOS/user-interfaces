import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SignageService } from '../signage.service';
import { MediaListComponent } from './media-list.component';

function media(id: string, tags: string[]) {
    return { id, name: id, tags, media_type: 'image' } as any;
}

describe('MediaListComponent folders', () => {
    const filtered_media = signal<any[]>([]);
    const media_tags = signal<string[]>([]);
    const media_view_mode = signal<'grid' | 'list' | 'folder'>('grid');
    const set_selected_group = jest.fn();
    const service_stub = {
        filtered_media,
        media_tags,
        media_view_mode,
        media_has_more: signal(false),
        signage_groups: signal([]),
        selected_group_id: signal(''),
        is_sys_admin: signal(false),
        can_update: signal(true),
        can_delete: signal(true),
        can_share: signal(true),
        setSelectedGroup: set_selected_group,
        loadMoreMedia: jest.fn(),
    };

    function make() {
        TestBed.configureTestingModule({
            providers: [{ provide: SignageService, useValue: service_stub }],
        });
        return TestBed.createComponent(MediaListComponent).componentInstance;
    }

    beforeEach(() => {
        window.matchMedia = jest.fn().mockReturnValue({
            matches: false,
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
        }) as any;
        filtered_media.set([
            media('a', ['news', 'lobby']),
            media('b', ['news']),
            media('c', []),
        ]);
        // Tags come from the media-tags endpoint (pre-sorted by the service).
        media_tags.set(['lobby', 'news']);
        media_view_mode.set('folder');
        set_selected_group.mockReset();
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

    it('always shows the untagged bucket, even when every item is tagged', () => {
        const component = make();
        filtered_media.set([media('a', ['news']), media('b', ['lobby'])]);
        const untagged = component.folders().find((f) => f.untagged);
        expect(untagged).toBeTruthy();
        expect(untagged!.count).toBe(0);
    });

    it('shows no folders when there is no media and no tags', () => {
        const component = make();
        filtered_media.set([]);
        media_tags.set([]);
        expect(component.folders()).toEqual([]);
    });

    it('shows only media in the opened folder', () => {
        const component = make();
        component.openFolder('news');
        expect(component.display_media().map((m: any) => m.id)).toEqual([
            'a',
            'b',
        ]);

        component.openFolder(component.untagged_id);
        expect(component.display_media().map((m: any) => m.id)).toEqual(['c']);

        component.closeFolder();
        expect(component.display_media().length).toBe(3);
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
});
