import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AiImageService } from '../../app/ai/ai-image.service';
import { CommandPaletteComponent } from '../../app/shared/command-palette.component';
import { SignageService } from '../../app/signage.service';

describe('CommandPaletteComponent', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));
    const EMPTY = {
        displays: [],
        playlists: [],
        templates: [],
        zones: [],
        media: [],
    };
    const search_all = vi.fn();
    const preview_media = vi.fn();
    const navigate = vi.fn();
    const close = vi.fn();

    function make() {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: SignageService,
                    useValue: {
                        searchAll: search_all,
                        previewMedia: preview_media,
                        can_manage_all_groups: signal(false),
                        manageable_signage_groups: signal([]),
                        templates_enabled: signal(false),
                    },
                },
                {
                    provide: AiImageService,
                    useValue: { enabled: signal(false) },
                },
                { provide: Router, useValue: { navigate } },
                { provide: MatDialogRef, useValue: { close } },
            ],
        }).overrideComponent(CommandPaletteComponent, {
            set: { template: '' },
        });
        return TestBed.createComponent(CommandPaletteComponent)
            .componentInstance;
    }

    /** Type a term and let the debounce and search settle */
    async function type(component: CommandPaletteComponent, term: string) {
        vi.useFakeTimers({ shouldAdvanceTime: true });
        component.search.set(term);
        await vi.advanceTimersByTimeAsync(300);
        TestBed.tick();
        await flush();
        vi.useRealTimers();
    }

    const labels = (component: CommandPaletteComponent) =>
        component.results().map(({ kind, label }) => `${kind}:${label}`);

    beforeEach(() => {
        vi.clearAllMocks();
        search_all.mockResolvedValue(EMPTY);
    });

    it('lists the pages the user can open before a search', () => {
        const component = make();
        // Templates, branding and groups are hidden for this user
        expect(component.results().map(({ kind }) => kind)).toEqual(
            Array(6).fill('page'),
        );
    });

    it('filters pages and adds signage matches from the API', async () => {
        search_all.mockResolvedValue({
            ...EMPTY,
            displays: [{ id: 'd1', name: 'SIGNAGE 1', display_name: 'Lobby' }],
            playlists: [{ id: 'p1', name: 'Lobby loop' }],
        });
        const component = make();

        await type(component, 'lob');

        expect(search_all).toHaveBeenLastCalledWith('lob');
        expect(labels(component)).toEqual([
            'display:Lobby',
            'playlist:Lobby loop',
        ]);
    });

    it('moves the highlight with the arrow keys and wraps', async () => {
        const component = make();
        const key = (key: string) =>
            component.onKeydown(new KeyboardEvent('keydown', { key }));

        key('ArrowUp');
        expect(component.active_index()).toBe(5);
        key('ArrowDown');
        expect(component.active_index()).toBe(0);
    });

    it('opens the highlighted result on Enter and closes the palette', async () => {
        search_all.mockResolvedValue({
            ...EMPTY,
            zones: [{ id: 'z1', name: 'Level 1' }],
        });
        const component = make();
        await type(component, 'level');

        component.onKeydown(new KeyboardEvent('keydown', { key: 'Enter' }));

        expect(close).toHaveBeenCalled();
        expect(navigate).toHaveBeenCalledWith(['/zones', 'z1'], {
            queryParamsHandling: 'merge',
        });
    });

    it('previews media instead of opening a page', async () => {
        const media = { id: 'm1', name: 'Poster' };
        search_all.mockResolvedValue({ ...EMPTY, media: [media] });
        const component = make();
        await type(component, 'poster');

        component.results()[0].select();

        expect(preview_media).toHaveBeenCalledWith(media);
        expect(navigate).not.toHaveBeenCalled();
    });
});
