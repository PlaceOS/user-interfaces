import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PlaylistListComponent } from '../../app/playlists/playlist-list.component';
import { SignageService } from '../../app/signage.service';

describe('PlaylistListComponent', () => {
    const filtered_playlists = signal<any[]>([]);
    const playlist_approval_status = signal<Record<string, boolean>>({});
    const playlist_approval_requested_status = signal<Record<string, boolean>>(
        {},
    );
    const playlists_has_more = signal(false);
    const load_more = vi.fn();

    const service_stub = {
        playlist_search_term: signal(''),
        filtered_playlists,
        selected_playlist: signal<any>(null),
        playlist_thumbnail_media: signal<Record<string, string[]>>({}),
        playlist_approval_status,
        playlist_approval_requested_status,
        playlists_has_more,
        loadMorePlaylists: load_more,
        queuePlaylistMeta: vi.fn(),
        editPlaylist: vi.fn(),
        removePlaylist: vi.fn(),
    };

    async function makeFixture(render_template = false) {
        await TestBed.configureTestingModule({
            imports: [PlaylistListComponent],
            providers: [
                provideRouter([]),
                { provide: SignageService, useValue: service_stub },
            ],
        });
        if (!render_template) {
            TestBed.overrideComponent(PlaylistListComponent, {
                set: { template: '' },
            });
        }
        await TestBed.compileComponents();
        return TestBed.createComponent(PlaylistListComponent);
    }

    async function make() {
        return (await makeFixture()).componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        filtered_playlists.set([]);
        playlist_approval_status.set({});
        playlist_approval_requested_status.set({});
    });

    const now_s = Math.floor(Date.now() / 1000);

    it('marks a playlist expired when its validity has passed', async () => {
        const component = await make();
        expect(
            component.getStatus({ id: 'p', valid_until: now_s - 100 } as any),
        ).toBe('expired');
    });

    it('marks a playlist pending when it starts in the future', async () => {
        const component = await make();
        expect(
            component.getStatus({ id: 'p', valid_from: now_s + 100 } as any),
        ).toBe('pending');
    });

    it('marks a playlist awaiting review once approval is requested', async () => {
        playlist_approval_status.set({ p: false });
        playlist_approval_requested_status.set({ p: true });
        const component = await make();
        expect(component.getStatus({ id: 'p' } as any)).toBe('awaiting_review');
    });

    it('marks a playlist awaiting approval before a request is sent', async () => {
        playlist_approval_status.set({ p: false });
        const component = await make();
        expect(component.getStatus({ id: 'p' } as any)).toBe(
            'awaiting_approval',
        );
    });

    it('returns no status for an approved, valid playlist', async () => {
        playlist_approval_status.set({ p: true });
        const component = await make();
        expect(component.getStatus({ id: 'p' } as any)).toBeNull();
    });

    it('makes disabled playlists visually distinct and accessible', async () => {
        filtered_playlists.set([
            { id: 'active', name: 'Lobby', enabled: true },
            { id: 'disabled', name: 'Old campaign', enabled: false },
        ]);
        const fixture = await makeFixture(true);
        await fixture.whenStable();

        const element = fixture.nativeElement as HTMLElement;
        const disabled_playlist = element.querySelector<HTMLElement>(
            '[data-disabled-playlist="true"]',
        );
        const enabled_playlist = element.querySelector<HTMLElement>(
            'a:not([data-disabled-playlist])',
        );

        expect(disabled_playlist).not.toBeNull();
        expect(disabled_playlist?.classList).toContain('bg-warning/10');
        expect(
            disabled_playlist?.querySelector(
                '[data-playlist-status="disabled"]',
            ),
        ).not.toBeNull();
        expect(disabled_playlist?.getAttribute('aria-label')).toContain(
            'Disabled',
        );
        expect(enabled_playlist?.classList).not.toContain('bg-warning/10');
    });

    it('requests the next page when scrolled', async () => {
        const component = await make();
        component.loadMore();
        expect(load_more).toHaveBeenCalledTimes(1);
    });
});
