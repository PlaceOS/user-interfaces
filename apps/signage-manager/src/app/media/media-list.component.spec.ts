import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SignageService } from '../signage.service';
import { MediaListComponent } from './media-list.component';

function media(id: string, tags: string[]) {
    return { id, name: id, tags, media_type: 'image' } as any;
}

describe('MediaListComponent folders', () => {
    const filtered_media = signal<any[]>([]);
    const media_view_mode = signal<'grid' | 'list' | 'folder'>('grid');
    const set_selected_group = jest.fn();
    const service_stub = {
        filtered_media,
        media_view_mode,
        signage_groups: signal([]),
        selected_group_id: signal(''),
        is_sys_admin: signal(false),
        can_update: signal(true),
        can_delete: signal(true),
        can_share: signal(true),
        setSelectedGroup: set_selected_group,
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
        media_view_mode.set('folder');
        set_selected_group.mockReset();
    });

    it('builds one folder per tag plus an untagged bucket', () => {
        const component = make();
        const folders = component.folders();
        // news (2), lobby (1), untagged (1) — untagged sorted last
        expect(folders.map((f) => [f.id, f.count])).toEqual([
            ['lobby', 1],
            ['news', 2],
            [component.untagged_id, 1],
        ]);
        expect(folders.at(-1)!.untagged).toBe(true);
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
